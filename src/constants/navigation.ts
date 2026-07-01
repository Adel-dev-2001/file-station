import { 
  FileText, 
  Image as ImageIcon, 
  FileCog, 
  Binary, 
  Link2, 
  Braces, 
  QrCode, 
  KeyRound, 
  Type 
} from "lucide-react";
import { NavigationCategory } from "../types/navigation";

export const navCategories: NavigationCategory[] = [
  {
    name: "Documents & Files",
    nameKey: "nav.cat.documents",
    items: [
      { nameKey: "nav.pdfTools", path: "/pdf-tools", icon: FileText },
      { nameKey: "nav.imageConverter", path: "/image-converter", icon: ImageIcon },
      { nameKey: "nav.extensionTools", path: "/extension-tools", icon: FileCog },
    ]
  },
  {
    name: "Developer Tools",
    nameKey: "nav.cat.developer",
    items: [
      { nameKey: "nav.base64Tool", path: "/base64-tool", icon: Binary },
      { nameKey: "nav.urlTool", path: "/url-tool", icon: Link2 },
      { nameKey: "nav.jsonTool", path: "/json-tool", icon: Braces },
    ]
  },
  {
    name: "Utilities",
    nameKey: "nav.cat.utilities",
    items: [
      { nameKey: "nav.qrGenerator", path: "/qr-generator", icon: QrCode },
      { nameKey: "nav.passGen", path: "/pass-gen", icon: KeyRound },
      { nameKey: "nav.wordCount", path: "/word-count", icon: Type },
    ]
  }
];
