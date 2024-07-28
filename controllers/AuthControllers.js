import UserModel from "../models/UserModel.js";

class AuthController {
  // Register a new user
  async register(req, res, next) {
    try {
      const { name, email, password } = req.body;

      // Validate input
      if (!name || !email || !password) {
        return res.status(400).json({
          status: "fail",
          message: "Please provide name, email and password",
        });
      }

      // Check if user already exists
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          status: "fail",
          message: "User already exists, please login",
        });
      }

      // Create new user
      const user = await UserModel.create({ name, email, password });
      res.status(201).json({
        status: "success",
        data: user,
      });
    } catch (error) {
        return res.status(400).json({
            status: "fail",
            message: error.message});
    }
  }

  // Login an existing user
  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      // Validate input
      if (!email || !password) {
        return res.status(400).json({
          status: "fail",
          message: "Please provide email and password",
        });
      }

      // Find user by email and include password in the result
      const user = await UserModel.findOne({ email }).select("+password");
      if (!user || !(await user.correctPassword(password, user.password))) {
        return res.status(401).json({
          status: "fail",
          message: "Incorrect email or password",
        });
      }

      res.status(200).json({
        status: "success",
      });
    } catch (error) {
        return res.status(401).json({
            status: "fail",
            message: error.message,
          });
    }
  }
}

export default new AuthController();