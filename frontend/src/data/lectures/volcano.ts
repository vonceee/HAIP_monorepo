import { Lecture } from "../../types";
import image3 from "../../assets/lecture-cards/cfdc22bb-2d99-4f5c-9705-2d2e998726f3.jpg";

export const volcanoLecture: Lecture = {
  id: "lecture-volcano-101",
  title: "Volcano-Related Hazards",
  description:
    "Learn about various hazards associated with volcanic eruptions and how to recognize signs of impending activity.",
  topic: "Volcano",
  imageUrl: image3,
  readTime: 12,
  difficulty: "Advanced",
  gameType: "volcanic-eruption-sim",
  objectives: ["Explain volcano-related hazards", "Recognize eruption signs", "Understand hazard impacts"],
  competencies: [
    {
      description:
        "Explain various volcano-related hazards",
      code: "DRR11/12-Ih-i-24",
    },
    {
      description:
        "Recognize signs of an impending volcanic eruption",
      code: "DRR11/12-Ih-i-25",
    },
  ],
  sections: [
    // 1. Introduction
    {
      id: "intro",
      title: "Introduction",
      content: "",
      layout: "introduction",
      layoutData: {
        subTitle: "Volcanoes are powerful natural systems that can both create landforms and cause large-scale destruction.",
        secondaryInfo:
          "When magma, gas, and ash escape from deep within the Earth, the surrounding environment and communities may experience severe hazards. Recognizing these hazards—and the early signs of an impending eruption—is critical for forecasting, evacuation planning, and saving lives.",
        reference: "PHIVOLCS, 2023",
        stats: [
          {
            label: "Detect",
            description:
              "Monitor seismic activity and gas emissions for early warning.",
            icon: "TriangleAlert",
          },
          {
            label: "Protect",
            description:
              "Establish danger zones and prepare for ashfall protection.",
            icon: "ShieldCheck",
          },
          {
            label: "Resilience",
            description: "Plan communities away from permanent danger zones.",
            icon: "ShieldAlert",
          },
        ],
      },
    },
    // 2. Effects Analysis
    {
      id: "effects",
      title: "Effects Analysis",
      content: "", // Fallback
      layout: "effects-analysis",
      layoutData: {
        cards: [
          {
            title: "Pyroclastic Flow",
            description: "Fast-moving mixture of hot gases, ash, and rocks that rush down slopes at over 100 km/h.",
            highlight: "over 100 km/h",
            icon: "Zap",
            image:
              "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80", // Pyroclastic
            color: "red",
            borderColor: "hover:border-red-500",
            shadowColor: "hover:shadow-[0_0_50px_rgba(239,68,68,0.4)]",
            iconColor: "text-red-400",
            textColor: "group-hover:text-red-100",
            highlightColor: "text-red-400",
          },
          {
            title: "Ash Fall",
            description: "Volcanic ash and rock fragments that fall to the ground, collapsing roofs and contaminating water.",
            highlight: "collapsing roofs",
            icon: "Mountain",
            image:
              "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80", // Ash
            color: "gray",
            borderColor: "hover:border-gray-500",
            shadowColor: "hover:shadow-[0_0_50px_rgba(107,114,128,0.4)]",
            iconColor: "text-gray-400",
            textColor: "group-hover:text-gray-100",
            highlightColor: "text-gray-400",
          },
          {
            title: "Lahars",
            description: "Mixtures of volcanic ash, rocks, and water that flow down valleys, burying communities.",
            highlight: "burying communities",
            icon: "Waves",
            image:
              "https://images.unsplash.com/photo-1502396105423-424a1005e839?w=800&q=80", // Lahar/Lava
            color: "brown",
            borderColor: "hover:border-amber-600",
            shadowColor: "hover:shadow-[0_0_50px_rgba(161,98,7,0.4)]",
            iconColor: "text-amber-600",
            textColor: "group-hover:text-amber-100",
            highlightColor: "text-amber-600",
          },
          {
            title: "Lava Flows",
            description: "Molten rock that flows from the crater, destroying farmland and infrastructure.",
            highlight: "destroying farmland",
            icon: "Flame",
            image:
              "https://images.unsplash.com/photo-1502396105423-424a1005e839?w=800&q=80", // Lava
            color: "orange",
            borderColor: "hover:border-orange-500",
            shadowColor: "hover:shadow-[0_0_50px_rgba(249,115,22,0.4)]",
            iconColor: "text-orange-400",
            textColor: "group-hover:text-orange-100",
            highlightColor: "text-orange-400",
          },
          {
            title: "Volcanic Gases",
            description: "Toxic gases like sulfur dioxide that poison air and form acid rain.",
            highlight: "poison air",
            icon: "Cloud",
            image:
              "https://images.unsplash.com/photo-1541845157-a6d4d10029b7?w=800&q=80", // Gas/Cloud
            color: "green",
            borderColor: "hover:border-green-500",
            shadowColor: "hover:shadow-[0_0_50px_rgba(34,197,94,0.4)]",
            iconColor: "text-green-400",
            textColor: "group-hover:text-green-100",
            highlightColor: "text-green-400",
          },
          {
            title: "Volcanic Tsunamis",
            description: "Large sea waves from underwater eruptions that flood coastal communities.",
            highlight: "flood coastal communities",
            icon: "Waves",
            image:
              "https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=800&q=80", // Tsunami/Water
            color: "blue",
            borderColor: "hover:border-blue-500",
            shadowColor: "hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]",
            iconColor: "text-blue-400",
            textColor: "group-hover:text-blue-100",
            highlightColor: "text-blue-400",
          },
        ],
      },
    },
    // 3. Hazard Detail: Pyroclastic Flow
    {
      id: "pyroclastic-flow",
      title: "Pyroclastic Flow",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Pyroclastic Flow",
        description:
          "A fast-moving mixture of hot gases, ash, and volcanic rocks that rush down the slopes of a volcano at speeds over 100 km/h. Temperature: Can reach up to 800°C.",
        features: [
          {
            title: "Extreme Heat",
            description:
              "Temperatures up to 800°C incinerate everything in their path.",
          },
          {
            title: "High Speed",
            description:
              "Moves at over 100 km/h, making escape nearly impossible.",
          },
        ],
        effects: [
          {
            label: "Instant Incineration",
            description: "Anything in its path is burned immediately.",
          },
          {
            label: "Burial",
            description: "Thick deposits of ash and rock bury areas completely.",
          },
        ],
        protocol: {
          title: "Immediate Evacuation",
          description:
            "Leave the danger zone immediately upon warning. There is no shelter from a pyroclastic flow.",
          highlight: "no shelter",
        },
        images: [
          {
            src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
            alt: "Volcanic Cloud",
            caption: "Pyroclastic cloud descending a mountain slope.",
            sourceUrl: "",
          },
          {
            src: "https://images.unsplash.com/photo-1541845157-a6d4d10029b7?w=800&q=80",
            alt: "Volcanic Landscape",
            caption: "Aftermath of volcanic flows.",
            sourceUrl: "",
          },
        ],
      },
    },
    // 4. Hazard Detail: Ash Fall
    {
      id: "ash-fall",
      title: "Ash Fall (Tephra Fall)",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Ash Fall (Tephra Fall)",
        description:
          "Volcanic ash and rock fragments ejected during explosive eruptions that fall to the ground.",
        features: [
          {
            title: "Heavy Accumulation",
            description:
              "Ash can accumulate several centimeters to meters thick.",
          },
          {
            title: "Wide Distribution",
            description:
              "Can affect areas hundreds of kilometers from the volcano.",
          },
        ],
        effects: [
          {
            label: "Roof Collapse",
            description: "Heavy ash causes buildings to collapse.",
          },
          {
            label: "Respiratory Problems",
            description: "Ash reduces air quality and causes breathing difficulties.",
          },
          {
            label: "Water Contamination",
            description: "Ash contaminates water supplies.",
          },
        ],
        protocol: {
          title: "Protective Measures",
          description:
            "Stay indoors, use masks, and cover water sources. Clean ash carefully to avoid structural damage.",
          highlight: "use masks",
        },
        images: [
          {
            src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
            alt: "Ash Fall",
            caption: "Ash covering streets and buildings.",
            sourceUrl: "",
          },
          {
            src: "https://images.unsplash.com/photo-1541845157-a6d4d10029b7?w=800&q=80",
            alt: "Ash Cleanup",
            caption: "Residents cleaning volcanic ash.",
            sourceUrl: "",
          },
        ],
      },
    },
    // 5. Hazard Detail: Lahars
    {
      id: "lahars",
      title: "Lahars (Volcanic Mudflows)",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Lahars (Volcanic Mudflows)",
        description:
          "Mixtures of volcanic ash, rocks, and water that flow down river valleys, often triggered by rain or melting ice.",
        features: [
          {
            title: "High Mobility",
            description:
              "Can travel long distances down valleys and river channels.",
          },
          {
            title: "Variable Speed",
            description:
              "Moves from slow flows to fast surges depending on conditions.",
          },
        ],
        effects: [
          {
            label: "Burial of Communities",
            description: "Mud and debris bury homes and farmlands.",
          },
          {
            label: "Infrastructure Damage",
            description: "Destroys bridges, roads, and buildings.",
          },
          {
            label: "Long-term Siltation",
            description: "Rivers become silted, causing flooding.",
          },
        ],
        protocol: {
          title: "Early Warning",
          description:
            "Monitor rainfall and river levels. Evacuate when lahar warnings are issued.",
          highlight: "monitor rainfall",
        },
        images: [
          {
            src: "https://images.unsplash.com/photo-1502396105423-424a1005e839?w=800&q=80",
            alt: "Lahar Flow",
            caption: "Mudflow descending a valley.",
            sourceUrl: "",
          },
          {
            src: "https://images.unsplash.com/photo-1541845157-a6d4d10029b7?w=800&q=80",
            alt: "Lahar Damage",
            caption: "Aftermath of lahar destruction.",
            sourceUrl: "",
          },
        ],
      },
    },
    // 6. Hazard Detail: Lava Flows
    {
      id: "lava-flows",
      title: "Lava Flows",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Lava Flows",
        description:
          "Molten rock that flows from the crater during a non-explosive eruption.",
        features: [
          {
            title: "Slow Movement",
            description:
              "Moves slowly but relentlessly, allowing some time for evacuation.",
          },
          {
            title: "High Temperature",
            description:
              "Extremely hot, burning everything it touches.",
          },
        ],
        effects: [
          {
            label: "Burns Everything",
            description: "Destroys vegetation, buildings, and infrastructure.",
          },
          {
            label: "Land Creation",
            description: "Creates new land when it cools and solidifies.",
          },
        ],
        protocol: {
          title: "Safe Evacuation",
          description:
            "Monitor lava flow direction and speed. Evacuate early when flows are detected.",
          highlight: "evacuate early",
        },
        images: [
          {
            src: "https://images.unsplash.com/photo-1502396105423-424a1005e839?w=800&q=80",
            alt: "Lava Flow",
            caption: "Molten lava flowing down a slope.",
            sourceUrl: "",
          },
          {
            src: "https://images.unsplash.com/photo-1541845157-a6d4d10029b7?w=800&q=80",
            alt: "Lava Field",
            caption: "Cooled lava forming new land.",
            sourceUrl: "",
          },
        ],
      },
    },
    // 7. Hazard Detail: Volcanic Gases
    {
      id: "volcanic-gases",
      title: "Volcanic Gases",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Volcanic Gases",
        description:
          "Emissions of gases such as sulfur dioxide (SO₂), carbon dioxide (CO₂), and hydrogen sulfide (H₂S) released before, during, or after eruptions.",
        features: [
          {
            title: "Invisible Threat",
            description:
              "Many gases are colorless and odorless, making them hard to detect.",
          },
          {
            title: "Long-range Impact",
            description:
              "Can affect areas far from the volcano through air pollution.",
          },
        ],
        effects: [
          {
            label: "Poisoning",
            description: "Causes respiratory problems and death in high concentrations.",
          },
          {
            label: "Acid Rain",
            description: "Damages crops, water, and infrastructure.",
          },
          {
            label: "Climate Effects",
            description: "Contributes to global cooling through atmospheric pollution.",
          },
        ],
        protocol: {
          title: "Gas Monitoring",
          description:
            "Use gas masks in affected areas. Monitor air quality and follow evacuation orders.",
          highlight: "use gas masks",
        },
        images: [
          {
            src: "https://images.unsplash.com/photo-1541845157-a6d4d10029b7?w=800&q=80",
            alt: "Volcanic Plume",
            caption: "Gas emissions from a volcano.",
            sourceUrl: "",
          },
          {
            src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
            alt: "Gas Monitoring",
            caption: "Scientists monitoring volcanic gases.",
            sourceUrl: "",
          },
        ],
      },
    },
    // 8. Hazard Detail: Volcanic Tsunamis
    {
      id: "volcanic-tsunamis",
      title: "Volcanic Tsunamis",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Volcanic Tsunamis",
        description:
          "Large sea waves generated by underwater eruptions, landslides, or caldera collapses.",
        features: [
          {
            title: "Sudden Onset",
            description:
              "Can occur without warning during or after volcanic activity.",
          },
          {
            title: "Destructive Power",
            description:
              "Waves can reach heights of several meters and travel long distances.",
          },
        ],
        effects: [
          {
            label: "Coastal Flooding",
            description: "Inundates low-lying coastal areas and communities.",
          },
          {
            label: "Infrastructure Damage",
            description: "Destroys ports, harbors, and coastal infrastructure.",
          },
          {
            label: "Island Impact",
            description: "Affects nearby islands and distant coastlines.",
          },
        ],
        protocol: {
          title: "Coastal Evacuation",
          description:
            "Move to higher ground immediately when tsunami warnings are issued. Stay away from beaches.",
          highlight: "higher ground",
        },
        images: [
          {
            src: "https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=800&q=80",
            alt: "Tsunami Wave",
            caption: "Large wave approaching the coast.",
            sourceUrl: "",
          },
          {
            src: "https://images.unsplash.com/photo-1541845157-a6d4d10029b7?w=800&q=80",
            alt: "Coastal Damage",
            caption: "Aftermath of tsunami destruction.",
            sourceUrl: "",
          },
        ],
      },
    },
    // 9. Complete
    {
      id: "complete",
      title: "Completion",
      content: "",
      layout: "complete",
      layoutData: {},
    },
  ],
  decisionGame: [
    {
      id: "scenario-1",
      title: "Scenario 1: Unusual Activity",
      scenario:
        "You notice increased seismic activity and sulfur smell near a volcano. What should you do first?",
      options: [
        {
          label: "Ignore it as normal volcanic activity.",
          isCorrect: false,
          feedback:
            "Increased activity could indicate an impending eruption.",
        },
        {
          label: "Report to authorities and prepare emergency kit.",
          isCorrect: true,
          feedback: "Correct! Monitor official warnings and prepare for evacuation.",
        },
      ],
    },
  ],
  finalQuiz: [
    {
      id: "q1",
      question:
        "Your school is located near an active fault line. Scientists detect several minor tremors in the past week. As a student leader, what is the best action your class should take?",
      options: [
        "Ignore the tremors since they are small.",
        "Wait for a government warning before acting.",
        "Conduct a safety drill and check evacuation routes.",
        "Continue regular activities since no major quake has happened yet.",
      ],
      correctAnswer: 2,
    },
    {
      id: "q2",
      question:
        "Barangay officials receive a report of unusual ground vibration without an identified source. What should they do first to forecast possible earthquake risks?",
      options: [
        "Check social media for rumors.",
        "Wait for aftershocks.",
        "Coordinate with PHIVOLCS to verify seismic data.",
        "Immediately evacuate all residents without confirmation.",
      ],
      correctAnswer: 2,
    },
    {
      id: "q3",
      question:
        "A student reads an online post claiming a major earthquake will occur on a specific date. What is the most accurate way to validate this information?",
      options: [
        "Share the post to alert others.",
        "Check PHIVOLCS or USGS for official forecasts.",
        "Ask friends if they heard the same news.",
        "Assume it’s true since it went viral.",
      ],
      correctAnswer: 1,
    },
    {
      id: "q4",
      question:
        "An earthquake detection app shows a magnitude 4.0 tremor nearby, but your friends say they felt nothing. How can you determine if the report is accurate?",
      options: [
        "Delete the app for being unreliable.",
        "Compare data from other official monitoring centers.",
        "Believe your friends instead of the app.",
        "Assume the app has a bug.",
      ],
      correctAnswer: 1,
    },
    {
      id: "q5",
      question:
        "After an earthquake, several areas near rivers experience liquefaction. What caused this phenomenon?",
      options: [
        "The river water overflowed due to heavy rain.",
        "Strong shaking increased water pressure in loose soil.",
        "The ground fault directly opened under the river.",
        "Underground lava caused soil movement.",
      ],
      correctAnswer: 1,
    },
    {
      id: "q6",
      question:
        "In a city built on reclaimed land, buildings suffer more damage during an earthquake than those on solid rock. What best explains this difference?",
      options: [
        "Reclaimed land has stronger soil.",
        "Solid rock amplifies seismic waves.",
        "Soft soil increases shaking intensity.",
        "Both areas have equal risk.",
      ],
      correctAnswer: 2,
    },
    {
      id: "q7",
      question:
        "PHIVOLCS records a series of small tremors near a volcano over several weeks. What pattern could this indicate?",
      options: [
        "The volcano might be entering a rest period.",
        "A possible larger seismic event or eruption.",
        "Random natural movements with no risk.",
        "A decrease in tectonic activity.",
      ],
      correctAnswer: 1,
    },
    {
      id: "q8",
      question:
        "A hazard map shows that areas with soft soil near fault lines experienced more ground rupture in the past. What pattern can you recognize from this data?",
      options: [
        "Hard soil areas are more dangerous.",
        "Fault lines and soft soil together increase hazard risk.",
        "Distance to the sea affects rupture frequency.",
        "Past ruptures don’t affect future hazards.",
      ],
      correctAnswer: 1,
    },
    {
      id: "q9",
      question:
        "You are part of the school’s disaster committee. A mild quake happens while class is ongoing. What is the most appropriate decision?",
      options: [
        "Stay seated and continue the lesson.",
        "Evacuate calmly and follow the earthquake drill procedure.",
        "Run outside immediately without coordination.",
        "Wait for aftershocks before moving.",
      ],
      correctAnswer: 1,
    },
    {
      id: "q10",
      question:
        "Your barangay is planning to build new housing near a known fault line. What is the best decision to recommend based on hazard forecasting?",
      options: [
        "Approve construction since earthquakes can’t be predicted.",
        "Continue construction but skip building permits.",
        "Relocate the site to a safer distance from the fault.",
        "Ignore hazard maps since they are only estimates.",
      ],
      correctAnswer: 2,
    },
  ],
};
