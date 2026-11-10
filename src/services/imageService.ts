import { OutputFormat } from "../types/image";

export class ImageService {
  private static instance: ImageService;

  private constructor() {}

  public static getInstance(): ImageService {
    if (!ImageService.instance) {
      ImageService.instance = new ImageService();
    }
    return ImageService.instance;
  }

  /**
   * Converts a given image URL (preview URL) to a different format and quality.
   * @param imgUrl Image preview source URL
   * @param outputFormat Format to convert to (image/png, image/jpeg, image/webp)
   * @param quality Quality slider value (10 to 100)
   * @returns Promise resolving to a Blob containing the converted image
   */
  public convertImage(
    imgUrl: string,
    outputFormat: OutputFormat,
    quality: number
  ): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        const width = img.naturalWidth || img.width;
        const height = img.naturalHeight || img.height;
        const maxPixels = 20_000_000;
        if (!width || !height || width * height > maxPixels) {
          reject(new Error("Image dimensions are empty or exceed the 20-megapixel limit."));
          return;
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        
        if (!ctx) {
          reject(new Error("Canvas 2D context is not available"));
          return;
        }
        
        ctx.drawImage(img, 0, 0);
        
        const safeQuality = Math.max(10, Math.min(100, Number.isFinite(quality) ? quality : 90));
        const q = safeQuality / 100;
        
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error("Image conversion to blob failed"));
            }
          },
          outputFormat,
          outputFormat === "image/png" ? undefined : q
        );
      };
      
      img.onerror = () => {
        reject(new Error("Failed to load original image file for conversion"));
      };
      
      img.src = imgUrl;
    });
  }
}

export const imageService = ImageService.getInstance();
