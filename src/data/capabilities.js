import {
  Truck,
  Route,
  Flame,
  Boxes,
  Cog,
  Recycle,
  Cpu,
  FlaskConical,
  Wrench,
  Factory,
} from "lucide-react";

export const capabilities = [
  {
    id: "concrete-asphalt",
    number: "01",
    icon: Factory,
    motif: "silos",
    image: "/images/Ryetek Concrete.png",
    title: "Concrete & Asphalt",
    accent: "Plant Solutions",
    summary:
      "Engineered systems for ready-mix concrete and asphalt production. Built for Australian conditions.",
    description:
      "Ryetek delivers reliable, high-performance equipment and complete plant solutions with local support, practical engineering and a focus on uptime, safety and long-term value.",
    groups: [
      {
        icon: Truck,
        title: "Concrete Plant Solutions",
        items: [
          "Supply of mixers, conveyors and fully integrated systems",
          "Custom configured plants to suit your process",
          "Reliable equipment for ready-mix and precast applications",
          "Built for performance, serviceability and safety",
        ],
      },
      {
        icon: Route,
        title: "Asphalt Plant Solutions",
        items: [
          "Retrofitting and upgrades to existing plants",
          "Upgrades of dryers, mixers, bag house filters and burners",
          "Custom storage solutions for bitumen and materials",
          "Controls & automation upgrades and new systems",
          "Supply of parts and components",
          "Complete custom designed equipment to meet your specific needs",
        ],
      },
    ],
    slides: [
      { title: "Concrete Batching Plant & Silos", subtitle: "High-Capacity Storage Silos & Transit Batching Tower", image: "/images/Ryetek Concrete.png", tag: "Concrete Plant" },
      { title: "Asphalt Production Plant", subtitle: "Illuminated Asphalt Drum, Tower & Bitumen Storage", image: "/images/Ryetek Asphalt plant.png", tag: "Asphalt Plant" },
      { title: "Elevating Plant Systems", subtitle: "Integrated Elevator & Material Flow", image: "/images/materials/elevator-plant.png", tag: "Plant System" },
    ],
    highlights: [
      { title: "Engineered Solutions", body: "Designed and built to suit your materials, capacity and site conditions." },
      { title: "Built for Australia", body: "Australian-facing design standards, documentation and local support." },
      { title: "Focus on Uptime", body: "Reliable equipment, smart engineering and fast support." },
      { title: "Partner Approach", body: "From concept to commissioning and beyond, we are with you all the way." },
    ],
    faqs: [
      { q: "Can Ryetek upgrade an existing asphalt plant without replacing the whole plant?", a: "Yes, where the existing equipment and structure remain suitable. The first step is to identify the actual bottleneck, condition, interfaces and control limitations before deciding what should be retained or replaced." },
      { q: "Does Ryetek supply complete plants or individual equipment?", a: "The scope can range from a mixer, conveyor, silo or control upgrade to a coordinated plant package, depending on the project requirement and agreed responsibilities." }
    ],
  },
  {
    id: "bitumen-storage",
    number: "02",
    icon: Boxes,
    motif: "tanks",
    image: "/images/CAPABILITIES/bitumen1.png",
    title: "Bitumen Storage",
    accent: "Systems",
    summary:
      "Hot-material systems for asphalt plants, depots, mobile operations and road construction projects.",
    description:
      "Australia's asphalt market needs rugged equipment that can manage heat, flow, safety and remote operating conditions. Ryetek delivers engineered modules for binder storage, transfer, recycling, plant upgrades and site-ready support packages.",
    groups: [
      {
        icon: Boxes,
        title: "What Ryetek Can Offer",
        items: [
          "Heated bitumen and binder storage tanks in vertical, horizontal or contained formats",
          "Drying drums, screens, bag house filters, storage systems and plant upgrades",
          "Thermal oil, electric, diesel or hybrid heating concepts subject to duty",
          "RAP handling, transfer conveyors, feed bins and recycling interfaces",
          "Controls upgrade and/or complete retrofit to suit user requirements",
        ],
      },
    ],
    slides: [
      { title: "Vertical Storage Tanks", subtitle: "Heated Binder Storage & Piping Manifold", image: "/images/CAPABILITIES/bitumen1.png", tag: "Storage Manifold" },
      { title: "Thermal Oil Skid Package", subtitle: "Circulation Pump Skid & Heat Exchanger", image: "/images/CAPABILITIES/bitumen2.png", tag: "Thermal Skid" },
      { title: "Vertical Tanks & Access Catwalk", subtitle: "Safety Railings & Access Catwalk", image: "/images/CAPABILITIES/bitumen3.png", tag: "Storage Tanks" },
    ],
    highlights: [
      { title: "Thermal Stability", body: "Engineered layouts help maintain binder condition and create flow." },
      { title: "Safe Operation", body: "Operator-facing layouts can reduce operational exposure and waste service access." },
      { title: "Plant Upgrades", body: "Retrofit-friendly packages for depots, mobile asphalt plants and fuel bottles." },
      { title: "Remote Support", body: "Telemetry, alarm logic and planned spare can support regional questions." },
    ],
    faqs: [
      { q: "Which heating method is best for a bitumen tank?", a: "The answer depends on binder, tank size, heat-up time, standby duty, energy availability, maintenance capability and local requirements, selected on a heat-duty basis rather than a generic preference." },
      { q: "Are all bitumen tanks pressure vessels?", a: "No. The applicable design standard depends on the actual operating pressure and equipment configuration. Project-specific engineering must determine the correct standard and hazard classification." }
    ],
  },
  {
    id: "process-systems",
    number: "03",
    icon: FlaskConical,
    motif: "tanks",
    image: "/images/CAPABILITIES/industrial process 1.png",
    title: "Industrial Process",
    accent: "Systems",
    summary:
      "Integrated process equipment packages built around throughput, material behaviour and operating reliability.",
    description:
      "For industrial buyers, a reliable system is more than a set of machines. Ryetek defines the full process path: feed, heat, mix, dose, store, transfer, control and maintain, so the equipment works as one practical package.",
    groups: [
      {
        icon: FlaskConical,
        title: "What Ryetek Can Offer",
        items: [
          "Mixing, drying, heating, dosing, storage and conveying packages",
          "Modular process skids, equipment modules and plant sub-systems",
          "Mechanical layout coordination, access planning and service geometry",
          "Material-contact surfaces, wear liners, insulation, gages and feeders",
          "Testing support, commissioning inputs and project documentation",
        ],
      },
    ],
    slides: [
      { title: "Stainless Process Vessels", subtitle: "Modular Distillation & Skid Pipework", image: "/images/CAPABILITIES/industrial process 1.png", tag: "Process Vessels" },
      { title: "Integrated Process Skid", subtitle: "Modular Equipment & Pipework Frame", image: "/images/CAPABILITIES/industrial process 2.png", tag: "Process Skid" },
      { title: "Material Processing Unit", subtitle: "Batching, Mixing & Transformation Unit", image: "/images/CAPABILITIES/industrial process3.png", tag: "Transformation Unit" },
      // { title: "Contact Liners & Assemblies", subtitle: "Sacrificial Bars & Chute Protection", image: "/images/materials/sacrificial-inserts.png", tag: "Wear Protection" },
    ],
    highlights: [
      { title: "System Thinking", body: "Equipment is scoped as a working process, not as isolated fabricated items." },
      { title: "Maintenance Access", body: "Layouts consider cleaning, inspection, service clearances and real plant behavior." },
      { title: "Performance Logic", body: "Throughput, residence time, heating load and material flow are considered early." },
      { title: "Practical Integration", body: "Mechanical interfaces, instrumentation and controls are planned together." },
    ],
    faqs: [
      { q: "How do you choose between batch and continuous mixing?", a: "The choice depends on recipe variation, traceability, production pattern, residence time, control requirement and how upstream and downstream equipment operate." },
      { q: "Can an existing mixer be upgraded?", a: "Potentially. The condition, drive, structure, liners, shaft/seal arrangement, controls and process bottleneck must be assessed before the scope is defined." }
    ],
  },
  {
    id: "thermal-systems",
    number: "04",
    icon: Flame,
    motif: "drum",
    image: "/images/CAPABILITIES/Thermal1.png",
    title: "Thermal",
    accent: "Systems",
    summary:
      "Industrial heating and drying systems for controlled heat transfer, energy use and uptime.",
    description:
      "Thermal equipment has to balance output, safety, heat loss, controls, service access and operating cost. Ryetek delivers engineered thermal systems selected around duty, not generic catalogue assumptions.",
    groups: [
      {
        icon: Flame,
        title: "What Ryetek Can Offer",
        items: [
          "Industrial dryers including paddle, bed, conveyor and rotary configurations",
          "Thermic fluid heaters, hot-oil skids, pumps, expansion tanks and controls",
          "Industrial ovens, furnaces and controlled process heat chambers",
          "Process heating tanks, insulated storage tanks and skid-mounted heaters",
          "Waste heat recovery systems, ducting, bypasses and integration packages",
        ],
      },
    ],
    slides: [
      { title: "Baghouse Filter & Dust Extraction", subtitle: "Green Industrial Filtration Tower & Pulse-Jet System", image: "/images/Ryetek bag house filter.png", tag: "Dust Extraction" },
      { title: "Rotary Dryer Drum System", subtitle: "Controlled Process Drying & Heat Transfer", image: "/images/CAPABILITIES/Thermal1.png", tag: "Rotary Dryer" },
      { title: "Thermic Fluid Heater Package", subtitle: "Circulation Skid & Heat Exchanger", image: "/images/CAPABILITIES/Thermal2.png", tag: "Thermic Fluid" },
      { title: "Drum Internals & CFD Flights", subtitle: "Material Curtain & Moisture Removal", image: "/images/CAPABILITIES/Thermal3.png", tag: "Internal Flighting" },
    ],
    highlights: [
      { title: "Duty-based design", body: "Every system is selected around process lead-operating temperature and site reality." },
      { title: "Energy discipline", body: "Insulation, controls and every option reduce wasted heat where practical." },
      { title: "Safety by layout", body: "Combustion, hot-oil, electrical and access risks are addressed in the project pathway." },
      { title: "Serviceability", body: "Burners, pumps, valves, controls and instrumentation are arranged for maintenance." },
    ],
    faqs: [
      { q: "How is an industrial dryer selected?", a: "Selection begins with the material, required heat and mass transfer, residence time, product sensitivity, dust behaviour, available energy and maintenance requirements. Capacity alone is not enough." },
      { q: "Can waste heat be used?", a: "Potentially. The temperature, flow, contamination, variability and availability of the heat source must be assessed against the process duty and controls required." }
    ],
  },
  {
    id: "material-handling",
    number: "05",
    icon: Boxes,
    motif: "conveyor",
    image: "/images/Ryetek cold feed bins.png",
    title: "Material Handling",
    accent: "& Storage",
    summary:
      "Bulk material movement and storage systems for aggregates, powders, recycled material and industrial solids.",
    description:
      "Material handling failures create downtime, spillage, dust, segregation and safety issues. Ryetek supports systems selected around material flow, site layout, maintenance access and Australian operating expectations.",
    groups: [
      {
        icon: Boxes,
        title: "What Ryetek Can Offer",
        items: [
          "Belt conveyors, drag conveyors, screw conveyors and transfer conveyors",
          "Bucket elevators, feeders, transfer chutes and discharge arrangements",
          "Silos, bins, hoppers, surge bins, live-bottom arrangements and gates",
          "Dust interfaces, liners, access platforms, inspection points and guards",
          "Aggregate, cement, fines, minerals, RAP, sand and process material applications",
        ],
      },
    ],
    slides: [
      { title: "Multi-Compartment Cold Feed Bins", subtitle: "Aggregate Feeder Bins & Variable Speed Belt Feeders", image: "/images/Ryetek cold feed bins.png", tag: "Feeder Bins" },
      { title: "Heavy-Duty Belt Conveyor", subtitle: "Bulk Material Transfer & Storage", image: "/images/CAPABILITIES/Material Handling 2.png", tag: "Conveyor System" },
      { title: "Bucket Elevator & Drag Conveyor", subtitle: "Vertical Transport & Elevating Towers", image: "/images/CAPABILITIES/Material hadnling 1.png", tag: "Elevator Towers" },
      { title: "Surge Hoppers & Storage Silos", subtitle: "Live-Bottom Discharge Gates", image: "/images/CAPABILITIES/Material handling 3.png", tag: "Storage Silos" },
    ],
    highlights: [
      { title: "Flow Reliability", body: "Geometry can be planned around angle of repose, moisture, fines, stickiness and abrasion." },
      { title: "Uptime Focus", body: "Service access, pull-out components and inspection points reduce stoppage risk." },
      { title: "Site-Fit Execution", body: "Conveyors and storage can be configured around truck flow, plant layout and civil works." },
      { title: "Safety Aware", body: "Access, guarding, dust and maintenance interfaces are included early in scope definition." },
    ],
    faqs: [
      { q: "What information is needed to size a conveyor?", a: "Material bulk density and particle size, required throughput, conveyor length and lift, incline, loading method, operating hours, environmental conditions and transfer requirements are the minimum useful inputs." },
      { q: "Which conveyor safety standards apply?", a: "The applicable requirements depend on conveyor type and project. For belt conveyors handling bulk materials, the AS/NZS 4024.3610 and 4024.3611 series should be considered." }
    ],
  },
  {
    id: "material-processing",
    number: "06",
    icon: Cog,
    motif: "gears",
    image: "/images/CAPABILITIES/Material Processing.png",
    title: "Material Processing",
    accent: "Systems",
    summary:
      "Mixing, dosing, weighing, screening and processing equipment for controlled material transformation.",
    description:
      "When materials must be blended, metered, reacted, dried or separated, the equipment must be selected for behaviour, not just capacity. Ryetek positions processing systems that help operators achieve repeatable output with less waste and easier maintenance.",
    groups: [
      {
        icon: Cog,
        title: "What Ryetek Can Offer",
        items: [
          "Twin-shaft mixers, pugmill mixers, ribbon mixers and rotary mixers",
          "Industrial dosing, batching and weighing systems with hopper and feeder interfaces",
          "Sorting, screening and grading systems for process and recycling lines",
          "Conveying and transfer modules between processing stages",
          "Wear protection, liners, access doors, drives, gearboxes and safety systems",
        ],
      },
    ],
    slides: [
      { title: "Pugmill & Twin-Shaft Mixer", subtitle: "Controlled Material Blending & Dosing", image: "/images/CAPABILITIES/Material Processing.png", tag: "Twin-Shaft Mixing" },
      { title: "High-Chrome Mixer Arms", subtitle: "Ni-Hard Paddles & Arm Protection", image: "/images/CAPABILITIES/Material processing 1.png", tag: "Mixer Castings" },
      { title: "Industrial Screening Unit", subtitle: "Multi-Deck Classification Screens", image: "/images/CAPABILITIES/material processing 2.png", tag: "Screening Unit" },
      { title: "Batching & Dosing Hopper", subtitle: "Feeder Modules & Material Weighing", image: "/images/CAPABILITIES/Material Processing 3.png", tag: "Dosing Hopper" },
    ],
    highlights: [
      { title: "Consistent Output", body: "The system is structured to support repeatable material quality and process stability." },
      { title: "Robust Drives", body: "Drive arrangements, shafts, seals and gearboxes are selected for duty and maintenance." },
      { title: "Modular Upgrades", body: "Existing lines can be improved with dosing, weighing, mixing modules." },
      { title: "Process Control", body: "Instrumentation and logic can support repeatability, traceability and operator confidence." },
    ],
    faqs: [
      { q: "How do you choose between batch and continuous mixing?", a: "The choice depends on recipe variation, traceability, production pattern, residence time, control requirement and how upstream and downstream equipment operate." },
      { q: "Can an existing mixer be upgraded?", a: "Potentially. The condition, drive, structure, liners, shaft/seal arrangement, controls and process bottleneck must be assessed before the scope is defined." }
    ],
  },
  {
    id: "recycling",
    number: "07",
    icon: Recycle,
    motif: "conveyor",
    image: "/images/CAPABILITIES/recycling 1.png",
    title: "Recycling & Circular",
    accent: "Systems",
    summary:
      "Material recovery and reprocessing systems that turn waste streams into usable industrial value.",
    description:
      "Recycling projects succeed when handling, screening, dosing, storage and controls work together. Ryetek helps scope circular systems for RAP, construction materials, aggregates and industrial recovery applications.",
    groups: [
      {
        icon: Recycle,
        title: "What Ryetek Can Offer",
        items: [
          "RAP handling, screening, storage, dosing and transfer systems",
          "Sorting, screening and conveying packages for recovery materials",
          "Feed bins, hoppers, weigh systems, mixers and transfer interfaces",
          "Dust, wear, build-up and maintenance considerations for recycled streams",
          "Integration with existing concrete, asphalt or industrial process plants",
        ],
      },
    ],
    slides: [
      { title: "RAP Screening & Recovery Line", subtitle: "Variable Feedstock Processing", image: "/images/CAPABILITIES/recycling 1.png", tag: "Recovery System" },
      { title: "Custom Feed Bins & Hoppers", subtitle: "Controlled Dosing & Plant Integration", image: "/images/CAPABILITIES/recycling 2.png", tag: "Feed Bins" },
      { title: "Reclaimed Material Processing", subtitle: "Impact Crushing & Sorting Modules", image: "/images/CAPABILITIES/Recycling 3.png", tag: "Circular Processing" },
    ],
    highlights: [
      { title: "Circular Value", body: "Systems are built to recover usable material while managing process risk." },
      { title: "Built for Variability", body: "Recycled materials change in moisture, grading, shape and flow — equipment must allow for it." },
      { title: "Lower Waste Cost", body: "Better recovery, metering and reuse can reduce disposal and virgin material demand." },
      { title: "Integration First", body: "Recycling lines are planned around the existing plant, not as isolated add-ons." },
    ],
    faqs: [
      { q: "Can a recycling system be added to an existing plant?", a: "Yes, subject to space, structure, process capacity, dust/emissions, controls and the ability of the existing plant to accept the recovered material." },
      { q: "What data should be measured?", a: "At minimum: recovered feed mass, moisture or condition where relevant, rejects, operating hours, downtime and the effect on main-plant quality and energy." }
    ],
  },
  {
    id: "automation",
    number: "08",
    icon: Cpu,
    motif: "control",
    image: "/images/CAPABILITIES/Automation.png",
    title: "Automation &",
    accent: "Digital Controls",
    summary:
      "Control panels, PLC/HMI/SCADA and monitoring systems that make plant operation clearer and more reliable.",
    description:
      "Automation should make the operator's day easier, not just add complexity. Ryetek supports control upgrades and packaged equipment controls with local electrical completion, practical HMI logic and documentation for Australian operators.",
    groups: [
      {
        icon: Cpu,
        title: "What Ryetek Can Offer",
        items: [
          "Control panels, MCC/PCC/VFD panels and equipment control cabinets",
          "PLC, HMI, SCADA, instrumentation and alarm logic coordination",
          "Batching controls, heater controls, mixer controls and conveyor interlocks",
          "Remote monitoring, data logging, IoT-ready telemetry and service dashboards",
          "Retrofit, modernisation and obsolescence replacement for older plant controls",
        ],
      },
    ],
    slides: [
      { title: "SCADA & HMI Dashboard", subtitle: "Operator Process Visibility & Alarms", image: "/images/CAPABILITIES/Automation.png", tag: "SCADA Interface" },
      { title: "MCC & VFD Control Cabinets", subtitle: "Electrical Panels & Drive Enclosures", image: "/images/CAPABILITIES/Automation1.png", tag: "MCC Cabinets" },
      { title: "Automation Control Room", subtitle: "Plant Interlocks & Data Diagnostics", image: "/images/CAPABILITIES/Automation3.png", tag: "Control Hub" },
    ],
    highlights: [
      { title: "Operator clarity", body: "Interfaces can be structured around what operators need to see, control and alarm on-site." },
      { title: "Retrofit pathway", body: "Older plants can be upgraded without replacing every mechanical component." },
      { title: "Electrical discipline", body: "Local completion and certification pathways are considered for Australian supply." },
      { title: "Data advantage", body: "Monitoring can support uptime, maintenance planning and performance visibility." },
    ],
    faqs: [
      { q: "Can old controls be replaced without replacing the whole plant?", a: "Often yes. The retrofit plan should verify field devices, drives, safety circuits, wiring condition, process logic and the shutdown/commissioning sequence." },
      { q: "Can remote monitoring be included?", a: "Yes, subject to client cyber-security rules, network availability, access control, data ownership and the agreed support model." }
    ],
  },
  {
    id: "engineering-rd",
    number: "09",
    icon: FlaskConical,
    motif: "desk",
    image: "/images/CAPABILITIES/EngineeringR&D.png",
    title: "Engineering, R&D &",
    accent: "Product Development",
    summary:
      "From concept to commissioned equipment, with practical engineering support at every stage.",
    description:
      "Industrial buyers often need a partner who can turn a requirement into a buildable, maintainable and commercially sensible system. Ryetek coordinates concept development, 3D design, manufacturing support, FAT planning, documentation and commissioning inputs.",
    groups: [
      {
        icon: FlaskConical,
        title: "What Ryetek Can Offer",
        items: [
          "Concept engineering, feasibility review and duty definition",
          "3D layouts, GA drawings, equipment interfaces and manufacturing documents",
          "Product development, prototype support and test planning",
          "Vendor coordination, selective manufacturing support and quality checkpoints",
          "Commissioning inputs, manuals, spares planning and lifecycle support",
        ],
      },
    ],
    slides: [
      { title: "3D CAD & Duty Definition", subtitle: "Concept Engineering & Feasibility", image: "/images/CAPABILITIES/EngineeringR&D.png", tag: "3D Engineering" },
      { title: "Ryetek Engineering Workshop", subtitle: "Prototype Testing & Assembly Support", image: "/images/CAPABILITIES/Engineering R&D 2.png", tag: "Workshop & Testing" },
      { title: "Reverse Engineering & Scanning", subtitle: "Pattern Making & Alloy Development", image: "/images/materials/product-lines-custom-wear.png", tag: "Reverse Eng" },
    ],
    highlights: [
      { title: "Fewer Blind Spots", body: "Mechanical, thermal, control and maintenance requirements are considered together." },
      { title: "Buyer Confidence", body: "Clear project thinking and documented inputs support better decision-making." },
      { title: "Buildable Detail", body: "Designs are developed around fabrication, assembly, transport and site installation realities." },
      { title: "Commercial Clarity", body: "Scope boundaries, assumptions and project inputs are stated early to reduce disputes." },
    ],
    faqs: [
      { q: "Can Ryetek develop equipment for another OEM?", a: "Potentially. The commercial model, confidentiality, ownership of background and project IP, design responsibility and manufacturing support should be agreed at the start." },
      { q: "Do you provide only drawings?", a: "The recommended service begins with duty and concept definition. Drawing-only work can create risk when the process basis and interfaces have not been established." }
    ],
  },
  {
    id: "machine-parts",
    number: "10",
    icon: Wrench,
    motif: "parts",
    image: "/images/CAPABILITIES/machine part1.png",
    title: "Machine Parts",
    accent: "& Castings Range",
    summary:
      "High-performance machine parts for concrete, asphalt, aggregates, recycling and bulk material handling equipment.",
    description:
      "Ryetek supports plant operators with a practical range designed to reduce downtime, extend service life and improve maintenance planning. The range covers critical high-wear zones across mixers, chutes, bins, conveyors, elevators and processing equipment.",
    groups: [
      {
        icon: Wrench,
        title: "What Ryetek Can Offer",
        items: [
          "Mixer arms, tips, paddles, side liners and floor liners",
          "Chute liners, hopper liners, skirt liners and transfer-point wear parts",
          "Bucket elevator buckets, lips and replaceable wear components",
          "Hardfaced, abrasion and resistant ceramic-backed wear solutions",
          "Replacement sets tailored for batching plants, asphalt plants and material handling systems",
        ],
      },
    ],
    slides: [
      { title: "Machined Castings & Rollers", subtitle: "Trunnion Wheels & Bearing Assemblies", image: "/images/CAPABILITIES/machine part1.png", tag: "Machined Parts" },
      { title: "Wear Steel & High-Chrome Liners", subtitle: "P400/P500 & Wearcast Alloys", image: "/images/CAPABILITIES/machine part2.png", tag: "Wear Alloys" },
      { title: "Ceramic Tile & Chute Liners", subtitle: "High-Purity Alumina Protection", image: "/images/CAPABILITIES/machine part3.png", tag: "Ceramic Liners" },
      { title: "Mixer Arms & Protection Shields", subtitle: "Complete Change-Out Spares Kits", image: "/images/CAPABILITIES/machine part4.png", tag: "Replacement Kits" },
    ],
    highlights: [
      { title: "Longer Service Life", body: "Wear solutions selected to improve durability in high-ablation operating zones." },
      { title: "Lower Downtime", body: "Fast replacement parts and planned change-outs help reduce stoppages." },
      { title: "Better Protection", body: "Critical plant areas can be shielded with impact, abrasion and premature failure in mind." },
      { title: "Maintenance Ready", body: "Wear parts can be grouped into practical replacement sets for easier servicing." },
    ],
    faqs: [
      { q: "Can Ryetek match an obsolete part?", a: "A part may be reverse-engineered from a drawing, sample or verified site measurements, subject to suitability, tolerances, material selection and design responsibility." },
      { q: "Can wear parts be supplied as a complete set?", a: "Yes. Grouping parts, hardware and critical spares by planned shutdown can reduce missed items and change-out delays." }
    ],
  },
];

export const forWho = [
  "Plant owners",
  "Contractors",
  "Infrastructure projects",
  "Concrete producers",
  "Asphalt operators",
  "EPCs",
  "Industrial manufacturers",
];
