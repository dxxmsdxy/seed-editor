import prisma from "@/lib/prisma";

export async function GET(req) {
  const url = new URL(req.url);

  let page = url.searchParams.get("page") || 1;
  let pageSize = url.searchParams.get("pageSize") || 10;
  const wallet = url.searchParams.get("wallet");
  const mine = url.searchParams.get("mine");
  const confirmed = url.searchParams.get("confirmed");

  let where = {};

  if (mine == "true" && wallet) {
    where = {
      ...where,
      wallet: {
        equals: wallet,
      },
    };
  }

  if (confirmed) {
    if (confirmed === "true") {
      where = {
        ...where,
        status: {
          equals: "confirmed",
        },
      };
    } else if (confirmed === "false") {
      where = {
        ...where,
        status: {
          equals: "unconfirmed",
        },
      };
    }
  }

  // Convert query parameters to integers
  page = parseInt(page, 10);
  pageSize = parseInt(pageSize, 10);

  const count = await prisma.seed.count({ where });
  const result = await prisma.seed.findMany({
    where,
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: {
      id: "desc",
      // createdAt: "desc",
      // TODO: later repace with createdAt
    },
  });

  return Response.json({ result, count }, { status: 200 });
}

export async function POST(req) {
  const { seeds } = await req.json();

  if (!Array.isArray(seeds) || seeds.length === 0) {
    return Response.json({ error: "Invalid seeds data" }, { status: 400 });
  }

  try {
    const results = await Promise.all(
      seeds.map(async (seedData) => {
        const result = await prisma.seed.create({
          data: seedData,
        });

        return result;
      })
    );

    return Response.json(results, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
