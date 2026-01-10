/**
 * 3D Printing Filament Comparison - Data Module
 * Comprehensive dataset with 12 filament types
 */

const FILAMENT_DATA = [
  {
    id: "pla",
    name: "PLA",
    fullName: "Polylactic Acid",
    category: "standard",
    difficulty: "beginner",
    description: "The most popular 3D printing filament, derived from renewable resources like corn starch. Ideal for beginners and decorative prints with excellent print quality.",
    color: "#22c55e",
    temperatures: {
      nozzle: { min: 180, max: 220, recommended: 200 },
      bed: { min: 0, max: 60, recommended: 50 }
    },
    ratings: {
      strength: 7,
      flexibility: 2,
      heatResistance: 3,
      uvResistance: 4,
      chemicalResistance: 4,
      easeOfPrinting: 10,
      layerAdhesion: 8,
      surfaceQuality: 9
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: false,
      dryingRequired: false,
      ventilation: false
    },
    cost: { category: "budget", min: 15, max: 30 },
    pros: [
      "Easiest filament to print",
      "No heated bed required",
      "Low warping tendency",
      "Wide color selection",
      "Low odor during printing",
      "Made from renewable resources",
      "Affordable"
    ],
    cons: [
      "Low heat resistance (softens at ~60C)",
      "Brittle, breaks easily on impact",
      "Not suitable for outdoor use",
      "Limited chemical resistance"
    ],
    useCases: ["Decorative items", "Prototypes", "Educational projects", "Cosplay props", "Figurines", "Gifts"],
    biodegradable: true,
    foodSafe: false
  },
  {
    id: "petg",
    name: "PETG",
    fullName: "Polyethylene Terephthalate Glycol",
    category: "standard",
    difficulty: "intermediate",
    description: "A versatile filament combining ease of printing with improved strength and flexibility over PLA. Excellent choice for functional parts and outdoor applications.",
    color: "#3b82f6",
    temperatures: {
      nozzle: { min: 220, max: 250, recommended: 235 },
      bed: { min: 70, max: 90, recommended: 80 }
    },
    ratings: {
      strength: 8,
      flexibility: 6,
      heatResistance: 5,
      uvResistance: 7,
      chemicalResistance: 7,
      easeOfPrinting: 8,
      layerAdhesion: 9,
      surfaceQuality: 8
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: false
    },
    cost: { category: "budget", min: 18, max: 35 },
    pros: [
      "Easy to print (nearly as easy as PLA)",
      "Low warping tendency",
      "Excellent layer adhesion",
      "More flexible than PLA",
      "Good UV and chemical resistance",
      "Nearly odorless"
    ],
    cons: [
      "Prone to stringing",
      "Can stick too well to PEI beds",
      "Scratches more easily than ABS",
      "Moderate heat resistance"
    ],
    useCases: ["Mechanical parts", "Protective cases", "Food containers", "Outdoor applications", "Water-resistant parts"],
    biodegradable: false,
    foodSafe: true
  },
  {
    id: "abs",
    name: "ABS",
    fullName: "Acrylonitrile Butadiene Styrene",
    category: "engineering",
    difficulty: "advanced",
    description: "A durable, impact-resistant thermoplastic widely used in automotive and consumer products. Requires enclosure but offers excellent post-processing options.",
    color: "#ef4444",
    temperatures: {
      nozzle: { min: 220, max: 250, recommended: 235 },
      bed: { min: 95, max: 110, recommended: 100 }
    },
    ratings: {
      strength: 7,
      flexibility: 5,
      heatResistance: 7,
      uvResistance: 3,
      chemicalResistance: 7,
      easeOfPrinting: 5,
      layerAdhesion: 7,
      surfaceQuality: 7
    },
    requirements: {
      enclosure: true,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: true
    },
    cost: { category: "budget", min: 18, max: 35 },
    pros: [
      "High impact resistance",
      "Good heat resistance (up to 100C)",
      "Acetone smoothing possible",
      "Durable and tough",
      "Good chemical resistance"
    ],
    cons: [
      "High warping tendency",
      "Requires heated bed and enclosure",
      "Strong, unpleasant fumes",
      "UV degradation outdoors",
      "Not beginner-friendly"
    ],
    useCases: ["Functional prototypes", "Automotive parts", "Electronic enclosures", "Mechanical components", "LEGO-style parts"],
    biodegradable: false,
    foodSafe: false
  },
  {
    id: "tpu",
    name: "TPU/TPE",
    fullName: "Thermoplastic Polyurethane / Elastomer",
    category: "flexible",
    difficulty: "intermediate",
    description: "Flexible, rubber-like filament with excellent elasticity. Used for parts requiring bend, stretch, and impact absorption.",
    color: "#a855f7",
    temperatures: {
      nozzle: { min: 220, max: 250, recommended: 230 },
      bed: { min: 40, max: 75, recommended: 60 }
    },
    ratings: {
      strength: 5,
      flexibility: 10,
      heatResistance: 5,
      uvResistance: 6,
      chemicalResistance: 7,
      easeOfPrinting: 4,
      layerAdhesion: 8,
      surfaceQuality: 6
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: false,
      directDrive: true
    },
    cost: { category: "mid", min: 25, max: 50 },
    pros: [
      "Extremely flexible and elastic",
      "Excellent impact resistance",
      "Abrasion resistant",
      "Low warping",
      "Can stretch up to 500%"
    ],
    cons: [
      "Difficult to print (requires slow speeds)",
      "Prone to stringing",
      "Requires direct-drive extruder",
      "Hard to achieve fine details"
    ],
    useCases: ["Phone cases", "Shoe soles", "Gaskets and seals", "Vibration dampeners", "Wearables", "Watchbands"],
    biodegradable: false,
    foodSafe: false
  },
  {
    id: "nylon",
    name: "Nylon",
    fullName: "Polyamide (PA6, PA12)",
    category: "engineering",
    difficulty: "advanced",
    description: "Strong, durable, and slightly flexible engineering plastic with excellent wear resistance and self-lubricating properties.",
    color: "#f97316",
    temperatures: {
      nozzle: { min: 240, max: 270, recommended: 255 },
      bed: { min: 70, max: 100, recommended: 80 }
    },
    ratings: {
      strength: 9,
      flexibility: 7,
      heatResistance: 7,
      uvResistance: 5,
      chemicalResistance: 8,
      easeOfPrinting: 3,
      layerAdhesion: 9,
      surfaceQuality: 7
    },
    requirements: {
      enclosure: true,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: true,
      dryboxPrinting: true
    },
    cost: { category: "premium", min: 40, max: 80 },
    pros: [
      "Excellent strength and toughness",
      "High fatigue resistance",
      "Good abrasion resistance",
      "Self-lubricating properties",
      "Excellent layer adhesion"
    ],
    cons: [
      "Extremely hygroscopic",
      "High warping tendency",
      "Requires enclosure",
      "Difficult to print",
      "Expensive"
    ],
    useCases: ["Gears and bearings", "Hinges and snap-fits", "Tools and jigs", "Wear-resistant parts", "Functional prototypes"],
    biodegradable: false,
    foodSafe: false
  },
  {
    id: "asa",
    name: "ASA",
    fullName: "Acrylonitrile Styrene Acrylate",
    category: "engineering",
    difficulty: "advanced",
    description: "UV-resistant alternative to ABS, ideal for outdoor applications. Maintains properties when exposed to sunlight and weather.",
    color: "#eab308",
    temperatures: {
      nozzle: { min: 235, max: 260, recommended: 250 },
      bed: { min: 90, max: 110, recommended: 100 }
    },
    ratings: {
      strength: 7,
      flexibility: 4,
      heatResistance: 8,
      uvResistance: 10,
      chemicalResistance: 8,
      easeOfPrinting: 5,
      layerAdhesion: 8,
      surfaceQuality: 8
    },
    requirements: {
      enclosure: true,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: true
    },
    cost: { category: "mid", min: 25, max: 50 },
    pros: [
      "Excellent UV resistance",
      "Great for outdoor use",
      "Better heat resistance than ABS",
      "Good chemical resistance",
      "Less warping than ABS"
    ],
    cons: [
      "Requires enclosure",
      "Produces fumes during printing",
      "More expensive than ABS",
      "Limited color options"
    ],
    useCases: ["Outdoor enclosures", "Automotive exterior parts", "Garden equipment", "Marine hardware", "Signage"],
    biodegradable: false,
    foodSafe: false
  },
  {
    id: "pc",
    name: "Polycarbonate",
    fullName: "Polycarbonate (PC)",
    category: "engineering",
    difficulty: "expert",
    description: "High-performance engineering thermoplastic with exceptional impact resistance and heat tolerance. Used in demanding applications.",
    color: "#06b6d4",
    temperatures: {
      nozzle: { min: 260, max: 310, recommended: 290 },
      bed: { min: 110, max: 150, recommended: 135 }
    },
    ratings: {
      strength: 9,
      flexibility: 6,
      heatResistance: 10,
      uvResistance: 5,
      chemicalResistance: 6,
      easeOfPrinting: 2,
      layerAdhesion: 8,
      surfaceQuality: 7
    },
    requirements: {
      enclosure: true,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: true,
      highTempHotend: true,
      allMetalHotend: true
    },
    cost: { category: "premium", min: 40, max: 80 },
    pros: [
      "Highest impact resistance",
      "Excellent heat resistance (up to 140C)",
      "Naturally transparent",
      "High stiffness",
      "Fire resistant"
    ],
    cons: [
      "Very difficult to print",
      "Requires high temperatures (290C+)",
      "Extremely prone to warping",
      "Must have enclosure",
      "Limited printer compatibility"
    ],
    useCases: ["Safety equipment", "Automotive components", "Electronic enclosures", "High-temperature applications", "Structural parts"],
    biodegradable: false,
    foodSafe: false
  },
  {
    id: "hips",
    name: "HIPS",
    fullName: "High Impact Polystyrene",
    category: "support",
    difficulty: "intermediate",
    description: "Primarily used as dissolvable support material for ABS prints. Dissolves in d-limonene for clean support removal.",
    color: "#ec4899",
    temperatures: {
      nozzle: { min: 220, max: 260, recommended: 235 },
      bed: { min: 90, max: 115, recommended: 100 }
    },
    ratings: {
      strength: 5,
      flexibility: 4,
      heatResistance: 6,
      uvResistance: 3,
      chemicalResistance: 4,
      easeOfPrinting: 6,
      layerAdhesion: 7,
      surfaceQuality: 7
    },
    requirements: {
      enclosure: true,
      hardenedNozzle: false,
      dryingRequired: false,
      ventilation: true,
      dualExtruder: true
    },
    cost: { category: "budget", min: 20, max: 35 },
    pros: [
      "Dissolves in d-limonene",
      "Low moisture absorption",
      "Lighter than ABS",
      "Easy to print",
      "Low cost"
    ],
    cons: [
      "Requires dual extruder for support use",
      "Some warping tendency",
      "Requires enclosure",
      "Lower strength than ABS"
    ],
    useCases: ["Support material for ABS", "Lightweight structural parts", "Packaging prototypes"],
    biodegradable: false,
    foodSafe: false
  },
  {
    id: "pva",
    name: "PVA",
    fullName: "Polyvinyl Alcohol",
    category: "support",
    difficulty: "expert",
    description: "Water-soluble support material, ideal for complex geometries requiring easily removable supports. Dissolves in plain water.",
    color: "#84cc16",
    temperatures: {
      nozzle: { min: 185, max: 225, recommended: 200 },
      bed: { min: 45, max: 65, recommended: 55 }
    },
    ratings: {
      strength: 6,
      flexibility: 4,
      heatResistance: 3,
      uvResistance: 2,
      chemicalResistance: 2,
      easeOfPrinting: 4,
      layerAdhesion: 8,
      surfaceQuality: 7
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: false,
      dualExtruder: true,
      airtightStorage: true
    },
    cost: { category: "premium", min: 50, max: 100 },
    pros: [
      "Dissolves in plain water",
      "No harsh chemicals needed",
      "Excellent adhesion to PLA",
      "Clean support removal",
      "Biodegradable"
    ],
    cons: [
      "Extremely hygroscopic",
      "Must be stored completely dry",
      "Expensive",
      "Short shelf life once opened"
    ],
    useCases: ["Support material for PLA", "Support material for TPU", "Complex geometries", "Multi-material prints"],
    biodegradable: true,
    foodSafe: false
  },
  {
    id: "wood-pla",
    name: "Wood-filled PLA",
    fullName: "Wood Fiber Reinforced PLA",
    category: "composite",
    difficulty: "intermediate",
    description: "PLA mixed with wood fibers (5-15%) for a natural wood-like appearance and texture. Can be stained and finished like real wood.",
    color: "#a16207",
    temperatures: {
      nozzle: { min: 180, max: 220, recommended: 200 },
      bed: { min: 45, max: 60, recommended: 50 }
    },
    ratings: {
      strength: 5,
      flexibility: 2,
      heatResistance: 3,
      uvResistance: 3,
      chemicalResistance: 3,
      easeOfPrinting: 6,
      layerAdhesion: 6,
      surfaceQuality: 8
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: false,
      largerNozzle: true
    },
    cost: { category: "mid", min: 30, max: 50 },
    pros: [
      "Realistic wood-like appearance",
      "Pleasant wood smell during printing",
      "Can be stained like real wood",
      "Low warping",
      "Hides layer lines well"
    ],
    cons: [
      "Prone to clogging",
      "Requires larger nozzle (0.5mm+)",
      "Weaker than standard PLA",
      "More brittle"
    ],
    useCases: ["Decorative items", "Figurines", "Furniture accents", "Picture frames", "Cosplay props"],
    biodegradable: true,
    foodSafe: false
  },
  {
    id: "carbon-fiber",
    name: "Carbon Fiber",
    fullName: "Carbon Fiber Reinforced Filaments",
    category: "composite",
    difficulty: "advanced",
    description: "Base filaments reinforced with carbon fibers for increased stiffness and dimensional stability. Extremely rigid with professional finish.",
    color: "#374151",
    temperatures: {
      nozzle: { min: 200, max: 280, recommended: 240 },
      bed: { min: 50, max: 100, recommended: 70 }
    },
    ratings: {
      strength: 9,
      flexibility: 1,
      heatResistance: 8,
      uvResistance: 7,
      chemicalResistance: 7,
      easeOfPrinting: 4,
      layerAdhesion: 7,
      surfaceQuality: 9
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: true,
      dryingRequired: true,
      ventilation: true,
      largerNozzle: true
    },
    cost: { category: "premium", min: 50, max: 120 },
    pros: [
      "Extremely high stiffness",
      "Excellent dimensional stability",
      "Very low warping",
      "Lightweight yet strong",
      "Professional matte finish"
    ],
    cons: [
      "Requires hardened/ruby nozzle",
      "Highly abrasive to brass nozzles",
      "Brittle (low elongation)",
      "Expensive",
      "Reduced layer adhesion"
    ],
    useCases: ["Drone frames", "RC car parts", "Structural components", "Replacement for aluminum", "Jigs and fixtures"],
    biodegradable: false,
    foodSafe: false
  },
  {
    id: "silk-pla",
    name: "Silk/Metallic PLA",
    fullName: "Silk and Metallic Finish PLA",
    category: "specialty",
    difficulty: "beginner",
    description: "PLA with special additives that create a smooth, shiny, silk-like or metallic finish. Perfect for decorative and display pieces.",
    color: "#db2777",
    temperatures: {
      nozzle: { min: 210, max: 235, recommended: 220 },
      bed: { min: 50, max: 70, recommended: 60 }
    },
    ratings: {
      strength: 6,
      flexibility: 3,
      heatResistance: 3,
      uvResistance: 4,
      chemicalResistance: 4,
      easeOfPrinting: 8,
      layerAdhesion: 6,
      surfaceQuality: 10
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: false,
      dryingRequired: false,
      ventilation: false
    },
    cost: { category: "mid", min: 25, max: 45 },
    pros: [
      "Beautiful shiny finish",
      "Hides layer lines well",
      "Wide color variety",
      "Easy to print",
      "No post-processing needed"
    ],
    cons: [
      "Weaker than standard PLA",
      "Poor layer adhesion",
      "Not for functional parts",
      "Low heat resistance",
      "Difficult to post-process"
    ],
    useCases: ["Decorative items", "Vases and sculptures", "Gifts and awards", "Jewelry displays", "Art pieces"],
    biodegradable: true,
    foodSafe: false
  }
];

// Property labels for display
const PROPERTY_LABELS = {
  strength: "Strength",
  flexibility: "Flexibility",
  heatResistance: "Heat Resistance",
  uvResistance: "UV Resistance",
  chemicalResistance: "Chemical Resistance",
  easeOfPrinting: "Print Ease",
  layerAdhesion: "Layer Adhesion",
  surfaceQuality: "Surface Quality"
};

// Category colors
const CATEGORY_COLORS = {
  standard: "#22c55e",
  engineering: "#ef4444",
  flexible: "#a855f7",
  composite: "#374151",
  support: "#84cc16",
  specialty: "#db2777"
};

// Difficulty labels
const DIFFICULTY_LABELS = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  expert: "Expert"
};

// Cost labels
const COST_LABELS = {
  budget: "$",
  mid: "$$",
  premium: "$$$"
};
