import * as userModel from '../models/userModels.js';

export const getAllUsers = (req, res) => {
    res.json(userModel.getUsers());
}

export const getUserById = (req, res) => {
    const user = userModel.getUserById(parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
}

export const createUser = (req, res) => {
    const { name, email } = req.body;deleteUser
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }
    const newUser = userModel.createUser(name, email);
    res.status(201).json(newUser);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const updatedUser = userModel.updateUser(parseInt(id), { name, email });
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json(updatedUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    const success = userModel.deleteUser(parseInt(id));
    if (!success) return res.status(404).json({ message: 'User not found' });
    res.status(204).send();
}
