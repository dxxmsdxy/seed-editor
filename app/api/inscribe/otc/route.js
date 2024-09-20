import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { address, newSeed, newMod, newAttunement } = req.body;

    try {
      const otcInscription = await prisma.otcInscription.create({
        data: {
          address,
          newSeed,
          newMod,
          newAttunement,
        },
      });

      // Here you would typically trigger your Bitcoin transaction
      // This is just a placeholder for where that logic would go
      console.log('Triggering Bitcoin transaction for:', otcInscription);

      res.status(200).json({ message: 'OTC inscription created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create OTC inscription' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}