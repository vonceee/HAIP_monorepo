import { Lecture } from "../../types";
import image3 from "../../assets/lecture-cards/cfdc22bb-2d99-4f5c-9705-2d2e998726f3.jpg";

export const volcanoLecture: Lecture = {
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
        subTitle: "unleash explosive power that can alter the global climate.",
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
};
