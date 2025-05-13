import { join } from "path";
import { promises as fs } from "fs";

export const RESUME_PDF_FILENAME = "resume-haikhalfakhreez-20250513.pdf";

let cachedResumeBuffer: Uint8Array<ArrayBuffer> | null = null;

export async function getResumeBuffer(): Promise<Uint8Array<ArrayBuffer>> {
  if (!cachedResumeBuffer) {
    const filePath = join(process.cwd(), "public", "resume.pdf");
    const fileBuffer = await fs.readFile(filePath);
    cachedResumeBuffer = new Uint8Array(fileBuffer);
  }
  return cachedResumeBuffer;
}
