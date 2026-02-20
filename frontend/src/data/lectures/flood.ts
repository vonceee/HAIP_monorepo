import { Lecture } from "../../types";
import image2 from "../../assets/lecture-cards/83465e25-4967-4630-bf67-bcbc9efe0e90.jpg";

export const floodLecture: Lecture = {
  id: "lecture-flood-101",
  title: "Hydrometeorological Hazards",
  description:
    "a deep dive into recognizing the early warning signs of tropical cyclones, floods, storm surges, landslides, and droughts.",
  topic: "Flood",
  imageUrl: image2,
  readTime: 20,
  difficulty: "Intermediate",
  gameType: "flood-sim",
  objectives: [
    "Recognize natural warning signs of hydrometeorological hazards",
    "Identify scientific forecasting indicators used by PAGASA",
    "Apply early-warning knowledge to reduce disaster risk",
  ],
  competencies: [
    {
      description: "Recognize signs of impending hydrometeorological hazards.",
      code: "DRR11/12-IIc-d-33",
    },
  ],
  sections: [
    // 1. Introduction
    {
      id: "intro",
      title: "",
      content: "",
      layout: "introduction",
      layoutData: {
        subTitle:
          "are natural events driven by atmospheric, hydrological, or oceanographic processes.",
        secondaryInfo:
          "Recognizing early warning signs of these hazards is essential for forecasting, disaster preparedness, and reducing loss of life. Even a few minutes of early action can make a big difference.",
        reference:
          "NDRRMC (2023). Disaster Preparedness Manual. | PAGASA (2023). Hydrometeorological Hazards and Early Warning Systems.",
        stats: [
          {
            label: "Observe",
            description:
              "Watch for natural signs like sudden pressure drops and dark cloud formations.",
            icon: "TriangleAlert",
          },
          {
            label: "Monitor",
            description:
              "Track PAGASA rainfall radar, flood advisories, and color-coded warnings.",
            icon: "ShieldCheck",
          },
          {
            label: "Evacuate",
            description:
              "Act on warning signals early — move to safety before hazards peak.",
            icon: "ShieldAlert",
          },
        ],
      },
    },
    // 2. Effects Analysis
    {
      id: "effects",
      title: "",
      content: "",
      layout: "effects-analysis",
      layoutData: {
        cards: [
          {
            title: "Property Damage",
            description:
              "Homes and businesses are submerged, destroying assets and displacing families.",
            highlight: "submerged",
            icon: "Home",
            image:
              "https://images.unsplash.com/photo-1525990520626-d922b0f4e428?w=800&q=80",
            color: "blue",
            borderColor: "hover:border-blue-500",
            shadowColor: "hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]",
            iconColor: "text-blue-400",
            textColor: "group-hover:text-blue-100",
            highlightColor: "text-blue-400",
          },
          {
            title: "Health Risks",
            description:
              "Contaminated water and poor sanitation lead to waterborne diseases and epidemics.",
            highlight: "diseases",
            icon: "Skull",
            image:
              "https://images.unsplash.com/photo-1632832506692-26210f845763?w=800&q=80",
            color: "emerald",
            borderColor: "hover:border-emerald-500",
            shadowColor: "hover:shadow-[0_0_50px_rgba(16,185,129,0.4)]",
            iconColor: "text-emerald-400",
            textColor: "group-hover:text-emerald-100",
            highlightColor: "text-emerald-400",
          },
          {
            title: "Economic Loss",
            description:
              "Agriculture, infrastructure, and business operations are paralyzed for weeks.",
            highlight: "paralyzed",
            icon: "Coins",
            image:
              "https://images.unsplash.com/photo-1533285962792-0c3c5e9cb0d7?w=800&q=80",
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
    // 3. Hazard Detail: Tropical Cyclone
    {
      id: "tropical-cyclone",
      title: "Tropical Cyclone",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Tropical Cyclone",
        description:
          "An intense circular storm originating over warm tropical oceans, characterized by strong winds, heavy rain, and dangerously low atmospheric pressure.",
        features: [
          {
            title: "Sudden Pressure Drop",
            description:
              "A rapid drop in air pressure with rising humidity signals cyclone formation.",
          },
          {
            title: "Spiraling Cloud Patterns",
            description:
              "PAGASA satellites detect rotating cloud systems forming over the Pacific.",
          },
        ],
        effects: [
          {
            label: "Storm-Force Winds",
            description:
              "Rapidly shifting winds uproot trees and destroy structures.",
          },
          {
            label: "Continuous Heavy Rain",
            description:
              "Unrelenting rainfall for hours triggers secondary floods and landslides.",
          },
        ],
        protocol: {
          title: "Heed the Warning Signals",
          description:
            "PAGASA issues Signal Nos. 1–5 for affected areas. Before Typhoon Yolanda (2013) made landfall, a drastic pressure drop and spiral cloud formation were detected via satellite.",
          highlight: "Signal Nos. 1–5",
        },
        images: [
          {
            src: "https://images.unsplash.com/photo-1504608524841-42584120d1c7?w=800&q=80",
            alt: "Tropical Cyclone Satellite View",
            caption:
              "Satellite image of a tropical cyclone's spiraling cloud formation.",
            sourceUrl: "https://www.pagasa.dost.gov.ph",
          },
          {
            src: "https://images.unsplash.com/photo-1569683782046-b6c8e4b3ae1a?w=800&q=80",
            alt: "Typhoon Aftermath",
            caption:
              "Devastation left by a supertyphoon on a coastal community.",
            sourceUrl: "",
          },
        ],
      },
    },
    // 4. Hazard Detail: Flood
    {
      id: "flood",
      title: "Flood",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Flood",
        description:
          "An overflow of water onto normally dry land, caused by continuous heavy rainfall, overflowing rivers, and overwhelmed drainage systems.",
        features: [
          {
            title: "Rising River Levels",
            description:
              "Continuous heavy rain causes rivers and creeks to breach their banks.",
          },
          {
            title: "Color-Coded Alerts",
            description:
              "PAGASA issues Yellow, Orange, and Red flood warnings based on rainfall intensity exceeding 50mm/hr.",
          },
        ],
        effects: [
          {
            label: "Overflowing Canals",
            description:
              "Saturated drainage systems spill floodwaters into streets and homes.",
          },
          {
            label: "Ground Saturation",
            description:
              "Soil softens and water seeps up, weakening foundations.",
          },
        ],
        protocol: {
          title: "Monitor Water Level Alerts",
          description:
            "In Marikina, residents monitor the Marikina River using PAGASA's flood monitoring system. When the river reaches critical levels, evacuation orders are issued immediately.",
          highlight: "critical levels",
        },
        images: [
          {
            src: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=800&q=80",
            alt: "Urban Flash Flooding",
            caption: "Floodwaters submerging an urban street after heavy rain.",
            sourceUrl: "",
          },
          {
            src: "https://images.unsplash.com/photo-1627663708306-69457662c431?w=800&q=80",
            alt: "Flood Rescue",
            caption:
              "First responders navigating floodwaters to rescue residents.",
            sourceUrl: "",
          },
        ],
      },
    },
    // 5. Hazard Detail: Storm Surge
    {
      id: "storm-surge",
      title: "Storm Surge",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Storm Surge",
        description:
          "An abnormal rise in sea level driven by a tropical cyclone's winds and low pressure, capable of inundating coastal communities with devastating speed.",
        features: [
          {
            title: "Receding Shoreline",
            description:
              "A sudden, rapid withdrawal of the sea often precedes a destructive surge.",
          },
          {
            title: "Surge Model Simulations",
            description:
              "PAGASA predicts surge height based on wind speed, storm trajectory, and tide levels.",
          },
        ],
        effects: [
          {
            label: "Coastal Inundation",
            description:
              "Sea water surges inland, wiping out entire coastal barangays.",
          },
          {
            label: "Debris-Laden Currents",
            description:
              "Fast-moving surge water carries debris that increases destruction.",
          },
        ],
        protocol: {
          title: "Evacuate Before the Surge",
          description:
            "Typhoon Yolanda's storm surge reached up to 7 meters high in Tacloban City. Evacuate coastal areas immediately when a storm surge advisory is issued — do not wait.",
          highlight: "7 meters",
        },
        images: [
          {
            src: "https://images.unsplash.com/photo-1505672678657-cc7037095e60?w=800&q=80",
            alt: "Storm Surge Wave",
            caption:
              "Massive coastal inundation from a storm surge during a supertyphoon.",
            sourceUrl: "",
          },
          {
            src: "https://images.unsplash.com/photo-1599940778173-e276d4acb2bb?w=800&q=80",
            alt: "Tacloban Aftermath",
            caption:
              "Aftermath of the Yolanda storm surge devastation in Tacloban City.",
            sourceUrl: "https://www.pagasa.dost.gov.ph",
          },
        ],
      },
    },
    // 6. Hazard Detail: Landslide
    {
      id: "landslide",
      title: "Landslide",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Landslide",
        description:
          "The downward movement of rock, soil, and debris on slopes, triggered by heavy and prolonged rainfall saturating the ground beyond its capacity.",
        features: [
          {
            title: "Ground Cracks & Tilting",
            description:
              "Cracks on slopes or walls and tilting trees signal imminent slope failure.",
          },
          {
            title: "Rainfall Threshold Exceeded",
            description:
              "Soil moisture sensors detect water saturation in landslide-prone areas above the critical threshold.",
          },
        ],
        effects: [
          {
            label: "Buried Communities",
            description:
              "Entire villages can be consumed by cascading debris and mud.",
          },
          {
            label: "Road Blockages",
            description:
              "Transportation networks severed, cutting off rescue and aid.",
          },
        ],
        protocol: {
          title: "Avoid Slopes After Heavy Rain",
          description:
            "The 2006 Leyte landslide was preceded by days of intense rainfall and visible ground cracks. Heed muddy springs, rumbling sounds, and slope deformation as immediate evacuation triggers.",
          highlight: "Leyte landslide",
        },
        images: [
          {
            src: "https://images.unsplash.com/photo-1612429917756-1ab1b843f0a5?w=800&q=80",
            alt: "Landslide on Road",
            caption:
              "Heavy rainfall-triggered landslide blocking a mountain road.",
            sourceUrl: "",
          },
          {
            src: "https://images.unsplash.com/photo-1604598004960-5d5e70e81d29?w=800&q=80",
            alt: "Mudslide Aftermath",
            caption:
              "Community buried by a debris flow following days of intense rainfall.",
            sourceUrl: "",
          },
        ],
      },
    },
    // 7. Hazard Detail: Drought
    {
      id: "drought",
      title: "Drought",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Drought",
        description:
          "A prolonged period of abnormally low rainfall that leads to severe water shortages, crop failures, and environmental degradation.",
        features: [
          {
            title: "Prolonged Dry Days",
            description:
              "Persistent hot and dry weather causes small water bodies — ponds, wells, creeks — to dry up.",
          },
          {
            title: "El Niño Advisory",
            description:
              "PAGASA issues El Niño forecasts with low rainfall projections and declining reservoir levels.",
          },
        ],
        effects: [
          {
            label: "Agricultural Collapse",
            description:
              "Wilting crops and dying livestock devastate farming communities.",
          },
          {
            label: "Water Supply Crisis",
            description:
              "Depleted reservoirs and dams lead to water rationing in urban areas.",
          },
        ],
        protocol: {
          title: "Act on El Niño Advisories",
          description:
            "PAGASA declared an El Niño event in 2019, leading to severe agricultural drought in Central Luzon. Communities stored water reserves and LGUs implemented water-rationing protocols.",
          highlight: "El Niño",
        },
        images: [
          {
            src: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
            alt: "Drought Cracked Earth",
            caption:
              "Severely cracked and parched farmland during an El Niño drought.",
            sourceUrl: "",
          },
          {
            src: "https://images.unsplash.com/photo-1602374585404-fc0d1fc23c69?w=800&q=80",
            alt: "Dried Reservoir",
            caption:
              "A depleted reservoir exposing dry, cracked earth during prolonged drought.",
            sourceUrl: "",
          },
        ],
      },
    },
    // 8. Complete
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
      title: "Scenario 1: The Storm is Coming",
      scenario:
        "You notice dark, thick clouds forming in the eastern sky. The wind shifts rapidly and raindrops have been falling non-stop for 3 hours. PAGASA has just raised Signal No. 2 in your area. What do you do first?",
      options: [
        {
          label: "Wait and see if it gets worse before taking action.",
          isCorrect: false,
          feedback:
            "Waiting is dangerous. Signal No. 2 means destructive winds are expected — early action saves lives.",
        },
        {
          label:
            "Secure your home and prepare a go-bag for possible evacuation.",
          isCorrect: true,
          feedback:
            "Correct! Preparing early when warning signals are raised gives you a critical safety advantage.",
        },
        {
          label: "Go outside to close storm drains near your house.",
          isCorrect: false,
          feedback:
            "Going outside during strong winds and heavy rain is extremely risky. Prioritize your safety indoors first.",
        },
      ],
    },
    {
      id: "scenario-2",
      title: "Scenario 2: Floodwaters Rising",
      scenario:
        "The river near your barangay has been rising steadily for 2 hours. Local officials have issued an Orange flood alert. The water is now knee-deep on the main road. What is the safest action?",
      options: [
        {
          label:
            "Drive through the flooded road to reach higher ground quickly.",
          isCorrect: false,
          feedback:
            "Never drive through floodwaters — even shallow moving water can sweep a vehicle away. 6 inches can knock you down.",
        },
        {
          label:
            "Evacuate on foot to the nearest evacuation center following a pre-planned route.",
          isCorrect: true,
          feedback:
            "Correct! Evacuating early on a known safe route is the best response to rising floodwaters.",
        },
        {
          label: "Stay on the second floor and wait for the flood to subside.",
          isCorrect: false,
          feedback:
            "Staying put during an Orange alert is risky. Floods can rise rapidly — evacuate while you still can.",
        },
      ],
    },
    {
      id: "scenario-3",
      title: "Scenario 3: Coastal Warning",
      scenario:
        "You live in a coastal barangay. The sea suddenly becomes very calm and appears to pull back from the shore. A typhoon is approaching and PAGASA has issued a storm surge advisory. What do you do?",
      options: [
        {
          label:
            "Walk to the shoreline to watch — the calm sea seems safe for now.",
          isCorrect: false,
          feedback:
            "A receding shoreline is a major warning sign of an impending storm surge. Never approach the shore!",
        },
        {
          label: "Immediately evacuate inland to higher elevated ground.",
          isCorrect: true,
          feedback:
            "Correct! A suddenly calm or receding sea followed by a storm surge advisory demands immediate inland evacuation.",
        },
        {
          label: "Board up your windows and stay inside your coastal home.",
          isCorrect: false,
          feedback:
            "Structures near the coast offer little protection against surge waves that can reach 7 meters. Evacuate immediately.",
        },
      ],
    },
  ],
  finalQuiz: [
    {
      "id": "q1",
      "question": "The local weather bureau reports that a low-pressure area (LPA) has entered the Philippine Area of Responsibility (PAR). What should the barangay officials do to forecast possible hazards?",
      "options": [
        "Wait until heavy rains start before preparing.",
        "Monitor PAGASA updates and prepare for possible storm signals.",
        "Ignore the report since LPA rarely develops into a typhoon.",
        "Focus only on temperature forecasts."
      ],
      "correctAnswer": 1
    },
    {
      "id": "q2",
      "question": "Meteorologists observe rapid cloud buildup and dropping air pressure in a coastal area. What can be forecasted from these conditions?",
      "options": [
        "Clear and dry weather.",
        "Possible thunderstorm or heavy rainfall.",
        "Volcanic eruption nearby.",
        "Increasing temperature in the area."
      ],
      "correctAnswer": 1
    },
    {
      "id": "q3",
      "question": "A social media post says, “A super typhoon will hit the Philippines tomorrow,” but PAGASA has not issued any warning. How can you verify the accuracy of this claim?",
      "options": [
        "Share it immediately to alert others.",
        "Wait to see if it rains the next day.",
        "Check the official PAGASA or NDRRMC bulletins.",
        "Believe the post because it has thousands of likes."
      ],
      "correctAnswer": 2
    },
    {
      "id": "q4",
      "question": "Your phone app shows a severe flood warning, but local authorities haven’t announced anything yet. What should you do to ensure accuracy before acting?",
      "options": [
        "Compare the information with government advisories.",
        "Ignore it since there’s no official announcement.",
        "Immediately evacuate without checking.",
        "Ask friends if they heard the same news."
      ],
      "correctAnswer": 0
    },
    {
      "id": "q5",
      "question": "After days of heavy rain, a hillside community experiences a landslide. What is the most likely cause of this hazard?",
      "options": [
        "Strong winds loosened the trees.",
        "Prolonged rainfall saturated the soil, weakening its stability.",
        "Earthquake vibrations caused the slope to collapse.",
        "The land was too dry before the rain."
      ],
      "correctAnswer": 1
    },
    {
      "id": "q6",
      "question": "Flooding occurred in a city even after only moderate rain. What could be the main contributing factor?",
      "options": [
        "The city’s drainage system is clogged or inadequate.",
        "There was too much sunlight before the rain.",
        "The city is too far from the coast.",
        "Wind direction caused water to pile up."
      ],
      "correctAnswer": 0
    },
    {
      "id": "q7",
      "question": "Weather records show that a certain province often experiences strong typhoons every last quarter of the year. What pattern can be recognized from this data?",
      "options": [
        "The area is safe during any season.",
        "The province is located along the common typhoon path during monsoon months.",
        "The typhoons are random events.",
        "The frequency is caused by human activity."
      ],
      "correctAnswer": 1
    },
    {
      "id": "q8",
      "question": "In the past five years, flash floods always occur shortly after intense rainfall lasting more than an hour. What does this pattern suggest?",
      "options": [
        "The floods are caused by sea-level rise.",
        "There is a predictable relationship between rainfall intensity and flooding.",
        "Floods happen by coincidence.",
        "Rainfall has no connection to flooding."
      ],
      "correctAnswer": 1
    },
    {
      "id": "q9",
      "question": "PAGASA raises a Tropical Cyclone Wind Signal No. 3 for your area. What should your family do first?",
      "options": [
        "Go to the nearest open field to watch the winds.",
        "Secure your house, prepare a go-bag, and stay tuned to official updates.",
        "Wait for the rain to stop before preparing.",
        "Continue normal activities as long as there’s power."
      ],
      "correctAnswer": 1
    },
    {
      "id": "q10",
      "question": "Your school is in a flood-prone area, and heavy rains have been continuous since early morning. As a student leader, what is the best decision to recommend to the principal?",
      "options": [
        "Continue classes until dismissal time.",
        "Wait for official cancellation from the mayor’s office.",
        "Suspend classes early and ensure students get home safely.",
        "Ask everyone to stay and observe the rainfall pattern."
      ],
      "correctAnswer": 2
    }
  ],
};
