const PASSWORD = "Rigsby";
const ACCESS_PHRASE = "open";

const welcomeScreen = document.getElementById("welcome-screen");
const passwordScreen = document.getElementById("password-screen");
const desktop = document.getElementById("desktop");

const userTile = document.getElementById("user-tile");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");
const cancelButton = document.getElementById("cancel-button");
const shutdownButton = document.getElementById("shutdown-button");
const optionsButton = document.getElementById("options-button");
const loginMessage = document.getElementById("login-message");
const clock = document.getElementById("clock");

const startButton = document.getElementById("start-button");
const startMenu = document.getElementById("start-menu");
const logoffButton = document.getElementById("logoff-button");
const desktopShutdownButton = document.getElementById("desktop-shutdown-button");

const accessInput = document.getElementById("access-input");
const accessButton = document.getElementById("access-button");
const accessMessage = document.getElementById("access-message");
const accessLocked = document.getElementById("access-locked");
const accessLoader = document.getElementById("access-loader");
const accessGranted = document.getElementById("access-granted");
const loaderLine = document.getElementById("loader-line");
const loaderLog = document.getElementById("loader-log");
const progressBar = document.getElementById("progress-bar");

const signals = [
  "The system remembers things you have not done yet.",
  "Archive integrity: questionable.",
  "A window was opened somewhere else.",
  "Fortia OS is operating within acceptable nostalgia limits.",
  "Signal received. Sender unknown.",
  "Nothing is missing. Something is hidden.",
  "Deleted files may contain active truth.",
  "Help and Support is more helpful than it looks.",
  "One route returns. One field glows orange. One road crosses borders.",
  "Access.exe is waiting.",
  "Gossip.exe has refused to comment.",
  "My Computer is cleaner now. That does not mean it is safer.",
  "Future Plans (F:) was indexed at an unusual time.",
  "If a clue looks broken, it may only be badly dressed.",
  "Current confidence level: weirdly promising."
];

let highestZIndex = 10;
let accessHasLoaded = false;
let clockClicks = 0;
let startClicks = 0;
let gossipClicks = 0;
let konamiIndex = 0;

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function showScreen(screen) {
  document.querySelectorAll(".screen").forEach(function (element) {
    element.classList.remove("active");
  });

  screen.classList.add("active");
}

function openPasswordDialog() {
  showScreen(passwordScreen);
  loginMessage.textContent = "";
  passwordInput.value = "";

  setTimeout(function () {
    passwordInput.focus();
  }, 50);
}

function logIn() {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === PASSWORD) {
    loginMessage.textContent = "";
    showScreen(desktop);
    updateClock();

    setTimeout(function () {
      openWindow("computer-window");
    }, 500);
  } else {
    loginMessage.textContent = "The system could not log you on. Make sure your password is correct.";
    passwordInput.value = "";
    passwordInput.focus();

    const dialogWindow = document.querySelector(".dialog-window");

    dialogWindow.animate(
      [
        { transform: "translate(-50%, -50%) translateX(0)" },
        { transform: "translate(-50%, -50%) translateX(-8px)" },
        { transform: "translate(-50%, -50%) translateX(8px)" },
        { transform: "translate(-50%, -50%) translateX(0)" }
      ],
      {
        duration: 180,
        iterations: 1
      }
    );
  }
}

function logOff() {
  closeStartMenu();

  document.querySelectorAll(".window").forEach(function (windowElement) {
    windowElement.classList.remove("open");
  });

  passwordInput.value = "";
  showScreen(welcomeScreen);
}

function shutDown() {
  closeStartMenu();
  alert("It is now safe to turn off Fortia OS.");
}

function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  clock.textContent = time;
}

function openWindow(windowId) {
  const windowElement = document.getElementById(windowId);

  if (!windowElement) {
    return;
  }

  highestZIndex += 1;
  windowElement.classList.add("open");
  windowElement.style.zIndex = highestZIndex;

  closeStartMenu();

  const input = windowElement.querySelector("input:not([readonly])");

  if (input) {
    setTimeout(function () {
      input.focus();
    }, 50);
  }
}

function closeWindow(button) {
  const windowElement = button.closest(".window");

  if (!windowElement) {
    return;
  }

  windowElement.classList.remove("open");
}

function generateSignal() {
  const signalText = document.getElementById("signal-text");
  const randomIndex = Math.floor(Math.random() * signals.length);

  signalText.textContent = signals[randomIndex];
}

function toggleStartMenu() {
  startClicks += 1;

  if (startClicks === 6) {
    alert("Start button has no further comments.");
  }

  startMenu.classList.toggle("open");
}

function closeStartMenu() {
  startMenu.classList.remove("open");
}

function runAccessProgram() {
  const enteredPhrase = accessInput.value.trim().toLowerCase();

  if (enteredPhrase === ACCESS_PHRASE) {
    accessMessage.textContent = "";
    accessLocked.classList.add("hidden");

    if (accessHasLoaded) {
      accessGranted.classList.remove("hidden");
      return;
    }

    startAccessLoader();
  } else {
    accessMessage.textContent = "Access denied. Required phrase not recognized.";
    accessInput.value = "";
    accessInput.focus();

    document.getElementById("program-window").animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-6px)" },
        { transform: "translateX(6px)" },
        { transform: "translateX(0)" }
      ],
      {
        duration: 160,
        iterations: 1
      }
    );
  }
}

function startAccessLoader() {
  accessLoader.classList.remove("hidden");
  accessGranted.classList.add("hidden");
  loaderLog.innerHTML = "";
  progressBar.style.width = "0%";

  const steps = [
    { percent: 12, text: "Checking access phrase...", log: "Access phrase accepted." },
    { percent: 24, text: "Initializing browser shell...", log: "Browser shell loaded." },
    { percent: 39, text: "Scanning route cache...", log: "Found route: NYC → CPH." },
    { percent: 52, text: "Reading orange index...", log: "Roskilde event record detected." },
    { percent: 68, text: "Resolving road sequence...", log: "Balkan Roadtrip file recovered." },
    { percent: 83, text: "Decrypting archived preferences...", log: "Some preferences remain suspicious." },
    { percent: 97, text: "Almost done...", log: "Progress paused at 97% for dramatic reasons." },
    { percent: 100, text: "Opening internal portal...", log: "Session active." }
  ];

  let stepIndex = 0;

  function runStep() {
    const step = steps[stepIndex];

    progressBar.style.width = step.percent + "%";
    loaderLine.textContent = step.text;

    const logItem = document.createElement("li");
    logItem.textContent = step.log;
    loaderLog.appendChild(logItem);

    stepIndex += 1;

    if (stepIndex < steps.length) {
      const delay = step.percent === 97 ? 900 : 430;
      setTimeout(runStep, delay);
    } else {
      setTimeout(function () {
        accessHasLoaded = true;
        accessLoader.classList.add("hidden");
        accessGranted.classList.remove("hidden");
      }, 500);
    }
  }

  setTimeout(runStep, 250);
}

/* BASIC EVENTS */

userTile.addEventListener("click", openPasswordDialog);

loginButton.addEventListener("click", logIn);

passwordInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    logIn();
  }
});

cancelButton.addEventListener("click", function () {
  showScreen(welcomeScreen);
});

shutdownButton.addEventListener("click", shutDown);

optionsButton.addEventListener("click", function () {
  alert("There are no additional options. Yet.");
});

startButton.addEventListener("click", function (event) {
  event.stopPropagation();
  toggleStartMenu();
});

startMenu.addEventListener("click", function (event) {
  event.stopPropagation();
});

logoffButton.addEventListener("click", logOff);
desktopShutdownButton.addEventListener("click", shutDown);

document.querySelectorAll("[data-window]").forEach(function (element) {
  element.addEventListener("click", function (event) {
    const isDesktopIcon = element.classList.contains("desktop-icon");
    const isFileItem = element.classList.contains("file-item");
    const isStartMenuItem = element.classList.contains("start-menu-item");

    if (isDesktopIcon) {
      document.querySelectorAll(".desktop-icon").forEach(function (otherIcon) {
        otherIcon.classList.remove("selected");
      });

      element.classList.add("selected");
    }

    if (isFileItem) {
      document.querySelectorAll(".file-item").forEach(function (otherFile) {
        otherFile.classList.remove("selected");
      });

      element.classList.add("selected");
      return;
    }

    if (!isStartMenuItem && element.tagName.toLowerCase() === "button" && !isDesktopIcon) {
      event.stopPropagation();
    }

    const windowId = element.dataset.window;

    if (windowId && !isFileItem) {
      openWindow(windowId);
    }
  });
});

document.querySelectorAll(".file-item").forEach(function (file) {
  file.addEventListener("dblclick", function () {
    const windowId = file.dataset.window;
    openWindow(windowId);
  });
});

document.querySelectorAll(".window-close").forEach(function (button) {
  button.addEventListener("click", function () {
    closeWindow(button);
  });
});

document.querySelectorAll(".window").forEach(function (windowElement) {
  windowElement.addEventListener("mousedown", function () {
    highestZIndex += 1;
    windowElement.style.zIndex = highestZIndex;
  });
});

document.addEventListener("click", function () {
  closeStartMenu();
});

accessButton.addEventListener("click", runAccessProgram);

accessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    runAccessProgram();
  }
});

document.getElementById("signal-button").addEventListener("click", generateSignal);

setInterval(updateClock, 1000);

/* HELP APP */

document.querySelectorAll(".help-topic").forEach(function (topic) {
  topic.addEventListener("click", function () {
    const topicName = topic.dataset.helpTopic;

    document.querySelectorAll(".help-topic").forEach(function (otherTopic) {
      otherTopic.classList.remove("active");
    });

    document.querySelectorAll(".help-panel").forEach(function (panel) {
      panel.classList.remove("active");
    });

    topic.classList.add("active");
    document.getElementById("help-" + topicName).classList.add("active");
  });
});

function caesarDecode(text, shift) {
  return text.replace(/[a-zA-Z]/g, function (char) {
    const base = char >= "a" && char <= "z" ? 97 : 65;
    const code = char.charCodeAt(0) - base;
    const decoded = (code - shift + 26) % 26;

    return String.fromCharCode(decoded + base);
  });
}

document.getElementById("decode-caesar").addEventListener("click", function () {
  const input = document.getElementById("decode-input").value;
  const output = document.getElementById("decode-output");

  if (!input.trim()) {
    output.textContent = "No text entered.";
    return;
  }

  output.textContent = caesarDecode(input, 3);
});

document.getElementById("decode-noise").addEventListener("click", function () {
  const input = document.getElementById("decode-input").value;
  const output = document.getElementById("decode-output");

  if (!input.trim()) {
    output.textContent = "No text entered.";
    return;
  }

  output.textContent = input.replace(/[0-9]/g, "");
});

document.getElementById("decode-clear").addEventListener("click", function () {
  document.getElementById("decode-input").value = "";
  document.getElementById("decode-output").textContent = "Decoded output will appear here.";
});

/* BROWSER PORTAL */

document.querySelectorAll(".browser-nav").forEach(function (button) {
  button.addEventListener("click", function () {
    const page = button.dataset.browserPage;

    document.querySelectorAll(".browser-page").forEach(function (browserPage) {
      browserPage.classList.remove("active");
    });

    document.getElementById("browser-" + page).classList.add("active");
    document.getElementById("browser-address").textContent = "https://fortia.local/" + page;
  });
});

document.querySelectorAll(".interest-button").forEach(function (button) {
  button.addEventListener("click", function () {
    const interest = button.dataset.interest;
    const response = document.getElementById("portal-response");

    const responses = {
      flight: "Route marked as interesting: NYC → CPH. Manual confirmation remains unresolved.",
      roskilde: "Orange Index marked as interesting. Weather uncertainty acknowledged.",
      balkan: "Road sequence marked as interesting. Border-crossing optimism increased."
    };

    response.textContent = responses[interest];

    response.animate(
      [
        { transform: "scale(1)", backgroundColor: "#fffbe6" },
        { transform: "scale(1.02)", backgroundColor: "#e8ffe2" },
        { transform: "scale(1)", backgroundColor: "#fffbe6" }
      ],
      {
        duration: 420,
        iterations: 1
      }
    );
  });
});

/* MSN */

const msnReplies = {
  where: [
    "my computer first.",
    "then help if something looks weird.",
    "then the bin. always the bin."
  ],
  access: [
    "it's not a big dramatic password.",
    "one deleted note says it with numbers in the way.",
    "help can remove the noise."
  ],
  routes: [
    "three things were indexed.",
    "one returns from nyc.",
    "one is orange.",
    "one crosses borders."
  ]
};

document.querySelectorAll(".msn-choice").forEach(function (button) {
  button.addEventListener("click", function () {
    const key = button.dataset.msn;
    const messages = document.getElementById("msn-messages");

    const userMessage = document.createElement("div");
    userMessage.className = "msn-message me";
    userMessage.textContent = button.textContent;
    messages.appendChild(userMessage);

    button.disabled = true;

    let delay = 450;

    msnReplies[key].forEach(function (reply) {
      setTimeout(function () {
        const replyMessage = document.createElement("div");
        replyMessage.className = "msn-message them";
        replyMessage.textContent = reply;
        messages.appendChild(replyMessage);
        messages.scrollTop = messages.scrollHeight;
      }, delay);

      delay += 650;
    });

    messages.scrollTop = messages.scrollHeight;
  });
});

document.getElementById("nudge-button").addEventListener("click", function () {
  const msnWindow = document.getElementById("msn-window");

  msnWindow.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-10px)" },
      { transform: "translateX(10px)" },
      { transform: "translateX(-6px)" },
      { transform: "translateX(6px)" },
      { transform: "translateX(0)" }
    ],
    {
      duration: 300,
      iterations: 1
    }
  );
});

/* GOSSIP */

document.getElementById("gossip-button").addEventListener("click", function () {
  gossipClicks += 1;

  const messages = [
    "Request denied.",
    "Request denied again.",
    "Still denied. Curiosity noted.",
    "This is now becoming a pattern.",
    "Access denied, but with respect."
  ];

  const index = Math.min(gossipClicks - 1, messages.length - 1);
  document.getElementById("gossip-message").textContent = messages[index];
});

/* CLOCK EASTER EGG */

clock.addEventListener("click", function (event) {
  event.stopPropagation();
  clockClicks += 1;

  if (clockClicks === 1) {
    alert("Current time is not useful for this investigation.");
  } else if (clockClicks === 3) {
    alert("Stop interrogating the clock.");
  } else if (clockClicks === 6) {
    alert("The clock has reported your behavior to System.");
  }
});

/* KONAMI EASTER EGG */

document.addEventListener("keydown", function (event) {
  const expectedKey = konamiCode[konamiIndex];
  const pressedKey = event.key.length === 1 ? event.key.toLowerCase() : event.key;

  if (pressedKey === expectedKey) {
    konamiIndex += 1;

    if (konamiIndex === konamiCode.length) {
      konamiIndex = 0;
      openWindow("debug-window");
    }
  } else {
    konamiIndex = 0;
  }
});

/* WINDOW DRAGGING */

let draggedWindow = null;
let dragOffsetX = 0;
let dragOffsetY = 0;

document.querySelectorAll(".window-titlebar").forEach(function (titlebar) {
  titlebar.addEventListener("mousedown", function (event) {
    if (event.target.classList.contains("window-close")) {
      return;
    }

    draggedWindow = titlebar.closest(".window");

    if (!draggedWindow) {
      return;
    }

    highestZIndex += 1;
    draggedWindow.style.zIndex = highestZIndex;

    const rect = draggedWindow.getBoundingClientRect();

    dragOffsetX = event.clientX - rect.left;
    dragOffsetY = event.clientY - rect.top;

    document.body.style.cursor = "move";
    event.preventDefault();
  });
});

document.addEventListener("mousemove", function (event) {
  if (!draggedWindow) {
    return;
  }

  const taskbarHeight = 38;
  const maxLeft = window.innerWidth - draggedWindow.offsetWidth;
  const maxTop = window.innerHeight - draggedWindow.offsetHeight - taskbarHeight;

  let nextLeft = event.clientX - dragOffsetX;
  let nextTop = event.clientY - dragOffsetY;

  nextLeft = Math.max(0, Math.min(nextLeft, maxLeft));
  nextTop = Math.max(0, Math.min(nextTop, maxTop));

  draggedWindow.style.left = nextLeft + "px";
  draggedWindow.style.top = nextTop + "px";
});

document.addEventListener("mouseup", function () {
  if (draggedWindow) {
    draggedWindow = null;
    document.body.style.cursor = "";
  }
});

/* DESKTOP SELECTION BOX */

const selectionBox = document.getElementById("selection-box");

let isSelecting = false;
let selectionStartX = 0;
let selectionStartY = 0;

desktop.addEventListener("mousedown", function (event) {
  const clickedWindow = event.target.closest(".window");
  const clickedIcon = event.target.closest(".desktop-icon");
  const clickedTaskbar = event.target.closest(".taskbar");
  const clickedStartMenu = event.target.closest(".start-menu");

  if (clickedWindow || clickedIcon || clickedTaskbar || clickedStartMenu) {
    return;
  }

  isSelecting = true;
  selectionStartX = event.clientX;
  selectionStartY = event.clientY;

  selectionBox.style.left = selectionStartX + "px";
  selectionBox.style.top = selectionStartY + "px";
  selectionBox.style.width = "0px";
  selectionBox.style.height = "0px";
  selectionBox.style.display = "block";

  document.querySelectorAll(".desktop-icon").forEach(function (icon) {
    icon.classList.remove("selected");
  });

  closeStartMenu();
});

document.addEventListener("mousemove", function (event) {
  if (!isSelecting) {
    return;
  }

  const currentX = event.clientX;
  const currentY = event.clientY;

  const left = Math.min(selectionStartX, currentX);
  const top = Math.min(selectionStartY, currentY);
  const width = Math.abs(currentX - selectionStartX);
  const height = Math.abs(currentY - selectionStartY);

  selectionBox.style.left = left + "px";
  selectionBox.style.top = top + "px";
  selectionBox.style.width = width + "px";
  selectionBox.style.height = height + "px";

  const selectionRect = selectionBox.getBoundingClientRect();

  document.querySelectorAll(".desktop-icon").forEach(function (icon) {
    const iconRect = icon.getBoundingClientRect();

    const overlaps =
      selectionRect.left < iconRect.right &&
      selectionRect.right > iconRect.left &&
      selectionRect.top < iconRect.bottom &&
      selectionRect.bottom > iconRect.top;

    if (overlaps) {
      icon.classList.add("selected");
    } else {
      icon.classList.remove("selected");
    }
  });
});

document.addEventListener("mouseup", function () {
  if (!isSelecting) {
    return;
  }

  isSelecting = false;
  selectionBox.style.display = "none";
});
