const PASSWORD = "Rigsby";
const TRAVEL_USERNAME = "name";
const TRAVEL_PASSWORD = "letmein";

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

const computerTitle = document.getElementById("computer-title");
const computerBackButton = document.getElementById("computer-back-button");
const computerRootView = document.getElementById("computer-root-view");
const computerLocalDiskView = document.getElementById("computer-localdisk-view");
const computerSummerView = document.getElementById("computer-summer-view");

const travelUsernameInput = document.getElementById("travel-username-input");
const travelPasswordInput = document.getElementById("travel-password-input");
const accessButton = document.getElementById("access-button");
const accessMessage = document.getElementById("access-message");
const accessLocked = document.getElementById("access-locked");
const accessLoader = document.getElementById("access-loader");
const accessGranted = document.getElementById("access-granted");
const loaderLine = document.getElementById("loader-line");
const loaderLog = document.getElementById("loader-log");
const progressBar = document.getElementById("progress-bar");

const restoreRecycleButton = document.getElementById("restore-recycle-button");
const emptyRecycleButton = document.getElementById("empty-recycle-button");
const recycleStatus = document.getElementById("recycle-status");
const passwdFile = document.getElementById("passwd-file");

const browserAddress = document.getElementById("browser-address");
const browserBackButton = document.getElementById("browser-back-button");
const browserHomeButton = document.getElementById("browser-home-button");
const portalResponse = document.getElementById("portal-response");

let highestZIndex = 10;
let loginAttempts = 0;
let clockClicks = 0;
let startClicks = 0;
let currentComputerView = "root";
let passwdRestored = false;
let accessHasLoaded = false;
let currentBrowserPage = "home";
let browserHistory = ["home"];
let konamiIndex = 0;

const konamiCode = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"
];

function showScreen(screen) {
  document.querySelectorAll(".screen").forEach((element) => element.classList.remove("active"));
  screen.classList.add("active");
}

function openPasswordDialog() {
  showScreen(passwordScreen);
  loginMessage.textContent = "";
  passwordInput.value = "";
  setTimeout(() => passwordInput.focus(), 50);
}

function logIn() {
  if (passwordInput.value === PASSWORD) {
    loginMessage.textContent = "";
    startLoginLoader();
    return;
  }

  loginAttempts += 1;
  loginMessage.textContent = loginAttempts >= 3 ? "Wrong password.\nHint: R....." : "Wrong password.";
  passwordInput.value = "";
  passwordInput.focus();
  shakeElement(document.querySelector(".dialog-window"), true);
}

function startLoginLoader() {
  const steps = [
    "Password accepted.",
    "Loading personal settings...",
    "Restoring desktop state...",
    "Mounting local drives...",
    "Checking archived sessions...",
    "Loading Fortia OS..."
  ];

  const dialogBody = document.querySelector(".dialog-body");
  dialogBody.innerHTML = '<p id="login-loader-line">Starting...</p><p>Please wait...</p><div class="progress-shell"><div id="login-progress" class="progress-bar"></div></div>';
  let index = 0;

  function run() {
    document.getElementById("login-loader-line").textContent = steps[index];
    document.getElementById("login-progress").style.width = Math.round(((index + 1) / steps.length) * 100) + "%";
    index += 1;
    if (index < steps.length) {
      setTimeout(run, 650);
    } else {
      setTimeout(() => {
        showScreen(desktop);
        updateClock();
        openWindow("computer-window");
      }, 450);
    }
  }

  run();
}

function logOff() {
  closeStartMenu();
  document.querySelectorAll(".window").forEach((windowElement) => windowElement.classList.remove("open"));
  showScreen(welcomeScreen);
}

function shutDown() {
  closeStartMenu();
  alert("It is now safe to turn off Fortia OS.");
}

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function clampWindowToViewport(windowElement) {
  const taskbarHeight = 38;
  const margin = 12;
  const rect = windowElement.getBoundingClientRect();
  const maxLeft = Math.max(margin, window.innerWidth - rect.width - margin);
  const maxTop = Math.max(margin, window.innerHeight - rect.height - taskbarHeight - margin);

  let left = parseInt(windowElement.style.left || windowElement.dataset.defaultLeft || "120", 10);
  let top = parseInt(windowElement.style.top || windowElement.dataset.defaultTop || "80", 10);

  left = Math.max(margin, Math.min(left, maxLeft));
  top = Math.max(margin, Math.min(top, maxTop));

  windowElement.style.left = left + "px";
  windowElement.style.top = top + "px";
}

function placeWindow(windowElement) {
  if (!windowElement.style.left) {
    windowElement.style.left = (windowElement.dataset.defaultLeft || "120") + "px";
  }
  if (!windowElement.style.top) {
    windowElement.style.top = (windowElement.dataset.defaultTop || "80") + "px";
  }
  requestAnimationFrame(() => clampWindowToViewport(windowElement));
}

function openWindow(windowId) {
  const windowElement = document.getElementById(windowId);
  if (!windowElement) return;

  highestZIndex += 1;
  windowElement.classList.add("open");
  windowElement.style.zIndex = highestZIndex;
  placeWindow(windowElement);
  closeStartMenu();

  if (windowId === "computer-window") {
    switchComputerView(currentComputerView || "root");
  }

  const input = windowElement.querySelector("input:not([readonly])");
  if (input) setTimeout(() => input.focus(), 50);
}

function closeWindowElement(windowElement) {
  if (!windowElement) return;
  windowElement.classList.remove("open");
}

function closeWindow(button) {
  closeWindowElement(button.closest(".window"));
}

function switchComputerView(view) {
  currentComputerView = view;
  computerRootView.classList.toggle("hidden", view !== "root");
  computerLocalDiskView.classList.toggle("hidden", view !== "localdisk");
  computerSummerView.classList.toggle("hidden", view !== "summer");
  computerBackButton.disabled = view === "root";

  if (view === "root") {
    computerTitle.textContent = "My Computer";
  } else if (view === "localdisk") {
    computerTitle.textContent = "Local Disk (C:) - My Computer";
  } else {
    computerTitle.textContent = "Summer 2026 (F:) - My Computer";
  }
}

function toggleStartMenu() {
  startClicks += 1;
  if (startClicks === 6) alert("Start button has no further comments.");
  startMenu.classList.toggle("open");
}

function closeStartMenu() {
  startMenu.classList.remove("open");
}

function shakeElement(element, keepTransform = false) {
  if (!element) return;
  const baseTransform = keepTransform ? getComputedStyle(element).transform : "none";
  element.animate(
    [
      { transform: baseTransform === "none" ? "translateX(0)" : baseTransform + " translateX(0)" },
      { transform: baseTransform === "none" ? "translateX(-8px)" : baseTransform + " translateX(-8px)" },
      { transform: baseTransform === "none" ? "translateX(8px)" : baseTransform + " translateX(8px)" },
      { transform: baseTransform === "none" ? "translateX(-5px)" : baseTransform + " translateX(-5px)" },
      { transform: baseTransform === "none" ? "translateX(5px)" : baseTransform + " translateX(5px)" },
      { transform: baseTransform === "none" ? "translateX(0)" : baseTransform + " translateX(0)" }
    ],
    { duration: 220, iterations: 1 }
  );
}

function runAccessProgram() {
  const enteredUsername = travelUsernameInput.value.trim().toLowerCase();
  const enteredPassword = travelPasswordInput.value.trim().toLowerCase();

  if (enteredUsername === TRAVEL_USERNAME && enteredPassword === TRAVEL_PASSWORD) {
    accessMessage.textContent = "";
    accessLocked.classList.add("hidden");

    if (accessHasLoaded) {
      accessLoader.classList.add("hidden");
      accessGranted.classList.remove("hidden");
      return;
    }

    startAccessLoader();
  } else {
    accessMessage.textContent = "Authentication failed.";
    travelPasswordInput.value = "";
    travelPasswordInput.focus();
    shakeElement(document.getElementById("program-window"));
  }
}

function startAccessLoader() {
  accessLoader.classList.remove("hidden");
  accessGranted.classList.add("hidden");
  loaderLog.innerHTML = "";
  progressBar.style.width = "0%";

  const steps = [
    { percent: 12, text: "Loading profile...", log: "profile" },
    { percent: 27, text: "Opening booking shell...", log: "booking shell" },
    { percent: 42, text: "Reading fare tables...", log: "fare tables" },
    { percent: 61, text: "Collecting travel options...", log: "travel options" },
    { percent: 79, text: "Opening festival allocation...", log: "festival allocation" },
    { percent: 100, text: "Portal ready.", log: "ready" }
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
      setTimeout(runStep, 420);
    } else {
      setTimeout(() => {
        accessHasLoaded = true;
        accessLoader.classList.add("hidden");
        accessGranted.classList.remove("hidden");
        navigateBrowser("home", false);
      }, 350);
    }
  }

  setTimeout(runStep, 220);
}

function restoreRecycleBin() {
  if (passwdRestored) {
    recycleStatus.textContent = "No deleted items selected.";
    shakeElement(document.getElementById("recycle-window"));
    return;
  }

  passwdRestored = true;
  passwdFile.remove();

  const restoredFile = document.createElement("button");
  restoredFile.className = "file-item";
  restoredFile.dataset.window = "passwd-window";
  restoredFile.innerHTML = '<span class="file-icon txt-icon"></span><span>passwd.txt</span>';

  computerLocalDiskView.querySelector(".explorer-content").appendChild(restoredFile);
  bindWindowOpener(restoredFile);
  bindFileDoubleClick(restoredFile);

  recycleStatus.textContent = "Restored passwd.txt to Local Disk (C:).";
}

function emptyRecycleBin() {
  recycleStatus.textContent = "Cannot empty Recycle Bin: permission denied.";
  shakeElement(document.getElementById("recycle-window"));
}

function navigateBrowser(page, addToHistory = true) {
  const target = document.getElementById("browser-" + page);
  if (!target) return;

  document.querySelectorAll(".browser-page").forEach((browserPage) => browserPage.classList.remove("active"));
  document.querySelectorAll(".portal-tab, .browser-nav").forEach((button) => {
    if (button.dataset.browserPage) {
      button.classList.toggle("active", button.dataset.browserPage === page && button.classList.contains("portal-tab"));
    }
  });

  target.classList.add("active");
  currentBrowserPage = page;
  browserAddress.textContent = page === "home" ? "travelportal://home" : "travelportal://" + page;

  if (addToHistory) {
    if (browserHistory[browserHistory.length - 1] !== page) {
      browserHistory.push(page);
    }
  }

  browserBackButton.disabled = browserHistory.length <= 1;
}

function browserGoBack() {
  if (browserHistory.length <= 1) return;
  browserHistory.pop();
  const previousPage = browserHistory[browserHistory.length - 1] || "home";
  navigateBrowser(previousPage, false);
}

function setPortalResponse(message) {
  portalResponse.textContent = message;
  portalResponse.animate(
    [
      { transform: "scale(1)", backgroundColor: "#fffbe6" },
      { transform: "scale(1.015)", backgroundColor: "#e8f2ff" },
      { transform: "scale(1)", backgroundColor: "#fffbe6" }
    ],
    { duration: 320, iterations: 1 }
  );
}

function bindWindowOpener(element) {
  element.addEventListener("click", function (event) {
    const isDesktopIcon = element.classList.contains("desktop-icon");
    const isFileItem = element.classList.contains("file-item");
    const isStartMenuItem = element.classList.contains("start-menu-item");

    if (isDesktopIcon) {
      document.querySelectorAll(".desktop-icon").forEach((otherIcon) => otherIcon.classList.remove("selected"));
      element.classList.add("selected");
    }

    if (isFileItem) {
      document.querySelectorAll(".file-item").forEach((otherFile) => otherFile.classList.remove("selected"));
      element.classList.add("selected");
      return;
    }

    if (!isStartMenuItem && element.tagName.toLowerCase() === "button" && !isDesktopIcon) {
      event.stopPropagation();
    }

    const windowId = element.dataset.window;
    if (windowId && !isFileItem) openWindow(windowId);
  });
}

function bindFileDoubleClick(file) {
  file.addEventListener("dblclick", function () {
    const windowId = file.dataset.window;
    if (windowId) openWindow(windowId);
  });
}

/* BASIC EVENTS */
userTile.addEventListener("click", openPasswordDialog);
loginButton.addEventListener("click", logIn);
passwordInput.addEventListener("keydown", (event) => { if (event.key === "Enter") logIn(); });
cancelButton.addEventListener("click", () => showScreen(welcomeScreen));
shutdownButton.addEventListener("click", shutDown);
optionsButton.addEventListener("click", () => alert("There are no additional options. Yet."));
startButton.addEventListener("click", (event) => { event.stopPropagation(); toggleStartMenu(); });
startMenu.addEventListener("click", (event) => event.stopPropagation());
logoffButton.addEventListener("click", logOff);
desktopShutdownButton.addEventListener("click", shutDown);

document.querySelectorAll("[data-window]").forEach(bindWindowOpener);
document.querySelectorAll(".file-item").forEach(bindFileDoubleClick);

document.querySelectorAll(".computer-drive-nav").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    switchComputerView(button.dataset.computerView);
  });
  button.addEventListener("dblclick", () => switchComputerView(button.dataset.computerView));
});

computerBackButton.addEventListener("click", () => {
  if (currentComputerView !== "root") switchComputerView("root");
});

document.querySelectorAll(".window-close").forEach((button) => button.addEventListener("click", () => closeWindow(button)));
document.querySelectorAll(".window-close-soft").forEach((button) => button.addEventListener("click", () => closeWindowElement(button.closest(".window"))));
document.querySelectorAll(".window").forEach((windowElement) => {
  windowElement.addEventListener("mousedown", () => {
    highestZIndex += 1;
    windowElement.style.zIndex = highestZIndex;
  });
});

document.addEventListener("click", closeStartMenu);

accessButton.addEventListener("click", runAccessProgram);
[travelUsernameInput, travelPasswordInput].forEach((input) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") runAccessProgram();
  });
});

restoreRecycleButton.addEventListener("click", restoreRecycleBin);
emptyRecycleButton.addEventListener("click", emptyRecycleBin);

if (passwdFile) {
  const lockNudge = () => {
    recycleStatus.textContent = "This item is locked.";
    shakeElement(document.getElementById("recycle-window"));
  };
  passwdFile.addEventListener("click", lockNudge);
  passwdFile.addEventListener("dblclick", lockNudge);
}

browserBackButton.addEventListener("click", browserGoBack);
browserHomeButton.addEventListener("click", () => navigateBrowser("home"));

document.querySelectorAll(".browser-nav").forEach((button) => {
  button.addEventListener("click", () => navigateBrowser(button.dataset.browserPage));
});

document.querySelectorAll(".travel-select-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".travel-select-button").forEach((item) => item.classList.remove("selected-travel-option"));
    button.classList.add("selected-travel-option");
    setPortalResponse(button.dataset.selectMessage || "Selection saved.");
  });
});

setInterval(updateClock, 1000);

/* CLOCK EASTER EGG */
clock.addEventListener("click", (event) => {
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
document.addEventListener("keydown", (event) => {
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

document.querySelectorAll(".window-titlebar").forEach((titlebar) => {
  titlebar.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("window-close")) return;
    draggedWindow = titlebar.closest(".window");
    if (!draggedWindow) return;

    highestZIndex += 1;
    draggedWindow.style.zIndex = highestZIndex;

    const rect = draggedWindow.getBoundingClientRect();
    dragOffsetX = event.clientX - rect.left;
    dragOffsetY = event.clientY - rect.top;

    document.body.style.cursor = "move";
    event.preventDefault();
  });
});

document.addEventListener("mousemove", (event) => {
  if (!draggedWindow) return;
  const taskbarHeight = 38;
  const maxLeft = Math.max(0, window.innerWidth - draggedWindow.offsetWidth);
  const maxTop = Math.max(0, window.innerHeight - draggedWindow.offsetHeight - taskbarHeight);
  let nextLeft = event.clientX - dragOffsetX;
  let nextTop = event.clientY - dragOffsetY;

  nextLeft = Math.max(0, Math.min(nextLeft, maxLeft));
  nextTop = Math.max(0, Math.min(nextTop, maxTop));

  draggedWindow.style.left = nextLeft + "px";
  draggedWindow.style.top = nextTop + "px";
});

document.addEventListener("mouseup", () => {
  if (draggedWindow) {
    draggedWindow = null;
    document.body.style.cursor = "";
  }
});

window.addEventListener("resize", () => {
  document.querySelectorAll(".window.open").forEach(clampWindowToViewport);
});

/* DESKTOP SELECTION BOX */
const selectionBox = document.getElementById("selection-box");
let isSelecting = false;
let selectionStartX = 0;
let selectionStartY = 0;

desktop.addEventListener("mousedown", (event) => {
  const clickedWindow = event.target.closest(".window");
  const clickedIcon = event.target.closest(".desktop-icon");
  const clickedTaskbar = event.target.closest(".taskbar");
  const clickedStartMenu = event.target.closest(".start-menu");
  if (clickedWindow || clickedIcon || clickedTaskbar || clickedStartMenu) return;

  isSelecting = true;
  selectionStartX = event.clientX;
  selectionStartY = event.clientY;

  selectionBox.style.left = selectionStartX + "px";
  selectionBox.style.top = selectionStartY + "px";
  selectionBox.style.width = "0px";
  selectionBox.style.height = "0px";
  selectionBox.style.display = "block";

  document.querySelectorAll(".desktop-icon").forEach((icon) => icon.classList.remove("selected"));
  closeStartMenu();
});

document.addEventListener("mousemove", (event) => {
  if (!isSelecting) return;
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
  document.querySelectorAll(".desktop-icon").forEach((icon) => {
    const iconRect = icon.getBoundingClientRect();
    const overlaps =
      selectionRect.left < iconRect.right &&
      selectionRect.right > iconRect.left &&
      selectionRect.top < iconRect.bottom &&
      selectionRect.bottom > iconRect.top;

    icon.classList.toggle("selected", overlaps);
  });
});

document.addEventListener("mouseup", () => {
  if (!isSelecting) return;
  isSelecting = false;
  selectionBox.style.display = "none";
});

updateClock();
navigateBrowser("home", false);
