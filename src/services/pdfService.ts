import { PDFDocument } from "pdf-lib";

const MAX_PDF_COUNT = 20;
const MAX_PDF_FILE_BYTES = 50 * 1024 * 1024;
const MAX_TOTAL_PDF_BYTES = 100 * 1024 * 1024;

export class PdfService {
  private static instance: PdfService;

  private constructor() {}

  public static getInstance(): PdfService {
    if (!PdfService.instance) {
      PdfService.instance = new PdfService();
    }
    return PdfService.instance;
  }

  /**
   * Merges multiple PDF files into a single PDF document.
   * @param files Array of PDF Files
   * @returns Promise resolving to Uint8Array containing the merged PDF bytes
   */
  public async mergePdfs(files: File[]): Promise<Uint8Array> {
    if (files.length < 2) {
      throw new Error("Select at least two PDF files.");
    }
    if (files.length > MAX_PDF_COUNT) {
      throw new Error(`You can merge at most ${MAX_PDF_COUNT} PDF files at once.`);
    }

    const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
    if (files.some(file => file.size <= 0 || file.size > MAX_PDF_FILE_BYTES)) {
      throw new Error("Each PDF must be larger than zero and no larger than 50 MB.");
    }
    if (totalBytes > MAX_TOTAL_PDF_BYTES) {
      throw new Error("The combined size of selected PDFs must not exceed 100 MB.");
    }

    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => {
        mergedPdf.addPage(page);
      });
    }

    return await mergedPdf.save();
  }
}

export const pdfService = PdfService.getInstance();
