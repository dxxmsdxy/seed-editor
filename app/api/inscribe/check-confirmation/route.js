const BASE_URL = process.env.BASE_URL;
const BIS_URL = process.env.BIS_URL;
const NETWORK = "testnet";

export async function GET() {
  try {
    // 1. FETCH ALL UNCONFIRMED API ROUTES
    const seedsResponse = await fetch(`${BASE_URL}/api/seeds?confirmed=false`);
    if (!seedsResponse.ok) {
      throw new Error(
        `Failed to fetch unconfirmed seeds. Status: ${seedsResponse.status}`
      );
    }

    const { result: unconfirmedSeeds } = await seedsResponse.json();

    // 2. ITERATE AND CHECK FOR CONFIRMATION
    let updatedCount = 0;
    for (const seed of unconfirmedSeeds.filter((_, index) => index < 1)) {
      console.log("checking " + seed.id);
      let isConfirmed;

      try {
        // 2.1 FETCH INSCRIPTION CONFIRMATION
        const inscribeConfirmationResponse = await fetch(
          `${BIS_URL}/${NETWORK}/get_inscription_name/${seed.inscriptionId}`
        );

        if (!inscribeConfirmationResponse.ok) {
          throw new Error(
            `Failed to fetch inscription confirmation. Status: ${inscribeConfirmationResponse.status}`
          );
        }

        // TODO: Check the actual response for confirmation
        isConfirmed = true;
      } catch (error) {
        console.error("Error fetching inscription confirmation:", error);
        isConfirmed = false;
      }

      // 3. IF CONFIRMED: UPDATE STATUS
      if (isConfirmed) {
        const updateSeedResponse = await fetch(
          `${BASE_URL}/api/seeds/${seed.id}`,
          {
            method: "PUT",
            body: JSON.stringify({ status: "confirmed" }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!updateSeedResponse.ok) {
          throw new Error(
            `Failed to update seed status. Status: ${updateSeedResponse.status}`
          );
        }

        updatedCount++;
      }
    }

    return Response.json(
      {
        message: `Checked ${unconfirmedSeeds.length} seeds. Confirmed: ${updatedCount}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in GET function:", error);
    return Response.json(
      { error: "An error occurred while processing the request." },
      { status: 500 }
    );
  }
}
