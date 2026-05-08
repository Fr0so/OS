const PASSWORD = "Rigsby";
const TRAVEL_USERNAME = "name";
const TRAVEL_PASSWORD = "letmein";
const DEFAULT_USER = "Name";

const $ = (id) => document.getElementById(id);
const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const flightData = {
  "nyc-cph": { route: "NYC → CPH", number: "SK 912", from: "JFK", dep: "08:20", stop: "Direct", arr: "21:35", to: "CPH", departure: "JFK · 08:20", arrival: "CPH · 21:35", duration: "7h 15m", fare: "Classic", cabin: "Economy", baggage: "1 cabin bag", airline: "SAS Travel Desk" },
  "cph-nyc": { route: "CPH → NYC", number: "SK 911", from: "CPH", dep: "13:40", stop: "Direct", arr: "16:10", to: "JFK", departure: "CPH · 13:40", arrival: "JFK · 16:10", duration: "8h 30m", fare: "Classic", cabin: "Economy", baggage: "1 cabin bag", airline: "SAS Travel Desk" },
  "cph-tirana": { route: "CPH → Tirana", number: "OU 481", from: "CPH", dep: "09:05", stop: "1 stop", arr: "13:55", to: "TIA", departure: "CPH · 09:05", arrival: "TIA · 13:55", duration: "4h 50m", fare: "Saver", cabin: "Economy", baggage: "1 cabin bag", airline: "Adriatic Air Desk", seatNote: "TIA / Tirana International Airport" },
  "tirana-cph": { route: "Tirana → CPH", number: "OU 482", from: "TIA", dep: "14:40", stop: "1 stop", arr: "19:20", to: "CPH", departure: "TIA · 14:40", arrival: "CPH · 19:20", duration: "4h 40m", fare: "Saver", cabin: "Economy", baggage: "1 cabin bag", airline: "Adriatic Air Desk", seatNote: "TIA / Tirana International Airport" },
  "cph-zurich": { route: "CPH → Zurich", number: "LX 1271", from: "CPH", dep: "11:25", stop: "Direct", arr: "13:20", to: "ZRH", departure: "CPH · 11:25", arrival: "ZRH · 13:20", duration: "1h 55m", fare: "Flex", cabin: "Economy", baggage: "1 cabin bag", airline: "Swiss Booking Desk" }
};

const orangeLineupByDay = {
  "Mon 29": ["Pil", "Aphaca", "Sierra Ferrell"],
  "Tue 30": ["Lily Allen", "Addison Rae", "Kneecap"],
  "Wed 01": ["The Cure", "Wolf Alice", "Clipse"],
  "Thu 02": ["Little Simz", "David Byrne", "Jennie"],
  "Fri 03": ["Yung Lean & Bladee", "Zara Larsson", "Gorillaz"],
  "Sat 04": ["Gorillaz", "The Cure", "Orange closing file"]
};

const countryData = {
  "Albania": { code: "AL", slug: "albania", short: "Tirana / Riviera", dish: "Tavë kosi", see: "Tirana + Albanian Riviera", note: "Coffee is basically infrastructure. Start practical in Tirana, then let the coast do the convincing." },
  "Montenegro": { code: "ME", slug: "montenegro", short: "Bay of Kotor", dish: "Njeguši prosciutto", see: "Bay of Kotor", note: "Tiny roads, huge views. The route works best when the schedule stops pretending it is in charge." },
  "Croatia": { code: "HR", slug: "croatia", short: "Coast / old towns", dish: "Peka", see: "Adriatic coast + old towns", note: "Everything looks like a postcard and half of it probably is. Good final stretch if the car still has patience." },
  "Kosovo": { code: "XK", slug: "kosovo", short: "Prizren", dish: "Flija", see: "Prizren", note: "Cafés double as planning offices. Add time for conversations that were supposed to be five minutes." },
  "Serbia": { code: "RS", slug: "serbia", short: "Belgrade", dish: "Ćevapi", see: "Belgrade at night", note: "The playlist gets louder after midnight. Best treated as a route branch, not a quiet detour." },
  "North Macedonia": { code: "MK", slug: "north-macedonia", short: "Lake Ohrid", dish: "Tavče gravče", see: "Lake Ohrid", note: "Slow mornings are not delays here. They are the itinerary defending itself." }
};

const carData = {
  "Volkswagen Golf": "Compact • manual • safe default",
  "Suzuki Jimny": "Small 4x4 • tighter roads",
  "Fiat Panda 4x4": "Light utility • weirdly correct"
};

let highestZIndex = 10;
let loginAttempts = 0;
let currentComputerView = "root";
let accessHasLoaded = false;
let browserHistory = ["home"];
let currentTravelAccessName = "";
let selectedFlightId = null;
let confirmedFlightId = null;
let selectedSeat = null;
let flightLocked = false;
let selectedOrangeDay = "Mon 29";
let currentOrangePanel = "lineup";
let orangeConfirmed = false;
let selectedRoadtripCar = null;
let carLocked = false;
let rantsRestored = false;
let passwdRestored = false;
let lockNudges = 0;
let activeMsnContact = null;
let draggedWindow = null;
let dragOffsetX = 0;
let dragOffsetY = 0;
let isSelecting = false;
let selectionStartX = 0;
let selectionStartY = 0;
const campChecklist = { tape: false, powerbank: false, rain: false, sunscreen: false, socks: false };
const msnStore = {};

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function showScreen(screen) {
  qsa(".screen").forEach((el) => el.classList.remove("active"));
  screen.classList.add("active");
}

function getOsUserName() {
  const value = $("username")?.value?.trim();
  return value || DEFAULT_USER;
}

function getTravelName() {
  return currentTravelAccessName || getOsUserName() || DEFAULT_USER;
}

function syncDynamicText() {
  const osName = getOsUserName();
  const travelName = getTravelName();
  qsa(".dynamic-os-name").forEach((el) => { el.textContent = osName; });
  qsa(".dynamic-travel-name").forEach((el) => { el.textContent = travelName; });
  qsa(".dynamic-booking-username").forEach((el) => { el.textContent = travelName; });
}

function openPasswordDialog() {
  showScreen($("password-screen"));
  $("login-message").textContent = "";
  $("password").value = "";
  setTimeout(() => $("password").focus(), 30);
}

function logIn() {
  const input = $("password");
  const message = $("login-message");
  if (input.value === PASSWORD) {
    message.textContent = "";
    startLoginLoader();
    return;
  }
  loginAttempts += 1;
  message.textContent = loginAttempts >= 3 ? "Wrong password.\nHint: R....." : "Wrong password.";
  input.value = "";
  input.focus();
  shakeElement(document.querySelector(".dialog-window"));
}

function startLoginLoader() {
  const body = $("login-dialog-body");
  const steps = ["Password accepted.", "Loading profile...", "Mounting drives...", "Loading desktop..."];
  body.innerHTML = '<p id="login-loader-line">Starting...</p><p>Please wait...</p><div class="progress-shell"><div id="login-progress" class="progress-bar"></div></div>';
  let index = 0;
  function step() {
    $("login-loader-line").textContent = steps[index];
    $("login-progress").style.width = Math.round(((index + 1) / steps.length) * 100) + "%";
    index += 1;
    if (index < steps.length) setTimeout(step, 420);
    else setTimeout(() => { syncDynamicText(); showScreen($("desktop")); updateClock(); }, 260);
  }
  step();
}

function shutDown() { showScreen($("welcome-screen")); }
function logOff() { window.location.reload(); }
function updateClock() { $("clock").textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); }

function clampWindowToViewport(windowElement) {
  const taskbarHeight = 38;
  const margin = 12;
  const rect = windowElement.getBoundingClientRect();
  const maxLeft = Math.max(margin, window.innerWidth - rect.width - margin);
  const maxTop = Math.max(margin, window.innerHeight - rect.height - taskbarHeight - margin);
  const left = parseInt(windowElement.style.left || windowElement.dataset.defaultLeft || "120", 10);
  const top = parseInt(windowElement.style.top || windowElement.dataset.defaultTop || "80", 10);
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
  if (["computer-window", "booking-username-window", "program-window", "system-window", "passwd-window"].includes(windowId)) syncDynamicText();
  if (windowId === "computer-window") switchComputerView(currentComputerView);
  if (windowId === "msn-window") openMsnView();
}

function closeWindowElement(windowElement) { windowElement?.classList.remove("open"); }
function toggleStartMenu() { $("start-menu").classList.toggle("open"); }
function closeStartMenu() { $("start-menu").classList.remove("open"); }

function shakeElement(element) {
  if (!element) return;
  element.classList.remove("nudge");
  void element.offsetWidth;
  element.classList.add("nudge");
  setTimeout(() => element.classList.remove("nudge"), 260);
}

function switchComputerView(view) {
  currentComputerView = view;
  $("computer-root-view").classList.toggle("hidden", view !== "root");
  $("computer-localdisk-view").classList.toggle("hidden", view !== "localdisk");
  $("computer-summer-view").classList.toggle("hidden", view !== "summer");
  $("computer-back-button").disabled = view === "root";
  $("computer-title").textContent = view === "root" ? "My Computer" : view === "localdisk" ? "Local Disk (C:) - My Computer" : "Summer 2026 (F:) - My Computer";
}

function addFileToFolder(windowId, label, extraClass = "txt-icon") {
  const folder = $("empty-folder-content");
  if (!folder || folder.querySelector(`[data-window="${windowId}"]`)) return;
  $("empty-folder-placeholder")?.remove();
  const file = document.createElement("button");
  file.className = "file-item";
  file.type = "button";
  file.dataset.window = windowId;
  file.innerHTML = `<span class="file-icon ${extraClass}"></span><span>${escapeHTML(label)}</span>`;
  bindWindowOpener(file);
  bindFileDoubleClick(file);
  folder.appendChild(file);
}

function handleLockedPasswd() {
  lockNudges += 1;
  $("recycle-status").textContent = lockNudges >= 3 ? "restore handle: passwd.txt" : "This item is locked.";
  shakeElement($("recycle-window"));
}

function restoreRecycleBin() {
  if (!rantsRestored) {
    addFileToFolder("denmark-rant-window", "Danmark VM 26.txt");
    addFileToFolder("duke-rant-window", "March madness 26.txt");
    $("denmark-rant-trash")?.remove();
    $("duke-rant-trash")?.remove();
    rantsRestored = true;
    $("recycle-status").textContent = "Restored 2 files to Empty folder.";
    return;
  }
  if (!passwdRestored && lockNudges >= 3) {
    addFileToFolder("passwd-window", "passwd.txt", "txt-icon");
    $("passwd-file")?.remove();
    passwdRestored = true;
    $("recycle-status").textContent = "Restored passwd.txt to Empty folder.";
    return;
  }
  $("recycle-status").textContent = passwdRestored ? "No deleted items remain." : "passwd.txt is locked.";
  shakeElement($("recycle-window"));
}

function emptyRecycleBin() {
  $("recycle-status").textContent = "Cannot empty Recycle Bin: permission denied.";
  shakeElement($("recycle-window"));
}

function runAccessProgram() {
  const user = $("travel-username-input").value.trim();
  const pass = $("travel-password-input").value.trim();
  if (user.toLowerCase() === TRAVEL_USERNAME && pass.toLowerCase() === TRAVEL_PASSWORD) {
    currentTravelAccessName = user || getOsUserName();
    syncDynamicText();
    $("access-message").textContent = "";
    $("access-locked").classList.add("hidden");
    if (accessHasLoaded) {
      $("access-loader").classList.add("hidden");
      $("access-granted").classList.remove("hidden");
      navigateBrowser("home", false);
      return;
    }
    startAccessLoader();
    return;
  }
  $("access-message").textContent = "Authentication failed.";
  $("travel-password-input").value = "";
  $("travel-password-input").focus();
  shakeElement($("program-window"));
}

function startAccessLoader() {
  $("access-loader").classList.remove("hidden");
  $("access-granted").classList.add("hidden");
  $("loader-log").innerHTML = "";
  $("progress-bar").style.width = "0%";
  const steps = [
    { percent: 16, text: "Opening desk...", log: "desk file" },
    { percent: 35, text: "Reading route tables...", log: "flight table" },
    { percent: 54, text: "Sorting allocation sheets...", log: "orange sheet" },
    { percent: 74, text: "Mounting road file...", log: "balkan card set" },
    { percent: 100, text: "Ready.", log: "ready" }
  ];
  let index = 0;
  function step() {
    const current = steps[index];
    $("progress-bar").style.width = current.percent + "%";
    $("loader-line").textContent = current.text;
    const li = document.createElement("li");
    li.textContent = current.log;
    $("loader-log").appendChild(li);
    index += 1;
    if (index < steps.length) setTimeout(step, 390);
    else setTimeout(() => { accessHasLoaded = true; $("access-loader").classList.add("hidden"); $("access-granted").classList.remove("hidden"); navigateBrowser("home", false); }, 280);
  }
  setTimeout(step, 160);
}

function pageToAddress(page) {
  if (page === "home") return "travelportal://home";
  if (page === "flight") return "travelportal://flights";
  if (page === "flightdetail") return selectedFlightId ? `travelportal://flights/${selectedFlightId}` : "travelportal://flights/detail";
  if (page === "roskilde") return "travelportal://orange";
  if (page === "balkan") return "travelportal://balkan";
  return "travelportal://" + page;
}

function navigateBrowser(page, addToHistory = true) {
  const target = $("browser-" + page);
  if (!target) return;
  qsa(".browser-page").forEach((p) => p.classList.remove("active"));
  target.classList.add("active");
  $("browser-address").textContent = pageToAddress(page);
  if (addToHistory && browserHistory[browserHistory.length - 1] !== page) browserHistory.push(page);
  $("browser-back-button").disabled = browserHistory.length <= 1;
}

function browserGoBack() {
  if (browserHistory.length <= 1) return;
  browserHistory.pop();
  navigateBrowser(browserHistory[browserHistory.length - 1], false);
}

function renderFlightCards() {
  const grid = $("flight-option-grid");
  grid.innerHTML = "";
  Object.entries(flightData).forEach(([id, flight]) => {
    const button = document.createElement("button");
    button.className = "flight-card flight-route-button";
    button.type = "button";
    button.dataset.flightId = id;
    button.innerHTML = `<div class="flight-card-top"><strong>${flight.route}</strong><span>${flight.number}</span></div><div class="flight-meta"><span>${flight.from}</span><span>${flight.dep}</span><span>${flight.stop}</span><span>${flight.arr}</span><span>${flight.to}</span></div><div class="flight-footer"><span>${flight.duration}</span><em>View</em></div>`;
    button.addEventListener("click", () => openFlightDetail(id));
    grid.appendChild(button);
  });
  updateFlightOverviewLock();
}

function openFlightDetail(flightId) {
  selectedFlightId = flightId;
  const flight = flightData[flightId];
  $("flight-detail-route").textContent = flight.route;
  $("flight-detail-number").textContent = flight.number;
  $("flight-detail-departure").textContent = flight.departure;
  $("flight-detail-arrival").textContent = flight.arrival;
  $("flight-detail-duration").textContent = flight.duration;
  $("flight-detail-fare").textContent = flight.fare;
  $("flight-detail-cabin").textContent = flight.cabin;
  $("flight-detail-baggage").textContent = flight.baggage;
  $("flight-detail-seat-note").textContent = flight.seatNote || "Available";
  const isConfirmed = flightLocked && confirmedFlightId === flightId;
  const seatCard = document.querySelector(".flight-seat-card");
  seatCard?.classList.toggle("locked-mode", flightLocked);
  qsa(".seat-button").forEach((button) => {
    button.disabled = flightLocked;
    button.classList.toggle("active", isConfirmed && selectedSeat === button.dataset.seat);
    if (!flightLocked) button.classList.remove("active");
  });
  if (!flightLocked) {
    selectedSeat = null;
    $("flight-seat-status").textContent = "No seat selected.";
    $("save-flight-button").disabled = false;
    $("save-flight-button").textContent = "Hold this option";
  } else {
    $("save-flight-button").disabled = true;
    $("save-flight-button").textContent = isConfirmed ? "Held" : "Hold locked";
    $("flight-seat-status").textContent = isConfirmed ? `Held seat: ${selectedSeat || "not assigned"}` : "View only.";
  }
  navigateBrowser("flightdetail");
}

function updateFlightOverviewLock() {
  qsa(".flight-route-button").forEach((button) => {
    const selected = button.dataset.flightId === confirmedFlightId;
    button.classList.toggle("selected-flight-locked", selected);
    button.classList.toggle("view-only-flight", flightLocked && !selected);
    const action = button.querySelector(".flight-footer em");
    if (action) action.textContent = selected ? "Held" : "View";
  });
}

function saveSelectedFlight() {
  if (!selectedFlightId || flightLocked) return;
  const flight = flightData[selectedFlightId];
  flightLocked = true;
  confirmedFlightId = selectedFlightId;
  qsa(".seat-button").forEach((button) => button.disabled = true);
  $("save-flight-button").disabled = true;
  $("save-flight-button").textContent = "Held";
  document.querySelector(".flight-seat-card")?.classList.add("locked-mode");
  updateFlightOverviewLock();
  openFlightDetail(confirmedFlightId);
  const seatText = selectedSeat ? `Seat ${selectedSeat} noted.` : "Seat not assigned yet.";
  queueMsnMessage(flight.airline, `Hi ${getTravelName()}. Your selected option ${flight.number} (${flight.route}) is now on hold. Check-in opens 24 hours before departure. ${seatText}`);
}

function renderOrangeDays() {
  const list = $("orange-day-list");
  list.innerHTML = "";
  Object.keys(orangeLineupByDay).forEach((day) => {
    const button = document.createElement("button");
    button.className = "day-pill orange-day" + (day === selectedOrangeDay ? " active" : "");
    button.type = "button";
    button.dataset.orangeDay = day;
    button.textContent = day;
    button.addEventListener("click", () => {
      selectedOrangeDay = day;
      qsa(".orange-day").forEach((btn) => btn.classList.toggle("active", btn === button));
      if (currentOrangePanel === "lineup") renderOrangePanel("lineup");
    });
    list.appendChild(button);
  });
}

function renderOrangePanel(panel) {
  currentOrangePanel = panel;
  qsa(".orange-panel-button").forEach((button) => button.classList.toggle("active", button.dataset.orangePanel === panel));
  const host = $("orange-panel-display");
  if (panel === "lineup") {
    host.innerHTML = `<div class="orange-lineup-cards">${orangeLineupByDay[selectedOrangeDay].map((artist, index) => `<div class="orange-lineup-card"><span>${selectedOrangeDay}</span><strong>${escapeHTML(artist)}</strong><small>${index === 0 ? "Primary slot" : "Recommended"}</small></div>`).join("")}</div>`;
  } else if (panel === "camp") {
    host.innerHTML = `<div class="camp-pack-layout"><div class="camp-task-card"><span>Task</span><strong>Borrowing beer for the week</strong><small>Assigned to ${escapeHTML(getTravelName())}</small><div class="camp-progress-bar"><span class="camp-progress-fill" id="camp-progress-fill"></span></div><em class="camp-progress-text" id="camp-progress-text">0 / 5 packed</em></div><div class="packing-list-panel" id="camp-packing-list"><h3>Packing list</h3><label><input class="camp-checkbox" data-camp-item="tape" type="checkbox"> Pavilion tape</label><label><input class="camp-checkbox" data-camp-item="powerbank" type="checkbox"> Powerbank</label><label><input class="camp-checkbox" data-camp-item="rain" type="checkbox"> Rain cover</label><label><input class="camp-checkbox" data-camp-item="sunscreen" type="checkbox"> Sunscreen</label><label><input class="camp-checkbox" data-camp-item="socks" type="checkbox"> Dry socks</label></div></div>`;
    bindCampChecklist();
  } else {
    host.innerHTML = `<div class="orange-lineup-cards"><div class="orange-lineup-card"><span>Access</span><strong>Partner</strong><small>Route not public</small></div><div class="orange-lineup-card"><span>Wristband</span><strong>On site</strong><small>Camp handoff</small></div><div class="orange-lineup-card"><span>Desk</span><strong>Orange</strong><small>${escapeHTML(getTravelName())}</small></div></div>`;
  }
  updateOrangeConfirmState();
}

function bindCampChecklist() {
  qsa(".camp-checkbox").forEach((box) => {
    const key = box.dataset.campItem;
    box.checked = !!campChecklist[key];
    box.disabled = orangeConfirmed;
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
  $("orange-confirm-button").disabled = !allPacked || orangeConfirmed;
  $("orange-confirm-button").textContent = orangeConfirmed ? "Allocation confirmed" : allPacked ? "Confirm camp allocation" : "Complete packing list";
}

function confirmOrangeAllocation() {
  if (orangeConfirmed) return;
  if (!Object.values(campChecklist).every(Boolean)) {
    shakeElement($("orange-panel-display"));
    return;
  }
  orangeConfirmed = true;
  updateOrangeConfirmState();
  qsa(".camp-checkbox").forEach((box) => { box.disabled = true; });
  queueMsnMessage("CAMPEN", `Hey ${getTravelName()}. Lovely of you to join us. Practical info: wristband handoff is on site, camp placement follows the partner file. Btw, you are in charge of borrowing beer for the week. Best, CAMPEN.`);
}

function renderCountryCards() {
  const grid = $("country-card-grid");
  grid.innerHTML = "";
  Object.keys(countryData).forEach((country, index) => {
    const data = countryData[country];
    const button = document.createElement("button");
    button.className = "country-card route-stop-button";
    button.type = "button";
    button.dataset.stop = country;
    button.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span><strong>${country}</strong><small>${data.short}</small>`;
    button.addEventListener("click", () => openCountryDetail(country));
    grid.appendChild(button);
  });
}

function openCountryDetail(country) {
  const data = countryData[country];
  if (!data) return;
  $("country-detail-path").textContent = data.slug;
  $("country-detail-title").textContent = country;
  $("country-detail-copy").textContent = data.note;
  $("country-detail-code").textContent = data.code;
  $("country-dish").textContent = data.dish;
  $("country-see").textContent = data.see;
  $("country-note").textContent = data.note;
  qsa(".route-stop-button").forEach((button) => button.classList.toggle("active", button.dataset.stop === country));
  navigateBrowser("balkancountry");
  $("browser-address").textContent = "travelportal://balkan/" + data.slug;
}

function renderVehicles() {
  const host = $("vehicle-list");
  host.innerHTML = "";
  Object.entries(carData).forEach(([car, desc]) => {
    const button = document.createElement("button");
    button.className = "vehicle-card car-option-button";
    button.type = "button";
    button.dataset.car = car;
    button.innerHTML = `<strong>${car}</strong><span>${desc}</span>`;
    button.addEventListener("click", () => selectRoadtripCar(button));
    host.appendChild(button);
  });
}

function selectRoadtripCar(button) {
  if (carLocked) return;
  selectedRoadtripCar = button.dataset.car;
  qsa(".car-option-button").forEach((btn) => btn.classList.toggle("active", btn === button));
}

function saveRoadtripCar() {
  if (carLocked) return;
  if (!selectedRoadtripCar) {
    shakeElement($("save-car-button"));
    return;
  }
  carLocked = true;
  qsa(".car-option-button").forEach((button) => { button.disabled = true; });
  $("save-car-button").disabled = true;
  $("save-car-button").textContent = "Vehicle reserved";
  const note = selectedRoadtripCar === "Suzuki Jimny" ? "Small enough for tight roads, stubborn enough for the route." : selectedRoadtripCar === "Fiat Panda 4x4" ? "Light, square, and somehow correct for this file." : "Safe default, easy handoff.";
  queueMsnMessage("Adriatic AutoRent", `Hi ${getTravelName()}. Your ${selectedRoadtripCar} reservation is confirmed for pickup in Tirana. Bring passport and driving license to the desk. ${note}`);
}

function randomMessageDelay() { return 900 + Math.floor(Math.random() * 1900); }
function queueMsnMessage(contact, message, status = "Status: Online") { setTimeout(() => pushMsnMessage(contact, message, status), randomMessageDelay()); }

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

function updateMsnBadge() {
  const total = Object.values(msnStore).reduce((sum, item) => sum + item.unread, 0);
  $("msn-badge").textContent = String(total);
  $("msn-badge").classList.toggle("hidden", total === 0);
}

function renderMsnContacts() {
  const list = $("msn-contact-list");
  list.innerHTML = "";
  Object.entries(msnStore).forEach(([name, convo]) => {
    const button = document.createElement("button");
    button.className = "msn-contact-item" + (name === activeMsnContact ? " active" : "");
    button.type = "button";
    button.dataset.contact = name;
    button.innerHTML = `<span class="msn-contact-dot">${escapeHTML(name.slice(0, 1))}</span><span><strong>${escapeHTML(name)}</strong><small>${escapeHTML(convo.status.replace("Status: ", ""))}</small></span>${convo.unread ? `<em>${convo.unread}</em>` : ""}`;
    button.addEventListener("click", () => showMsnConversation(name, true));
    list.appendChild(button);
  });
}

function openMsnView() {
  const unread = Object.keys(msnStore).find((name) => msnStore[name].unread > 0);
  if (unread) showMsnConversation(unread, true);
  else if (activeMsnContact && msnStore[activeMsnContact]) showMsnConversation(activeMsnContact, false);
  else {
    renderMsnContacts();
    $("msn-contact-name").textContent = "No messages";
    $("msn-contact-status").textContent = "Status: Waiting";
    $("msn-messages").innerHTML = "";
  }
}

function showMsnConversation(contact, markRead = true) {
  if (!msnStore[contact]) return;
  activeMsnContact = contact;
  const convo = msnStore[contact];
  $("msn-contact-name").textContent = contact;
  $("msn-contact-status").textContent = convo.status;
  $("msn-messages").innerHTML = "";
  convo.messages.forEach((msg) => {
    const bubble = document.createElement("div");
    bubble.className = "msn-message";
    bubble.innerHTML = `<small>${escapeHTML(msg.time)}</small><div>${escapeHTML(msg.text)}</div>`;
    $("msn-messages").appendChild(bubble);
  });
  if (markRead) convo.unread = 0;
  renderMsnContacts();
  updateMsnBadge();
  $("msn-messages").scrollTop = $("msn-messages").scrollHeight;
}

function bindWindowOpener(element) {
  element.addEventListener("click", (event) => {
    const isDesktopIcon = element.classList.contains("desktop-icon");
    const isFileItem = element.classList.contains("file-item");
    if (element.id === "passwd-file") {
      event.stopPropagation();
      handleLockedPasswd();
      return;
    }
    if (isDesktopIcon) {
      qsa(".desktop-icon").forEach((other) => other.classList.remove("selected"));
      element.classList.add("selected");
      event.stopPropagation();
      const windowId = element.dataset.window;
      if (windowId) openWindow(windowId);
      return;
    }
    if (isFileItem) {
      qsa(".file-item").forEach((other) => other.classList.remove("selected"));
      element.classList.add("selected");
      return;
    }
    event.stopPropagation();
    const windowId = element.dataset.window;
    if (windowId) openWindow(windowId);
  });
}

function bindFileDoubleClick(file) {
  file.addEventListener("dblclick", (event) => {
    if (file.id === "passwd-file") {
      event.stopPropagation();
      handleLockedPasswd();
      return;
    }
    const windowId = file.dataset.window;
    if (windowId) openWindow(windowId);
  });
}

function bindDrag() {
  qsa(".window-titlebar").forEach((titlebar) => {
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
    const nextLeft = Math.max(0, Math.min(event.clientX - dragOffsetX, maxLeft));
    const nextTop = Math.max(0, Math.min(event.clientY - dragOffsetY, maxTop));
    draggedWindow.style.left = nextLeft + "px";
    draggedWindow.style.top = nextTop + "px";
  });
  document.addEventListener("mouseup", () => {
    if (!draggedWindow) return;
    draggedWindow = null;
    document.body.style.cursor = "";
  });
}

function bindSelectionBox() {
  const desktop = $("desktop");
  const selectionBox = $("selection-box");
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
    qsa(".desktop-icon").forEach((icon) => icon.classList.remove("selected"));
    closeStartMenu();
  });
  document.addEventListener("mousemove", (event) => {
    if (!isSelecting) return;
    const left = Math.min(selectionStartX, event.clientX);
    const top = Math.min(selectionStartY, event.clientY);
    const width = Math.abs(event.clientX - selectionStartX);
    const height = Math.abs(event.clientY - selectionStartY);
    selectionBox.style.left = left + "px";
    selectionBox.style.top = top + "px";
    selectionBox.style.width = width + "px";
    selectionBox.style.height = height + "px";
    const rect = selectionBox.getBoundingClientRect();
    qsa(".desktop-icon").forEach((icon) => {
      const item = icon.getBoundingClientRect();
      const overlaps = rect.left < item.right && rect.right > item.left && rect.top < item.bottom && rect.bottom > item.top;
      icon.classList.toggle("selected", overlaps);
    });
  });
  document.addEventListener("mouseup", () => {
    if (!isSelecting) return;
    isSelecting = false;
    selectionBox.style.display = "none";
  });
}

function init() {
  $("user-tile").addEventListener("click", openPasswordDialog);
  $("login-button").addEventListener("click", logIn);
  $("cancel-button").addEventListener("click", () => showScreen($("welcome-screen")));
  $("shutdown-button").addEventListener("click", shutDown);
  $("options-button").addEventListener("click", () => { $("login-message").textContent = "No additional options."; });
  $("password").addEventListener("keydown", (event) => { if (event.key === "Enter") logIn(); });
  $("start-button").addEventListener("click", (event) => { event.stopPropagation(); toggleStartMenu(); });
  $("start-menu").addEventListener("click", (event) => event.stopPropagation());
  $("logoff-button").addEventListener("click", logOff);
  $("desktop-shutdown-button").addEventListener("click", shutDown);
  document.addEventListener("click", closeStartMenu);

  qsa("[data-window]").forEach(bindWindowOpener);
  qsa(".file-item").forEach(bindFileDoubleClick);
  qsa(".computer-drive-nav").forEach((button) => {
    button.addEventListener("click", (event) => { event.stopPropagation(); switchComputerView(button.dataset.computerView); });
    button.addEventListener("dblclick", () => switchComputerView(button.dataset.computerView));
  });
  $("computer-back-button").addEventListener("click", () => switchComputerView("root"));
  qsa(".window-close").forEach((button) => button.addEventListener("click", () => closeWindowElement(button.closest(".window"))));
  qsa(".window-close-soft").forEach((button) => button.addEventListener("click", () => closeWindowElement(button.closest(".window"))));
  qsa(".window").forEach((windowElement) => windowElement.addEventListener("mousedown", () => { highestZIndex += 1; windowElement.style.zIndex = highestZIndex; }));

  $("restore-recycle-button").addEventListener("click", restoreRecycleBin);
  $("empty-recycle-button").addEventListener("click", emptyRecycleBin);
  $("access-button").addEventListener("click", runAccessProgram);
  [$("travel-username-input"), $("travel-password-input")].forEach((input) => input.addEventListener("keydown", (event) => { if (event.key === "Enter") runAccessProgram(); }));
  $("browser-back-button").addEventListener("click", browserGoBack);
  $("browser-home-button").addEventListener("click", () => navigateBrowser("home"));
  qsa(".browser-nav").forEach((button) => button.addEventListener("click", () => navigateBrowser(button.dataset.browserPage)));
  qsa(".seat-button").forEach((button) => button.addEventListener("click", () => {
    if (flightLocked) return;
    selectedSeat = button.dataset.seat;
    qsa(".seat-button").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    $("flight-seat-status").textContent = `Seat selected: ${selectedSeat}`;
  }));
  $("save-flight-button").addEventListener("click", saveSelectedFlight);
  qsa(".orange-panel-button").forEach((button) => button.addEventListener("click", () => renderOrangePanel(button.dataset.orangePanel)));
  $("orange-confirm-button").addEventListener("click", confirmOrangeAllocation);
  $("balkan-country-back").addEventListener("click", () => navigateBrowser("balkan"));
  $("save-car-button").addEventListener("click", saveRoadtripCar);
  window.addEventListener("resize", () => qsa(".window.open").forEach(clampWindowToViewport));

  renderFlightCards();
  renderOrangeDays();
  renderOrangePanel("lineup");
  renderCountryCards();
  renderVehicles();
  renderMsnContacts();
  updateMsnBadge();
  updateClock();
  setInterval(updateClock, 1000);
  bindDrag();
  bindSelectionBox();
  syncDynamicText();
}

init();
