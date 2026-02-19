import { Lecture } from "../types";
import image1 from "../assets/lecture-cards/19e4a3c9-78f1-48f6-8d76-327cee5077d3.jpg";
import image2 from "../assets/lecture-cards/83465e25-4967-4630-bf67-bcbc9efe0e90.jpg";
import image3 from "../assets/lecture-cards/cfdc22bb-2d99-4f5c-9705-2d2e998726f3.jpg";

export const lectures: Lecture[] = [
  {
    id: "lecture-earthquake-101",
    title: "LectureStartMenu Title",
    description: "LectureStartMenu Description",
    topic: "Earthquake",
    imageUrl: image1,
    readTime: 15,
    difficulty: "Beginner",
    objectives: [
      "LearningObjective 1",
      "LearningObjective 2",
      "LearningObjective 3",
    ],
    competencies: [
      {
        description: "LectureStartMenu,LearningCompetenciesView Competency 1.",
        code: "DRR11/12-If-g-17",
      },
      {
        description: "LectureStartMenu,LearningCompetenciesView Competency 2.",
        code: "DRR11/12-If-g-19",
      },
      {
        description: "LectureStartMenu,LearningCompetenciesView Competency 3.",
        code: "DRR11/12-If-g-20",
      },
    ],
    sections: [
      // 1. Introduction Slide
      {
        id: "intro",
        title: "",
        content: "",
        layout: "introduction",
        layoutData: {
          subTitle: "are among the most destructive natural hazards on Earth.",
          secondaryInfo:
            "Their impacts go beyond ground shaking—they trigger a chain of secondary hazards that pose immediate threats.",
          reference: "PHIVOLCS (2023). Earthquake Hazards.",
          stats: [
            {
              label: "Predict",
              description:
                "Analyze effects to anticipate secondary hazards before they strike.",
              icon: "TriangleAlert",
            },
            {
              label: "Minimize",
              description:
                "Implement safety protocols to drastically reduce casualties.",
              icon: "ShieldCheck",
            },
            {
              label: "Strengthen",
              description:
                "Build resilient infrastructure to withstand future disasters.",
              icon: "ShieldAlert",
            },
          ],
        },
      },
      // 2. Effects Analysis Slide
      {
        id: "effects",
        title: "",
        content: "",
        layout: "effects-analysis",
        layoutData: {
          cards: [
            {
              title: "Structural Damage",
              description:
                "Weakly designed buildings collapse, especially on soft soils.",
              highlight: "soft soils",
              icon: "Home",
              image:
                "https://images.unsplash.com/photo-1594953935304-7a0d8e207908?w=800&q=80",
              color: "orange",
              borderColor: "hover:border-orange-500",
              shadowColor: "hover:shadow-[0_0_50px_rgba(249,115,22,0.4)]",
              iconColor: "text-orange-400",
              textColor: "group-hover:text-orange-100",
              highlightColor: "text-orange-400",
            },
            {
              title: "Infrastructure Disruption",
              description:
                "Roads crack and utilities fail, cutting off critical networks.",
              highlight: "critical networks",
              icon: "Zap",
              image:
                "https://images.unsplash.com/photo-1541529454-e0e64c126d4c?w=800&q=80", // Placeholder for road damage
              color: "red",
              borderColor: "hover:border-red-500",
              shadowColor: "hover:shadow-[0_0_50px_rgba(239,68,68,0.4)]",
              iconColor: "text-red-400",
              textColor: "group-hover:text-red-100",
              highlightColor: "text-red-400",
            },
            {
              title: "Psychological Stress",
              description:
                "Fear and trauma affect survivors long after the event.",
              highlight: "long after",
              icon: "HeartPulse",
              image:
                "https://images.unsplash.com/photo-1623697899645-ec796850fa94?w=800&q=80", // Placeholder for distraught person
              color: "purple",
              borderColor: "hover:border-purple-500",
              shadowColor: "hover:shadow-[0_0_50px_rgba(168,85,247,0.4)]",
              iconColor: "text-purple-400",
              textColor: "group-hover:text-purple-100",
              highlightColor: "text-purple-400",
            },
          ],
        },
      },
      // 3. Hazard Detail: Ground Rupture
      {
        id: "ground-rupture",
        title: "Ground Rupture",
        content: "",
        layout: "hazard-detail",
        layoutData: {
          title: "Ground Rupture",
          description:
            "The visible tearing or displacement of the ground surface along an active fault during an earthquake.",
          features: [
            {
              title: "Vertical Offset",
              description:
                "One side lifts higher than the other, creating steep scarps.",
            },
            {
              title: "Horizontal Shift",
              description:
                "Ground moves sideways, severing roads and utility lines.",
            },
          ],
          effects: [
            {
              label: "Structural Tearing",
              description: "Foundations split apart instantly.",
            },
            {
              label: "Uninhabitable Zones",
              description: "Permanent no-build zones.",
            },
          ],
          protocol: {
            title: "The 5-Meter Rule",
            description:
              "Permanent structures are strictly prohibited within 5 meters on both sides of the active fault trace.",
            highlight: "5 meters",
          },
          images: [
            {
              src: "earthquake-hazards/mz2zqMV.jpeg",
              alt: "Bohol Rupture",
              caption: "Ground rupture in Bohol following the 2013 earthquake.",
              sourceUrl:
                "https://afe-adb.org/sites/default/files/Earthquake%20Risk%20and%20Preparedness%20Presentation%20ADB%2028May2013.pdf",
            },
            {
              src: "earthquake-hazards/nSEuU4D.jpeg",
              alt: "Cotabato Rupture",
              caption:
                "Surface rupture observed in North Cotabato after the 2019 earthquake.",
              sourceUrl: "https://www.youtube.com/watch?v=tSeflXdLrJE",
            },
          ],
        },
      },
      // 4. Lecture Complete
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
        title: "Scenario 1: Initial Shaking",
        scenario:
          "You are inside a tall building when the shaking starts. What do you do?",
        options: [
          {
            label: "Run to the nearest exit immediately.",
            isCorrect: false,
            feedback:
              "Running during shaking is dangerous due to falling debris.",
          },
          {
            label: "Drop, Cover, and Hold On.",
            isCorrect: true,
            feedback: "Correct! This protects you from falling objects.",
          },
        ],
      },
    ],
    finalQuiz: [
      {
        id: "q1",
        question: "What is the primary cause of tsunamis?",
        options: [
          "Underwater landslides",
          "Volcanic eruptions",
          "Undersea earthquakes",
          "Asteroid impacts",
        ],
        correctAnswer: 2,
      },
    ],
    gameType: "earthquake-sim",
  },
  {
    id: "lecture-flood-101",
    title: "Flood Evacuation Protocol",
    description:
      "Understand flood warnings, prepare a go-bag, and safely navigate rising waters.",
    topic: "Flood",
    imageUrl: image2,
    readTime: 20,
    difficulty: "Intermediate",
    gameType: "flood-sim",
    objectives: ["Identify flood zones", "Pack a go-bag", "Evacuation routes"],
    competencies: [
      {
        description:
          "Distinguish between different types of flooding including flash floods and riverine floods.",
        code: "DRR11/12-Ii-j-21",
      },
      {
        description:
          "Identify human activities that speed up or cause flooding in urban areas.",
        code: "DRR11/12-Ii-j-23",
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
          subTitle: "can devastate communities within hours of heavy rainfall.",
          secondaryInfo:
            "Rapidly rising waters destroy infrastructure and carry debris that intensifies the danger.",
          reference: "PAGASA (2023). Flood Warning System.",
          stats: [
            {
              label: "Monitor",
              description:
                "Track rainfall and water levels to predict flash floods.",
              icon: "TriangleAlert",
            },
            {
              label: "Evacuate",
              description:
                "Move to higher ground immediately when warnings are issued.",
              icon: "ShieldCheck",
            },
            {
              label: "Adapt",
              description:
                "Design drainage systems and barriers to control water flow.",
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
              title: "Property Damage",
              description:
                "Homes and businesses are submerged, destroying assets.",
              highlight: "submerged",
              icon: "Home",
              image:
                "https://images.unsplash.com/photo-1525990520626-d922b0f4e428?w=800&q=80", // Flood
              color: "blue",
              borderColor: "hover:border-blue-500",
              shadowColor: "hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]",
              iconColor: "text-blue-400",
              textColor: "group-hover:text-blue-100",
              highlightColor: "text-blue-400",
            },
            {
              title: "Health Risks",
              description: "Contaminated water leads to waterborne diseases.",
              highlight: "diseases",
              icon: "Skull",
              image:
                "https://images.unsplash.com/photo-1632832506692-26210f845763?w=800&q=80", // Dirty water
              color: "emerald",
              borderColor: "hover:border-emerald-500",
              shadowColor: "hover:shadow-[0_0_50px_rgba(16,185,129,0.4)]",
              iconColor: "text-emerald-400",
              textColor: "group-hover:text-emerald-100",
              highlightColor: "text-emerald-400",
            },
            {
              title: "Economic Loss",
              description: "Agriculture and business operations are paralyzed.",
              highlight: "paralyzed",
              icon: "Coins",
              image:
                "https://images.unsplash.com/photo-1533285962792-0c3c5e9cb0d7?w=800&q=80", // Empty market/street
              color: "yellow",
              borderColor: "hover:border-yellow-500",
              shadowColor: "hover:shadow-[0_0_50px_rgba(234,179,8,0.4)]",
              iconColor: "text-yellow-400",
              textColor: "group-hover:text-yellow-100",
              highlightColor: "text-yellow-400",
            },
          ],
        },
      },
      // 3. Hazard Detail: Flash Flood
      {
        id: "flash-flood",
        title: "Flash Flood",
        content: "",
        layout: "hazard-detail",
        layoutData: {
          title: "Flash Flood",
          description:
            "A rapid flooding of low-lying areas caused by heavy rain associated with a severe thunderstorm, hurricane, or tropical storm.",
          features: [
            {
              title: "Rapid Onset",
              description:
                "Can occur within minutes hours of excessive rainfall.",
            },
            {
              title: "High Velocity",
              description:
                "Moving water has immense power to sweep away vehicles and structures.",
            },
          ],
          effects: [
            {
              label: "Infrastructure Damage",
              description: "Bridges and roads can be washed away.",
            },
            {
              label: "Debris Flow",
              description:
                "Carries mud, rocks, and debris enhancing destruction.",
            },
          ],
          protocol: {
            title: "Turn Around, Don't Drown",
            description:
              "Never attempt to drive or walk through flooded waters. Just 6 inches can knock you down.",
            highlight: "6 inches",
          },
          images: [
            {
              src: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=800&q=80",
              alt: "Flash Flood Street",
              caption: "Urban flash flooding paralyzing city traffic.",
              sourceUrl: "",
            },
            {
              src: "https://images.unsplash.com/photo-1627663708306-69457662c431?w=800&q=80",
              alt: "Flood Rescue",
              caption: "First responders navigating floodwaters.",
              sourceUrl: "",
            },
          ],
        },
      },
      // 4. Complete
      {
        id: "complete",
        title: "Completion",
        content: "",
        layout: "complete",
        layoutData: {},
      },
    ],
  },
  {
    id: "lecture-volcano-101",
    title: "Volcanic Ash Preparedness",
    description:
      "Protect your respiratory health and secure your home during a sudden volcanic eruption.",
    topic: "Volcano",
    imageUrl: image3,
    readTime: 12,
    difficulty: "Advanced",
    gameType: "volcanic-eruption-sim",
    objectives: ["Ash protection", "Sealing the home", "Post-eruption safety"],
    competencies: [
      {
        description:
          "Explain various volcano-related hazards like pyroclastic flows, ashfall, and lahar.",
        code: "DRR11/12-Ih-i-24",
      },
      {
        description:
          "Recognize signs of an impending volcanic eruption based on local monitoring data.",
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
          subTitle:
            "unleash explosive power that can alter the global climate.",
          secondaryInfo:
            "Eruptions expel ash, gas, and lava that can bury towns and poison the air for miles.",
          reference: "PHIVOLCS (2023). Volcano Monitoring.",
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
              title: "Ashfall Impact",
              description: "Heavy ash collapses roofs and contaminates water.",
              highlight: "collapses roofs",
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
              title: "Lava Destruction",
              description: "Lava flows incinerate everything in their path.",
              highlight: "incinerate",
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
              title: "Displacement",
              description: "Communities are forced to permanently relocate.",
              highlight: "relocate",
              icon: "Users",
              image:
                "https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=800&q=80", // Evacuation/People
              color: "red",
              borderColor: "hover:border-red-500",
              shadowColor: "hover:shadow-[0_0_50px_rgba(239,68,68,0.4)]",
              iconColor: "text-red-400",
              textColor: "group-hover:text-red-100",
              highlightColor: "text-red-400",
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
            "A fast-moving current of hot gas and volcanic matter that moves away from a volcano reaching speeds of up to 700 km/h.",
          features: [
            {
              title: "Extreme Heat",
              description:
                "Temperatures can exceed 1,000°C, incinerating everything.",
            },
            {
              title: "High Speed",
              description:
                "Impossible to outrun; moves faster than a Formula 1 car.",
            },
          ],
          effects: [
            {
              label: "Total Destruction",
              description: "Building and forests are flattened instantly.",
            },
            {
              label: "Asphyxiation",
              description: "Hot gases and ash cause immediate suffocation.",
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
      // 4. Complete
      {
        id: "complete",
        title: "Completion",
        content: "",
        layout: "complete",
        layoutData: {},
      },
    ],
  },
];
