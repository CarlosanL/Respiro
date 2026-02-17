const names = ["Fer", "Fernanda", "Torti", "Linda", "Bonita"];

function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}

const phrasesByPeriod = {
  night: {
    titles: [
      "Si no puedes dormir...",
      "Todavía despierta?",
      "La noche también calma",
      "Hora de soltar",
      "Casi amanece",
      "Silencio tranquilo",
    ],
    messages: [
      "A veces la mente no se apaga.\nRespira lento.\nNo todo se resuelve esta noche 🌙",
      "Descansa un poco.\nTu cuerpo también necesita pausa.\nMañana lo verás distinto 😴",
      "Incluso las noches largas terminan.\nUn nuevo día está en camino ✨",
      "Dormir también es avanzar.\nCierra los ojos.\nMañana sigues, linda 🌊",
      "No hay prisa ahora.\nSolo calma.\nTu descanso importa 💙",
      "Tu mente merece tranquilidad.\nTu cuerpo también.\nSuelta por hoy 💤",
    ],
  },

  sunrise: {
    titles: [
      "Amanece 🌅",
      "Nuevo comienzo",
      "La luz vuelve",
      "Empieza algo nuevo",
      "Un día más",
    ],
    messages: [
      "Un nuevo día empieza.\nNo necesitas correr.\nSolo avanzar.",
      "La mañana trae otra oportunidad.\nHazla tuya, bonita ✨",
      "Hoy no tiene que ser perfecto.\nSolo real.\nEso es suficiente 🌤",
      "Respira profundo.\nEmpieza tranquila.\nVas bien.",
    ],
  },

  morning: {
    titles: [
      "Buenos días ☀️",
      "Empieza con calma",
      "Nuevo día",
      "Que te vaya bien",
      "Arranca suave",
      "Paso a paso",
    ],
    messages: [
      "Puedes con todo pero no todo a la vez.\nSolo empieza como puedas.\nEso basta.",
      "Confía en lo que sabes hacer.\nHazlo a tu ritmo.\nVas bien 💪",
      "Que tengas un buen día, linda.\nConcéntrate en una cosa a la vez.",
      "Sin presión.\nHaz lo mejor que puedas.\nEso siempre cuenta, bonita.",
      "Tu esfuerzo vale.\nNo lo olvides.\nSigue así.",
      "Hoy puede ser un buen día.\nDéjalo fluir.\nTodo a su tiempo 🌊",
    ],
  },

  noon: {
    titles: [
      "Mitad del día ⚡",
      "Haz una pausa",
      "Momento de respirar",
      "Ya avanzaste bastante",
      "Un pequeño descanso",
    ],
    messages: [
      "Toma agua.\nRespira.\nSigue cuando estés lista 💧",
      "Ya hiciste bastante.\nReconócelo.\nEso también es progreso.",
      "No todo es urgente.\nDate un minuto.\nContinúa luego.",
      "Mitad del día y sigues firme.\nEso habla bien de ti, bonita 💙",
      "Descansar no es perder tiempo.\nEs cuidar tu energía.",
    ],
  },

  afternoon: {
    titles: [
      "La tarde pesa a veces",
      "Ya casi termina",
      "Sigue firme",
      "Un poco más",
      "Mantén el ritmo",
    ],
    messages: [
      "Aunque el día pese,\nsigues avanzando.\nEso es lo importante.",
      "Lo más pesado ya pasó.\nUn poco más y listo 💪",
      "No necesitas correr.\nSolo mantener el paso.\nVas bien.",
      "Cansancio es señal de esfuerzo.\nEso significa que estás dando todo.",
      "Sigue así, linda.\nCon calma pero constante.",
    ],
  },

  sunset: {
    titles: [
      "El día baja el ritmo",
      "Atardecer tranquilo",
      "Se va el sol",
      "Colores del cierre",
      "Momento de mirar atrás",
    ],
    messages: [
      "Mira lo que hiciste hoy.\nEso cuenta.\nReconócelo 🌅",
      "El día termina.\nTú sigues aquí.\nEso ya es suficiente.",
      "No todo salió perfecto.\nPero hiciste tu parte.\nY eso vale.",
      "El esfuerzo del día se nota.\nAhora empieza a bajar el ritmo.",
    ],
  },

  dusk: {
    titles: [
      "Entre el día y la noche",
      "Cambio de ritmo",
      "Hora de bajar la intensidad",
      "Transición tranquila",
      "Empieza la calma",
    ],
    messages: [
      "Ya hiciste bastante.\nEmpieza a soltar lo que quede pendiente.",
      "No te lleves todo a la noche.\nDeja algo para mañana.",
      "Sigue siendo tú.\nEso siempre es suficiente 💙",
      "La calma también es parte del progreso.",
    ],
  },

  "late-night": {
    titles: [
      "Ya es tarde",
      "Hora de cerrar el día",
      "Casi a dormir",
      "Último momento despierta",
    ],
    messages: [
      "Cierra los ojos.\nHoy fue suficiente.\nMañana continúas 🌙",
      "No tienes que pensar más.\nAhora toca descansar.",
      "Duerme tranquila.\nTu esfuerzo de hoy vale.",
      "Descansa, bonita.\nMañana será otro intento.",
    ],
  },

  evening: {
    titles: [
      "Se va el día",
      "Baja el ritmo",
      "Reflexiona un poco",
      "Buen cierre",
      "Hora de soltar",
    ],
    messages: [
      "Hoy hiciste lo que pudiste.\nEso es suficiente.",
      "No todo tiene que resolverse hoy.\nSuelta un poco 💙",
      "Tu esfuerzo fue real.\nEso importa.",
      "Descansa, linda.\nEl día ya terminó.",
      "Mañana puedes continuar.\nAhora toca parar.",
    ],
  },
};

function getPeriod(hour) {
  if (hour >= 0 && hour < 6) return "night";
  if (hour >= 6 && hour < 9) return "sunrise";
  if (hour >= 9 && hour < 12) return "morning";
  if (hour >= 12 && hour < 14) return "noon";
  if (hour >= 14 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 19) return "sunset";
  if (hour >= 19 && hour < 21) return "dusk";
  return "late-night";
}

function createStars() {
  const starsContainer = document.getElementById("stars");
  if (!starsContainer) return;
  const starCount = 50;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 60 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    starsContainer.appendChild(star);
  }
}

function updateBackground() {
  const now = new Date();
  const hour = now.getHours();
  const period = getPeriod(hour);

  document.body.classList.remove(
    "period-night",
    "period-sunrise",
    "period-morning",
    "period-noon",
    "period-afternoon",
    "period-sunset",
    "period-dusk",
    "period-late-night",
  );

  document.body.classList.add("period-" + period);

  const sunElement = document.getElementById("sun");
  const starsElement = document.getElementById("stars");

  if (
    period === "sunrise" ||
    period === "morning" ||
    period === "noon" ||
    period === "afternoon" ||
    period === "sunset"
  ) {
    sunElement.classList.add("visible");
    starsElement.classList.remove("visible");
  } else {
    sunElement.classList.remove("visible");
    starsElement.classList.add("visible");
  }
}

function getMessageIndices(hour) {
  const block = Math.floor(hour / 2);
  const seed = (block * 7) % 11;
  return {
    titleIndex: seed % 6,
    messageIndex: (seed + 3) % 7,
  };
}

function updateMessage() {
  const now = new Date();
  const hour = now.getHours();

  const period = getPeriod(hour);
  const periodData = phrasesByPeriod[period];

  if (periodData) {
    const indices = getMessageIndices(hour);
    const titleIndex = indices.titleIndex % periodData.titles.length;
    const messageIndex = indices.messageIndex % periodData.messages.length;

    const randomName = getRandomName();

    document.getElementById("title").innerText = periodData.titles[titleIndex];
    document.getElementById("name").innerText = randomName;

    let messageText = periodData.messages[messageIndex];
    messageText = messageText.replace(
      /\b(linda|bonita|Fer|Fernanda|Torti)\b/gi,
      randomName,
    );

    document.getElementById("message").innerText = messageText;
  }

  updateBackground();
}

const dailyNote =
  "Hoy lo hiciste bien, mucho mejor que la semana pasada, feliz por ti.";

function showMessage() {
  document.getElementById("container").classList.add("show");
  document.getElementById("buttonStack").classList.add("hidden");
}

function closeMessage() {
  document.getElementById("container").classList.remove("show");
  document.getElementById("buttonStack").classList.remove("hidden");
}

function showDailyNote() {
  document.getElementById("dailyNoteText").innerText = dailyNote;
  document.getElementById("noteContainer").classList.add("show");
  document.getElementById("buttonStack").classList.add("hidden");
}

function closeDailyNote() {
  document.getElementById("noteContainer").classList.remove("show");
  document.getElementById("buttonStack").classList.remove("hidden");
}

// function openSpotify() {
//   window.open(
//     "https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6",
//     "_blank",
//   );
// }

function createBubbles() {
  for (let i = 0; i < 18; i++) {
    let bubble = document.createElement("div");
    bubble.className = "bubble";
    let size = Math.random() * 20 + 10;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.left = Math.random() * 100 + "%";
    bubble.style.animationDuration = Math.random() * 10 + 8 + "s";
    document.body.appendChild(bubble);
  }
}

function createTurtles() {
  for (let i = 0; i < 5; i++) {
    let turtle = document.createElement("div");
    turtle.className = "turtle";
    turtle.style.top = 20 + Math.random() * 60 + "%";
    turtle.style.animationDuration = Math.random() * 15 + 18 + "s";
    turtle.style.animationDelay = i * 5 + Math.random() * 3 + "s";

    let scale = 0.7 + Math.random() * 0.5;
    turtle.style.width = 80 * scale + "px";
    turtle.style.height = 60 * scale + "px";

    let opacity = 0.6 + Math.random() * 0.4;
    turtle.style.opacity = opacity;

    turtle.innerHTML = `
      <div class="turtle-body">
        <div class="shell"></div>
        <div class="head"></div>
        <div class="flipper flipper-left"></div>
        <div class="flipper flipper-right"></div>
        <div class="flipper flipper-back-left"></div>
        <div class="flipper flipper-back-right"></div>
      </div>
    `;

    document.body.appendChild(turtle);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  createStars();
  createBubbles();
  createTurtles();
  updateMessage();

  setInterval(updateMessage, 7200000); // 2 horas = 7200000 ms
});
