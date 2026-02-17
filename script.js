const names = ["Fer", "Fernanda", "Torti", "Linda", "Bonita"];

function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}

const phrasesByPeriod = {
  "0-2": {
    titles: [
      "Madrugada profunda",
      "Silencio nocturno",
      "Hora de descansar",
      "La noche abraza",
    ],
    messages: [
      "Es muy tarde.\nDescansa.\nMañana todo sigue 🌙",
      "Tu cuerpo necesita dormir.\nSuelta los pensamientos.\nDuerme tranquila 💤",
      "Cierra los ojos.\nRespira.\nTodo puede esperar hasta mañana ✨",
      "La noche es para descansar.\nPermítete parar.\nMañana continúas 💙",
    ],
  },

  "2-4": {
    titles: [
      "Noche profunda",
      "Hora de dormir",
      "Demasiado tarde",
      "Descansa ya",
    ],
    messages: [
      "Si estás despierta,\nintenta descansar.\nTu mente necesita pausa 😴",
      "Nada es tan urgente.\nCierra los ojos.\nDuerme un poco 🌙",
      "La madrugada es para soñar.\nNo para pensar.\nDescansa 💫",
      "Suelta todo.\nRespira profundo.\nDuerme tranquila 💙",
    ],
  },

  "4-6": {
    titles: [
      "Antes del amanecer",
      "La noche termina",
      "Pronto amanece",
      "Última hora oscura",
    ],
    messages: [
      "Casi amanece.\nSi puedes dormir un poco más,\nhazlo 🌅",
      "Un nuevo día está cerca.\nDescansa estos últimos momentos 💤",
      "La luz viene en camino.\nRespira tranquila.\nTodo empieza pronto ✨",
      "Calma antes del día.\nAprovecha para descansar 🌊",
    ],
  },

  "6-8": {
    titles: [
      "Amanece 🌅",
      "Nuevo día empieza",
      "Buenos días temprano",
      "La luz llega",
    ],
    messages: [
      "Buenos días.\nEmpieza tranquila.\nTodo a tu ritmo ☀️",
      "Un nuevo día.\nNo hay prisa.\nVas a estar bien 💛",
      "Respira profundo.\nHoy es otro intento.\nVas bien ✨",
      "Que tengas un buen día.\nEmpieza suave.\nPaso a paso 🌤",
    ],
  },

  "8-10": {
    titles: [
      "Mañana activa",
      "El día arranca",
      "Buenos días ☀️",
      "Empieza con fuerza",
    ],
    messages: [
      "La mañana es tuya.\nHaz lo que puedas.\nEso es suficiente 💪",
      "Confía en ti.\nVas a lograrlo.\nUna cosa a la vez 🌟",
      "Hoy puede ser bueno.\nSolo mantén tu ritmo.\nVas bien 💙",
      "No te presiones.\nHaz tu mejor esfuerzo.\nEso siempre vale ✨",
    ],
  },

  "10-12": {
    titles: ["Media mañana", "Sigue así", "Vas bien", "A mitad camino"],
    messages: [
      "Ya llevas avanzado.\nRespira.\nSigue cuando estés lista 💧",
      "Lo estás haciendo bien.\nNo lo dudes.\nContinúa así 💪",
      "Media mañana.\nToma un respiro.\nLuego sigues 🌊",
      "Vas por buen camino.\nSigue tranquila.\nTodo fluye ✨",
    ],
  },

  "12-14": {
    titles: [
      "Mediodía ⚡",
      "Mitad del día",
      "Hora de pausa",
      "Momento de respirar",
    ],
    messages: [
      "Ya es mediodía.\nToma agua.\nDescansa un momento 💧",
      "Llevas bastante hecho.\nReconócelo.\nDate un respiro 💙",
      "No todo es urgente.\nPausa.\nLuego continúas 🌤",
      "Mitad del día.\nVas firme.\nSigue así ✨",
    ],
  },

  "14-16": {
    titles: ["Tarde empieza", "Segunda mitad", "Sigue adelante", "Un poco más"],
    messages: [
      "La tarde ya empezó.\nMantén el ritmo.\nVas bien 💪",
      "Segunda parte del día.\nSigues firme.\nEso es valioso 🌟",
      "No aflojes ahora.\nPoco a poco.\nLlegarás ✨",
      "Tarde activa.\nSigue con calma.\nTodo avanza 🌊",
    ],
  },

  "16-18": {
    titles: ["Tarde avanza", "Casi termina", "Último esfuerzo", "Ya casi"],
    messages: [
      "La tarde pesa un poco.\nPero sigues ahí.\nEso cuenta 💙",
      "Ya casi termina.\nUn poco más.\nVas a lograrlo 💪",
      "Aunque canse,\nsigues avanzando.\nEso es importante ✨",
      "Tarde larga.\nPero vas bien.\nSigue así 🌤",
    ],
  },

  "18-20": {
    titles: ["Atardecer 🌅", "El día baja", "Se va el sol", "Empieza a cerrar"],
    messages: [
      "El día termina.\nMira lo que hiciste.\nEso vale 🌅",
      "Atardecer tranquilo.\nYa hiciste bastante.\nDescansa 💙",
      "Se va el sol.\nEmpieza a soltar.\nHiciste tu parte ✨",
      "El esfuerzo se nota.\nAhora baja el ritmo.\nLo lograste 🌊",
    ],
  },

  "20-22": {
  titles: [
    "Ya es hora de bajar el ritmo",
    "Después de un día largo",
    "Hora de cenar tranquila",
    "Empieza la calma",
  ],
  messages: [
    "Come algo rico.\nRespira un poco.\nEl día ya hizo lo suyo 🌙",
    "No todo tiene que seguir ahora.\nCena tranquila.\nTu descanso importa 💙",
    "Desconéctate un poco.\nNada urgente queda para esta hora.\nMereces calma ✨",
    "Haz tu rutina con calma.\nSin presión.\nMañana sigues, linda 💤",
  ],
},


 "22-0": {
  titles: [
    "Ya es tarde",
    "Modo descanso",
    "Hora de soltar",
    "Silencio",
  ],
  messages: [
    "Si lees esto,\nya es hora de dormir.\nDescansa, bonita 🌙",
    "Nada más por hoy.\nCierra los ojos.\nTodo está en orden 💙",
    "Tu esfuerzo valió.\nAhora toca descansar 💤",
    "Deja el día aquí.\nDuerme tranquila 😴",
  ],
},

};

function getPeriod(hour) {
  if (hour >= 0 && hour < 2) return "0-2";
  if (hour >= 2 && hour < 4) return "2-4";
  if (hour >= 4 && hour < 6) return "4-6";
  if (hour >= 6 && hour < 8) return "6-8";
  if (hour >= 8 && hour < 10) return "8-10";
  if (hour >= 10 && hour < 12) return "10-12";
  if (hour >= 12 && hour < 14) return "12-14";
  if (hour >= 14 && hour < 16) return "14-16";
  if (hour >= 16 && hour < 18) return "16-18";
  if (hour >= 18 && hour < 20) return "18-20";
  if (hour >= 20 && hour < 22) return "20-22";
  return "22-0";
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
