export type OutputFormat = "image/png" | "image/jpeg" | "image/webp";

export interface UploadedFile {
  file: File;
  previewUrl: string;
}
