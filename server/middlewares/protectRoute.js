import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    console.log(req.params.id, 'id')


    if (!token) {
      return res.status(401).json({ message: "Unauthorized error" });
    }

    const userData = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(userData.userId).select("-password"); //returns userData except password
    
    //add the user to req object
    req.user = user;
    console.log(req.user._id, 'id');
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("error in signupUser", err.message);
  }
};

export default protectRoute;
