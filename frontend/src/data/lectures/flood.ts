import { Lecture } from "../../types";
import image2 from "../../assets/lecture-cards/83465e25-4967-4630-bf67-bcbc9efe0e90.jpg";

export const floodLecture: Lecture = {
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
};
