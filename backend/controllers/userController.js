import User from '../model/User.js';

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been deleted successfully');
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.params.id);
    res.status(200).json(currentUser);
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const Users = await Users.find(req.body);
    res.status(200).json(Users);
  } catch (err) {
    next(err);
  }
};
