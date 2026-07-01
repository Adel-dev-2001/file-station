export class DownloadService {
  private static instance: DownloadService;

  private constructor() {}

  public static getInstance(): DownloadService {
    if (!DownloadService.instance) {
      DownloadService.instance = new DownloadService();
    }
    return DownloadService.instance;
  }

  /**
   * Triggers a browser download for a raw Blob.
   * @param blob Blob to download
   * @param filename Filename to save as
   */
  public downloadBlob(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /**
   * Triggers a browser download for an HTML Canvas element as a PNG image.
   * @param canvas Canvas to download
   * @param filename Filename to save as
   */
  public downloadCanvas(canvas: HTMLCanvasElement, filename: string): void {
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

export const downloadService = DownloadService.getInstance();
