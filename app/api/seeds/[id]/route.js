import prisma from "@/lib/prisma";

export async function PUT(req) {
  const seedId = req.url.split("/")[req.url.split("/").length - 1];
  const body = await req.json();

  const updatedSeed = await prisma.seed.update({
    where: { id: parseInt(seedId) },
    data: body,
  });

  return Response.json(
    { message: "Seed updated successfully", data: updatedSeed },
    { status: 200 }
  );
}
export async function GET(req) {
  const seedId = req.url.split("/")[req.url.split("/").length - 1];

  const seed = await prisma.seed.findUnique({
    where: { id: parseInt(seedId) },
  });

  if (seed) {
    return Response.json({ data: seed }, { status: 200 });
  } else {
    return Response.json({ error: "Seed not found" }, { status: 404 });
  }
}
