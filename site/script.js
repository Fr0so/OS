const PASSWORD = "Rigsby";
const TRAVEL_USERNAME = "name";
const TRAVEL_PASSWORD = "letmein";
const USER_NAME = "Name";

const flightData = {
  "nyc-cph": {
    route: "NYC → CPH",
    number: "SK 912",
    departure: "JFK · 08:20",
    arrival: "CPH · 21:35",
    duration: "7h 15m",
    fare: "Classic",
    note: "Direct service · transatlantic",
    airline: "SAS Travel Desk"
  },
  "cph-nyc": {
    route: "CPH → NYC",
    number: "SK 911",
    departure: "CPH · 13:40",
    arrival: "JFK · 16:10",
    duration: "8h 30m",
    fare: "Classic",
    note: "Direct service · westbound",
    airline: "SAS Travel Desk"
  },
  "cph-tirana": {
    route: "CPH → Tirana",
    number: "OU 481",
    departure: "CPH · 09:05",
    arrival: "TIA · 13:55",
    duration: "4h 50m",
    fare: "Saver",
    note: "Arrival: Tirana International Airport",
    airline: "Adriatic Air Desk"
  },
  "tirana-cph": {
    route: "Tirana → CPH",
    number: "OU 482",
    departure: "TIA · 14:40",
    arrival: "CPH · 19:20",
    duration: "4h 40m",
    fare: "Saver",
    note: "Departure: Tirana International Airport",
    airline: "Adriatic Air Desk"
  },
  "cph-zurich": {
    route: "CPH → Zurich",
    number: "LX 1271",
    departure: "CPH · 11:25",
    arrival: "ZRH · 13:20",
    duration: "1h 55m",
    fare: "Flex",
    note: "Direct service · short haul",
    airline: "Swiss Booking Desk"
  }
};

const roadtripStops = {
  "Albania": "National dish: Tavë kosi. Best thing to see: Tirana and the Albanian Riviera. Culture note: coffee is basically infrastructure.",
  "Montenegro": "National dish: Njeguši prosciutto. Best thing to see: Bay of Kotor. Culture note: mountain roads do not care about your schedule.",
  "Croatia": "National dish: Peka. Best thing to see: the Adriatic coast and old towns. Culture note: every sea view thinks it is the main character.",
  "Kosovo": "National dish: Flija. Best thing to see: Prizren. Culture note: cafe tables are planning offices.",
  "Serbia": "National dish: Ćevapi. Best thing to see: Belgrade at night. Culture note: the playlist gets louder after midnight.",
  "North Macedonia": "National dish: Tavče gravče. Best thing to see: Lake Ohrid. Culture note: slow mornings are part of the route."
};

const orangePanels = {
  lineup: `
    <div class="orange-lineup-cards">
      <div class="orange-lineup-card"><span>Wed</span><strong>The Cure</strong><small>Orange stage · late</small></div>
      <div class="orange-lineup-card"><span>Thu</span><strong>Little Simz</strong><small>High priority slot</small></div>
      <div class="orange-lineup-card"><span>Fri</span><strong>David Byrne</strong><small>Evening slot</small></div>
    </div>`,
  camp: `
    <div class="packing-list-panel">
      <h3>Camp packing list</h3>
      <label><input type="checkbox"> Pavilion tape</label>
      <label><input type="checkbox"> Powerbank</label>
      <label><input type="checkbox"> Rain cover</label>
      <label><input type="checkbox"> Sunscreen that will be forgotten</label>
      <label><input type="checkbox"> Lukewarm beer duty</label>
    </div>`,
  access: `
    <div class="orange-lineup-cards">
      <div class="orange-lineup-card"><span>Access</span><strong>Partner</strong><small>Route not public</small></div>
      <div class="orange-lineup-card"><span>Wristband</span><strong>On site</strong><small>Camp handoff</small></div>
      <div class="orange-lineup-card"><span>Link</span><strong>CPH</strong><small>Matched with travel file</small></div>
    </div>`
};

const welcomeScreen = document.getElementById("welcome-screen");
const passwordScreen = document.getElementById("password-screen");
const desktop = document.getElementById("desktop");
const userTile = document.getElementById("user-tile");
const loginButton = document.getElementById("login-button");
const cancelButton = document.getElementById("cancel-button");
const shutdownButton = document.getElementById("shutdown-button");
const optionsButton = document.getElementById("options-button");
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
const restoreRecycleButton = document.getElementById("restore-recycle-button");
const emptyRecycleButton = document.getElementById("empty-recycle-button");
const recycleStatus = document.getElementById("recycle-status");
const passwdFile = document.getElementById("passwd-file");
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
const browserAddress = document.getElementById("browser-address");
const browserBackButton = document.getElementById("browser-back-button");
const browserHomeButton = document.getElementById("browser-home-button");
const flightDetailRoute = document.getElementById("flight-detail-route");
const flightDetailNumber = document.getElementById("flight-detail-number");
const flightDetailDeparture = document.getElementById("flight-detail-departure");
const flightDetailArrival = document.getElementById("flight-detail-arrival");
const flightDetailDuration = document.getElementById("flight-detail-duration");
const flightDetailFare = document.getElementById("flight-detail-fare");
const flightDetailNote = document.getElementById("flight-detail-note");
const flightSeatStatus = document.getElementById("flight-seat-status");
const saveFlightButton = document.getElementById("save-flight-button");
const orangePanelDisplay = document.getElementById("orange-panel-display");
const orangeConfirmButton = document.getElementById("orange-confirm-button");
const roadtripStopTitle = document.getElementById("roadtrip-stop-title");
const roadtripStopCopy = document.getElementById("roadtrip-stop-copy");
const saveCarButton = document.getElementById("save-car-button");
const msnMessages = document.getElementById("msn-messages");
const msnContactName = document.getElementById("msn-contact-name");
const msnContactStatus = document.getElementById("msn-contact-status");
const msnContactList = document.getElementById("msn-contact-list");
const msnBadge = document.getElementById("msn-badge");

let highestZIndex = 10;
let loginAttempts = 0;
let clockClicks = 0;
let startClicks = 0;
let currentComputerView = "root";
let passwdRestored = false;
let accessHasLoaded = false;
let currentBrowserPage = "home";
let browserHistory = ["home"];
let selectedFlightId = null;
let selectedSeat = null;
let selectedRoadtripCar = null;
let selectedOrangeDay = "Mon 29";
let activeMsnContact = "CAMPEN";
let flightLocked = false;
let carLocked = false;
let konamiIndex = 0;

const msnStore = {
  "SAS Travel Desk": { status: "Status: Away", messages: [], unread: 0 },
  "Adriatic Air Desk": { status: "Status: Away", messages: [], unread: 0 },
  "Swiss Booking Desk": { status: "Status: Away", messages: [], unread: 0 },
  "CAMPEN": { status: "Status: Online", messages: [], unread: 0 },
  "Adriatic AutoRent": { status: "Status: Online", messages: [], unread: 0 }
};

const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

function showScreen(screen) {
  document.querySelectorAll(".screen").forEach((el) => el.classList.remove("active"));
  screen.classList.add("active");
}

function getPasswordInput() {
  return document.getElementById("password");
}

function getLoginMessage() {
  return document.getElementById("login-message");
}

function openPasswordDialog() {
  showScreen(passwordScreen);
  const input = getPasswordInput();
  const msg = getLoginMessage();
  if (msg) msg.textContent = "";
  if (input) {
    input.value = "";
    setTimeout(() => input.focus(), 30);
  }
}

function logIn() {
  const passwordInput = getPasswordInput();
  const loginMessage = getLoginMessage();
  if (!passwordInput || !loginMessage) return;

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
  const dialogBody = document.querySelector(".dialog-body");
  if (!dialogBody) return;

  const steps = [
    "Password accepted.",
    "Loading personal settings...",
    "Restoring desktop state...",
    "Mounting local drives...",
    "Checking archived sessions...",
    "Loading Fortia OS..."
  ];

  dialogBody.innerHTML = '<p id="login-loader-line">Starting...</p><p>Please wait...</p><div class="progress-shell"><div id="login-progress" class="progress-bar"></div></div>';
  let index = 0;

  function step() {
    document.getElementById("login-loader-line").textContent = steps[index];
    document.getElementById("login-progress").style.width = Math.round(((index + 1) / steps.length) * 100) + "%";
    index += 1;
    if (index < steps.length) {
      setTimeout(step, 600);
    } else {
      setTimeout(() => {
        showScreen(desktop);
        updateClock();
      }, 400);
    }
  }
  step();
}

function logOff() {
  window.location.reload();
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
  if (!windowElement.style.left) windowElement.style.left = (windowElement.dataset.defaultLeft || "120") + "px";
  if (!windowElement.style.top) windowElement.style.top = (windowElement.dataset.defaultTop || "80") + "px";
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
  if (windowId === "computer-window") switchComputerView(currentComputerView);
  if (windowId === "msn-window") {
    const unreadContact = Object.keys(msnStore).find((name) => msnStore[name].unread > 0);
    showMsnConversation(unreadContact || activeMsnContact, true);
  }
  const input = windowElement.querySelector("input:not([readonly])");
  if (input) setTimeout(() => input.focus(), 40);
}

function closeWindowElement(windowElement) {
  if (windowElement) windowElement.classList.remove("open");
}

function switchComputerView(view) {
  currentComputerView = view;
  computerRootView.classList.toggle("hidden", view !== "root");
  computerLocalDiskView.classList.toggle("hidden", view !== "localdisk");
  computerSummerView.classList.toggle("hidden", view !== "summer");
  computerBackButton.disabled = view === "root";
  computerTitle.textContent = view === "root" ? "My Computer" : view === "localdisk" ? "Local Disk (C:) - My Computer" : "Summer 2026 (F:) - My Computer";
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
  const base = keepTransform ? getComputedStyle(element).transform : "none";
  const t = (x) => (base === "none" ? `translateX(${x}px)` : `${base} translateX(${x}px)`);
  element.animate([{ transform: t(0) }, { transform: t(-8) }, { transform: t(8) }, { transform: t(-5) }, { transform: t(5) }, { transform: t(0) }], { duration: 220 });
}

function runAccessProgram() {
  const user = travelUsernameInput.value.trim().toLowerCase();
  const pass = travelPasswordInput.value.trim().toLowerCase();
  if (user === TRAVEL_USERNAME && pass === TRAVEL_PASSWORD) {
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
  let i = 0;
  function step() {
    const s = steps[i];
    progressBar.style.width = s.percent + "%";
    loaderLine.textContent = s.text;
    const li = document.createElement("li");
    li.textContent = s.log;
    loaderLog.appendChild(li);
    i += 1;
    if (i < steps.length) setTimeout(step, 400);
    else setTimeout(() => {
      accessHasLoaded = true;
      accessLoader.classList.add("hidden");
      accessGranted.classList.remove("hidden");
      navigateBrowser("home", false);
    }, 300);
  }
  setTimeout(step, 180);
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
  document.querySelectorAll(".browser-page").forEach((p) => p.classList.remove("active"));
  target.classList.add("active");
  currentBrowserPage = page;
  browserAddress.textContent = page === "home" ? "travelportal://home" : "travelportal://" + page;
  if (addToHistory && browserHistory[browserHistory.length - 1] !== page) browserHistory.push(page);
  browserBackButton.disabled = browserHistory.length <= 1;
}

function browserGoBack() {
  if (browserHistory.length <= 1) return;
  browserHistory.pop();
  navigateBrowser(browserHistory[browserHistory.length - 1], false);
}

function setFlightDetail(flightId) {
  const flight = flightData[flightId];
  if (!flight) return;
  selectedFlightId = flightId;
  selectedSeat = null;
  document.querySelectorAll(".seat-button").forEach((btn) => btn.classList.remove("active"));
  flightSeatStatus.textContent = "No seat selected.";
  flightDetailRoute.textContent = flight.route;
  flightDetailNumber.textContent = flight.number;
  flightDetailDeparture.textContent = flight.departure;
  flightDetailArrival.textContent = flight.arrival;
  flightDetailDuration.textContent = flight.duration;
  flightDetailFare.textContent = flight.fare;
  flightDetailNote.textContent = flight.note;
}

function openFlightDetail(flightId) {
  if (flightLocked) return;
  setFlightDetail(flightId);
  navigateBrowser("flightdetail");
}

function randomMessageDelay() {
  return 900 + Math.floor(Math.random() * 1800);
}

function updateMsnBadge() {
  if (!msnBadge) return;
  const totalUnread = Object.values(msnStore).reduce((sum, item) => sum + item.unread, 0);
  msnBadge.textContent = String(totalUnread);
  msnBadge.classList.toggle("hidden", totalUnread === 0);
}

function renderMsnContacts() {
  if (!msnContactList) return;
  msnContactList.innerHTML = "";
  Object.entries(msnStore).forEach(([name, convo]) => {
    const button = document.createElement("button");
    button.className = "msn-contact-item" + (name === activeMsnContact ? " active" : "");
    button.type = "button";
    button.dataset.contact = name;
    button.innerHTML = `<span class="msn-contact-dot">${name.slice(0, 1)}</span><span><strong>${name}</strong><small>${convo.status.replace("Status: ", "")}</small></span>${convo.unread ? `<em>${convo.unread}</em>` : ""}`;
    button.addEventListener("click", () => showMsnConversation(name, true));
    msnContactList.appendChild(button);
  });
}

function showMsnConversation(contact, markRead = true) {
  if (!msnStore[contact]) return;
  activeMsnContact = contact;
  const convo = msnStore[contact];
  msnContactName.textContent = contact;
  msnContactStatus.textContent = convo.status;
  msnMessages.innerHTML = "";
  if (!convo.messages.length) {
    const empty = document.createElement("div");
    empty.className = "msn-empty-state";
    empty.textContent = "No messages in this conversation.";
    msnMessages.appendChild(empty);
  } else {
    convo.messages.forEach((msg) => {
      const bubble = document.createElement("div");
      bubble.className = "msn-message";
      bubble.innerHTML = `<small>${msg.time}</small><div>${msg.text}</div>`;
      msnMessages.appendChild(bubble);
    });
  }
  if (markRead) convo.unread = 0;
  renderMsnContacts();
  updateMsnBadge();
  msnMessages.scrollTop = msnMessages.scrollHeight;
}

function pushMsnMessage(contact, message, status = "Status: Online") {
  if (!msnStore[contact]) {
    msnStore[contact] = { status, messages: [], unread: 0 };
  }
  setTimeout(() => {
    const convo = msnStore[contact];
    convo.status = status;
    convo.messages.push({ text: message, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) });
    const msnOpen = document.getElementById("msn-window").classList.contains("open");
    if (msnOpen && activeMsnContact === contact) {
      showMsnConversation(contact, true);
    } else {
      convo.unread += 1;
      renderMsnContacts();
      updateMsnBadge();
    }
  }, randomMessageDelay());
}

function saveSelectedFlight() {
  if (!selectedFlightId || flightLocked) return;
  const flight = flightData[selectedFlightId];
  const seatText = selectedSeat ? ` Seat ${selectedSeat} has been noted.` : " Seat is still open in the file.";
  flightLocked = true;
  document.querySelectorAll(".flight-route-button, .seat-button").forEach((button) => button.disabled = true);
  saveFlightButton.disabled = true;
  saveFlightButton.textContent = "Option held";
  pushMsnMessage(
    flight.airline,
    `Hello ${USER_NAME}. Your selected option ${flight.number} (${flight.route}) is now on hold. Check-in opens 24 hours before departure.${seatText}`
  );
}

function renderOrangePanel(panel) {
  orangePanelDisplay.innerHTML = orangePanels[panel] || orangePanels.lineup;
  document.querySelectorAll(".orange-panel-button").forEach((btn) => btn.classList.toggle("active", btn.dataset.orangePanel === panel));
}

function updateOrangeLineupForDay(day) {
  const dayMap = {
    "Mon 29": ["Aphaca", "Tessa", "TV-2"],
    "Tue 30": ["Diket", "Augusta Schackinger", "Pumpegris"],
    "Wed 01": ["The Cure", "Wolf Alice", "Pil"],
    "Thu 02": ["Little Simz", "Tobias Rahim", "Clipse"],
    "Fri 03": ["David Byrne", "Yung Lean & Bladee", "Sierra Ferrell"],
    "Sat 04": ["Gorillaz", "Jennie", "Zara Larsson"]
  };
  const artists = dayMap[day] || dayMap["Mon 29"];
  orangePanelDisplay.innerHTML = `<div class="orange-lineup-cards">${artists.map((artist, index) => `<div class="orange-lineup-card"><span>${day}</span><strong>${artist}</strong><small>${index === 0 ? "Primary" : "Recommended"} slot</small></div>`).join("")}</div>`;
  document.querySelectorAll(".orange-panel-button").forEach((btn) => btn.classList.toggle("active", btn.dataset.orangePanel === "lineup"));
}

function confirmOrangeAllocation() {
  pushMsnMessage(
    "CAMPEN",
    `Welcome ${USER_NAME}. Your Orange week access is noted for ${selectedOrangeDay}. Camp handoff is active, and yes — you are in charge of lukewarm beer for the week.`
  );
}

function selectRoadtripStop(stop) {
  roadtripStopTitle.textContent = stop;
  roadtripStopCopy.textContent = roadtripStops[stop] || "Route stop selected.";
  document.querySelectorAll(".route-stop-button").forEach((btn) => btn.classList.toggle("active", btn.dataset.stop === stop));
}

function selectRoadtripCar(button) {
  if (carLocked) return;
  selectedRoadtripCar = button.dataset.car;
  document.querySelectorAll(".car-option-button").forEach((btn) => btn.classList.toggle("active", btn === button));
}

function saveRoadtripCar() {
  if (carLocked) return;
  if (!selectedRoadtripCar) {
    pushMsnMessage("Adriatic AutoRent", `Hi ${USER_NAME}. Select a vehicle first so the rental file can be confirmed.`);
    return;
  }
  carLocked = true;
  document.querySelectorAll(".car-option-button").forEach((button) => button.disabled = true);
  saveCarButton.disabled = true;
  saveCarButton.textContent = "Vehicle reserved";
  pushMsnMessage(
    "Adriatic AutoRent",
    `Hi ${USER_NAME}. Your ${selectedRoadtripCar} reservation is confirmed for pickup in Tirana. Bring passport and driving license to the desk.`
  );
}

function bindWindowOpener(element) {
  element.addEventListener("click", (event) => {
    const isDesktopIcon = element.classList.contains("desktop-icon");
    const isFileItem = element.classList.contains("file-item");
    if (isDesktopIcon) {
      document.querySelectorAll(".desktop-icon").forEach((other) => other.classList.remove("selected"));
      element.classList.add("selected");
    }
    if (isFileItem) {
      document.querySelectorAll(".file-item").forEach((other) => other.classList.remove("selected"));
      element.classList.add("selected");
      return;
    }
    event.stopPropagation();
    const windowId = element.dataset.window;
    if (windowId) openWindow(windowId);
  });
}

function bindFileDoubleClick(file) {
  file.addEventListener("dblclick", () => {
    const windowId = file.dataset.window;
    if (windowId) openWindow(windowId);
  });
}

userTile.addEventListener("click", openPasswordDialog);
loginButton.addEventListener("click", logIn);
cancelButton.addEventListener("click", () => showScreen(welcomeScreen));
shutdownButton.addEventListener("click", shutDown);
optionsButton.addEventListener("click", () => alert("There are no additional options. Yet."));
startButton.addEventListener("click", (event) => { event.stopPropagation(); toggleStartMenu(); });
startMenu.addEventListener("click", (event) => event.stopPropagation());
logoffButton.addEventListener("click", logOff);
desktopShutdownButton.addEventListener("click", shutDown);

const passwordInputInit = getPasswordInput();
if (passwordInputInit) passwordInputInit.addEventListener("keydown", (event) => { if (event.key === "Enter") logIn(); });

document.querySelectorAll("[data-window]").forEach(bindWindowOpener);
document.querySelectorAll(".file-item").forEach(bindFileDoubleClick);
document.querySelectorAll(".computer-drive-nav").forEach((button) => {
  button.addEventListener("click", (event) => { event.stopPropagation(); switchComputerView(button.dataset.computerView); });
  button.addEventListener("dblclick", () => switchComputerView(button.dataset.computerView));
});
computerBackButton.addEventListener("click", () => { if (currentComputerView !== "root") switchComputerView("root"); });

document.querySelectorAll(".window-close").forEach((button) => button.addEventListener("click", () => closeWindowElement(button.closest(".window"))));
document.querySelectorAll(".window-close-soft").forEach((button) => button.addEventListener("click", () => closeWindowElement(button.closest(".window"))));
document.querySelectorAll(".window").forEach((windowElement) => {
  windowElement.addEventListener("mousedown", () => {
    highestZIndex += 1;
    windowElement.style.zIndex = highestZIndex;
  });
});

document.addEventListener("click", closeStartMenu);

accessButton.addEventListener("click", runAccessProgram);
[travelUsernameInput, travelPasswordInput].forEach((input) => input.addEventListener("keydown", (event) => { if (event.key === "Enter") runAccessProgram(); }));
restoreRecycleButton.addEventListener("click", restoreRecycleBin);
emptyRecycleButton.addEventListener("click", emptyRecycleBin);
if (passwdFile) {
  const nudge = () => { recycleStatus.textContent = "This item is locked."; shakeElement(document.getElementById("recycle-window")); };
  passwdFile.addEventListener("click", nudge);
  passwdFile.addEventListener("dblclick", nudge);
}

browserBackButton.addEventListener("click", browserGoBack);
browserHomeButton.addEventListener("click", () => navigateBrowser("home"));
document.querySelectorAll(".browser-nav").forEach((button) => button.addEventListener("click", () => navigateBrowser(button.dataset.browserPage)));
document.querySelectorAll(".flight-route-button").forEach((button) => button.addEventListener("click", () => openFlightDetail(button.dataset.flightId)));
document.querySelectorAll(".seat-button").forEach((button) => button.addEventListener("click", () => {
  if (flightLocked) return;
  selectedSeat = button.dataset.seat;
  document.querySelectorAll(".seat-button").forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
  flightSeatStatus.textContent = `Seat selected: ${selectedSeat}`;
}));
saveFlightButton.addEventListener("click", saveSelectedFlight);

document.querySelectorAll(".orange-panel-button").forEach((button) => button.addEventListener("click", () => renderOrangePanel(button.dataset.orangePanel)));
document.querySelectorAll(".orange-day").forEach((button) => button.addEventListener("click", () => {
  selectedOrangeDay = button.dataset.orangeDay;
  document.querySelectorAll(".orange-day").forEach((btn) => btn.classList.toggle("active", btn === button));
  updateOrangeLineupForDay(selectedOrangeDay);
}));
orangeConfirmButton.addEventListener("click", confirmOrangeAllocation);

document.querySelectorAll(".route-stop-button").forEach((button) => button.addEventListener("click", () => selectRoadtripStop(button.dataset.stop)));
document.querySelectorAll(".car-option-button").forEach((button) => button.addEventListener("click", () => selectRoadtripCar(button)));
saveCarButton.addEventListener("click", saveRoadtripCar);

setInterval(updateClock, 1000);
clock.addEventListener("click", (event) => {
  event.stopPropagation();
  clockClicks += 1;
  if (clockClicks === 1) alert("Current time is not useful for this investigation.");
  else if (clockClicks === 3) alert("Stop interrogating the clock.");
  else if (clockClicks === 6) alert("The clock has reported your behavior to System.");
});

document.addEventListener("keydown", (event) => {
  const expected = konamiCode[konamiIndex];
  const pressed = event.key.length === 1 ? event.key.toLowerCase() : event.key;
  if (pressed === expected) {
    konamiIndex += 1;
    if (konamiIndex === konamiCode.length) {
      konamiIndex = 0;
      openWindow("debug-window");
    }
  } else konamiIndex = 0;
});

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

window.addEventListener("resize", () => document.querySelectorAll(".window.open").forEach(clampWindowToViewport));

const selectionBox = document.getElementById("selection-box");
let isSelecting = false;
let selectionStartX = 0;
let selectionStartY = 0;
desktop.addEventListener("mousedown", (event) => {
  if (event.target.closest(".window") || event.target.closest(".desktop-icon") || event.target.closest(".taskbar") || event.target.closest(".start-menu")) return;
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
  const rect = selectionBox.getBoundingClientRect();
  document.querySelectorAll(".desktop-icon").forEach((icon) => {
    const r = icon.getBoundingClientRect();
    const overlaps = rect.left < r.right && rect.right > r.left && rect.top < r.bottom && rect.bottom > r.top;
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
renderOrangePanel("lineup");
selectRoadtripStop("Albania");
