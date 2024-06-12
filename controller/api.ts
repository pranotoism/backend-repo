import { Request, Response } from 'express';
import { updateUser, fetchUser } from '../repository/userCollection';
import { ApiError } from '../entities/ApiError';

export const updateUserData = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const userData = req.body;

  try {
    await updateUser(userId, userData);
    res.status(200).json({ message: 'User data updated successfully' });
  } catch (error: any) {
    const apiError = new ApiError(error.message, 500);
    res.status(apiError.statusCode).json({ message: apiError.message });
  }
};

export const fetchUserData = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const userData = await fetchUser(userId);
    res.status(200).json(userData);
  } catch (error: any) {
    const apiError = new ApiError(error.message, 404);
    res.status(apiError.statusCode).json({ message: apiError.message });
  }
};
