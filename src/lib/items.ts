export interface GameItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  craftedAt?: string;
  stackSize?: number;
}

export const items: GameItem[] = [
  {
    id: "repair-tool",
    slug: "repair-tool",
    name: "Repair Tool",
    category: "Tools",
    description: "Used to repair damaged vehicles, bases, and equipment.",
    craftedAt: "Fabrication Station",
    stackSize: 1,
  },
  {
    id: "processor",
    slug: "processor",
    name: "Processor",
    category: "Materials",
    description: "Advanced computing component used in high-tier crafting recipes.",
    craftedAt: "Fabrication Station",
    stackSize: 10,
  },
  {
    id: "advanced-wiring-kit",
    slug: "advanced-wiring-kit",
    name: "Advanced Wiring Kit",
    category: "Materials",
    description: "Complex electronic component essential for vehicle and base upgrades.",
    craftedAt: "Fabrication Station",
    stackSize: 5,
  },
  {
    id: "scanner",
    slug: "scanner",
    name: "Scanner",
    category: "Tools",
    description: "Scans flora, fauna, and technology to add data to the PDA.",
    craftedAt: "Fabrication Station",
    stackSize: 1,
  },
  {
    id: "seaglide",
    slug: "seaglide",
    name: "Seaglide",
    category: "Equipment",
    description: "Personal propulsion device for faster underwater travel.",
    craftedAt: "Mobile Vehicle Bay",
    stackSize: 1,
  },
  {
    id: "laser-cutter",
    slug: "laser-cutter",
    name: "Laser Cutter",
    category: "Tools",
    description: "Cuts through sealed doors and obstacles to access new areas.",
    craftedAt: "Fabrication Station",
    stackSize: 1,
  },
];

export const blueprints = [
  { id: "repair-tool", name: "Repair Tool", station: "Fabrication Station", time: 3 },
  { id: "seaglide", name: "Seaglide", station: "Mobile Vehicle Bay", time: 5 },
  { id: "scanner", name: "Scanner", station: "Fabrication Station", time: 2 },
  { id: "laser-cutter", name: "Laser Cutter", station: "Fabrication Station", time: 4 },
];

export const creatures = [
  { id: "collector-leviathan", name: "Collector Leviathan", danger: 3, habitats: ["Deep Reef", "Abyss"] },
  { id: "glow-whale", name: "Glow Whale", danger: 1, habitats: ["Open Ocean"] },
  { id: "crab-squid", name: "Crab Squid", danger: 4, habitats: ["Deep Reef", "Caves"] },
];
