import { v2 as cloudinary } from "cloudinary";
import Post from "../models/postModel.js";
import User from "../models/userModel.js";

const createPost = async (req, res) => {
  try {
    const { postedBy, text, img } = req.body;

    if (!postedBy || !text) {
      return res
        .status(400)
        .json({ error: "posted and text fields are required" });
    }
    const user = await User.findById(postedBy);

    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    if (user._id.toString() !== req.user._id.toString()) {
      return res.status(401).json({ error: "unauthorized" });
    }

    const maxLength = 500;
    if (text.length > maxLength) {
      return res
        .status(400)
        .json({ error: `text must be less than ${maxLength}` });
    }

    if (img) {
      const uploadedResponse = await cloudinary.uploader.upload(img);
      const img = uploadResponse.secure_url;
    }

    const newPost = new Post({ postedBy, text, img });
    await newPost.save();

    res.status(201).json({ message: "post created successfully", newPost });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPost = async (req, res) => {
  const postId = req.params.id;
  // console.log(postId);
  const post = await Post.findById(postId);
  // console.log(post);

  if (!post) {
    return res.status(404).json({ error: "post not found" });
  }

  return res.status(200).json({ post });
};

const deletePost = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findById(postId);

    console.log(post.postedBy._id, "posted user id");

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    if (post.postedBy._id.toString() !== req.user._id.toString()) {
      return res.status(400).json({ error: "unauthorised to delete the post" });
    }

    await Post.findByIdAndDelete(postId);

    return res.status(200).json({ message: "deleted post successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const likeUnlikePost = async (req, res) => {
  console.log(req.user._id, "user id");

  try {
    const { id: postId } = req.params;
    const userId = req.user._id;

    const post = await Post.findById(postId);
    console.log(post, "post");

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const userLikedPost = post.likes.includes(userId);

    if (userLikedPost) {
      // Unlike post
      await Post.updateOne({ _id: postId }, { $pull: { likes: userId } });
      res.status(200).json({ message: "Post unliked successfully" });
    } else {
      // Like post
      post.likes.push(userId);
      await post.save();
      res.status(200).json({ message: "Post liked successfully" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const replayToPost = async (req, res) => {
  console.log(req.body, "body");
  try {
    const postId = req.params.id;
    const { text } = req.body;
    const userId = req.user._id;
    const userProfilePic = req.user.profilePic;
    const username = req.user.username;

    // console.log(username,'uname')

    if (!text) {
      return res.status(400).json({ error: "Text field is required" });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "post not found" });
    }

    const reply = { userId, text, userProfilePic, username };

    post.replies.push(reply);

    await post.save();

    res.status(200).json(reply);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getFeedPosts = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    //arr of user following -> each field in arr refers to the user
    const following = user.following;
    //check the posts that are posted by the users that are in the current user's following
    const feedPosts = await Post.find({ postedBy: { $in: following } }).sort({
      createdAt: -1,
    }); //sort on latest post/desc

    return res.status(200).json({ feedPosts });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export {
  createPost,
  deletePost,
  getFeedPosts,
  getPost,
  likeUnlikePost,
  replayToPost,
};
