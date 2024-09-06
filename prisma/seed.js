const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const seedsData = [
  {
    wallet: "sampleWallet1",
    seedNumber: 12345678901234567890n,
    pngUrl: "https://example.com/png1.png",
    svgUrl: "https://example.com/svg1.svg",
  },
  {
    wallet: "sampleWallet2",
    seedNumber: 98765432109876543210n,
    pngUrl: "https://example.com/png2.png",
    svgUrl: "https://example.com/svg2.svg",
  },
];

const seedDatabase = async () => {
  for (const seedData of seedsData) {
    await prisma.seed.create({
      data: {
        ...seedData,
      },
    });
  }
};

seedDatabase()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// async function main() {
//   console.log(`Start seeding ...`);
//   for (const u of userData) {
//     const user = await prisma.user.create({
//       data: u,
//     });
//     console.log(`Created user with id: ${user.id}`);
//   }
//   console.log(`Seeding finished.`);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
