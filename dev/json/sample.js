var eventData = [
  {
    name: "Day 1",
    date: "10/06/2020", // the date
    from: "09:30:00", // start time (may expand as a scope)
    to: "13:00:00", // end time (may expand as a scope)
    defaultCity: "New York", // Default timezone
    defaultTimezoneOffset: "-4", // in GMT
    agenda: {
      name: "Main Track",
      description: "Some description here...",
      backgroundColor: "#104836",
      items: [
        {
          from: "10:00:00", // start time (exact)
          to: "10:10:00", // end time (exact)
          title: "Championing the female economy",
          translation: "Potenciando la economía femenina",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Remarks",
          numOfSpeakers: "2",
        },
        {
          from: "10:10:00", // start time (exact)
          to: "10:20:00", // end time (exact)
          title: "Keynote",
          translation: "Discurso de apertura",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Keynote",
          numOfSpeakers: "1",
        },
        {
          from: "10:20:00", // start time (exact)
          to: "10:30:00", // end time (exact)
          title: "Data driving the female economy",
          translation: "Datos que impulsan la economía femenina",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Presentation",
          numOfSpeakers: "1",
        },
        {
          from: "10:30:00", // start time (exact)
          to: "11:15:00", // end time (exact)
          title: "The opportunity of championing the female economy",
          translation: "La oportunidad de potenciar la economía femenina",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Panel Discussion",
          numOfSpeakers: "5",
        },
        {
          from: "11:15:00", // start time (exact)
          to: "11:25:00", // end time (exact)
          title: "Break",
          translation: "",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#999", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#cacaca",
          sessionType: "",
          numOfSpeakers: "",
        },
        {
          from: "11:25:00", // start time (exact)
          to: "11:35:00", // end time (exact)
          title:
            "Accelerating women's economic power through non-financial services",
          translation:
            "Acelerando el poder económico de las mujeres a través de los servicios no financieros",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Fireside Chat",
          numOfSpeakers: "2",
        },
        {
          from: "12:05:00", // start time (exact)
          to: "12:15:00", // end time (exact)
          title: "Regroup and consolidation",
          translation: "Reagrupamiento y consolidación",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Remarks",
          numOfSpeakers: "1",
        },
        {
          from: "12:15:00", // start time (exact)
          to: "12:35:00", // end time (exact)
          title: "Wealth tech: A new way to make money",
          translation:
            "Tecnología en la gestión de patrimonios: una nueva forma de ganar dinero",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "",
          numOfSpeakers: "",
        },
        {
          from: "12:35:00", // start time (exact)
          to: "12:55:00", // end time (exact)
          title: "Day 1 highlights and learnings",
          translation: "Puntos destacados y aprendizajes del día 1",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Remarks",
          numOfSpeakers: "1",
        },
      ],
    },
    breakouts: {
      name: "Breakouts",
      description: "Some description here...",
      backgroundColor: "#3cb4ff",
      items: [
        {
          title: "-",
          translation:
            "Sesión de Trabajo 1: El caso de negocios y la importancia de medir los servicios no financieros  (español)",
          from: "11:35:00", // start time (exact)
          to: "12:05:00", // end time (exact)
          bgColor: "#3cb4ff",
          textColor: "#fff",
          highlightBg: "#6bd5ff",
          url: "#",
          people: [
            {
              name: "",
              imageURL: "",
            },
          ],
          sessionType: "Breakout Session",
          numOfSpeakers: "3",
        },
        {
          title: "Breakout 2: NFS business case & how to measure it (English)",
          translation:
            "Sesión de Trabajo 2: El caso de negocios y la importancia de medir los servicios no financieros  (inglés)",
          from: "11:35:00", // start time (exact)
          to: "12:05:00", // end time (exact)
          bgColor: "#3cb4ff",
          textColor: "#fff",
          highlightBg: "#6bd5ff",
          url: "#",
          people: [
            {
              name: "",
              imageURL: "",
            },
          ],
          sessionType: "Breakout Session",
          numOfSpeakers: "3",
        },
        {
          title: "Breakout 3: Tapping into SME ecoystem",
          translation:
            "Sesión de trabajo 3: Aprovechando el ecosistema de las PYMEs",
          from: "11:35:00", // start time (exact)
          to: "12:05:00", // end time (exact)
          bgColor: "#3cb4ff",
          textColor: "#fff",
          highlightBg: "#6bd5ff",
          url: "#",
          people: [
            {
              name: "",
              imageURL: "",
            },
          ],
          sessionType: "Breakout Session",
          numOfSpeakers: "3",
        },
        {
          title: "Breakout 4: Upskilling through eCommerce platforms",
          translation:
            "Sesión de trabajo 4: Mejorando las habilidades a través de las plataformas de comercio electrónico",
          from: "11:35:00", // start time (exact)
          to: "12:05:00", // end time (exact)
          bgColor: "#3cb4ff",
          textColor: "#fff",
          highlightBg: "#6bd5ff",
          url: "#",
          people: [
            {
              name: "",
              imageURL: "",
            },
          ],
          sessionType: "Breakout Session",
          numOfSpeakers: "4",
        },
      ],
    },
  },
  {
    name: "Day 2",
    date: "10/07/2020", // the date
    from: "06:30:00", // start time (may expand as a scope)
    to: "10:30:00", // end time (may expand as a scope)
    defaultCity: "New York", // Default timezone
    defaultTimezoneOffset: "-4", // in GMT
    agenda: {
      name: "Main Track",
      description: "Some description here...",
      backgroundColor: "#104836",
      items: [
        {
          from: "07:00:00", // start time (exact)
          to: "07:05:00", // end time (exact)
          title:
            "The transformational opportunity of fintech on the female economy",
          translation:
            "La oportunidad de la transformación de las fintech en la economía femenina",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Remarks",
          numOfSpeakers: "1",
        },
        {
          from: "07:05:00", // start time (exact)
          to: "07:25:00", // end time (exact)
          title: "Blue sky vision - the impact of fintech on women's markets",
          translation:
            "Visión General: el impacto de las fintech en el segmento mujer",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Fireside Chat",
          numOfSpeakers: "2",
        },
        {
          from: "07:25:00", // start time (exact)
          to: "07:45:00", // end time (exact)
          title: "Alliance fintech research",
          translation: "Investigación fintech de la Alianza",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Fireside Chat",
          numOfSpeakers: "2",
        },
        {
          from: "07:45:00", // start time (exact)
          to: "08:30:00", // end time (exact)
          title:
            "How fintechs are and can support the full financial inclusion of women",
          translation:
            "Cómo las fintech están y pueden apoyar a la plena inclusión financiera de las mujeres",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Panel Discussion",
          numOfSpeakers: "5",
        },
        {
          from: "08:30:00", // start time (exact)
          to: "08:35:00", // end time (exact)
          title: "Break",
          translation: "",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#999", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#cacaca",
          sessionType: "",
          numOfSpeakers: "",
        },
        {
          from: "08:35:00", // start time (exact)
          to: "08:40:00", // end time (exact)
          title: "Reimagining fintech as gender intelligent",
          translation: "Reimaginando a las fintechs con inteligencia de género",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Remarks",
          numOfSpeakers: "1",
        },
        {
          from: "09:15:00", // start time (exact)
          to: "09:25:00", // end time (exact)
          title: "Regroup and consolidation",
          translation: "Reagrupamiento y consolidación",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Remarks",
          numOfSpeakers: "1",
        },
        {
          from: "09:25:00", // start time (exact)
          to: "09:55:00", // end time (exact)
          title: "e-Hackathon pitches & final vote",
          translation: "Presentaciones finales del e-Hackathon y votación fina",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Presentation",
          numOfSpeakers: "2",
        },
        {
          from: "09:55:00", // start time (exact)
          to: "10:05:00", // end time (exact)
          title: "Day 2 highlights and learnings",
          translation: "Puntos destacados y aprendizajes del día 2",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Remarks",
          numOfSpeakers: "1",
        },
      ],
    },
    breakouts: {
      name: "Breakouts",
      description: "Some description here...",
      backgroundColor: "#3cb4ff",
      items: [
        {
          title: "Breakout 1: Data bias & course corrections",
          translation:
            "Sesión de trabajo 1: sesgo de datos y cambios de procesos",
          from: "08:40:00", // start time (exact)
          to: "09:15:00", // end time (exact)
          bgColor: "#3cb4ff",
          textColor: "#fff",
          highlightBg: "#6bd5ff",
          url: "#",
          people: [
            {
              name: "",
              imageURL: "",
            },
          ],
          sessionType: "Breakout Session",
          numOfSpeakers: "3",
        },
        {
          title:
            "Breakout 2: Incentives & ecosystem support - defining stakeholder roles",
          translation:
            "Sesión de trabajo 2: Incentivos y apoyo al ecosistema: definiendo los roles de los grupos de interés",
          from: "08:40:00", // start time (exact)
          to: "09:15:00", // end time (exact)
          bgColor: "#3cb4ff",
          textColor: "#fff",
          highlightBg: "#6bd5ff",
          url: "#",
          people: [
            {
              name: "",
              imageURL: "",
            },
          ],
          sessionType: "Breakout Session",
          numOfSpeakers: "4",
        },
        {
          title:
            "Breakout 3: Business case For gender intelligent fintech (Spanish)",
          translation:
            "Sesión de trabajo 3: El caso de negocio para las fintech con inteligencia de género",
          from: "08:40:00", // start time (exact)
          to: "09:15:00", // end time (exact)
          bgColor: "#3cb4ff",
          textColor: "#fff",
          highlightBg: "#6bd5ff",
          url: "#",
          people: [
            {
              name: "",
              imageURL: "",
            },
          ],
          sessionType: "Breakout Session",
          numOfSpeakers: "4",
        },
        {
          title: "Breakout 4: Investing in women-focused fintechs",
          translation:
            "Sesión de trabajo 4: Invirtiendo en las fintechs centradas en las mujeres",
          from: "08:40:00", // start time (exact)
          to: "09:15:00", // end time (exact)
          bgColor: "#3cb4ff",
          textColor: "#fff",
          highlightBg: "#6bd5ff",
          url: "#",
          people: [
            {
              name: "",
              imageURL: "",
            },
          ],
          sessionType: "Breakout Session",
          numOfSpeakers: "3",
        },
      ],
    },
  },
  {
    name: "Day 3",
    date: "10/08/2020", // the date
    from: "08:30:00", // start time (may expand as a scope)
    to: "12:30:00", // end time (may expand as a scope)
    defaultCity: "New York", // Default timezone
    defaultTimezoneOffset: "-4", // in GMT
    agenda: {
      name: "Main Track",
      description: "Some description here...",
      backgroundColor: "#104836",
      items: [
        {
          from: "09:00:00", // start time (exact)
          to: "09:05:00", // end time (exact)
          title: "The future of work",
          translation: "El futuro del trabajo",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Remarks",
          numOfSpeakers: "1",
        },
        {
          from: "09:05:00", // start time (exact)
          to: "09:25:00", // end time (exact)
          title:
            "Building the workforce of tomorrow - diversity & inclusion post pandemic",
          translation:
            "Construyendo la fuerza laboral de mañana: diversidad e inclusión después de la pandemia",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Fireside Chat",
          numOfSpeakers: "2",
        },
        {
          from: "09:25:00", // start time (exact)
          to: "10:10:00", // end time (exact)
          title:
            "Building the workforce of tomorrow - diversity & inclusion post pandemic",
          translation: "",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Fireside Chat",
          numOfSpeakers: "2",
        },
        {
          from: "10:10:00", // start time (exact)
          to: "10:15:00", // end time (exact)
          title: "Break",
          translation: "",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#cacaca",
          sessionType: "Panel Discussion",
          numOfSpeakers: "5",
        },
        {
          from: "10:15:00", // start time (exact)
          to: "10:50:00", // end time (exact)
          title: "Interactive session or gamification",
          translation: "Sesión interactiva o gamificación",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#999", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "",
          numOfSpeakers: "",
        },
        {
          from: "10:50:00", // start time (exact)
          to: "11:35:00", // end time (exact)
          title:
            "Doing Business 2020 & beyond: serving customers in the new normal",
          translation:
            "Haciendo negocios 2020 y más allá: sirviendo a los clientes en la nueva normalidad",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Remarks",
          numOfSpeakers: "1",
        },
        {
          from: "11:35:00", // start time (exact)
          to: "11:55:00", // end time (exact)
          title: "Women SME platform",
          translation: "Plataforma PYMEs propiedad de mujeres",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Remarks",
          numOfSpeakers: "1",
        },
        {
          from: "11:55:00", // start time (exact)
          to: "12:05:00", // end time (exact)
          title: "Closing remarks",
          translation: "Palabras de clausura",
          url: "#",
          people: [
            {
              name: "",
              image: "",
            },
          ],
          tooltip: "",
          bgColor: "#104836", // background color customizable
          textColor: "#fff", // text color customizable
          highlightBg: "#42d886",
          sessionType: "Presentation",
          numOfSpeakers: "2",
        },
      ],
    },
  },
];
