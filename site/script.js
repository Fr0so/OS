const PASSWORD = "Rigsby";
const TRAVEL_USERNAME = "name";
const TRAVEL_PASSWORD = "letmein";
const USER_NAME = "Name";

const flightData = {
  "nyc-cph": { route: "NYC → CPH", number: "SK 912", departure: "JFK · 08:20", arrival: "CPH · 21:35", duration: "7h 15m", fare: "Classic", note: "Direct service · transatlantic", airline: "SAS Travel Desk" },
  "cph-nyc": { route: "CPH → NYC", number: "SK 911", departure: "CPH · 13:40", arrival: "JFK · 16:10", duration: "8h 30m", fare: "Classic", note: "Direct service · westbound", airline: "SAS Travel Desk" },
  "cph-tirana": { route: "CPH → Tirana", number: "OU 481", departure: "CPH · 09:05", arrival: "TIA · 13:55", duration: "4h 50m", fare: "Saver", note: "Arrival: Tirana International Airport", airline: "Adriatic Air Desk" },
  "tirana-cph": { route: "Tirana → CPH", number: "OU 482", departure: "TIA · 14:40", arrival: "CPH · 19:20", duration: "4h 40m", fare: "Saver", note: "Departure: Tirana International Airport", airline: "Adriatic Air Desk" },
  "cph-zurich": { route: "CPH → Zurich", number: "LX 1271", departure: "CPH · 11:25", arrival: "ZRH · 13:20", duration: "1h 55m", fare: "Flex", note: "Direct service · short haul", airline: "Swiss Booking Desk" }
};

const countryData = {
  "Albania": { code: "AL", dish: "Tavë kosi", see: "Tirana + Albanian Riviera", note: "Coffee is basically infrastructure. Start practical in Tirana, then let the coast do the convincing." },
  "Montenegro": { code: "ME", dish: "Njeguši prosciutto", see: "Bay of Kotor", note: "Tiny roads, huge views. The route works best when you stop pretending the schedule is in charge." },
  "Croatia": { code: "HR", dish: "Peka", see: "Adriatic coast + old towns", note: "Everything looks like a postcard and half of it probably is. Good final stretch if the car still has patience." },
  "Kosovo": { code: "XK", dish: "Flija", see: "Prizren", note: "Cafés double as planning offices. Add time for conversations that were supposed to be five minutes." },
  "Serbia": { code: "RS", dish: "Ćevapi", see: "Belgrade at night", note: "The playlist gets louder after midnight. Best treated as a route branch, not a quiet detour." },
  "North Macedonia": { code: "MK", dish: "Tavče gravče", see: "Lake Ohrid", note: "Slow mornings are not delays here. They are the itinerary defending itself." }
};

const orangeLineupByDay = {
  "Mon 29": ["Aphaca", "Tessa", "TV-2"],
  "Tue 30": ["Diket", "Augusta Schackinger", "Pumpegris"],
  "Wed 01": ["The Cure", "Wolf Alice", "Pil"],
  "Thu 02": ["Little Simz", "Tobias Rahim", "Clipse"],
  "Fri 03": ["David Byrne", "Yung Lean & Bladee", "Sierra Ferrell"],
  "Sat 04": ["Gorillaz", "Jennie", "Zara Larsson"]
};

const orangePanels = {
  lineup: () => `<div class="orange-lineup-cards">${(orangeLineupByDay[selectedOrangeDay] || orangeLineupByDay["Wed 01"]).map((artist, index) => `<div class="orange-lineup-card"><span>${selectedOrangeDay}</span><strong>${artist}</strong><small>${index === 0 ? "Primary slot" : "Recommended"}</small></div>`).join("")}</div>`,
  camp: () => `
    <div class="camp-pack-layout">
      <div class="camp-task-card">
        <span>Task</span><strong>Lukewarm beer lead</strong><small>Assigned to Name</small>
        <div class="camp-progress-bar"><span class="camp-progress-fill" id="camp-progress-fill"></span></div>
        <em class="camp-progress-text" id="camp-progress-text">0 / 5 packed</em>
      </div>
      <div class="packing-list-panel" id="camp-packing-list">
        <h3>Packing list</h3>
        <label><input class="camp-checkbox" data-camp-item="tape" type="checkbox"> Pavilion tape</label>
        <label><input class="camp-checkbox" data-camp-item="powerbank" type="checkbox"> Powerbank</label>
        <label><input class="camp-checkbox" data-camp-item="rain" type="checkbox"> Rain cover</label>
        <label><input class="camp-checkbox" data-camp-item="sunscreen" type="checkbox"> Sunscreen that will be forgotten</label>
        <label><input class="camp-checkbox" data-camp-item="socks" type="checkbox"> Dry socks hidden from everyone</label>
      </div>
    </div>`,
  access: () => `
    <div class="orange-lineup-cards">
      <div class="orange-lineup-card"><span>Access</span><strong>Partner</strong><small>Route not public</small></div>
      <div class="orange-lineup-card"><span>Wristband</span><strong>On site</strong><small>Camp handoff</small></div>
      <div class="orange-lineup-card"><span>Link</span><strong>CPH</strong><small>Matched with travel file</small></div>
    </div>`
};

const $ = (id) => document.getElementById(id);

const welcomeScreen = $("welcome-screen");
const passwordScreen = $("password-screen");
const desktop = $("desktop");
const userTile = $("user-tile");
const loginButton = $("login-button");
const cancelButton = $("cancel-button");
const shutdownButton = $("shutdown-button");
const optionsButton = $("options-button");
const clock = $("clock");
const startButton = $("start-button");
const startMenu = $("start-menu");
const logoffButton = $("logoff-button");
const desktopShutdownButton = $("desktop-shutdown-button");
const computerTitle = $("computer-title");
const computerBackButton = $("computer-back-button");
const computerRootView = $("computer-root-view");
const computerLocalDiskView = $("computer-localdisk-view");
const computerSummerView = $("computer-summer-view");
const restoreRecycleButton = $("restore-recycle-button");
const emptyRecycleButton = $("empty-recycle-button");
const recycleStatus = $("recycle-status");
const passwdFile = $("passwd-file");
const travelUsernameInput = $("travel-username-input");
const travelPasswordInput = $("travel-password-input");
const accessButton = $("access-button");
const accessMessage = $("access-message");
const accessLocked = $("access-locked");
const accessLoader = $("access-loader");
const accessGranted = $("access-granted");
const loaderLine = $("loader-line");
const loaderLog = $("loader-log");
const progressBar = $("progress-bar");
const browserAddress = $("browser-address");
const browserBackButton = $("browser-back-button");
const browserHomeButton = $("browser-home-button");
const flightDetailRoute = $("flight-detail-route");
const flightDetailNumber = $("flight-detail-number");
const flightDetailDeparture = $("flight-detail-departure");
const flightDetailArrival = $("flight-detail-arrival");
const flightDetailDuration = $("flight-detail-duration");
const flightDetailFare = $("flight-detail-fare");
const flightDetailNote = $("flight-detail-note");
const flightSeatStatus = $("flight-seat-status");
const flightLockStatus = $("flight-lock-status");
const saveFlightButton = $("save-flight-button");
const orangePanelDisplay = $("orange-panel-display");
const orangeConfirmButton = $("orange-confirm-button");
const countryBackButton = $("balkan-country-back");
const countryDetailPath = $("country-detail-path");
const countryDetailTitle = $("country-detail-title");
const countryDetailCopy = $("country-detail-copy");
const countryDetailCode = $("country-detail-code");
const countryDish = $("country-dish");
const countrySee = $("country-see");
const countryNote = $("country-note");
const saveCarButton = $("save-car-button");
const msnMessages = $("msn-messages");
const msnContactName = $("msn-contact-name");
const msnContactStatus = $("msn-contact-status");
const msnContactList = $("msn-contact-list");
const msnBadge = $("msn-badge");
const bookingUsernameValue = $("booking-username-value");
const agencyPassengerName = $("agency-passenger-name");
const emptyFolderContent = $("empty-folder-content");
const emptyFolderPlaceholder = $("empty-folder-placeholder");
const denmarkRantTrash = $("denmark-rant-trash");
const dukeRantTrash = $("duke-rant-trash");

let highestZIndex = 10;
let loginAttempts = 0;
let clockClicks = 0;
let startClicks = 0;
let currentComputerView = "root";
let passwdRestored = false;
let rantsRestored = false;
let accessHasLoaded = false;
let browserHistory = ["home"];
let selectedFlightId = null;
let confirmedFlightId = null;
let selectedSeat = null;
let selectedRoadtripCar = null;
let selectedOrangeDay = "Mon 29";
let currentOrangePanel = "lineup";
const campChecklist = { tape: false, powerbank: false, rain: false, sunscreen: false, socks: false };
let activeMsnContact = null;
let currentTravelAccessName = "";
let flightLocked = false;
let carLocked = false;
let konamiIndex = 0;
const msnStore = {};
const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

function showScreen(screen) {
  document.querySelectorAll(".screen").forEach((el) => el.classList.remove("active"));
  screen.classList.add("active");
}

function getPasswordInput() { return $("password"); }
function getLoginMessage() { return $("login-message"); }
function getCurrentOsUserName() {
  const input = $("username");
  return (input?.value || USER_NAME).trim() || USER_NAME;
}

function getDynamicBookingUser() {
  return (currentTravelAccessName || getCurrentOsUserName() || USER_NAME).trim() || USER_NAME;
}

function syncDynamicText() {
  if (bookingUsernameValue) bookingUsernameValue.textContent = getDynamicBookingUser();
  if (agencyPassengerName) agencyPassengerName.textContent = getCurrentOsUserName();
}

function addFileToFolder(folderEl, windowId, label) {
  if (!folderEl) return;
  const existing = Array.from(folderEl.querySelectorAll('.file-item')).find((item) => item.dataset.window === windowId);
  if (existing) return;
  const file = document.createElement('button');
  file.className = 'file-item';
  file.type = 'button';
  file.dataset.window = windowId;
  file.innerHTML = '<span class="file-icon txt-icon"></span><span>' + label + '</span>';
  folderEl.appendChild(file);
  bindWindowOpener(file);
  bindFileDoubleClick(file);
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
  const input = getPasswordInput();
  const msg = getLoginMessage();
  if (!input || !msg) return;
  if (input.value === PASSWORD) {
    msg.textContent = "";
    startLoginLoader();
    return;
  }
  loginAttempts += 1;
  msg.textContent = loginAttempts >= 3 ? "Wrong password.\nHint: R....." : "Wrong password.";
  input.value = "";
  input.focus();
  shakeElement(document.querySelector(".dialog-window"), true);
}

function startLoginLoader() {
  const dialogBody = document.querySelector(".dialog-body");
  if (!dialogBody) return;
  const steps = ["Password accepted.", "Loading personal settings...", "Restoring desktop state...", "Mounting local drives...", "Checking archived sessions...", "Loading Fortia OS..."];
  dialogBody.innerHTML = '<p id="login-loader-line">Starting...</p><p>Please wait...</p><div class="progress-shell"><div id="login-progress" class="progress-bar"></div></div>';
  let index = 0;
  function step() {
    $("login-loader-line").textContent = steps[index];
    $("login-progress").style.width = Math.round(((index + 1) / steps.length) * 100) + "%";
    index += 1;
    if (index < steps.length) setTimeout(step, 560);
    else setTimeout(() => { showScreen(desktop); syncDynamicText(); updateClock(); }, 350);
  }
  step();
}

function logOff() { window.location.reload(); }
function shutDown() { closeStartMenu(); alert("It is now safe to turn off Fortia OS."); }
function updateClock() { clock.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); }

function clampWindowToViewport(windowElement) {
  const taskbarHeight = 38;
  const margin = 12;
  const rect = windowElement.getBoundingClientRect();
  const maxLeft = Math.max(margin, window.innerWidth - rect.width - margin);
  const maxTop = Math.max(margin, window.innerHeight - rect.height - taskbarHeight - margin);
  let left = parseInt(windowElement.style.left || windowElement.dataset.defaultLeft || "120", 10);
  let top = parseInt(windowElement.style.top || windowElement.dataset.defaultTop || "80", 10);
  windowElement.style.left = Math.max(margin, Math.min(left, maxLeft)) + "px";
  windowElement.style.top = Math.max(margin, Math.min(top, maxTop)) + "px";
}

function placeWindow(windowElement) {
  if (!windowElement.style.left) windowElement.style.left = (windowElement.dataset.defaultLeft || "120") + "px";
  if (!windowElement.style.top) windowElement.style.top = (windowElement.dataset.defaultTop || "80") + "px";
  requestAnimationFrame(() => clampWindowToViewport(windowElement));
}

function openWindow(windowId) {
  const windowElement = $(windowId);
  if (!windowElement) return;
  highestZIndex += 1;
  windowElement.classList.add("open");
  windowElement.style.zIndex = highestZIndex;
  placeWindow(windowElement);
  closeStartMenu();
  if (windowId === "computer-window") switchComputerView(currentComputerView);
  if (windowId === "booking-username-window" || windowId === "program-window" || windowId === "system-window") syncDynamicText();
  if (windowId === "msn-window") {
    const unread = Object.keys(msnStore).find((name) => msnStore[name].unread > 0);
    if (unread) showMsnConversation(unread, true);
    else if (activeMsnContact && msnStore[activeMsnContact]) showMsnConversation(activeMsnContact, false);
    else renderMsnContacts();
  }
  const input = windowElement.querySelector("input:not([readonly])");
  if (input) setTimeout(() => input.focus(), 40);
}
function closeWindowElement(windowElement) { if (windowElement) windowElement.classList.remove("open"); }

function switchComputerView(view) {
  currentComputerView = view;
  computerRootView.classList.toggle("hidden", view !== "root");
  computerLocalDiskView.classList.toggle("hidden", view !== "localdisk");
  computerSummerView.classList.toggle("hidden", view !== "summer");
  computerBackButton.disabled = view === "root";
  computerTitle.textContent = view === "root" ? "My Computer" : view === "localdisk" ? "Local Disk (C:) - My Computer" : "Summer 2026 (F:) - My Computer";
}
function toggleStartMenu() { startClicks += 1; if (startClicks === 6) alert("Start button has no further comments."); startMenu.classList.toggle("open"); }
function closeStartMenu() { startMenu.classList.remove("open"); }

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
    currentTravelAccessName = travelUsernameInput.value.trim() || getCurrentOsUserName();
    syncDynamicText();
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
    shakeElement($("program-window"));
  }
}

function startAccessLoader() {
  accessLoader.classList.remove("hidden");
  accessGranted.classList.add("hidden");
  loaderLog.innerHTML = "";
  progressBar.style.width = "0%";
  const steps = [
    { percent: 12, text: "Loading private desk...", log: "agency desk" },
    { percent: 27, text: "Opening booking files...", log: "booking files" },
    { percent: 42, text: "Reading fare tables...", log: "fare tables" },
    { percent: 61, text: "Collecting allocation routes...", log: "allocation routes" },
    { percent: 79, text: "Mounting road file...", log: "road file" },
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
    if (i < steps.length) setTimeout(step, 390);
    else setTimeout(() => { accessHasLoaded = true; accessLoader.classList.add("hidden"); accessGranted.classList.remove("hidden"); navigateBrowser("home", false); }, 300);
  }
  setTimeout(step, 180);
}

function restoreRecycleBin() {
  if (rantsRestored) {
    recycleStatus.textContent = "passwd.txt is locked. No other deleted items remain.";
    shakeElement($("recycle-window"));
    return;
  }
  if (emptyFolderPlaceholder) emptyFolderPlaceholder.remove();
  addFileToFolder(emptyFolderContent, "denmark-rant-window", "Danmark VM 26.txt");
  addFileToFolder(emptyFolderContent, "duke-rant-window", "March madness 26.txt");
  denmarkRantTrash?.remove();
  dukeRantTrash?.remove();
  rantsRestored = true;
  recycleStatus.textContent = "Restored 2 files to Empty folder.";
}
function emptyRecycleBin() { recycleStatus.textContent = "Cannot empty Recycle Bin: permission denied."; shakeElement($("recycle-window")); }

function navigateBrowser(page, addToHistory = true) {
  const target = $("browser-" + page);
  if (!target) return;
  document.querySelectorAll(".browser-page").forEach((p) => p.classList.remove("active"));
  target.classList.add("active");
  browserAddress.textContent = page === "home" ? "travelportal://home" : "travelportal://" + page.replace("country", "/");
  if (addToHistory && browserHistory[browserHistory.length - 1] !== page) browserHistory.push(page);
  browserBackButton.disabled = browserHistory.length <= 1;
}
function browserGoBack() { if (browserHistory.length <= 1) return; browserHistory.pop(); navigateBrowser(browserHistory[browserHistory.length - 1], false); }

function setFlightDetail(flightId) {
  const flight = flightData[flightId];
  if (!flight) return;
  selectedFlightId = flightId;

  flightDetailRoute.textContent = flight.route;
  flightDetailNumber.textContent = flight.number;
  flightDetailDeparture.textContent = flight.departure;
  flightDetailArrival.textContent = flight.arrival;
  flightDetailDuration.textContent = flight.duration;
  flightDetailFare.textContent = flight.fare;
  flightDetailNote.textContent = flight.note;

  const seatCard = document.querySelector(".flight-seat-card");
  const isConfirmedFlight = flightLocked && flightId === confirmedFlightId;

  if (!flightLocked) {
    selectedSeat = null;
    document.querySelectorAll(".seat-button").forEach((btn) => {
      btn.disabled = false;
      btn.classList.remove("active");
    });
    flightSeatStatus.textContent = "No seat selected.";
    if (flightLockStatus) flightLockStatus.textContent = "";
    saveFlightButton.disabled = false;
    saveFlightButton.textContent = "Hold this option";
    if (seatCard) seatCard.classList.remove("locked-mode");
    return;
  }

  document.querySelectorAll(".seat-button").forEach((btn) => {
    btn.disabled = true;
    btn.classList.toggle("active", isConfirmedFlight && selectedSeat && btn.dataset.seat === selectedSeat);
  });

  if (seatCard) seatCard.classList.add("locked-mode");
  saveFlightButton.disabled = true;
  saveFlightButton.textContent = isConfirmedFlight ? "Held" : "Hold locked";
  flightSeatStatus.textContent = isConfirmedFlight
    ? (selectedSeat ? `Held seat: ${selectedSeat}` : "Held without seat assignment.")
    : "Preview only.";
  if (flightLockStatus) flightLockStatus.textContent = "";
}
function openFlightDetail(flightId) {
  setFlightDetail(flightId);
  navigateBrowser("flightdetail");
}
function updateFlightOverviewLock() {
  document.querySelectorAll(".flight-route-button").forEach((button) => {
    const isSelected = button.dataset.flightId === confirmedFlightId;
    button.classList.toggle("selected-flight-locked", isSelected);
    button.classList.toggle("view-only-flight", flightLocked && !isSelected);
    button.disabled = false;
    const action = button.querySelector(".flight-footer em");
    if (action) action.textContent = isSelected ? "Held" : "View";
  });
}
function saveSelectedFlight() {
  if (!selectedFlightId || flightLocked) return;
  const flight = flightData[selectedFlightId];
  const seatText = selectedSeat ? `Seat ${selectedSeat} noted.` : "No seat assigned yet.";
  flightLocked = true;
  confirmedFlightId = selectedFlightId;
  document.querySelectorAll(".seat-button").forEach((button) => button.disabled = true);
  saveFlightButton.disabled = true;
  saveFlightButton.textContent = "Held";
  document.querySelector(".flight-seat-card")?.classList.add("locked-mode");
  updateFlightOverviewLock();
  setFlightDetail(confirmedFlightId);
  queueMsnMessage(flight.airline, `${flight.number} / ${flight.route}: Hi ${USER_NAME}. Your selected option is now on hold. ${seatText} Check-in opens 24 hours before departure.`);
}

function renderOrangePanel(panel) {
  currentOrangePanel = panel;
  orangePanelDisplay.innerHTML = (orangePanels[panel] || orangePanels.lineup)();
  document.querySelectorAll(".orange-panel-button").forEach((btn) => btn.classList.toggle("active", btn.dataset.orangePanel === panel));
  if (panel === "camp") bindCampChecklist();
  updateOrangeConfirmState();
}
function updateOrangeLineupForDay(day) {
  selectedOrangeDay = day;
  if (currentOrangePanel === "lineup") renderOrangePanel("lineup");
}
function bindCampChecklist() {
  document.querySelectorAll(".camp-checkbox").forEach((box) => {
    const key = box.dataset.campItem;
    box.checked = !!campChecklist[key];
    box.closest("label")?.classList.toggle("done", box.checked);
    box.addEventListener("change", () => {
      campChecklist[key] = box.checked;
      box.closest("label")?.classList.toggle("done", box.checked);
      updateOrangeConfirmState();
    });
  });
  updateCampProgress();
}
function updateCampProgress() {
  const total = Object.keys(campChecklist).length;
  const done = Object.values(campChecklist).filter(Boolean).length;
  const fill = $("camp-progress-fill");
  const text = $("camp-progress-text");
  if (fill) fill.style.width = Math.round((done / total) * 100) + "%";
  if (text) text.textContent = `${done} / ${total} packed`;
}
function updateOrangeConfirmState() {
  updateCampProgress();
  const allPacked = Object.values(campChecklist).every(Boolean);
  orangeConfirmButton.disabled = !allPacked;
  orangeConfirmButton.textContent = allPacked ? "Confirm camp allocation" : "Complete packing list";
}
function confirmOrangeAllocation() {
  if (!Object.values(campChecklist).every(Boolean)) {
    shakeElement(orangePanelDisplay);
    return;
  }
  queueMsnMessage("CAMPEN", `Hey ${USER_NAME}. Lovely of you to join us. Practical info: your Orange access is noted for ${selectedOrangeDay}, wristband handoff happens on site, and camp placement follows the partner file. Also, you are in charge of borrowing beer for the week. Best, Campen.`);
}

function openCountryDetail(country) {
  const data = countryData[country];
  if (!data) return;
  countryDetailPath.textContent = country.toLowerCase().replace(/\s+/g, "-");
  countryDetailTitle.textContent = country;
  countryDetailCopy.textContent = data.note;
  countryDetailCode.textContent = data.code;
  countryDish.textContent = data.dish;
  countrySee.textContent = data.see;
  countryNote.textContent = data.note;
  document.querySelectorAll(".route-stop-button").forEach((btn) => btn.classList.toggle("active", btn.dataset.stop === country));
  navigateBrowser("balkancountry");
  browserAddress.textContent = "travelportal://balkan/" + data.code.toLowerCase();
}
function selectRoadtripCar(button) { if (carLocked) return; selectedRoadtripCar = button.dataset.car; document.querySelectorAll(".car-option-button").forEach((btn) => btn.classList.toggle("active", btn === button)); }
function saveRoadtripCar() {
  if (carLocked) return;
  if (!selectedRoadtripCar) { queueMsnMessage("Adriatic AutoRent", `Hi ${USER_NAME}. Select a vehicle first so the rental file can be confirmed.`); return; }
  carLocked = true;
  document.querySelectorAll(".car-option-button").forEach((button) => button.disabled = true);
  saveCarButton.disabled = true;
  saveCarButton.textContent = "Vehicle reserved";
  queueMsnMessage("Adriatic AutoRent", `Hi ${USER_NAME}. Your ${selectedRoadtripCar} reservation is confirmed for pickup in Tirana. Bring passport and driving license to the desk.`);
}

function randomMessageDelay() { return 900 + Math.floor(Math.random() * 1900); }
function queueMsnMessage(contact, message, status = "Status: Online") { setTimeout(() => pushMsnMessage(contact, message, status), randomMessageDelay()); }
function updateMsnBadge() {
  if (!msnBadge) return;
  const totalUnread = Object.values(msnStore).reduce((sum, item) => sum + item.unread, 0);
  msnBadge.textContent = String(totalUnread);
  msnBadge.classList.toggle("hidden", totalUnread === 0);
}
function renderMsnContacts() {
  if (!msnContactList) return;
  msnContactList.innerHTML = "";
  const entries = Object.entries(msnStore);
  if (!entries.length) {
    return;
  }
  entries.forEach(([name, convo]) => {
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
  convo.messages.forEach((msg) => {
    const bubble = document.createElement("div");
    bubble.className = "msn-message";
    bubble.innerHTML = `<small>${msg.time}</small><div>${msg.text}</div>`;
    msnMessages.appendChild(bubble);
  });
  if (markRead) convo.unread = 0;
  renderMsnContacts();
  updateMsnBadge();
  msnMessages.scrollTop = msnMessages.scrollHeight;
}
function pushMsnMessage(contact, message, status = "Status: Online") {
  if (!msnStore[contact]) msnStore[contact] = { status, messages: [], unread: 0 };
  const convo = msnStore[contact];
  convo.status = status;
  convo.messages.push({ text: message, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) });
  const msnOpen = $("msn-window").classList.contains("open");
  if (msnOpen && activeMsnContact === contact) showMsnConversation(contact, true);
  else convo.unread += 1;
  renderMsnContacts();
  updateMsnBadge();
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
function bindFileDoubleClick(file) { file.addEventListener("dblclick", () => { const windowId = file.dataset.window; if (windowId) openWindow(windowId); }); }

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
syncDynamicText();
document.querySelectorAll(".file-item").forEach(bindFileDoubleClick);
document.querySelectorAll(".computer-drive-nav").forEach((button) => { button.addEventListener("click", (event) => { event.stopPropagation(); switchComputerView(button.dataset.computerView); }); button.addEventListener("dblclick", () => switchComputerView(button.dataset.computerView)); });
computerBackButton.addEventListener("click", () => { if (currentComputerView !== "root") switchComputerView("root"); });
document.querySelectorAll(".window-close").forEach((button) => button.addEventListener("click", () => closeWindowElement(button.closest(".window"))));
document.querySelectorAll(".window-close-soft").forEach((button) => button.addEventListener("click", () => closeWindowElement(button.closest(".window"))));
document.querySelectorAll(".window").forEach((windowElement) => { windowElement.addEventListener("mousedown", () => { highestZIndex += 1; windowElement.style.zIndex = highestZIndex; }); });
document.addEventListener("click", closeStartMenu);
accessButton.addEventListener("click", runAccessProgram);
[travelUsernameInput, travelPasswordInput].forEach((input) => input.addEventListener("keydown", (event) => { if (event.key === "Enter") runAccessProgram(); }));
restoreRecycleButton.addEventListener("click", restoreRecycleBin);
emptyRecycleButton.addEventListener("click", emptyRecycleBin);
if (passwdFile) {
  const nudge = () => { recycleStatus.textContent = "This item is locked."; shakeElement($("recycle-window")); };
  passwdFile.addEventListener("click", nudge);
  passwdFile.addEventListener("dblclick", nudge);
}
browserBackButton.addEventListener("click", browserGoBack);
browserHomeButton.addEventListener("click", () => navigateBrowser("home"));
document.querySelectorAll(".browser-nav").forEach((button) => button.addEventListener("click", () => navigateBrowser(button.dataset.browserPage)));
document.querySelectorAll(".flight-route-button").forEach((button) => button.addEventListener("click", () => openFlightDetail(button.dataset.flightId)));
document.querySelectorAll(".seat-button").forEach((button) => button.addEventListener("click", () => { if (flightLocked) return; selectedSeat = button.dataset.seat; document.querySelectorAll(".seat-button").forEach((btn) => btn.classList.remove("active")); button.classList.add("active"); flightSeatStatus.textContent = `Seat selected: ${selectedSeat}`; }));
saveFlightButton.addEventListener("click", saveSelectedFlight);
document.querySelectorAll(".orange-panel-button").forEach((button) => button.addEventListener("click", () => renderOrangePanel(button.dataset.orangePanel)));
document.querySelectorAll(".orange-day").forEach((button) => button.addEventListener("click", () => { selectedOrangeDay = button.dataset.orangeDay; document.querySelectorAll(".orange-day").forEach((btn) => btn.classList.toggle("active", btn === button)); updateOrangeLineupForDay(selectedOrangeDay); }));
orangeConfirmButton.addEventListener("click", confirmOrangeAllocation);
document.querySelectorAll(".route-stop-button").forEach((button) => button.addEventListener("click", () => openCountryDetail(button.dataset.stop)));
document.querySelectorAll(".car-option-button").forEach((button) => button.addEventListener("click", () => selectRoadtripCar(button)));
saveCarButton.addEventListener("click", saveRoadtripCar);
if (countryBackButton) countryBackButton.addEventListener("click", () => navigateBrowser("balkan"));

setInterval(updateClock, 1000);
clock.addEventListener("click", (event) => { event.stopPropagation(); clockClicks += 1; if (clockClicks === 1) alert("Current time is not useful for this investigation."); else if (clockClicks === 3) alert("Stop interrogating the clock."); else if (clockClicks === 6) alert("The clock has reported your behavior to System."); });
document.addEventListener("keydown", (event) => { const expected = konamiCode[konamiIndex]; const pressed = event.key.length === 1 ? event.key.toLowerCase() : event.key; if (pressed === expected) { konamiIndex += 1; if (konamiIndex === konamiCode.length) { konamiIndex = 0; openWindow("debug-window"); } } else konamiIndex = 0; });

let draggedWindow = null;
let dragOffsetX = 0;
let dragOffsetY = 0;
document.querySelectorAll(".window-titlebar").forEach((titlebar) => { titlebar.addEventListener("mousedown", (event) => { if (event.target.classList.contains("window-close")) return; draggedWindow = titlebar.closest(".window"); if (!draggedWindow) return; highestZIndex += 1; draggedWindow.style.zIndex = highestZIndex; const rect = draggedWindow.getBoundingClientRect(); dragOffsetX = event.clientX - rect.left; dragOffsetY = event.clientY - rect.top; document.body.style.cursor = "move"; event.preventDefault(); }); });
document.addEventListener("mousemove", (event) => { if (!draggedWindow) return; const taskbarHeight = 38; const maxLeft = Math.max(0, window.innerWidth - draggedWindow.offsetWidth); const maxTop = Math.max(0, window.innerHeight - draggedWindow.offsetHeight - taskbarHeight); let nextLeft = event.clientX - dragOffsetX; let nextTop = event.clientY - dragOffsetY; nextLeft = Math.max(0, Math.min(nextLeft, maxLeft)); nextTop = Math.max(0, Math.min(nextTop, maxTop)); draggedWindow.style.left = nextLeft + "px"; draggedWindow.style.top = nextTop + "px"; });
document.addEventListener("mouseup", () => { if (draggedWindow) { draggedWindow = null; document.body.style.cursor = ""; } });
window.addEventListener("resize", () => { document.querySelectorAll(".window.open").forEach(clampWindowToViewport); lockDesktopIconPositions(); });

const selectionBox = $("selection-box");
let isSelecting = false;
let selectionStartX = 0;
let selectionStartY = 0;
desktop.addEventListener("mousedown", (event) => { if (event.target.closest(".window") || event.target.closest(".desktop-icon") || event.target.closest(".taskbar") || event.target.closest(".start-menu")) return; isSelecting = true; selectionStartX = event.clientX; selectionStartY = event.clientY; selectionBox.style.left = selectionStartX + "px"; selectionBox.style.top = selectionStartY + "px"; selectionBox.style.width = "0px"; selectionBox.style.height = "0px"; selectionBox.style.display = "block"; document.querySelectorAll(".desktop-icon").forEach((icon) => icon.classList.remove("selected")); closeStartMenu(); });
document.addEventListener("mousemove", (event) => { if (!isSelecting) return; const currentX = event.clientX; const currentY = event.clientY; const left = Math.min(selectionStartX, currentX); const top = Math.min(selectionStartY, currentY); const width = Math.abs(currentX - selectionStartX); const height = Math.abs(currentY - selectionStartY); selectionBox.style.left = left + "px"; selectionBox.style.top = top + "px"; selectionBox.style.width = width + "px"; selectionBox.style.height = height + "px"; const rect = selectionBox.getBoundingClientRect(); document.querySelectorAll(".desktop-icon").forEach((icon) => { const r = icon.getBoundingClientRect(); const overlaps = rect.left < r.right && rect.right > r.left && rect.top < r.bottom && rect.bottom > r.top; icon.classList.toggle("selected", overlaps); }); });
document.addEventListener("mouseup", () => { if (!isSelecting) return; isSelecting = false; selectionBox.style.display = "none"; });

function lockDesktopIconPositions() {
  const recycle = $("desktop-recycle-icon");
  const icons = document.querySelector(".desktop-icons");
  if (icons) {
    icons.style.position = "absolute";
    icons.style.top = "22px";
    icons.style.left = "22px";
    icons.style.padding = "0";
  }
  if (recycle) {
    recycle.style.position = "absolute";
    recycle.style.top = "22px";
    recycle.style.right = "22px";
    recycle.style.left = "auto";
    recycle.style.bottom = "auto";
    recycle.style.transform = "none";
  }
}

updateClock();
lockDesktopIconPositions();
renderMsnContacts();
renderOrangePanel("lineup");
