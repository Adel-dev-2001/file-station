import { PDFDocument } from "pdf-lib";

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
