import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";
import User from "../models/userModel.js";
import generateTokenAndSetCookie from "../utils/helpers/generateTokensAndSetCookie.js";
const signupUser = async (req, res) => {
  try {
    const { name, email, username, password } = req.body;
    const user = await User.findOne({ $or: [{ email }, { username }] });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        userName: newUser.username,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("error in signupUser", err.message);
  }
};

const loginUser = async (req, res) => {
  // console.log("users");
  try {
    const { username, password } = req.body;
    // console.log(username, password, "checking");
    const user = await User.findOne({ username });
    // console.log(user, "user");
    // const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (user && (await user.matchPassword(password))) {
      generateTokenAndSetCookie(user._id, res);
    } else {
      return res.status(400).json({ error: "invalid username or password" });
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("error in loginuser", err.message);
  }
};

const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("error in logging out", err.message);
  }
};

const followUnFollowUser = async (req, res) => {
  try {
    const { id } = req.params;
    const interestedUser = await User.findById(id);
    const currentUser = await User.findById(req.user._id); //logged in user

    // console.log(id, req.user._id, "checking");

    if (id === req.user._id.toString()) {
      return res
        .status(400)
        .json({ error: "You cannot follow/unfollow your self" });
    }

    if (!interestedUser || !currentUser)
      return res.status(400).json({ error: "User not found" });

    //if already following the interestedUser then onclick will toggle the following to unfollow
    const isFollowing = currentUser.following.includes(id);

    if (isFollowing) {
      //pull used to remove the following, remove the current user from interestedUser followers array
      await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
      //remove the interestedUser from the currentUsers following array
      await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });

      res.status(200).json({ message: "User unfollowed successfully" });
    } else {
      //if currentUser is not following the interestedUser, onClick will toggle the follow to following

      //follow the interestedUser. push the currentUser to interestedUser's followers array
      await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
      //push the interestedUser to currentUser's following array
      await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });

      res.status(200).json({ message: "user followed successfully" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("error in following/unfollow", err.message);
  }
};

const updateUser = async (req, res) => {
  let { name, email, username, password, bio, profilePic } = req.body;
  // let profilePic = req.body;
  // console.log(req.params.id, "hi");
  const userId = req.user._id;
  try {
    let user = await User.findById(userId);
    // console.log("failed here", user);
    if (!user) return res.status(400).json({ error: "User not fond" });

    // console.log(req.params.id, "===", userId.toString());

    if (req.params.id !== userId.toString()) {
      return res
        .status(400)
        .json({ error: "you cannot update other user's profile" });
    }

    if (profilePic) {
      if (user.profilePic) {
        await cloudinary.uploader.destroy(
          user.profilePic.split("/").pop().split(".")[0]
        );
      }

      const uploadedResponse = await cloudinary.uploader.upload(profilePic);
      profilePic = uploadedResponse.secure_url;
    }

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
    }
    console.log("after generating password");

    user.name = name || user.name;
    user.email = email || user.email;
    user.username = username || user.username;
    user.bio = bio || user.bio;
    user.profilePic = profilePic || user.profilePic;

    user = await user.save();
    // console.log("agter saving user");

    // await Post.updateMany(
    // 	{ "replies.userId": userId },
    // 	{
    // 		$set: {
    // 			"replies.$[reply].username": user.username,
    // 			"replies.$[reply].userProfilePic": user.profilePic,
    // 		},
    // 	},
    // 	{ arrayFilters: [{ "reply.userId": userId }] }
    // );

    // password should be null in response
    // console.log("here assi");
    user.password = null;

    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("error in updating user", err.message);
  }
};

const getUserProfile = async (req, res) => {
  // We will fetch user profile either with username or userId
  // query is either username or userId
  const { query } = req.params;
  // console.log(query, "query");

  try {
    let user;

    // query is userId
    if (mongoose.Types.ObjectId.isValid(query)) {
      user = await User.findOne({ _id: query })
        .select("-password")
        .select("-updatedAt");
    } else {
      // query is username
      user = await User.findOne({ username: query })
        .select("-password")
        .select("-updatedAt");
    }

    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in getUserProfile: ", err.message);
  }
};

export {
  followUnFollowUser,
  getUserProfile,
  loginUser,
  logoutUser,
  signupUser,
  updateUser,
};
