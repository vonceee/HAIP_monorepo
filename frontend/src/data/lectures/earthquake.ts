import { Lecture } from "../../types";
import image1 from "../../assets/lecture-cards/19e4a3c9-78f1-48f6-8d76-327cee5077d3.jpg";
import pBXuXnF from "../../assets/earthquake/effect-analysis/pBXuXnF.jpeg";
import P2c24Fz from "../../assets/earthquake/effect-analysis/P2c24Fz.jpeg";
import nieyw10 from "../../assets/earthquake/effect-analysis/nieyw10.jpeg";
// Hazard Detail Images
import XkdS1Sh from "../../assets/earthquake/liquefaction/XkdS1Sh.jpeg";
import ejDazPW from "../../assets/earthquake/liquefaction/ejDazPW.jpeg";
import l1_2lNocmC from "../../assets/earthquake/landslides/2lNocmC.jpeg";
import l2_cU3ltee from "../../assets/earthquake/landslides/cU3ltee.jpeg";
import t1_Vs1VkOm_d from "../../assets/earthquake/tsunami/Vs1VkOm_d.jpeg";
import t2_iaUMeRz from "../../assets/earthquake/tsunami/iaUMeRz.jpeg";
import i1_7udUQp3 from "../../assets/earthquake/fire-infra/7udUQp3.jpeg";
import i2_MRcTqhO from "../../assets/earthquake/fire-infra/MRcTqhO.jpeg";
import gr1_mz2zqMV from "../../assets/earthquake/ground-rupture/mz2zqMV.jpeg";
import gr2_nSEuU4D from "../../assets/earthquake/ground-rupture/nSEuU4D.jpeg";

export const earthquakeLecture: Lecture = {
  id: "lecture-earthquake-101",
  title: "Earthquake Hazards",
  description:
    "a deep dive into primary and secondary earthquake hazards, including ground rupture, liquefaction, landslides, tsunamis, and fire failures.",
  topic: "Earthquake",
  imageUrl: image1,
  readTime: 15,
  difficulty: "Beginner",
  objectives: [
    "Recognize real-world examples of historical earthquake",
    "Learn safety protocols for before, during, and after an earthquake",
  ],
  competencies: [
    {
      description: "Various Potential Earthquake Hazards",
      code: "DRR11/12-If-g-17",
    },
    {
      description: "Analyze The Effects of The Different Earthquake Hazards",
      code: "DRR11/12-If-g-19",
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
          "Their impacts go beyond ground shaking—they trigger a chain of secondary hazards that pose threats to human life, infrastructure, and the environment. Understanding these potential hazards is essential for developing predictive skills and effective disaster preparedness. ",
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
            image: pBXuXnF,
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
            image: P2c24Fz,
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
            image: nieyw10,
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
            src: gr1_mz2zqMV,
            alt: "Bohol Rupture",
            caption: "Ground rupture in Bohol following the 2013 earthquake.",
            sourceUrl:
              "https://afe-adb.org/sites/default/files/Earthquake%20Risk%20and%20Preparedness%20Presentation%20ADB%2028May2013.pdf",
          },
          {
            src: gr2_nSEuU4D,
            alt: "Cotabato Rupture",
            caption:
              "Surface rupture observed in North Cotabato after the 2019 earthquake.",
            sourceUrl: "https://www.youtube.com/watch?v=tSeflXdLrJE",
          },
        ],
      },
    },
    // 4. Hazard Detail: Liquefaction
    {
      id: "liquefaction",
      title: "Liquefaction",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Liquefaction",
        description:
          "A phenomenon where saturated soil loses its strength and behaves like a liquid due to intense ground shaking.",
        features: [
          {
            title: "Loss of Strength",
            description: "Solid ground turns into a quicksand-like substance.",
          },
          {
            title: "Sinking Structures",
            description: "Buildings and heavy objects sink or tilt.",
          },
        ],
        effects: [
          {
            label: "Foundation Failure",
            description: "Buildings can collapse or tilt dangerously.",
          },
          {
            label: "Sand Boils",
            description: "Water and sand erupting from the ground.",
          },
        ],
        protocol: {
          title: "Check Soil Quality",
          description:
            "Assess soil type and compactness before construction in prone areas.",
          highlight: "soil type",
        },
        images: [
          {
            src: XkdS1Sh,
            alt: "Liquefaction Damage",
            caption: "Ground failure caused by liquefaction.",
          },
          {
            src: ejDazPW,
            alt: "Tilted Building",
            caption: "Buildings tilting due to loss of soil bearing capacity.",
          },
        ],
      },
    },
    // 5. Hazard Detail: Earthquake-Induced Landslides
    {
      id: "landslides",
      title: "Landslides",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Landslides",
        description:
          "The downward movement of rock, soil, and debris triggered by ground shaking on slopes.",
        features: [
          {
            title: "Slope Failure",
            description: "Shaking destabilizes weak or steep slopes.",
          },
          {
            title: "Debris Flow",
            description: "Rapid movement of soil and rocks.",
          },
        ],
        effects: [
          {
            label: "Buried Communities",
            description: "Entire villages can be covered by debris.",
          },
          {
            label: "Blocked Roads",
            description:
              "Transportation networks severed by impassable debris.",
          },
        ],
        protocol: {
          title: "Avoid Steep Slopes",
          description:
            "Stay away from steep cliffs and slopes during and after earthquakes.",
          highlight: "steep slopes",
        },
        images: [
          {
            src: l1_2lNocmC,
            alt: "Landslide",
            caption: "Massive landslide triggered by seismic activity.",
          },
          {
            src: l2_cU3ltee,
            alt: "Road Blockage",
            caption: "Road blocked by landslide debris.",
          },
        ],
      },
    },
    // 6. Hazard Detail: Tsunami
    {
      id: "tsunami",
      title: "Tsunami",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Tsunami",
        description:
          "Series of giant sea waves generated by undersea earthquakes, landslides, or volcanic eruptions.",
        features: [
          {
            title: "Water Displacement",
            description: "Vertical movement of the seafloor displaces water.",
          },
          {
            title: "Wave Propagation",
            description: "Waves travel at high speeds across the ocean.",
          },
        ],
        effects: [
          {
            label: "Coastal Flooding",
            description: "Massive inundation of coastal areas.",
          },
          {
            label: "Destruction of structures",
            description: "Buildings and infrastructure swept away.",
          },
        ],
        protocol: {
          title: "Move to Higher Ground",
          description:
            "Immediately evacuate to higher ground if you feel strong shaking near the coast.",
          highlight: "higher ground",
        },
        images: [
          {
            src: t1_Vs1VkOm_d,
            alt: "Tsunami Wave",
            caption: "Approaching tsunami wave.",
          },
          {
            src: t2_iaUMeRz,
            alt: "Tsunami Damage",
            caption: "Aftermath of a tsunami inundation.",
          },
        ],
      },
    },
    // 7. Hazard Detail: Infrastructure Failures
    {
      id: "infra-failure",
      title: "Infrastructure Failures",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Infrastructure Failures",
        description:
          "Secondary hazards resulting from damage to man-made structures and utility systems.",
        features: [
          {
            title: "Fire",
            description: "Gas leaks and electrical shorts causing fires.",
          },
          {
            title: "Dam Failure",
            description: "Breach of dams leading to downstream flooding.",
          },
        ],
        effects: [
          {
            label: "Urban Fires",
            description: "Widespread fires in densely populated areas.",
          },
          {
            label: "Power Outages",
            description: "Loss of electricity and communication.",
          },
        ],
        protocol: {
          title: "Check for Hazards",
          description:
            "Check for gas leaks and electrical damage. Turn off utilities if safe.",
          highlight: "gas leaks",
        },
        images: [
          {
            src: i1_7udUQp3,
            alt: "Fire",
            caption: "Fire breaking out after an earthquake.",
          },
          {
            src: i2_MRcTqhO,
            alt: "Infrastructure Damage",
            caption: "Damaged infrastructure posing safety risks.",
          },
        ],
      },
    },
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
};
