export const SERVICES = [
  "Computer",
  "Computer Software",
  "Printer/Scanner",
  "E-Book Reader/Tablets",
  "Hard Drives & Backup",
  "Network/WLAN",
  "Consoles & VR",
  "Kitchen/Home",
  "SmartHome Assistants",
  "Smartwatch/Fitness Tracker",
  "Phone/Fax",
  "Audio/HiFi",
  "TV/DVD/BluRay/Video",
  "TV over Internet/Streaming",
  "TV Setup",
  "Windows 11",
] as const;

type Service = (typeof SERVICES)[number];

export type { Service };
