import { Lecture } from "../../types";
import image1 from "../../assets/lecture-cards/19e4a3c9-78f1-48f6-8d76-327cee5077d3.jpg";

export const earthquakeLecture: Lecture = {
  id: "lecture-earthquake",
  title: "Earthquake Hazards",
  description:
    "a deep dive into primary and secondary earthquake hazards, including ground rupture, liquefaction, landslides, tsunamis, and fire failures.",
  topic: "Earthquake",
  imageUrl: image1,
  readTime: 15,
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
    {
      id: "intro",
      title: "Introduction",
      content: "",
    },
    {
      id: "effects",
      title: "Effects Analysis",
      content: "",
    },
    {
      id: "ground-rupture",
      title: "Ground Rupture",
      content: "",
    },
    {
      id: "liquefaction",
      title: "Liquefaction",
      content: "",
    },
    {
      id: "landslides",
      title: "Landslides",
      content: "",
    },
    {
      id: "tsunami",
      title: "Tsunami",
      content: "",
    },
    {
      id: "fire-infra",
      title: "Fire & Infrastructure Failure",
      content: "",
    },
    {
      id: "final-quiz",
      title: "Final Quiz",
      content: "",
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
  gameType: "earthquake-sim",
};
