import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";

const S3_ENDPOINT = process.env.S3_ENDPOINT;
const S3_ACCESS_KEY = process.env.S3_ACCESS_KEY;
const S3_SECRET_KEY = process.env.S3_SECRET_KEY;
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME;
const S3_REGION = process.env.S3_REGION;

const s3Client = new S3Client({
  endpoint: S3_ENDPOINT,
  region: S3_REGION,
  forcePathStyle: true,
  credentials: {
    accessKeyId: S3_ACCESS_KEY,
    secretAccessKey: S3_SECRET_KEY,
  },
});

export async function POST(request) {
  try {
    const formData = await request.formData();

    const seed = formData.get("seed");
    const file = formData.get("file");

    if (!file) {
      return Response.json(
        { error: "File blob is required." },
        { status: 400 }
      );
    }

    const paramsPNG = {
      Bucket: S3_BUCKET_NAME,
      Key: "seed" + seed + ".png",
      Body: file,
      ContentType: "image/png",
    };

    const parallelUploads3PNG = new Upload({
      client: s3Client,
      params: paramsPNG,
      queueSize: 4,
      partSize: 1024 * 1024 * 5,
      leavePartsOnError: false,
    });

    try {
      const response = await parallelUploads3PNG.done();
      return Response.json(
        { pngUrl: response.Location },
        {
          status: 200,
        }
      );
    } catch (e) {
      return new Response(
        { error: "Upload to S3 has failed" },
        {
          status: 500,
        }
      );
    }
  } catch (error) {
    return new Response(
      { error: JSON.stringify(error) },
      {
        status: 400,
      }
    );
  }
}

export async function GET() {
  return new Response("Hello, Next.js!", {
    status: 200,
  });
}
