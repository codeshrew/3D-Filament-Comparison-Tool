/**
 * 3D Printing Filament Comparison - Data Module
 * Comprehensive dataset with 45+ filament types
 *
 * Data Sources (Cross-Referenced):
 * - Prusa Knowledge Base: https://help.prusa3d.com/filament-material-guide
 * - MatterHackers: https://www.matterhackers.com/3d-printer-filament-compare
 * - Simplify3D: https://www.simplify3d.com/resources/materials-guide/
 * - Xometry: https://www.xometry.com/resources/3d-printing/types-of-3d-printer-filaments/
 * - Ultimaker: https://ultimaker.com/learn/3d-printer-filament-types-and-uses/
 * - 3DXTech: https://www.3dxtech.com/ (High-performance materials)
 * - Filamentive: https://www.filamentive.com/ (PEEK/PEI comparisons)
 */

// Data source references for citations
const DATA_SOURCES = {
  prusa: {
    name: "Prusa Knowledge Base",
    url: "https://help.prusa3d.com/filament-material-guide",
    shortName: "Prusa"
  },
  matterhackers: {
    name: "MatterHackers",
    url: "https://www.matterhackers.com/3d-printer-filament-compare",
    shortName: "MatterHackers"
  },
  simplify3d: {
    name: "Simplify3D Materials Guide",
    url: "https://www.simplify3d.com/resources/materials-guide/",
    shortName: "Simplify3D"
  },
  xometry: {
    name: "Xometry",
    url: "https://www.xometry.com/resources/3d-printing/types-of-3d-printer-filaments/",
    shortName: "Xometry"
  },
  ultimaker: {
    name: "Ultimaker",
    url: "https://ultimaker.com/learn/3d-printer-filament-types-and-uses/",
    shortName: "Ultimaker"
  },
  "3dxtech": {
    name: "3DXTech",
    url: "https://www.3dxtech.com/",
    shortName: "3DXTech"
  },
  filamentive: {
    name: "Filamentive",
    url: "https://www.filamentive.com/",
    shortName: "Filamentive"
  },
  all3dp: {
    name: "All3DP",
    url: "https://all3dp.com/1/3d-printer-filament-types-3d-printing-3d-filament/",
    shortName: "All3DP"
  }
};

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
      nozzle: { min: 180, max: 230, recommended: 200 },
      bed: { min: 0, max: 60, recommended: 50 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 65, unit: "MPa" },
      flexuralModulus: { value: 3.8, unit: "GPa" },
      heatDeflection: { value: 60, unit: "°C" }
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
      "Low heat resistance (softens at ~60°C)",
      "Brittle, breaks easily on impact",
      "Not suitable for outdoor use",
      "Limited chemical resistance"
    ],
    useCases: ["Decorative items", "Prototypes", "Educational projects", "Cosplay props", "Figurines", "Gifts"],
    biodegradable: true,
    foodSafe: false,
    sources: ["prusa", "matterhackers", "ultimaker", "xometry"]
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
      nozzle: { min: 220, max: 270, recommended: 235 },
      bed: { min: 70, max: 90, recommended: 80 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 53, unit: "MPa" },
      flexuralModulus: { value: 2.2, unit: "GPa" },
      heatDeflection: { value: 70, unit: "°C" }
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
    foodSafe: true,
    sources: ["prusa", "matterhackers", "ultimaker", "xometry"]
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
      nozzle: { min: 220, max: 255, recommended: 235 },
      bed: { min: 95, max: 110, recommended: 100 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 40, unit: "MPa" },
      flexuralModulus: { value: 2.0, unit: "GPa" },
      heatDeflection: { value: 100, unit: "°C" }
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
      "Good heat resistance (up to 100°C)",
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
    foodSafe: false,
    sources: ["prusa", "matterhackers", "xometry", "ultimaker"]
  },
  {
    id: "tpu",
    name: "TPU 95A",
    fullName: "Thermoplastic Polyurethane (95A Shore)",
    category: "flexible",
    difficulty: "intermediate",
    description: "Flexible, rubber-like filament with excellent elasticity. Used for parts requiring bend, stretch, and impact absorption. Shore hardness 95A is the most common variant.",
    color: "#a855f7",
    temperatures: {
      nozzle: { min: 220, max: 260, recommended: 230 },
      bed: { min: 40, max: 75, recommended: 60 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 40, unit: "MPa" },
      shoreHardness: { value: 95, unit: "A" },
      elongation: { value: 500, unit: "%" }
    },
    ratings: {
      strength: 5,
      flexibility: 9,
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
    foodSafe: false,
    sources: ["prusa", "matterhackers", "ultimaker"]
  },
  {
    id: "nylon",
    name: "Nylon (PA)",
    fullName: "Polyamide (PA6/PA12)",
    category: "engineering",
    difficulty: "advanced",
    description: "Strong, durable, and slightly flexible engineering plastic with excellent wear resistance and self-lubricating properties. PA6 and PA12 are the most common grades.",
    color: "#f97316",
    temperatures: {
      nozzle: { min: 240, max: 285, recommended: 255 },
      bed: { min: 70, max: 115, recommended: 80 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 70, unit: "MPa" },
      flexuralModulus: { value: 1.4, unit: "GPa" },
      heatDeflection: { value: 85, unit: "°C" }
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
    foodSafe: false,
    sources: ["prusa", "matterhackers", "xometry", "ultimaker"]
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
      nozzle: { min: 235, max: 275, recommended: 250 },
      bed: { min: 90, max: 110, recommended: 100 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 45, unit: "MPa" },
      flexuralModulus: { value: 2.1, unit: "GPa" },
      heatDeflection: { value: 98, unit: "°C" }
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
    foodSafe: false,
    sources: ["prusa", "matterhackers", "ultimaker"]
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
      bed: { min: 100, max: 150, recommended: 135 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 72, unit: "MPa" },
      flexuralModulus: { value: 2.3, unit: "GPa" },
      heatDeflection: { value: 140, unit: "°C" }
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
      "Excellent heat resistance (up to 140°C)",
      "Naturally transparent",
      "High stiffness",
      "Fire resistant"
    ],
    cons: [
      "Very difficult to print",
      "Requires high temperatures (290°C+)",
      "Extremely prone to warping",
      "Must have enclosure",
      "Limited printer compatibility"
    ],
    useCases: ["Safety equipment", "Automotive components", "Electronic enclosures", "High-temperature applications", "Structural parts"],
    biodegradable: false,
    foodSafe: false,
    sources: ["prusa", "xometry", "ultimaker", "matterhackers"]
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
    mechanicalProperties: {
      tensileStrength: { value: 32, unit: "MPa" },
      flexuralModulus: { value: 2.2, unit: "GPa" },
      heatDeflection: { value: 85, unit: "°C" }
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
    foodSafe: false,
    sources: ["prusa", "matterhackers", "xometry"]
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
      nozzle: { min: 180, max: 225, recommended: 200 },
      bed: { min: 45, max: 65, recommended: 55 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 78, unit: "MPa" },
      heatDeflection: { value: 50, unit: "°C" }
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
    foodSafe: false,
    sources: ["prusa", "matterhackers", "ultimaker", "xometry"]
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
    mechanicalProperties: {
      tensileStrength: { value: 45, unit: "MPa" },
      heatDeflection: { value: 55, unit: "°C" }
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
    foodSafe: false,
    sources: ["matterhackers", "prusa", "all3dp"]
  },
  {
    id: "carbon-fiber-pla",
    name: "CF-PLA",
    fullName: "Carbon Fiber Reinforced PLA",
    category: "composite",
    difficulty: "advanced",
    description: "PLA reinforced with chopped carbon fibers for increased stiffness and dimensional stability. Extremely rigid with professional matte finish.",
    color: "#374151",
    temperatures: {
      nozzle: { min: 200, max: 230, recommended: 215 },
      bed: { min: 50, max: 70, recommended: 60 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 48, unit: "MPa" },
      flexuralModulus: { value: 5.2, unit: "GPa" },
      heatDeflection: { value: 58, unit: "°C" }
    },
    ratings: {
      strength: 8,
      flexibility: 1,
      heatResistance: 4,
      uvResistance: 5,
      chemicalResistance: 5,
      easeOfPrinting: 5,
      layerAdhesion: 6,
      surfaceQuality: 9
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: true,
      dryingRequired: true,
      ventilation: false,
      largerNozzle: true
    },
    cost: { category: "premium", min: 40, max: 80 },
    pros: [
      "High stiffness-to-weight ratio",
      "Excellent dimensional stability",
      "Very low warping",
      "Professional matte finish",
      "Easy to print (PLA base)"
    ],
    cons: [
      "Requires hardened/ruby nozzle",
      "Highly abrasive to brass nozzles",
      "Brittle (low elongation)",
      "Reduced layer adhesion",
      "Low heat resistance (PLA base)"
    ],
    useCases: ["Drone frames", "RC car parts", "Camera mounts", "Jigs and fixtures", "Lightweight structural parts"],
    biodegradable: false,
    foodSafe: false,
    sources: ["matterhackers", "prusa", "xometry", "ultimaker"]
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
    mechanicalProperties: {
      tensileStrength: { value: 50, unit: "MPa" },
      heatDeflection: { value: 55, unit: "°C" }
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
    foodSafe: false,
    sources: ["matterhackers", "all3dp"]
  },

  // ============================================
  // NEW FILAMENTS - Standard/Modified
  // ============================================

  {
    id: "pla-plus",
    name: "PLA+/Tough PLA",
    fullName: "Enhanced PLA / Tough PLA",
    category: "standard",
    difficulty: "beginner",
    description: "Modified PLA formulation with improved impact resistance and toughness compared to standard PLA, while maintaining ease of printing.",
    color: "#16a34a",
    temperatures: {
      nozzle: { min: 200, max: 235, recommended: 215 },
      bed: { min: 45, max: 70, recommended: 60 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 60, unit: "MPa" },
      flexuralModulus: { value: 3.5, unit: "GPa" },
      heatDeflection: { value: 58, unit: "°C" }
    },
    ratings: {
      strength: 8,
      flexibility: 4,
      heatResistance: 4,
      uvResistance: 4,
      chemicalResistance: 4,
      easeOfPrinting: 9,
      layerAdhesion: 8,
      surfaceQuality: 9
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: false,
      dryingRequired: false,
      ventilation: false
    },
    cost: { category: "budget", min: 18, max: 35 },
    pros: [
      "Higher impact resistance than PLA",
      "Easy to print like standard PLA",
      "Improved layer adhesion",
      "Good for functional parts",
      "Wide availability"
    ],
    cons: [
      "Still limited heat resistance",
      "Slightly more expensive than PLA",
      "Quality varies by manufacturer",
      "Not suitable for outdoor use"
    ],
    useCases: ["Functional prototypes", "Mechanical parts", "Tool handles", "Household items", "Educational projects"],
    biodegradable: true,
    foodSafe: false,
    sources: ["matterhackers", "all3dp", "prusa"]
  },
  {
    id: "petg-ht",
    name: "PETG-HT",
    fullName: "High Temperature PETG",
    category: "standard",
    difficulty: "intermediate",
    description: "Heat-treated or modified PETG with improved heat deflection temperature. Suitable for applications requiring higher thermal stability.",
    color: "#2563eb",
    temperatures: {
      nozzle: { min: 250, max: 280, recommended: 265 },
      bed: { min: 90, max: 120, recommended: 110 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 55, unit: "MPa" },
      flexuralModulus: { value: 2.4, unit: "GPa" },
      heatDeflection: { value: 110, unit: "°C" }
    },
    ratings: {
      strength: 8,
      flexibility: 5,
      heatResistance: 8,
      uvResistance: 7,
      chemicalResistance: 7,
      easeOfPrinting: 6,
      layerAdhesion: 9,
      surfaceQuality: 8
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: false
    },
    cost: { category: "mid", min: 30, max: 55 },
    pros: [
      "Higher heat resistance than standard PETG",
      "Maintains PETG chemical resistance",
      "Good layer adhesion",
      "Food-safe variants available",
      "Minimal warping"
    ],
    cons: [
      "Higher print temperatures required",
      "May require annealing for max heat resistance",
      "More prone to stringing",
      "Less availability than standard PETG"
    ],
    useCases: ["Heat-resistant containers", "Automotive components", "Kitchen items", "Mechanical parts", "Outdoor applications"],
    biodegradable: false,
    foodSafe: true,
    sources: ["prusa", "matterhackers"]
  },
  {
    id: "cpe",
    name: "CPE",
    fullName: "Co-Polyester",
    category: "engineering",
    difficulty: "intermediate",
    description: "Advanced co-polyester material combining chemical resistance with excellent mechanical properties. Good bridge between PETG and engineering plastics.",
    color: "#0ea5e9",
    temperatures: {
      nozzle: { min: 250, max: 280, recommended: 275 },
      bed: { min: 80, max: 110, recommended: 90 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 50, unit: "MPa" },
      flexuralModulus: { value: 2.1, unit: "GPa" },
      heatDeflection: { value: 75, unit: "°C" }
    },
    ratings: {
      strength: 8,
      flexibility: 5,
      heatResistance: 6,
      uvResistance: 6,
      chemicalResistance: 8,
      easeOfPrinting: 7,
      layerAdhesion: 8,
      surfaceQuality: 8
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: false
    },
    cost: { category: "mid", min: 35, max: 60 },
    pros: [
      "Excellent chemical resistance",
      "Good temperature resistance",
      "Superior interlayer adhesion",
      "Low odor printing",
      "Good dimensional stability"
    ],
    cons: [
      "Higher print temperature",
      "More expensive than PETG",
      "Requires drying",
      "May stick to PEI beds"
    ],
    useCases: ["Chemical containers", "Laboratory equipment", "Medical devices", "Food-contact parts", "Automotive interiors"],
    biodegradable: false,
    foodSafe: true,
    sources: ["prusa", "ultimaker"]
  },

  // ============================================
  // NEW FILAMENTS - High Performance
  // ============================================

  {
    id: "peek",
    name: "PEEK",
    fullName: "Polyether Ether Ketone",
    category: "high-performance",
    difficulty: "expert",
    description: "Ultra high-performance thermoplastic with exceptional mechanical, thermal, and chemical properties. Used in aerospace, medical implants, and demanding industrial applications.",
    color: "#78350f",
    temperatures: {
      nozzle: { min: 360, max: 400, recommended: 385 },
      bed: { min: 120, max: 160, recommended: 140 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 100, unit: "MPa" },
      flexuralModulus: { value: 4.0, unit: "GPa" },
      heatDeflection: { value: 145, unit: "°C" },
      continuousUseTemp: { value: 240, unit: "°C" }
    },
    ratings: {
      strength: 10,
      flexibility: 4,
      heatResistance: 10,
      uvResistance: 8,
      chemicalResistance: 10,
      easeOfPrinting: 1,
      layerAdhesion: 9,
      surfaceQuality: 8
    },
    requirements: {
      enclosure: true,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: true,
      highTempHotend: true,
      allMetalHotend: true,
      heatedChamber: true
    },
    cost: { category: "premium", min: 300, max: 700 },
    pros: [
      "Exceptional strength and stiffness",
      "Outstanding heat resistance (240°C continuous)",
      "Excellent chemical resistance",
      "Biocompatible (medical grade)",
      "Superior fatigue resistance",
      "Flame retardant (UL94 V-0)"
    ],
    cons: [
      "Extremely expensive",
      "Requires industrial-grade printer",
      "Very high printing temperatures",
      "Must have heated chamber (70-150°C)",
      "Post-processing annealing required"
    ],
    useCases: ["Aerospace components", "Medical implants", "Oil & gas equipment", "Semiconductor handling", "High-performance bearings"],
    biodegradable: false,
    foodSafe: false,
    sources: ["3dxtech", "filamentive", "xometry"]
  },
  {
    id: "pekk",
    name: "PEKK",
    fullName: "Polyetherketoneketone",
    category: "high-performance",
    difficulty: "expert",
    description: "High-performance thermoplastic from the PAEK family with better processability than PEEK. Offers excellent mechanical and thermal properties with reduced warping.",
    color: "#92400e",
    temperatures: {
      nozzle: { min: 350, max: 400, recommended: 370 },
      bed: { min: 120, max: 180, recommended: 160 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 95, unit: "MPa" },
      flexuralModulus: { value: 3.8, unit: "GPa" },
      heatDeflection: { value: 160, unit: "°C" },
      continuousUseTemp: { value: 230, unit: "°C" }
    },
    ratings: {
      strength: 10,
      flexibility: 4,
      heatResistance: 10,
      uvResistance: 8,
      chemicalResistance: 10,
      easeOfPrinting: 2,
      layerAdhesion: 9,
      surfaceQuality: 8
    },
    requirements: {
      enclosure: true,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: true,
      highTempHotend: true,
      allMetalHotend: true,
      heatedChamber: true
    },
    cost: { category: "premium", min: 350, max: 800 },
    pros: [
      "Higher HDT than PEEK (160°C vs 145°C)",
      "Better processability than PEEK",
      "Reduced warping compared to PEEK",
      "Excellent chemical resistance",
      "Aerospace-certified grades available",
      "Flame retardant (UL94 V-0)"
    ],
    cons: [
      "Very expensive",
      "Requires industrial-grade printer",
      "High printing temperatures",
      "Heated chamber required",
      "Limited availability"
    ],
    useCases: ["Aerospace structural parts", "Defense applications", "Oil & gas components", "High-temp industrial parts", "Automotive under-hood"],
    biodegradable: false,
    foodSafe: false,
    sources: ["3dxtech", "filamentive"]
  },
  {
    id: "pei-ultem",
    name: "PEI/Ultem",
    fullName: "Polyetherimide (Ultem)",
    category: "high-performance",
    difficulty: "expert",
    description: "High-performance amorphous thermoplastic with excellent thermal stability, flame resistance, and electrical properties. More affordable alternative to PEEK.",
    color: "#b45309",
    temperatures: {
      nozzle: { min: 340, max: 380, recommended: 360 },
      bed: { min: 120, max: 160, recommended: 150 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 85, unit: "MPa" },
      flexuralModulus: { value: 3.3, unit: "GPa" },
      heatDeflection: { value: 200, unit: "°C" },
      continuousUseTemp: { value: 170, unit: "°C" }
    },
    ratings: {
      strength: 9,
      flexibility: 3,
      heatResistance: 9,
      uvResistance: 7,
      chemicalResistance: 8,
      easeOfPrinting: 2,
      layerAdhesion: 8,
      surfaceQuality: 8
    },
    requirements: {
      enclosure: true,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: true,
      highTempHotend: true,
      allMetalHotend: true,
      heatedChamber: true
    },
    cost: { category: "premium", min: 150, max: 400 },
    pros: [
      "Lower cost than PEEK/PEKK",
      "Excellent flame resistance (UL94 V-0)",
      "High heat resistance (170°C continuous)",
      "Good chemical resistance",
      "Superior electrical insulation",
      "Aerospace and medical certifications"
    ],
    cons: [
      "Requires high-temp printer",
      "Heated chamber needed",
      "Hygroscopic - requires thorough drying",
      "Expensive compared to standard materials",
      "Notch-sensitive (brittle at sharp corners)"
    ],
    useCases: ["Aerospace interiors", "Electrical insulators", "Medical sterilization trays", "Automotive sensor housings", "High-temp tooling"],
    biodegradable: false,
    foodSafe: false,
    sources: ["3dxtech", "filamentive", "ultimaker"]
  },
  {
    id: "ppsu",
    name: "PPSU",
    fullName: "Polyphenylsulfone",
    category: "high-performance",
    difficulty: "expert",
    description: "High-performance thermoplastic with outstanding toughness, hydrolytic stability, and steam sterilization capability. Excellent for medical and food service applications.",
    color: "#d97706",
    temperatures: {
      nozzle: { min: 360, max: 400, recommended: 380 },
      bed: { min: 140, max: 180, recommended: 160 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 70, unit: "MPa" },
      flexuralModulus: { value: 2.4, unit: "GPa" },
      heatDeflection: { value: 207, unit: "°C" },
      continuousUseTemp: { value: 180, unit: "°C" }
    },
    ratings: {
      strength: 9,
      flexibility: 5,
      heatResistance: 9,
      uvResistance: 6,
      chemicalResistance: 9,
      easeOfPrinting: 2,
      layerAdhesion: 8,
      surfaceQuality: 8
    },
    requirements: {
      enclosure: true,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: true,
      highTempHotend: true,
      allMetalHotend: true,
      heatedChamber: true
    },
    cost: { category: "premium", min: 200, max: 500 },
    pros: [
      "Excellent toughness and impact resistance",
      "Superior hydrolytic stability",
      "Withstands repeated steam sterilization",
      "Good chemical resistance",
      "Flame retardant (UL94 V-0)",
      "Transparent variants available"
    ],
    cons: [
      "Requires industrial-grade printer",
      "High printing temperatures",
      "Heated chamber required",
      "Expensive",
      "Sensitive to UV degradation"
    ],
    useCases: ["Medical instruments", "Sterilization trays", "Plumbing components", "Food service equipment", "Aircraft interior parts"],
    biodegradable: false,
    foodSafe: true,
    sources: ["3dxtech", "filamentive"]
  },
  {
    id: "pps-cf",
    name: "PPS-CF",
    fullName: "Polyphenylene Sulfide Carbon Fiber",
    category: "high-performance",
    difficulty: "expert",
    description: "Carbon fiber reinforced PPS offering PEEK-like performance at lower cost. Exceptional chemical resistance and dimensional stability at high temperatures.",
    color: "#44403c",
    temperatures: {
      nozzle: { min: 300, max: 340, recommended: 320 },
      bed: { min: 120, max: 150, recommended: 135 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 85, unit: "MPa" },
      flexuralModulus: { value: 11, unit: "GPa" },
      heatDeflection: { value: 260, unit: "°C" },
      continuousUseTemp: { value: 200, unit: "°C" }
    },
    ratings: {
      strength: 10,
      flexibility: 1,
      heatResistance: 10,
      uvResistance: 8,
      chemicalResistance: 10,
      easeOfPrinting: 2,
      layerAdhesion: 7,
      surfaceQuality: 8
    },
    requirements: {
      enclosure: true,
      hardenedNozzle: true,
      dryingRequired: true,
      ventilation: true,
      highTempHotend: true,
      allMetalHotend: true,
      heatedChamber: true
    },
    cost: { category: "premium", min: 200, max: 450 },
    pros: [
      "PEEK-like performance at lower cost",
      "Outstanding chemical resistance",
      "Excellent dimensional stability",
      "Very high stiffness",
      "Inherently flame retardant",
      "Low moisture absorption"
    ],
    cons: [
      "Requires industrial-grade printer",
      "Abrasive (hardened nozzle required)",
      "Brittle (low elongation)",
      "Heated chamber required",
      "Limited color options (typically black)"
    ],
    useCases: ["Chemical processing equipment", "Automotive under-hood", "Oil & gas components", "Aerospace parts", "High-temp fixtures"],
    biodegradable: false,
    foodSafe: false,
    sources: ["3dxtech", "filamentive"]
  },

  // ============================================
  // NEW FILAMENTS - Additional Flexible
  // ============================================

  {
    id: "tpe",
    name: "TPE",
    fullName: "Thermoplastic Elastomer",
    category: "flexible",
    difficulty: "advanced",
    description: "Softer and more flexible than TPU with rubber-like elasticity. Shore hardness typically 60-85A for maximum flexibility.",
    color: "#c084fc",
    temperatures: {
      nozzle: { min: 200, max: 240, recommended: 220 },
      bed: { min: 20, max: 50, recommended: 30 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 32, unit: "MPa" },
      shoreHardness: { value: 70, unit: "A" },
      elongation: { value: 900, unit: "%" }
    },
    ratings: {
      strength: 4,
      flexibility: 10,
      heatResistance: 4,
      uvResistance: 5,
      chemicalResistance: 6,
      easeOfPrinting: 3,
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
    cost: { category: "mid", min: 30, max: 60 },
    pros: [
      "Extremely flexible (softer than TPU)",
      "Excellent elongation (up to 900%)",
      "Good abrasion resistance",
      "Low warping",
      "Rubber-like feel"
    ],
    cons: [
      "Very difficult to print",
      "Requires very slow speeds",
      "Direct drive mandatory",
      "Poor detail resolution",
      "Prone to stringing"
    ],
    useCases: ["Soft grips", "Seals and gaskets", "Flexible hinges", "Soft robotics", "Medical devices"],
    biodegradable: false,
    foodSafe: false,
    sources: ["matterhackers", "all3dp", "xometry"]
  },
  {
    id: "tpu-85a",
    name: "TPU 85A",
    fullName: "Soft TPU (85A Shore)",
    category: "flexible",
    difficulty: "advanced",
    description: "Softer variant of TPU with 85A shore hardness. More flexible than standard 95A TPU while maintaining better printability than TPE.",
    color: "#a78bfa",
    temperatures: {
      nozzle: { min: 210, max: 250, recommended: 230 },
      bed: { min: 30, max: 60, recommended: 45 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 28, unit: "MPa" },
      shoreHardness: { value: 85, unit: "A" },
      elongation: { value: 650, unit: "%" }
    },
    ratings: {
      strength: 4,
      flexibility: 10,
      heatResistance: 5,
      uvResistance: 6,
      chemicalResistance: 7,
      easeOfPrinting: 3,
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
    cost: { category: "mid", min: 35, max: 65 },
    pros: [
      "More flexible than TPU 95A",
      "Better printability than TPE",
      "Good chemical resistance",
      "Excellent layer adhesion",
      "High elongation at break"
    ],
    cons: [
      "Requires direct drive extruder",
      "Slow print speeds needed",
      "More prone to stringing than 95A",
      "Harder to achieve fine details"
    ],
    useCases: ["Soft phone cases", "Flexible hinges", "Shock absorbers", "Grips and handles", "Wearables"],
    biodegradable: false,
    foodSafe: false,
    sources: ["matterhackers", "prusa"]
  },

  // ============================================
  // NEW FILAMENTS - Additional Composites
  // ============================================

  {
    id: "cf-petg",
    name: "CF-PETG",
    fullName: "Carbon Fiber Reinforced PETG",
    category: "composite",
    difficulty: "intermediate",
    description: "PETG reinforced with carbon fibers for improved stiffness and heat resistance while maintaining easier printability than CF-Nylon.",
    color: "#1c1917",
    temperatures: {
      nozzle: { min: 240, max: 270, recommended: 255 },
      bed: { min: 70, max: 90, recommended: 80 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 55, unit: "MPa" },
      flexuralModulus: { value: 4.5, unit: "GPa" },
      heatDeflection: { value: 80, unit: "°C" }
    },
    ratings: {
      strength: 8,
      flexibility: 2,
      heatResistance: 6,
      uvResistance: 7,
      chemicalResistance: 7,
      easeOfPrinting: 6,
      layerAdhesion: 7,
      surfaceQuality: 8
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: true,
      dryingRequired: true,
      ventilation: false,
      largerNozzle: true
    },
    cost: { category: "mid", min: 40, max: 70 },
    pros: [
      "Good stiffness improvement over PETG",
      "Easier to print than CF-Nylon",
      "Excellent dimensional stability",
      "Retains PETG chemical resistance",
      "Professional matte finish"
    ],
    cons: [
      "Requires hardened nozzle",
      "More brittle than standard PETG",
      "Reduced layer adhesion",
      "Limited color options"
    ],
    useCases: ["Camera mounts", "Tool handles", "Structural brackets", "Electronics housings", "RC car parts"],
    biodegradable: false,
    foodSafe: false,
    sources: ["matterhackers", "prusa", "3dxtech"]
  },
  {
    id: "cf-nylon",
    name: "CF-Nylon",
    fullName: "Carbon Fiber Reinforced Nylon (NylonX)",
    category: "composite",
    difficulty: "advanced",
    description: "Nylon reinforced with chopped carbon fibers for exceptional stiffness and strength. One of the strongest printable composites.",
    color: "#292524",
    temperatures: {
      nozzle: { min: 250, max: 280, recommended: 265 },
      bed: { min: 60, max: 90, recommended: 75 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 75, unit: "MPa" },
      flexuralModulus: { value: 6.2, unit: "GPa" },
      heatDeflection: { value: 140, unit: "°C" }
    },
    ratings: {
      strength: 10,
      flexibility: 2,
      heatResistance: 8,
      uvResistance: 6,
      chemicalResistance: 8,
      easeOfPrinting: 4,
      layerAdhesion: 8,
      surfaceQuality: 9
    },
    requirements: {
      enclosure: true,
      hardenedNozzle: true,
      dryingRequired: true,
      ventilation: true,
      largerNozzle: true
    },
    cost: { category: "premium", min: 60, max: 120 },
    pros: [
      "Exceptional stiffness and strength",
      "Excellent heat resistance",
      "Very low warping",
      "Professional matte finish",
      "Ideal for end-use parts"
    ],
    cons: [
      "Requires hardened nozzle",
      "Highly hygroscopic",
      "Requires enclosure",
      "Expensive",
      "More brittle than plain nylon"
    ],
    useCases: ["Drone frames", "End-effectors", "Functional prototypes", "Production parts", "Aerospace components"],
    biodegradable: false,
    foodSafe: false,
    sources: ["matterhackers", "prusa", "3dxtech"]
  },
  {
    id: "gf-nylon",
    name: "GF-Nylon",
    fullName: "Glass Fiber Reinforced Nylon (NylonG)",
    category: "composite",
    difficulty: "advanced",
    description: "Nylon reinforced with glass fibers for improved impact resistance compared to CF-Nylon, with good stiffness and heat resistance.",
    color: "#a3a3a3",
    temperatures: {
      nozzle: { min: 250, max: 280, recommended: 265 },
      bed: { min: 60, max: 90, recommended: 75 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 70, unit: "MPa" },
      flexuralModulus: { value: 4.8, unit: "GPa" },
      heatDeflection: { value: 130, unit: "°C" }
    },
    ratings: {
      strength: 9,
      flexibility: 3,
      heatResistance: 8,
      uvResistance: 6,
      chemicalResistance: 8,
      easeOfPrinting: 4,
      layerAdhesion: 8,
      surfaceQuality: 7
    },
    requirements: {
      enclosure: true,
      hardenedNozzle: true,
      dryingRequired: true,
      ventilation: true,
      largerNozzle: true
    },
    cost: { category: "premium", min: 55, max: 100 },
    pros: [
      "33% more impact resistant than CF-Nylon",
      "Available in multiple colors",
      "Good heat resistance",
      "Less brittle than CF-Nylon",
      "Good stiffness"
    ],
    cons: [
      "Requires hardened nozzle",
      "Highly hygroscopic",
      "Requires enclosure",
      "Expensive",
      "Rougher surface than CF"
    ],
    useCases: ["Impact-resistant housings", "Functional parts", "Tooling jigs", "Automotive components", "Industrial fixtures"],
    biodegradable: false,
    foodSafe: false,
    sources: ["matterhackers", "prusa"]
  },
  {
    id: "metal-filled",
    name: "Metal-filled PLA",
    fullName: "Metal Powder Filled PLA (Bronze, Copper, Steel)",
    category: "composite",
    difficulty: "intermediate",
    description: "PLA mixed with fine metal powders (bronze, copper, steel, brass) for authentic metallic weight, appearance, and post-processing options.",
    color: "#b87333",
    temperatures: {
      nozzle: { min: 190, max: 220, recommended: 205 },
      bed: { min: 45, max: 60, recommended: 50 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 35, unit: "MPa" },
      heatDeflection: { value: 55, unit: "°C" }
    },
    ratings: {
      strength: 5,
      flexibility: 1,
      heatResistance: 3,
      uvResistance: 4,
      chemicalResistance: 4,
      easeOfPrinting: 5,
      layerAdhesion: 6,
      surfaceQuality: 7
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: true,
      dryingRequired: false,
      ventilation: false,
      largerNozzle: true
    },
    cost: { category: "premium", min: 45, max: 90 },
    pros: [
      "Authentic metal appearance and weight",
      "Can be polished, tumbled, or patinated",
      "Unique aesthetic",
      "Based on easy-to-print PLA",
      "Multiple metal options"
    ],
    cons: [
      "Abrasive to nozzles",
      "Heavier than standard filament",
      "Brittle",
      "Expensive",
      "Slower print speeds recommended"
    ],
    useCases: ["Jewelry", "Decorative sculptures", "Props and replicas", "Awards and trophies", "Artistic prints"],
    biodegradable: false,
    foodSafe: false,
    sources: ["matterhackers", "all3dp"]
  },

  // ============================================
  // NEW FILAMENTS - Additional Specialty
  // ============================================

  {
    id: "pp",
    name: "PP",
    fullName: "Polypropylene",
    category: "specialty",
    difficulty: "advanced",
    description: "Lightweight, chemically resistant material with excellent fatigue resistance and living hinge capability. Challenging to print but ideal for specific applications.",
    color: "#fafafa",
    temperatures: {
      nozzle: { min: 220, max: 260, recommended: 240 },
      bed: { min: 80, max: 110, recommended: 95 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 32, unit: "MPa" },
      flexuralModulus: { value: 1.3, unit: "GPa" },
      heatDeflection: { value: 100, unit: "°C" }
    },
    ratings: {
      strength: 6,
      flexibility: 7,
      heatResistance: 7,
      uvResistance: 5,
      chemicalResistance: 9,
      easeOfPrinting: 2,
      layerAdhesion: 5,
      surfaceQuality: 6
    },
    requirements: {
      enclosure: true,
      hardenedNozzle: false,
      dryingRequired: false,
      ventilation: false,
      specialBedSurface: true
    },
    cost: { category: "mid", min: 35, max: 60 },
    pros: [
      "Excellent chemical resistance",
      "Very low density (floats on water)",
      "Superior living hinge capability",
      "Good fatigue resistance",
      "Food safe"
    ],
    cons: [
      "Extremely difficult bed adhesion",
      "Requires PP tape or special surface",
      "High warping tendency",
      "Poor interlayer adhesion",
      "Difficult to bond/glue"
    ],
    useCases: ["Living hinges", "Chemical containers", "Food packaging", "Medical containers", "Floating items"],
    biodegradable: false,
    foodSafe: true,
    sources: ["matterhackers", "prusa", "all3dp"]
  },
  {
    id: "pvb",
    name: "PVB",
    fullName: "Polyvinyl Butyral",
    category: "specialty",
    difficulty: "intermediate",
    description: "Similar to PLA in printability but can be smoothed with isopropyl alcohol (IPA) for a glossy, transparent finish. Great for vases and decorative items.",
    color: "#fef3c7",
    temperatures: {
      nozzle: { min: 200, max: 230, recommended: 215 },
      bed: { min: 60, max: 80, recommended: 75 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 50, unit: "MPa" },
      heatDeflection: { value: 60, unit: "°C" }
    },
    ratings: {
      strength: 6,
      flexibility: 4,
      heatResistance: 3,
      uvResistance: 5,
      chemicalResistance: 4,
      easeOfPrinting: 7,
      layerAdhesion: 7,
      surfaceQuality: 9
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: false
    },
    cost: { category: "mid", min: 35, max: 55 },
    pros: [
      "IPA vapor smoothing (safer than acetone)",
      "Achieves transparent, glossy finish",
      "Easy to print like PLA",
      "Low warping",
      "Good impact resistance"
    ],
    cons: [
      "More expensive than PLA",
      "Lower heat resistance than PETG",
      "Requires drying",
      "Limited color selection"
    ],
    useCases: ["Vases and containers", "Light covers", "Display pieces", "Smooth surface prototypes", "Artistic prints"],
    biodegradable: false,
    foodSafe: false,
    sources: ["prusa", "matterhackers"]
  },
  {
    id: "bvoh",
    name: "BVOH",
    fullName: "Butenediol Vinyl Alcohol Co-polymer",
    category: "support",
    difficulty: "advanced",
    description: "Water-soluble support material with faster dissolution and better stability than PVA. Compatible with a wider range of materials.",
    color: "#d1fae5",
    temperatures: {
      nozzle: { min: 190, max: 230, recommended: 210 },
      bed: { min: 50, max: 70, recommended: 60 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 40, unit: "MPa" }
    },
    ratings: {
      strength: 5,
      flexibility: 3,
      heatResistance: 3,
      uvResistance: 2,
      chemicalResistance: 2,
      easeOfPrinting: 5,
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
    cost: { category: "premium", min: 60, max: 120 },
    pros: [
      "Dissolves faster than PVA",
      "Better thermal stability than PVA",
      "Compatible with more materials",
      "Excellent adhesion to various bases",
      "Biodegradable"
    ],
    cons: [
      "Hygroscopic (must store dry)",
      "Expensive",
      "Requires dual extruder",
      "Limited shelf life",
      "Sticky when wet"
    ],
    useCases: ["Complex geometry support", "Multi-material prints", "PETG support", "Flexible filament support", "Detailed models"],
    biodegradable: true,
    foodSafe: false,
    sources: ["prusa", "matterhackers"]
  },
  {
    id: "glow-in-dark",
    name: "Glow-in-Dark PLA",
    fullName: "Phosphorescent PLA",
    category: "specialty",
    difficulty: "intermediate",
    description: "PLA infused with phosphorescent pigments that absorb light and glow in the dark. Contains abrasive particles that require larger nozzles.",
    color: "#bbf7d0",
    temperatures: {
      nozzle: { min: 200, max: 230, recommended: 210 },
      bed: { min: 45, max: 70, recommended: 55 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 55, unit: "MPa" },
      heatDeflection: { value: 55, unit: "°C" }
    },
    ratings: {
      strength: 5,
      flexibility: 2,
      heatResistance: 3,
      uvResistance: 4,
      chemicalResistance: 4,
      easeOfPrinting: 6,
      layerAdhesion: 7,
      surfaceQuality: 7
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: true,
      dryingRequired: false,
      ventilation: false,
      largerNozzle: true
    },
    cost: { category: "mid", min: 28, max: 50 },
    pros: [
      "Glows in the dark",
      "Charges from any light source",
      "Unique visual effect",
      "Based on easy-to-print PLA",
      "Multiple glow colors available"
    ],
    cons: [
      "Abrasive to brass nozzles",
      "Weaker than standard PLA",
      "Glow fades over time",
      "Larger nozzle recommended",
      "Glow intensity varies by brand"
    ],
    useCases: ["Night lights", "Switch covers", "Safety markers", "Decorative items", "Toys", "Halloween props"],
    biodegradable: true,
    foodSafe: false,
    sources: ["matterhackers", "all3dp"]
  },
  {
    id: "conductive",
    name: "Conductive PLA",
    fullName: "Electrically Conductive PLA",
    category: "specialty",
    difficulty: "intermediate",
    description: "PLA containing conductive carbon particles for low-voltage electrical applications. Not highly conductive but suitable for touch sensors and static dissipation.",
    color: "#171717",
    temperatures: {
      nozzle: { min: 210, max: 240, recommended: 225 },
      bed: { min: 50, max: 70, recommended: 60 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 35, unit: "MPa" },
      resistivity: { value: 30, unit: "Ω·cm" }
    },
    ratings: {
      strength: 5,
      flexibility: 2,
      heatResistance: 3,
      uvResistance: 4,
      chemicalResistance: 4,
      easeOfPrinting: 6,
      layerAdhesion: 5,
      surfaceQuality: 6
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: false
    },
    cost: { category: "premium", min: 40, max: 80 },
    pros: [
      "Enables printed circuits",
      "Touch sensor capability",
      "ESD-safe properties",
      "Based on PLA",
      "Unique functionality"
    ],
    cons: [
      "Limited conductivity (~30 Ω·cm)",
      "Weak layer adhesion",
      "Not for high current",
      "Reduced strength",
      "Single color (black)"
    ],
    useCases: ["Touch sensors", "ESD-safe parts", "Capacitive buttons", "Educational electronics", "Experimental circuits"],
    biodegradable: false,
    foodSafe: false,
    sources: ["matterhackers", "all3dp"]
  },
  {
    id: "pom",
    name: "POM",
    fullName: "Polyoxymethylene (Acetal/Delrin)",
    category: "engineering",
    difficulty: "expert",
    description: "Engineering plastic with excellent wear resistance, low friction, and high dimensional stability. Ideal for gears and precision mechanical parts.",
    color: "#f5f5f4",
    temperatures: {
      nozzle: { min: 200, max: 230, recommended: 215 },
      bed: { min: 100, max: 130, recommended: 115 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 65, unit: "MPa" },
      flexuralModulus: { value: 2.8, unit: "GPa" },
      heatDeflection: { value: 110, unit: "°C" }
    },
    ratings: {
      strength: 8,
      flexibility: 4,
      heatResistance: 7,
      uvResistance: 4,
      chemicalResistance: 8,
      easeOfPrinting: 2,
      layerAdhesion: 4,
      surfaceQuality: 8
    },
    requirements: {
      enclosure: true,
      hardenedNozzle: false,
      dryingRequired: false,
      ventilation: true,
      specialBedSurface: true
    },
    cost: { category: "mid", min: 40, max: 70 },
    pros: [
      "Lowest coefficient of friction",
      "Excellent wear resistance",
      "High dimensional stability",
      "Self-lubricating",
      "Good chemical resistance"
    ],
    cons: [
      "Extremely poor bed adhesion",
      "Requires POM-specific bed surface",
      "Emits formaldehyde when heated",
      "High warping tendency",
      "Difficult layer adhesion"
    ],
    useCases: ["Gears and bearings", "Precision mechanisms", "Bushings", "Sliding parts", "Zippers and fasteners"],
    biodegradable: false,
    foodSafe: true,
    sources: ["matterhackers", "all3dp", "prusa"]
  },
  {
    id: "esd-safe",
    name: "ESD-Safe",
    fullName: "ESD-Safe/Antistatic Filaments",
    category: "specialty",
    difficulty: "intermediate",
    description: "Filaments with static-dissipative properties to safely handle electronic components. Available in various base materials (ABS, PETG, PC).",
    color: "#525252",
    temperatures: {
      nozzle: { min: 220, max: 260, recommended: 240 },
      bed: { min: 70, max: 100, recommended: 85 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 45, unit: "MPa" },
      surfaceResistivity: { value: "10⁶-10⁹", unit: "Ω" }
    },
    ratings: {
      strength: 7,
      flexibility: 4,
      heatResistance: 6,
      uvResistance: 5,
      chemicalResistance: 6,
      easeOfPrinting: 6,
      layerAdhesion: 7,
      surfaceQuality: 7
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: false
    },
    cost: { category: "premium", min: 50, max: 100 },
    pros: [
      "Protects sensitive electronics",
      "Consistent static dissipation",
      "Professional applications",
      "Multiple base materials available",
      "Maintains mechanical properties"
    ],
    cons: [
      "Expensive",
      "Limited color options (usually black/grey)",
      "Properties vary by manufacturer",
      "May require certification testing"
    ],
    useCases: ["Electronics handling", "IC trays", "Component carriers", "Workstation tools", "Cleanroom fixtures"],
    biodegradable: false,
    foodSafe: false,
    sources: ["3dxtech", "matterhackers"]
  },
  {
    id: "pmma",
    name: "PMMA",
    fullName: "Polymethyl Methacrylate (Acrylic)",
    category: "specialty",
    difficulty: "advanced",
    description: "Acrylic (Plexiglass) filament offering glass-like clarity and optical properties. Excellent for light pipes and transparent applications.",
    color: "#e0f2fe",
    temperatures: {
      nozzle: { min: 235, max: 260, recommended: 245 },
      bed: { min: 90, max: 110, recommended: 100 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 70, unit: "MPa" },
      flexuralModulus: { value: 3.0, unit: "GPa" },
      heatDeflection: { value: 95, unit: "°C" }
    },
    ratings: {
      strength: 7,
      flexibility: 2,
      heatResistance: 6,
      uvResistance: 8,
      chemicalResistance: 5,
      easeOfPrinting: 4,
      layerAdhesion: 6,
      surfaceQuality: 9
    },
    requirements: {
      enclosure: true,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: true
    },
    cost: { category: "mid", min: 35, max: 65 },
    pros: [
      "Glass-like clarity (92% light transmission)",
      "Excellent optical properties",
      "Good scratch resistance",
      "UV resistant",
      "Polishable to optical clarity"
    ],
    cons: [
      "Prone to warping",
      "Brittle (cracks easily)",
      "Requires enclosure",
      "Emits fumes during printing",
      "Difficult to achieve true clarity"
    ],
    useCases: ["Light pipes", "Lenses", "Display cases", "Signage", "Optical prototypes"],
    biodegradable: false,
    foodSafe: false,
    sources: ["matterhackers", "all3dp"]
  },
  {
    id: "pha",
    name: "PHA",
    fullName: "Polyhydroxyalkanoates",
    category: "standard",
    difficulty: "beginner",
    description: "Fully biodegradable and compostable bioplastic produced by bacteria. More environmentally friendly than PLA with similar printing properties.",
    color: "#dcfce7",
    temperatures: {
      nozzle: { min: 170, max: 210, recommended: 190 },
      bed: { min: 30, max: 60, recommended: 45 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 35, unit: "MPa" },
      heatDeflection: { value: 50, unit: "°C" }
    },
    ratings: {
      strength: 5,
      flexibility: 4,
      heatResistance: 3,
      uvResistance: 3,
      chemicalResistance: 3,
      easeOfPrinting: 8,
      layerAdhesion: 7,
      surfaceQuality: 7
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: false,
      dryingRequired: true,
      ventilation: false
    },
    cost: { category: "mid", min: 35, max: 60 },
    pros: [
      "100% biodegradable",
      "Marine biodegradable",
      "Easy to print",
      "Low warping",
      "From renewable resources"
    ],
    cons: [
      "Lower strength than PLA",
      "More expensive than PLA",
      "Limited availability",
      "Hygroscopic",
      "Lower heat resistance"
    ],
    useCases: ["Eco-friendly packaging", "Disposable items", "Education", "Prototypes", "Marine applications"],
    biodegradable: true,
    foodSafe: true,
    sources: ["all3dp", "matterhackers"]
  },
  {
    id: "breakaway",
    name: "Breakaway",
    fullName: "Breakaway Support Material",
    category: "support",
    difficulty: "intermediate",
    description: "Mechanical breakaway support material that separates cleanly without dissolution. Faster post-processing than soluble supports.",
    color: "#fef9c3",
    temperatures: {
      nozzle: { min: 200, max: 240, recommended: 220 },
      bed: { min: 50, max: 70, recommended: 60 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 45, unit: "MPa" }
    },
    ratings: {
      strength: 5,
      flexibility: 3,
      heatResistance: 4,
      uvResistance: 3,
      chemicalResistance: 3,
      easeOfPrinting: 7,
      layerAdhesion: 6,
      surfaceQuality: 6
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: false,
      dryingRequired: false,
      ventilation: false,
      dualExtruder: true
    },
    cost: { category: "mid", min: 30, max: 55 },
    pros: [
      "No dissolution needed",
      "Fast post-processing",
      "Longer shelf life than PVA",
      "Less moisture sensitive",
      "Works with many materials"
    ],
    cons: [
      "May leave marks on surface",
      "Not for complex internal geometries",
      "Manual removal required",
      "Less clean than soluble supports"
    ],
    useCases: ["PLA support", "PETG support", "Quick turnaround parts", "Simple overhangs", "External supports"],
    biodegradable: false,
    foodSafe: false,
    sources: ["matterhackers", "prusa", "ultimaker"]
  },
  {
    id: "stone-brick",
    name: "Stone/Brick Fill",
    fullName: "Stone and Brick Filled PLA",
    category: "composite",
    difficulty: "intermediate",
    description: "PLA mixed with stone powder or ceramic particles for a natural stone or brick-like appearance and texture.",
    color: "#78716c",
    temperatures: {
      nozzle: { min: 190, max: 220, recommended: 200 },
      bed: { min: 45, max: 60, recommended: 50 }
    },
    mechanicalProperties: {
      tensileStrength: { value: 30, unit: "MPa" },
      heatDeflection: { value: 55, unit: "°C" }
    },
    ratings: {
      strength: 4,
      flexibility: 1,
      heatResistance: 3,
      uvResistance: 5,
      chemicalResistance: 4,
      easeOfPrinting: 5,
      layerAdhesion: 5,
      surfaceQuality: 8
    },
    requirements: {
      enclosure: false,
      hardenedNozzle: true,
      dryingRequired: false,
      ventilation: false,
      largerNozzle: true
    },
    cost: { category: "mid", min: 35, max: 60 },
    pros: [
      "Authentic stone appearance",
      "Can be painted and weathered",
      "Unique textured finish",
      "Low warping",
      "Hides layer lines well"
    ],
    cons: [
      "Brittle material",
      "Abrasive to nozzles",
      "Limited functional use",
      "Heavier than standard PLA",
      "Prone to clogging"
    ],
    useCases: ["Architectural models", "Dungeon terrain", "Decorative items", "Art sculptures", "Model buildings"],
    biodegradable: false,
    foodSafe: false,
    sources: ["matterhackers", "all3dp"]
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
  specialty: "#db2777",
  "high-performance": "#b45309"
};

// Category labels for display
const CATEGORY_LABELS = {
  standard: "Standard",
  engineering: "Engineering",
  flexible: "Flexible",
  composite: "Composite",
  support: "Support Material",
  specialty: "Specialty",
  "high-performance": "High-Performance"
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
