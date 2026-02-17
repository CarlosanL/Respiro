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
    "Buen inicio",
    "Día nuevo",
    "Arranca con calma",
    "Primeros pasos",
  ],
  messages: [
    "Que tengas un buen comienzo hoy.\nConfía en ti.\nTodo va bien",
    "Empieza suave, linda.\nEl resto se acomoda solo",
    "Aunque el sueño pese,\nya estás haciendo lo tuyo.\nEso habla bien de ti ",
    "Respira.\nOrganiza.\nAvanza.\nAsí, simple",
  ],
},



  "6-8": {
  titles: [
    "Buen inicio",
    "Camino al día",
    "Arrancando",
    "Primeras horas",
  ],
  messages: [
    "Desayuna tranquila.\nUn paso a la vez.\nEl día se acomoda solo ☕",
    "En camino ya.\nRespira.\nTodo se va a dar 💛",
    "Sin prisas.\nSolo ordena lo importante.\nLo demás puede esperar ✨",
    "Empieza suave.\nConcéntrate en lo primero.\nVas bien 🌤",
  ],
},


  "8-10": {
  titles: [
    "Comienza el día",
    "Ya en el trabajo",
    "Hora de empezar",
    "Primera parte del día",
  ],
  messages: [
    "Buen inicio hoy.\nConcéntrate en lo importante.\nSin prisa ☀️",
    "Haz lo que esté en tus manos.\nEso es suficiente",
    "Empieza tranquila.\nTodo se acomoda trabajando ✨",
    "Confianza y calma.\nCon eso basta, linda.\nEl día se va dando.",
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

  "12-13": {
    titles: [
      "Último tramo",
      "Ya casi tu pausa",
      "Un poco más",
      "Antes del descanso",
    ],
    messages: [
      "Un poco más y sales.\nHazlo simple.\nYa casi toca comer 💙",
      "Último esfuerzo antes de la pausa.\nVas bien ✨",
      "Organiza lo pendiente.\nTu descanso ya viene ☀️",
      "Termina lo urgente.\nLo demás puede esperar 🍽",
    ],
  },

  "13-14": {
    titles: [
      "Hora de comer",
      "Tu momento",
      "Pausa real",
      "Almuerzo tranquilo",
    ],
    messages: [
      "Come con calma.\nY toma agua 💧",
      "Este rato es para ti.\nNada de pendientes ahora 💙",
      "Disfruta tu comida.\nRespira.\nDesconecta ☀️",
      "Hidrátate.\nRelájate.\nDespués sigues ✨",
    ],
  },


  "14-16": {
  titles: [
    "Ya casi",
    "Último esfuerzo",
    "Segunda parte",
    "Mantén el paso",
  ],
  messages: [
    "Último empujón, linda.\nVas muy bien.",
    "Con calma pero firme.\nYa casi termina ✨",
    "Mantén el enfoque.\nEso te sale natural.",
    "Haz lo necesario.\nEl día ya está hecho casi 🌤",
  ],
},


  "16-17": {
    titles: [
      "Última hora",
      "Cierre del día",
      "Ya casi",
      "Último tramo",
    ],
    messages: [
      "Ya hiciste bastante hoy.\nSolo cierra lo pendiente.\nSin presión 💙",
      "Una hora más.\nHazlo simple.\nEso basta 💼",
      "Mira lo que avanzaste.\nEso cuenta mucho ✨",
      "Organiza el cierre.\nDespués podrás desconectar 💪",
    ],
  },

  "17-18": {
    titles: [
      "Camino a casa",
      "Día terminado",
      "Hora de volver",
      "Fin de jornada",
    ],
    messages: [
      "El día ya quedó atrás.\nAhora solo regresa tranquila 💙",
      "Buen trabajo hoy.\nDesconecta poco a poco 🌤",
      "Nada más por hacer ahora.\nSolo llegar a casa ✨",
      "Lo hiciste bien hoy.\nAhora toca descansar 💼",
    ],
  },

  "18-19": {
    titles: [
      "Cambio de ritmo",
      "De regreso",
      "El día baja",
      "Transición",
    ],
    messages: [
      "Ya terminó la jornada.\nAhora ve bajando el ritmo 💙",
      "Camino a casa.\nRespira.\nEl día ya pasó ✨",
      "Suelta poco a poco.\nNo te lleves el trabajo contigo 🌅",
      "Transición tranquila.\nLo importante ya está hecho 🌤",
    ],
  },

  "19-20": {
    titles: [
      "Tiempo para ti",
      "Modo casa",
      "Tu espacio",
      "Recarga energía",
    ],
    messages: [
      "Ahora sí.\nHaz algo por ti 💙",
      "Ejercicio o descanso.\nLo que te haga bien ✨",
      "Este rato es tuyo.\nDisfrútalo 🌊",
      "Cuida tu cuerpo.\nCuida tu mente.\nTodo lo demás puede esperar 🌅",
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

function getPeriod(hour, minute = 0) {
  // Bloque especial: 12:00 - 13:15 (antes de salir a comer)
  if (hour === 12) return "12-13";
  
  // Bloque especial: 13:15 - 14:00 (ya comiendo)
  if (hour === 13 && minute >= 15) return "13-14";
  
  // Bloque especial: 13:00 - 13:15 (transición, sigue siendo el último tramo)
  if (hour === 13 && minute < 15) return "12-13";
  
  // Bloque especial: 16:00 - 17:00 (última hora en el trabajo)
  if (hour === 16) return "16-17";
  
  // Bloque especial: 17:00 - 18:00 (camino a casa)
  if (hour === 17) return "17-18";
  
  // Bloque especial: 18:00 - 19:00 (transición / regreso)
  if (hour === 18) return "18-19";
  
  // Bloque especial: 19:00 - 20:00 (ya en casa / tiempo personal)
  if (hour === 19) return "19-20";
  
  // Resto de bloques de 2 horas
  if (hour >= 0 && hour < 2) return "0-2";
  if (hour >= 2 && hour < 4) return "2-4";
  if (hour >= 4 && hour < 6) return "4-6";
  if (hour >= 6 && hour < 8) return "6-8";
  if (hour >= 8 && hour < 10) return "8-10";
  if (hour >= 10 && hour < 12) return "10-12";
  if (hour >= 14 && hour < 16) return "14-16";
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
  const minute = now.getMinutes();

  const period = getPeriod(hour, minute);
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
  "Ten un excelente dia, linda.\nHoy puedes con todo.\nConfía en ti y en el proceso.\nCon calma y paciencia todo saldra.\nAqui estoy para lo que necesites.";

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
