import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; 
import bcrypt from 'bcrypt';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      const existingUser = await prisma.user.findUnique({ where: { email } });

      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword
        }
      });

      res.status(201).json({ message: 'User created successfully', user: { email: newUser.email, name: newUser.name } });
    } catch (error) {
      const errorMessage = (error as Error).message || 'An unexpected error occurred';
      res.status(500).json({ message: errorMessage });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
