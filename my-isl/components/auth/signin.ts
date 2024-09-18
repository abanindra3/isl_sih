// import { NextApiRequest, NextApiResponse } from 'next';
// import prisma from '@/lib/prisma'; 
// import * as bcrypt from 'bcrypt'
// import * as jwt from 'jsonwebtoken'

// export default async function handle(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { email, password } = req.body;

//     if (!process.env.JWT_SECRET) {
//       return res.status(500).json({ message: 'JWT_SECRET environment variable is not set' });
//     }

//     try {
//       const user = await prisma.user.findUnique({ where: { email } });

//       if (!user) {
//         return res.status(400).json({ message: 'Invalid email or password' });
//       }

//       const passwordMatch = await bcrypt.compare(password, user.password);

//       if (!passwordMatch) {
//         return res.status(400).json({ message: 'Invalid email or password' });
//       }

//       const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//       res.status(200).json({ message: 'Logged in successfully', token, user: { email: user.email } });
//     } catch (error) {
//       const errorMessage = (error as Error).message || 'An unexpected error occurred';
//       res.status(500).json({ message: errorMessage });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
