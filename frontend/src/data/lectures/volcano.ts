import { Lecture } from "../../types";
import image3 from "../../assets/lecture-cards/cfdc22bb-2d99-4f5c-9705-2d2e998726f3.jpg";
import pf1 from "../../assets/volcano/pyroclastic-flow/pf1.jpg";
import pf2 from "../../assets/volcano/pyroclastic-flow/pf2.jpg";
import pf3 from "../../assets/volcano/pyroclastic-flow/pf3.jpg";
import af1 from "../../assets/volcano/ash-fall/af1.jpg";
import af2 from "../../assets/volcano/ash-fall/af2.jpg";
import af3 from "../../assets/volcano/ash-fall/af3.jpg";
import lh1 from "../../assets/volcano/lahars/lh1.jpg";
import lh2 from "../../assets/volcano/lahars/lh2.jpg";
import lh3 from "../../assets/volcano/lahars/lh3.jpg";
import lf1 from "../../assets/volcano/lava-flow/lf1.jpg";
import lf2 from "../../assets/volcano/lava-flow/lf2.jpg";
import lf3 from "../../assets/volcano/lava-flow/lf3.jpg";
import vg1 from "../../assets/volcano/volcanic-gases/vg1.jpg";
import vg2 from "../../assets/volcano/volcanic-gases/vg2.jpg";
import vg3 from "../../assets/volcano/volcanic-gases/vg3.jpg";
import vt1 from "../../assets/volcano/volcanic-tsunami/vt1.jpg";
import vt2 from "../../assets/volcano/volcanic-tsunami/vt2.jpg";
import vt3 from "../../assets/volcano/volcanic-tsunami/vt3.jpeg";

export const volcanoLecture: Lecture = {
  id: "lecture-volcano-101",
  title: "Volcano-Related Hazards",
  description:
    "a deep dive into recognizing the early warning signs of volcanic eruptions, including pyroclastic flows, ash fall, lahars, and lava flows.",
  topic: "Volcano",
  imageUrl: image3,
  readTime: 20,
  gameType: "volcanic-eruption-sim",
  competencies: [
    {
      description: "Explain various volcano-related hazards",
      code: "DRR11/12-Ih-i-24",
    },
    {
      description: "Recognize signs of an impending volcanic eruption",
      code: "DRR11/12-Ih-i-25",
    },
  ],
  sections: [
    {
      id: "intro",
      title: "Introduction",
      content: "",
      layout: "introduction",
      layoutData: {
        subTitle:
          "Volcanoes are powerful natural systems that can both create landforms and cause large-scale destruction.",
        secondaryInfo:
          "When magma, gas, and ash escape from deep within the Earth, the surrounding environment and communities may experience severe hazards. Recognizing these hazards—and the early signs of an impending eruption—is critical for forecasting, evacuation planning, and saving lives. “Volcanic eruptions cannot be stopped, but their impacts can be reduced through awareness and preparedness.”",
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
    {
      id: "pyroclastic-flow",
      title: "Pyroclastic Flow",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Pyroclastic Flow",
        description:
          "A fast-moving mixture of hot gases, ash, and volcanic rocks that rush down the slopes of a volcano at speeds over 100 km/h. Temperature: Can reach up to 800°C.",
        effects: [
          {
            label: "",
            description: "Instant incineration of anything in its path.",
          },
          {
            label: "",
            description: "Destruction of forests, crops, and settlements.",
          },
          {
            label: "",
            description:
              "Burial of areas under thick deposits of ash and rock.",
          },
        ],
        images: [
          {
            src: pf1,
            alt: "Volcanic Cloud",
            caption: "",
            sourceUrl:
              "https://education.nationalgeographic.org/resource/hazards-pyroclastic-flows/",
          },
          {
            src: pf2,
            alt: "Volcanic Landscape",
            caption: "",
            sourceUrl:
              "https://www.internetgeography.net/topics/what-are-lahars-and-pyroclastic-flows/",
          },
          {
            src: pf3,
            alt: "Volcanic Landscape",
            caption: "",
            sourceUrl: "https://www.britannica.com/science/pyroclastic-flow",
          },
        ],
      },
    },
    {
      id: "ash-fall",
      title: "Ash Fall (Tephra Fall)",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Ash Fall (Tephra Fall)",
        description:
          "Volcanic ash and rock fragments ejected during explosive eruptions that fall to the ground.",
        effects: [
          {
            label: "",
            description: "Roof collapse due to heavy ash accumulation.",
          },
          {
            label: "",
            description: "Reduced air quality causing respiratory problems.",
          },
          {
            label: "",
            description: "Flight cancellations due to low visibility.",
          },
          {
            label: "",
            description: "Contamination of water supplies.",
          },
        ],
        images: [
          {
            src: af1,
            alt: "Ash Fall",
            caption: "",
            sourceUrl: "",
          },
          {
            src: af2,
            alt: "Ash Cleanup",
            caption: "",
            sourceUrl: "",
          },
          {
            src: af3,
            alt: "Ash Cleanup",
            caption: "",
            sourceUrl: "",
          },
        ],
      },
    },
    {
      id: "lahars",
      title: "Lahars (Volcanic Mudflows)",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Lahars (Volcanic Mudflows)",
        description:
          "Mixtures of volcanic ash, rocks, and water that flow down river valleys, often triggered by rain or melting ice.",
        effects: [
          {
            label: "",
            description: "Burial of communities and farmlands.",
          },
          {
            label: "",
            description: "Long-term river siltation and flooding.",
          },
          {
            label: "",
            description: "Destruction of bridges and infrastructure.",
          },
        ],
        images: [
          {
            src: lh1,
            alt: "Lahar Flow",
            caption: "",
            sourceUrl: "",
          },
          {
            src: lh2,
            alt: "Lahar Damage",
            caption: "",
            sourceUrl: "",
          },
          {
            src: lh3,
            alt: "Lahar Damage",
            caption: "",
            sourceUrl: "",
          },
        ],
      },
    },
    {
      id: "lava-flows",
      title: "Lava Flows",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Lava Flows",
        description:
          "Molten rock that flows from the crater during a non-explosive eruption.",
        effects: [
          {
            label: "",
            description: "Burns everything it touches but moves slowly.",
          },
          {
            label: "",
            description: "Destroys farmland and infrastructure.",
          },
          {
            label: "",
            description: "Creates new land when it cools.",
          },
        ],
        images: [
          {
            src: lf1,
            alt: "Lava Flow",
            caption: "",
            sourceUrl: "",
          },
          {
            src: lf2,
            alt: "Lava Field",
            caption: "",
            sourceUrl: "",
          },
          {
            src: lf3,
            alt: "Lava Field",
            caption: "",
            sourceUrl: "",
          },
        ],
      },
    },
    {
      id: "volcanic-gases",
      title: "Volcanic Gases",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Volcanic Gases",
        description:
          "Emissions of gases such as sulfur dioxide (SO₂), carbon dioxide (CO₂), and hydrogen sulfide (H₂S) released before, during, or after eruptions.",
        effects: [
          {
            label: "",
            description: "Poisoning of animals and humans in low-lying areas.",
          },
          {
            label: "",
            description: "Acid rain formation damaging crops and water.",
          },
          {
            label: "",
            description:
              "Atmospheric pollution contributing to global cooling.",
          },
        ],
        images: [
          {
            src: vg1,
            alt: "Gas Monitoring",
            caption: "",
            sourceUrl: "",
          },
          {
            src: vg2,
            alt: "Gas Monitoring",
            caption: "",
            sourceUrl: "",
          },
          {
            src: vg3,
            alt: "Gas Monitoring",
            caption: "",
            sourceUrl: "",
          },
        ],
      },
    },
    {
      id: "volcanic-tsunamis",
      title: "Volcanic Tsunamis",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Volcanic Tsunamis",
        description:
          "Large sea waves generated by underwater eruptions, landslides, or caldera collapses.",
        effects: [
          {
            label: "",
            description: "Flooding of coastal communities.",
          },
          {
            label: "",
            description: "Destruction of ports and fishing areas.",
          },
          {
            label: "",
            description: "Risk to nearby islands and coastal cities.",
          },
        ],
        images: [
          {
            src: vt1,
            alt: "Tsunami Wave",
            caption: "",
            sourceUrl: "https://www.nature.com/articles/d41586-023-01272-x",
          },
          {
            src: vt2,
            alt: "Tsunami Wave",
            caption: "",
            sourceUrl:
              "https://www.geomar.de/en/news/article/rare-but-devastating-when-volcanoes-trigger-tsunamis",
          },
          {
            src: vt3,
            alt: "Tsunami Wave",
            caption: "",
            sourceUrl:
              "https://www.gfz.de/en/section/physics-of-earthquakes-and-volcanoes/overview/detailpage-section-news/ein-verbessertes-tsunami-fruehwarnsystem-fuer-indonesien",
          },
        ],
      },
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
