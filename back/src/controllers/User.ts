import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import User from '../models/User';

export const signup = [
    //validation rules
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),

    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, email, password, firstName, lastName } = req.body;

        try {
            const existingUser = await User.findOne({ where: { email }});
            if (existingUser) {
                return res.status(400).json({ message: 'Email already in use'});
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await User.create({
                username,
                email,
                password: hashedPassword,
                firstName,
                lastName,
            });

            res.status(201).json({ message: 'User created successfully', user: newUser});
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong', error: String(error)});
        }
    }
];