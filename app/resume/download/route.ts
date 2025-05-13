import { NextResponse } from "next/server";
import { getResumeBuffer, RESUME_PDF_FILENAME } from "@/lib/resume";

export async function GET() {
  const buffer = await getResumeBuffer();

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${RESUME_PDF_FILENAME}"`,
    },
  });
}
