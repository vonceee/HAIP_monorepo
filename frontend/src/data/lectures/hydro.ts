import { Lecture } from "../../types";
import image2 from "../../assets/lecture-cards/83465e25-4967-4630-bf67-bcbc9efe0e90.jpg";
import tc1 from "../../assets/hydro/tropical-cyclone/tc1.jpg";
import tc2 from "../../assets/hydro/tropical-cyclone/tc2.jpg";
import tc3 from "../../assets/hydro/tropical-cyclone/tc3.jpg";
import f1 from "../../assets/hydro/flood/f1.jpg";
import f2 from "../../assets/hydro/flood/f2.jpg";
import f3 from "../../assets/hydro/flood/f3.jpg";

export const hydroLecture: Lecture = {
  id: "lecture-hydro",
  title: "Hydro-meteorological Hazards",
  description:
    "a deep dive into recognizing the early warning signs of tropical cyclones, floods, storm surges, landslides, and droughts.",
  topic: "Flood",
  imageUrl: image2,
  readTime: 20,
  gameType: "flood-sim",
  competencies: [
    {
      description: "Recognize signs of impending hydrometeorological hazards.",
      code: "DRR11/12-IIc-d-33",
    },
  ],
  sections: [
    {
      id: "intro",
      title: "",
      content: "",
      layout: "introduction",
      layoutData: {
        subTitle:
          "are natural events caused by atmospheric, hydrological, or oceanographic processes.",
        secondaryInfo:
          "These include tropical cyclones, floods, storm surges, droughts, and monsoons. Recognizing the early warning signs of these hazards is essential for forecasting, disaster preparedness, and reducing loss of life and property. “Awareness of natural warning signs saves lives — even a few minutes of early action can make a big difference.” ",
        reference:
          "— National Disaster Risk Reduction and Management Council (NDRRMC), 2023",
      },
    },
    {
      id: "tropical-cyclone-natural",
      title: "Tropical Cyclone",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Signs of an Impending Tropical Cyclone",
        description: "",
        effectsTitle: "Natural Signs",
        effects: [
          {
            label: "",
            description: "Sudden drop in air pressure and increased humidity",
          },
          {
            label: "",
            description: "Dark, thick clouds forming in the eastern sky",
          },
          {
            label: "",
            description: "Strong winds shifting directions rapidly",
          },
          {
            label: "",
            description: "Continuous heavy rain that does not stop for hours",
          },
        ],
        images: [
          {
            src: tc1,
            alt: "Tropical Cyclone Satellite View",
            caption: "",
            sourceUrl: "",
          },
          {
            src: tc2,
            alt: "Typhoon Aftermath",
            caption: "",
            sourceUrl: "",
          },
          {
            src: tc3,
            alt: "Typhoon Aftermath",
            caption: "",
            sourceUrl: "",
          },
        ],
      },
    },
    {
      id: "tropical-cyclone-scientific",
      title: "Tropical Cyclone",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Signs of an Impending Tropical Cyclone",
        description: "",
        effectsTitle: "Scientific Forecasting Signs",
        effects: [
          {
            label: "",
            description:
              "PAGASA satellite images showing a spiraling cloud pattern over the Pacific",
          },
          {
            label: "",
            description:
              "Weather bulletins announcing tropical depression or storm formation",
          },
          {
            label: "",
            description:
              "Warning signals (Signal Nos. 1–5) issued for affected areas",
          },
        ],
        protocol: {
          title: "Typhoon Yolanda (2013)",
          description:
            "Before Typhoon Yolanda (2013) made landfall, PAGASA recorded a drastic pressure drop and spiral cloud formation detected via satellite.",
          highlight: "drastic pressure drop",
        },
        reference: "PAGASA (2023), Tropical Cyclone Monitoring Manual.",
        images: [
          {
            src: tc1,
            alt: "Tropical Cyclone Satellite View",
            caption: "",
            sourceUrl: "",
          },
          {
            src: tc2,
            alt: "Typhoon Aftermath",
            caption: "",
            sourceUrl: "",
          },
          {
            src: tc3,
            alt: "Typhoon Aftermath",
            caption: "",
            sourceUrl: "",
          },
        ],
      },
    },
    {
      id: "flood-natural",
      title: "Flood",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Signs of an Impending Flood",
        description: "",
        effectsTitle: "Natural Signs",
        effects: [
          {
            label: "",
            description:
              "Continuous heavy rainfall lasts for several hours or days",
          },
          {
            label: "",
            description: "Rising water levels in rivers and creeks",
          },
          {
            label: "",
            description: "Overflowing canals or drainage systems",
          },
          {
            label: "",
            description: "Soil softening or water seeping from the ground",
          },
        ],
        images: [
          {
            src: f1,
            alt: "Urban Flash Flooding",
            caption: "",
            sourceUrl: "",
          },
          {
            src: f2,
            alt: "Flood Rescue",
            caption: "",
            sourceUrl: "",
          },
          {
            src: f3,
            alt: "Flood Rescue",
            caption: "",
            sourceUrl: "",
          },
        ],
      },
    },
    {
      id: "flood-scientific",
      title: "Flood",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Signs of an Impending Flood",
        description: "",
        effectsTitle: "Scientific Forecasting Signs",
        effects: [
          {
            label: "",
            description:
              "PAGASA rainfall radar showing high rainfall intensity (>50mm/hr)",
          },
          {
            label: "",
            description:
              "Flood advisories and color-coded warnings (Yellow, Orange, Red Alerts)",
          },
        ],
        protocol: {
          title: "Marikina River Monitoring",
          description:
            "In Marikina, residents monitor the Marikina River water level using PAGASA’s flood monitoring system.",
          highlight: "Marikina River",
        },
        reference:
          "PAGASA (2023), Flood Forecasting and Warning System for River Basins.",
        images: [
          {
            src: f1,
            alt: "Urban Flash Flooding",
            caption: "",
            sourceUrl: "",
          },
          {
            src: f2,
            alt: "Flood Rescue",
            caption: "",
            sourceUrl: "",
          },
          {
            src: f3,
            alt: "Flood Rescue",
            caption: "",
            sourceUrl: "",
          },
        ],
      },
    },
    {
      id: "storm-surge-natural",
      title: "Storm Surge",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Signs of an Impending Storm Surge",
        description: "",
        effectsTitle: "Natural Signs",
        effects: [
          {
            label: "",
            description:
              "Unusually calm sea followed by a sudden rise in water level",
          },
          {
            label: "",
            description: "Strong winds blowing toward the shore",
          },
          {
            label: "",
            description: "Rapidly receding shoreline just before the surge",
          },
          {
            label: "",
            description: "Low-pressure readings and dark clouds near the coast",
          },
        ],
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
    {
      id: "storm-surge-scientific",
      title: "Storm Surge",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Signs of an Impending Storm Surge",
        description: "",
        effectsTitle: "Scientific Forecasting Signs",
        effects: [
          {
            label: "",
            description:
              "PAGASA storm surge advisories issued with typhoon warnings",
          },
          {
            label: "",
            description:
              "Model simulations predicting surge height based on wind speed and tide",
          },
        ],
        protocol: {
          title: "Typhoon Yolanda (2013)",
          description:
            "During Typhoon Yolanda, storm surges up to 7 meters high devastated Tacloban City.",
          highlight: "7 meters high",
        },
        reference:
          "DOST-PAGASA & JICA (2021), Storm Surge Hazard Mapping Project.",
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
    {
      id: "landslide-natural",
      title: "Landslide",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Signs of an Impending Landslide",
        description: "",
        effectsTitle: "Natural Signs",
        effects: [
          {
            label: "",
            description: "Cracks appearing on the ground or walls",
          },
          {
            label: "",
            description: "Tilting of trees or poles",
          },
          {
            label: "",
            description: "Sudden appearance of muddy springs",
          },
          {
            label: "",
            description:
              "Unusual sounds (like rumbling or cracking) coming from the slope",
          },
        ],
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
    {
      id: "landslide-scientific",
      title: "Landslide",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Signs of an Impending Landslide",
        description: "",
        effectsTitle: "Scientific Forecasting Signs",
        effects: [
          {
            label: "",
            description:
              "Soil moisture sensors detecting high water saturation",
          },
          {
            label: "",
            description: "Rainfall threshold exceeded in landslide-prone areas",
          },
          {
            label: "",
            description: "Ground deformation monitoring by PHIVOLCS or LGUs",
          },
        ],
        protocol: {
          title: "Leyte Landslide (2006)",
          description:
            "The 2006 Leyte landslide was preceded by days of intense rainfall and visible ground cracks.",
          highlight: "visible ground cracks",
        },
        reference: "PHIVOLCS (2022), Landslide Susceptibility Mapping Report.",
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
    {
      id: "drought-natural",
      title: "Drought",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Signs of an Impending Drought",
        description: "",
        effectsTitle: "Natural Signs",
        effects: [
          {
            label: "",
            description: "Prolonged dry and hot days",
          },
          {
            label: "",
            description: "Drying of small water bodies (ponds, wells, creeks)",
          },
          {
            label: "",
            description: "Wilting crops and grass",
          },
          {
            label: "",
            description: "Dusty air and increased temperature",
          },
        ],
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
    {
      id: "drought-scientific",
      title: "Drought",
      content: "",
      layout: "hazard-detail",
      layoutData: {
        title: "Signs of an Impending Drought",
        description: "",
        effectsTitle: "Scientific Forecasting Signs",
        effects: [
          {
            label: "",
            description: "El Niño advisory from PAGASA",
          },
          {
            label: "",
            description: "Low rainfall forecasts over multiple weeks",
          },
          {
            label: "",
            description: "Decreased water level in reservoirs and dams",
          },
        ],
        protocol: {
          title: "El Niño Event (2019)",
          description:
            "PAGASA declared an El Niño event in 2019, leading to agricultural drought in Central Luzon.",
          highlight: "El Niño event",
        },
        reference: "PAGASA (2020), Climate Monitoring Bulletin.",
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
  ],
  finalQuiz: [
    {
      id: "q1",
      question:
        "The local weather bureau reports that a low-pressure area (LPA) has entered the Philippine Area of Responsibility (PAR). What should the barangay officials do to forecast possible hazards?",
      options: [
        "Wait until heavy rains start before preparing.",
        "Monitor PAGASA updates and prepare for possible storm signals.",
        "Ignore the report since LPA rarely develops into a typhoon.",
        "Focus only on temperature forecasts.",
      ],
      correctAnswer: 1,
    },
    {
      id: "q2",
      question:
        "Meteorologists observe rapid cloud buildup and dropping air pressure in a coastal area. What can be forecasted from these conditions?",
      options: [
        "Clear and dry weather.",
        "Possible thunderstorm or heavy rainfall.",
        "Volcanic eruption nearby.",
        "Increasing temperature in the area.",
      ],
      correctAnswer: 1,
    },
    {
      id: "q3",
      question:
        "A social media post says, “A super typhoon will hit the Philippines tomorrow,” but PAGASA has not issued any warning. How can you verify the accuracy of this claim?",
      options: [
        "Share it immediately to alert others.",
        "Wait to see if it rains the next day.",
        "Check the official PAGASA or NDRRMC bulletins.",
        "Believe the post because it has thousands of likes.",
      ],
      correctAnswer: 2,
    },
    {
      id: "q4",
      question:
        "Your phone app shows a severe flood warning, but local authorities haven’t announced anything yet. What should you do to ensure accuracy before acting?",
      options: [
        "Compare the information with government advisories.",
        "Ignore it since there’s no official announcement.",
        "Immediately evacuate without checking.",
        "Ask friends if they heard the same news.",
      ],
      correctAnswer: 0,
    },
    {
      id: "q5",
      question:
        "After days of heavy rain, a hillside community experiences a landslide. What is the most likely cause of this hazard?",
      options: [
        "Strong winds loosened the trees.",
        "Prolonged rainfall saturated the soil, weakening its stability.",
        "Earthquake vibrations caused the slope to collapse.",
        "The land was too dry before the rain.",
      ],
      correctAnswer: 1,
    },
    {
      id: "q6",
      question:
        "Flooding occurred in a city even after only moderate rain. What could be the main contributing factor?",
      options: [
        "The city’s drainage system is clogged or inadequate.",
        "There was too much sunlight before the rain.",
        "The city is too far from the coast.",
        "Wind direction caused water to pile up.",
      ],
      correctAnswer: 0,
    },
    {
      id: "q7",
      question:
        "Weather records show that a certain province often experiences strong typhoons every last quarter of the year. What pattern can be recognized from this data?",
      options: [
        "The area is safe during any season.",
        "The province is located along the common typhoon path during monsoon months.",
        "The typhoons are random events.",
        "The frequency is caused by human activity.",
      ],
      correctAnswer: 1,
    },
    {
      id: "q8",
      question:
        "In the past five years, flash floods always occur shortly after intense rainfall lasting more than an hour. What does this pattern suggest?",
      options: [
        "The floods are caused by sea-level rise.",
        "There is a predictable relationship between rainfall intensity and flooding.",
        "Floods happen by coincidence.",
        "Rainfall has no connection to flooding.",
      ],
      correctAnswer: 1,
    },
    {
      id: "q9",
      question:
        "PAGASA raises a Tropical Cyclone Wind Signal No. 3 for your area. What should your family do first?",
      options: [
        "Go to the nearest open field to watch the winds.",
        "Secure your house, prepare a go-bag, and stay tuned to official updates.",
        "Wait for the rain to stop before preparing.",
        "Continue normal activities as long as there’s power.",
      ],
      correctAnswer: 1,
    },
    {
      id: "q10",
      question:
        "Your school is in a flood-prone area, and heavy rains have been continuous since early morning. As a student leader, what is the best decision to recommend to the principal?",
      options: [
        "Continue classes until dismissal time.",
        "Wait for official cancellation from the mayor’s office.",
        "Suspend classes early and ensure students get home safely.",
        "Ask everyone to stay and observe the rainfall pattern.",
      ],
      correctAnswer: 2,
    },
  ],
};
