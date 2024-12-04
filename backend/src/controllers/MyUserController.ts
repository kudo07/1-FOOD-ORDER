import { Request, Response } from 'express';
import User from '../models/user';

export const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      res.status(200).json({ message: 'User already exists' });
      return;
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json({
      message: 'User created successfully',
      user: newUser.toObject(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

export const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { name, addressLine1, country, city } = req.body;
    const user = await User.findById(req.userId);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    user.name = name;
    user.addressLine1 = addressLine1;
    user.city = city;
    user.country = country;

    await user.save();

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating user' });
  }
};
