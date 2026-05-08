const OS_PASSWORD = "Rigsby";
const TRAVEL_USERNAME = "name";
const TRAVEL_PASSWORD = "letmein";
const DEFAULT_USER_NAME = "Name";

const $ = (id) => document.getElementById(id);

const flightData = {
  "nyc-cph": {
    route: "NYC → CPH",
    number: "SK 912",
    departCode: "JFK",
    departTime: "08:20",
    arriveCode: "CPH",
    arriveTime: "21:35",
    stop: "Direct",
    duration: "7h 15m",
    fare: "Classic",
    cabin: "Economy",
    baggage: "1 cabin bag + checked bag",
    desk: "SAS Travel Desk"
  },
  "cph-nyc": {
    route: "CPH → NYC",
    number: "SK 911",
    departCode: "CPH",
    departTime: "13:40",
    arriveCode: "JFK",
    arriveTime: "16:10",
    stop: "Direct",
    duration: "8h 30m",
    fare: "Classic",
    cabin: "Economy",
    baggage: "1 cabin bag + checked bag",
    desk: "SAS Travel Desk"
  },
  "cph-tirana": {
    route: "CPH → Tirana",
    number: "OU 481",
    departCode: "CPH",
    departTime: "09:05",
    arriveCode: "TIA",
    arriveTime: "13:55",
    stop: "1 stop",
    duration: "4h 50m",
    fare: "Saver",
    cabin: "Economy",
    baggage: "1 cabin bag",
    desk: "Adriatic Air Desk",
    airportNote: "TIA / Tirana International Airport"
  },
  "tirana-cph": {
    route: "Tirana → CPH",
    number: "OU 482",
    departCode: "TIA",
    departTime: "14:40",
    arriveCode: "CPH",
    arriveTime: "19:20",
    stop: "1 stop",
    duration: "4h 40m",
    fare: "Saver",
    cabin: "Economy",
    baggage: "1 cabin bag",
    desk: "Adriatic Air Desk",
    airportNote: "TIA / Tirana International Airport"
  },
  "cph-zurich": {
    route: "CPH → Zurich",
    number: "LX 1271",
    departCode: "CPH",
    departTime: "11:25",
    arriveCode: "ZRH",
    arriveTime: "13:20",
    stop: "Direct",
    duration: "1h 55m",
    fare: "Flex",
    cabin: "Economy",
    baggage: "1 cabin bag",
    desk: "Swiss Booking Desk"
  }
};

const seats = ["12A", "12C", "12D", "12F", "14A", "14C", "14D", "14F"];

const orangeDays = ["Mon 29", "Tue 30", "Wed 01", "Thu 02", "Fri 03", "Sat 04"];
const orangeLineup = {
  "Mon 29": {
    board: "First Days file",
    meta: ["camp arrival", "warm-up", "low print"],
    picks: [
      ["Tessa", "main note"],
      ["TV-2", "legacy"],
      ["EsDeeKid", "new file"],
      ["Bad Gyal", "late"],
      ["Aphaca", "danish marker"]
    ]
  },
  "Tue 30": {
    board: "First Days file",
    meta: ["wristband day", "camp traffic", "late tent"],
    picks: [
      ["Addison Rae", "pop"],
      ["Lily Allen", "pop"],
      ["Kneecap", "loud file"],
      ["Ken Carson", "night"],
      ["Sierra Ferrell", "sunset"]
    ]
  },
  "Wed 01": {
    board: "Orange opening slip",
    meta: ["Pil opens Orange", "stage file", "row 017"],
    picks: [
      ["Pil", "orange opener"],
      ["Wolf Alice", "guitar"],
      ["Little Simz", "rap"],
      ["Clipse", "rap"],
      ["Aphaca", "orange pool"]
    ]
  },
  "Thu 02": {
    board: "Main field slip",
    meta: ["bigger names", "orange pool", "late route"],
    picks: [
      ["Gorillaz", "headline pool"],
      ["Zara Larsson", "pop"],
      ["Jennie", "pop"],
      ["David Byrne", "special file"],
      ["Ethel Cain", "dark marker"]
    ]
  },
  "Fri 03": {
    board: "Weekend slip",
    meta: ["heavy ground", "late entries", "camp note"],
    picks: [
      ["The Cure", "black marker"],
      ["Clipse", "rap"],
      ["Wolf Alice", "guitar"],
      ["Kneecap", "late file"],
      ["Lily Allen", "pop"]
    ]
  },
  "Sat 04": {
    board: "Closing slip",
    meta: ["last field day", "orange pool", "packed camp"],
    picks: [
      ["Gorillaz", "closing board"],
      ["Yung Lean & Bladee", "after dark"],
      ["Zara Larsson", "orange field"],
      ["Jennie", "pop"],
      ["Little Simz", "rap"]
    ]
  }
};

const campItems = [
  ["tape", "Pavilion tape"],
  ["powerbank", "Powerbank"],
  ["rain", "Rain cover"],
  ["sunscreen", "Sunscreen"],
  ["socks", "Dry socks"],
  ["beer", "Borrowing beer for the week"]
];

const campChecklist = Object.fromEntries(campItems.map(([key]) => [key, false]));

const countryData = {
  "Albania": {
    code: "AL",
    slug: "albania",
    sub: "Tirana / Riviera",
    dish: "Tavë kosi",
    see: "Tirana, Gjirokastër, Himarë coast",
    note: "Coffee first, logistics second. Tirana works as the desk, the coast works as the reward.",
    border: "Keep car papers easy to reach.",
    drive: "Mountain roads look short on paper and then eat the afternoon.",
    copy: "Tirana pickup, bunker edges, mountain turns and a southbound coast file with too many places to stop.",
    stops: ["Tirana", "Gjirokastër", "Himarë", "Ksamil"]
  },
  "Montenegro": {
    code: "ME",
    slug: "montenegro",
    sub: "Bay of Kotor",
    dish: "Njeguši prosciutto",
    see: "Kotor bay road and Lovćen switchbacks",
    note: "Small country, huge views. The slow parts are the point.",
    border: "Check green card / rental permission before entering.",
    drive: "Take the bay road slowly; buses do not care about your confidence.",
    copy: "Kotor stone, steep turns, bay water and a route that looks tiny until the road starts climbing.",
    stops: ["Kotor", "Perast", "Lovćen", "Budva"]
  },
  "Croatia": {
    code: "HR",
    slug: "croatia",
    sub: "Coast / old towns",
    dish: "Peka",
    see: "Adriatic old towns and late ferries",
    note: "Pretty enough to feel suspicious. Parking is the real boss fight.",
    border: "EU entry makes paperwork easier, not parking easier.",
    drive: "Coast roads reward early starts and punish heroic schedules.",
    copy: "A clean coast card: old stone, ferry timing, late dinners and one folder just for parking notes.",
    stops: ["Dubrovnik", "Split", "Zadar", "Plitvice"]
  },
  "Kosovo": {
    code: "XK",
    slug: "kosovo",
    sub: "Prizren",
    dish: "Flija",
    see: "Prizren old town and fortress walk",
    note: "Cafés double as planning offices. Five-minute stops become forty.",
    border: "Entry stamp sequence can matter depending on route.",
    drive: "Short drives, dense towns, park once and walk.",
    copy: "A compact city sheet for Prizren, border timing and the kind of coffee break that rewrites the afternoon.",
    stops: ["Prizren", "Pristina", "Rugova", "Gjakova"]
  },
  "Serbia": {
    code: "RS",
    slug: "serbia",
    sub: "Belgrade",
    dish: "Ćevapi",
    see: "Belgrade after dark",
    note: "The playlist gets louder after midnight. Morning departures become theory.",
    border: "Double-check rental cross-border permission.",
    drive: "City traffic first, river roads after.",
    copy: "Belgrade city file with night notes, river edges, parking caution and one very optimistic morning departure.",
    stops: ["Belgrade", "Novi Sad", "Niš", "Tara"]
  },
  "North Macedonia": {
    code: "MK",
    slug: "north-macedonia",
    sub: "Lake Ohrid",
    dish: "Tavče gravče",
    see: "Lake Ohrid and old town steps",
    note: "Slow mornings are not delays. They are the itinerary defending itself.",
    border: "Keep insurance papers visible at the desk.",
    drive: "Lake roads are easy until everyone stops for the same view.",
    copy: "Ohrid lake card, soft mornings, monastery stops and a southern route that should not be rushed.",
    stops: ["Ohrid", "Skopje", "Bitola", "Matka Canyon"]
  }
};

const vehicleData = {
  "Volkswagen Golf": {
    sub: "Compact • manual • safe default",
    message: "Your Volkswagen Golf reservation is confirmed for pickup in Tirana. Compact desk file marked. Bring passport and driving license."
  },
  "Suzuki Jimny": {
    sub: "Small 4x4 • tighter roads",
    message: "Your Suzuki Jimny reservation is confirmed for pickup in Tirana. Small 4x4 class noted. Bring passport and driving license."
  },
  "Fiat Panda 4x4": {
    sub: "Light utility • weirdly correct",
    message: "Your Fiat Panda 4x4 reservation is confirmed for pickup in Tirana. Light 4x4 class noted. Bring passport and driving license."
  }
};

let booted = false;
let highestZIndex = 10;
let currentComputerView = "root";
let selectedTrashId = null;
let travelLoaded = false;
let currentTravelName = DEFAULT_USER_NAME;
let browserHistory = ["home"];
let selectedFlightId = null;
let selectedSeat = null;
let selectedOrangeDay = "Mon 29";
let currentOrangePanel = "lineup";
let campConfirmed = false;
let selectedVehicle = null;
let vehicleReserved = false;
let activeMsnContact = null;
let draggingWindow = null;
let dragOffsetX = 0;
let dragOffsetY = 0;
let selecting = false;
let selectionStartX = 0;
let selectionStartY = 0;

const heldFlightSeats = {};
const msnStore = {};

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((screen) => screen.classList.remove("active"));
  $(screenId)?.classList.add("active");
}

function getOsName() {
  return ($("username")?.value || DEFAULT_USER_NAME).trim() || DEFAULT_USER_NAME;
}

function getBookingName() {
  return (currentTravelName || getOsName()).trim() || DEFAULT_USER_NAME;
}

function syncDynamicNames() {
  document.querySelectorAll(".dynamic-booking-name").forEach((el) => {
    el.textContent = getBookingName();
  });
}

function updateClock() {
  const clock = $("clock");
  if (!clock) return;
  clock.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function shakeElement(element) {
  if (!element) return;
  const base = getComputedStyle(element).transform;
  const prefix = base && base !== "none" ? base + " " : "";
  element.animate([
    { transform: `${prefix}translateX(0)` },
    { transform: `${prefix}translateX(-7px)` },
    { transform: `${prefix}translateX(7px)` },
    { transform: `${prefix}translateX(-4px)` },
    { transform: `${prefix}translateX(4px)` },
    { transform: `${prefix}translateX(0)` }
  ], { duration: 210 });
}

function openPasswordDialog() {
  showScreen("password-screen");
  const password = $("password");
  const msg = $("login-message");
  if (msg) msg.textContent = "";
  if (password) {
    password.value = "";
    setTimeout(() => password.focus(), 30);
  }
}

function osLogin() {
  const password = $("password");
  const msg = $("login-message");
  if (!password || !msg) return;

  if (password.value === OS_PASSWORD) {
    msg.textContent = "";
    startOsLoader();
    return;
  }

  msg.textContent = "Wrong password.";
  password.value = "";
  password.focus();
  shakeElement(document.querySelector(".dialog-window"));
}

function startOsLoader() {
  const body = $("os-login-body");
  if (!body) return;

  body.innerHTML = `
    <p id="os-loader-line">Loading personal settings...</p>
    <div class="progress-shell"><div class="progress-bar" id="os-progress-bar"></div></div>
  `;

  const steps = [
    [18, "Loading personal settings..."],
    [36, "Preparing desktop..."],
    [58, "Mounting local drives..."],
    [81, "Loading Fortia shell..."],
    [100, "Ready."]
  ];

  let index = 0;
  function next() {
    const [percent, text] = steps[index];
    $("os-loader-line").textContent = text;
    $("os-progress-bar").style.width = percent + "%";
    index += 1;
    if (index < steps.length) {
      setTimeout(next, 420);
    } else {
      setTimeout(() => {
        showScreen("desktop");
        syncDynamicNames();
        updateClock();
      }, 260);
    }
  }

  next();
}

function openWindow(windowId) {
  const win = $(windowId);
  if (!win) return;

  highestZIndex += 1;
  win.classList.add("open");
  win.style.zIndex = highestZIndex;
  placeWindow(win);
  closeStartMenu();

  if (windowId === "computer-window") switchComputerView(currentComputerView);
  if (["booking-username-window", "passwd-window", "program-window", "system-window"].includes(windowId)) syncDynamicNames();
  if (windowId === "msn-window") openMsnWindow();

  const input = win.querySelector("input:not([readonly])");
  if (input) setTimeout(() => input.focus(), 40);
}

function closeWindow(win) {
  win?.classList.remove("open");
}

function placeWindow(win) {
  if (!win.style.left) win.style.left = (win.dataset.defaultLeft || "120") + "px";
  if (!win.style.top) win.style.top = (win.dataset.defaultTop || "80") + "px";
  requestAnimationFrame(() => clampWindow(win));
}

function clampWindow(win) {
  const taskbarHeight = 38;
  const margin = 12;
  const rect = win.getBoundingClientRect();
  const maxLeft = Math.max(margin, window.innerWidth - rect.width - margin);
  const maxTop = Math.max(margin, window.innerHeight - rect.height - taskbarHeight - margin);
  const left = parseInt(win.style.left || win.dataset.defaultLeft || "120", 10);
  const top = parseInt(win.style.top || win.dataset.defaultTop || "80", 10);

  win.style.left = Math.max(margin, Math.min(left, maxLeft)) + "px";
  win.style.top = Math.max(margin, Math.min(top, maxTop)) + "px";
}

function switchComputerView(view) {
  currentComputerView = view;
  $("computer-root-view")?.classList.toggle("hidden", view !== "root");
  $("computer-localdisk-view")?.classList.toggle("hidden", view !== "localdisk");
  $("computer-summer-view")?.classList.toggle("hidden", view !== "summer");
  const backButton = $("computer-back-button");
  if (backButton) backButton.disabled = view === "root";

  const title = view === "root"
    ? "My Computer"
    : view === "localdisk"
      ? "Local Disk (C:) - My Computer"
      : "Summer 2026 (F:) - My Computer";
  if ($("computer-title")) $("computer-title").textContent = title;
}

function selectTrashFile(id) {
  selectedTrashId = id;
  document.querySelectorAll("#recycle-files .file-item").forEach((item) => {
    item.classList.toggle("selected", item.dataset.trashId === id);
  });
}

function addFileToEmptyFolder(windowId, label, options = {}) {
  const folder = $("empty-folder-content");
  if (!folder) return;

  $("empty-folder-placeholder")?.remove();

  const existing = Array.from(folder.querySelectorAll(".file-item")).find((item) => item.dataset.window === windowId);
  if (existing) return;

  const item = document.createElement("button");
  item.className = "file-item";
  item.type = "button";
  item.dataset.window = windowId;
  item.innerHTML = `<span class="file-icon ${options.locked ? "locked-file-icon" : "txt-icon"}"></span><span>${label}</span>`;
  item.addEventListener("click", () => openWindow(windowId));
  folder.appendChild(item);
}

function restoreRecycleBin() {
  const status = $("recycle-status");

  if (!selectedTrashId) {
    if (status) status.textContent = "Select one item to restore.";
    shakeElement($("recycle-window"));
    return;
  }

  if (selectedTrashId === "passwd") {
    addFileToEmptyFolder("passwd-window", "passwd.txt");
    $("passwd-file")?.remove();
    if (status) status.textContent = "Restored passwd.txt to Empty folder.";
    selectedTrashId = null;
    return;
  }

  const map = {
    denmark: ["denmark-rant-window", "Danmark VM 26.txt", "denmark-rant-trash"],
    duke: ["duke-rant-window", "March madness 26.txt", "duke-rant-trash"]
  };

  const entry = map[selectedTrashId];
  if (!entry) {
    if (status) status.textContent = "Cannot restore selected item.";
    shakeElement($("recycle-window"));
    return;
  }

  const [windowId, label, trashButtonId] = entry;
  addFileToEmptyFolder(windowId, label);
  $(trashButtonId)?.remove();
  if (status) status.textContent = `Restored ${label} to Empty folder.`;
  selectedTrashId = null;
}

function emptyRecycleBin() {
  const status = $("recycle-status");
  if (status) status.textContent = "Permission denied.";
  shakeElement($("recycle-window"));
}

function handlePasswdInBin() {
  selectTrashFile("passwd");
  const status = $("recycle-status");
  if (status) status.textContent = "This item is locked.";
  shakeElement($("recycle-window"));
}

function runTravelLogin() {
  const username = $("travel-username-input")?.value.trim() || "";
  const password = $("travel-password-input")?.value.trim() || "";
  const msg = $("travel-login-message");

  if (username.toLowerCase() === TRAVEL_USERNAME && password.toLowerCase() === TRAVEL_PASSWORD) {
    currentTravelName = username || getOsName();
    syncDynamicNames();
    if (msg) msg.textContent = "";
    $("travel-login-screen")?.classList.add("hidden");

    if (travelLoaded) {
      $("travel-loader-screen")?.classList.add("hidden");
      $("travel-browser")?.classList.remove("hidden");
      navigateBrowser("home", false);
    } else {
      startTravelLoader();
    }
    return;
  }

  if (msg) msg.textContent = "Authentication failed.";
  const passInput = $("travel-password-input");
  if (passInput) {
    passInput.value = "";
    passInput.focus();
  }
  shakeElement($("program-window"));
}

function startTravelLoader() {
  const loader = $("travel-loader-screen");
  const browser = $("travel-browser");
  const progress = $("progress-bar");
  const line = $("loader-line");
  const log = $("loader-log");

  if (!loader || !browser || !progress || !line || !log) return;

  loader.classList.remove("hidden");
  browser.classList.add("hidden");
  progress.style.width = "0%";
  log.innerHTML = "";

  const steps = [
    [14, "Opening desk files...", "desk files"],
    [31, "Reading route slips...", "route slips"],
    [49, "Loading fare tables...", "fare tables"],
    [67, "Checking allocation cards...", "allocation cards"],
    [84, "Preparing road file...", "road file"],
    [100, "Ready.", "ready"]
  ];

  let index = 0;
  function next() {
    const [percent, text, label] = steps[index];
    progress.style.width = percent + "%";
    line.textContent = text;
    const li = document.createElement("li");
    li.textContent = label;
    log.appendChild(li);
    index += 1;

    if (index < steps.length) {
      setTimeout(next, 360);
    } else {
      setTimeout(() => {
        travelLoaded = true;
        loader.classList.add("hidden");
        browser.classList.remove("hidden");
        navigateBrowser("home", false);
      }, 280);
    }
  }

  setTimeout(next, 120);
}

function addressForPage(page, detail) {
  if (page === "home") return "travelportal://home";
  if (page === "flights") return "travelportal://flights";
  if (page === "flight-detail") return detail ? `travelportal://flights/${detail}` : "travelportal://flights/detail";
  if (page === "orange") return "travelportal://orange";
  if (page === "balkan") return "travelportal://balkan";
  if (page === "balkan-country") return detail ? `travelportal://balkan/${detail}` : "travelportal://balkan/country";
  return "travelportal://home";
}

function navigateBrowser(page, addHistory = true, detail = "") {
  document.querySelectorAll(".browser-page").forEach((section) => section.classList.remove("active"));
  $("page-" + page)?.classList.add("active");

  const address = $("browser-address");
  if (address) address.textContent = addressForPage(page, detail);

  const historyItem = detail ? `${page}:${detail}` : page;
  if (addHistory && browserHistory[browserHistory.length - 1] !== historyItem) {
    browserHistory.push(historyItem);
  }
  const backButton = $("browser-back-button");
  if (backButton) backButton.disabled = browserHistory.length <= 1;
}

function navigateFromHistory(item) {
  const [page, detail = ""] = item.split(":");
  if (page === "flight-detail") {
    setFlightDetail(detail);
    navigateBrowser(page, false, detail);
    return;
  }
  if (page === "balkan-country") {
    const country = Object.keys(countryData).find((name) => countryData[name].slug === detail);
    if (country) setCountryDetail(country, false);
    navigateBrowser(page, false, detail);
    return;
  }
  navigateBrowser(page, false);
}

function browserBack() {
  if (browserHistory.length <= 1) return;
  browserHistory.pop();
  navigateFromHistory(browserHistory[browserHistory.length - 1]);
}

function browserHome() {
  navigateBrowser("home");
}

function renderFlights() {
  const grid = $("flight-grid");
  if (!grid) return;
  grid.innerHTML = "";

  Object.entries(flightData).forEach(([id, flight]) => {
    const isHeld = Object.prototype.hasOwnProperty.call(heldFlightSeats, id);
    const button = document.createElement("button");
    button.className = "flight-card";
    if (isHeld) button.classList.add("held");
    button.type = "button";
    button.dataset.flightId = id;
    button.innerHTML = `
      <div class="flight-card-top"><strong>${flight.route}</strong><span>${flight.number}</span></div>
      <div class="flight-meta">
        <span>${flight.departCode}</span>
        <span>${flight.departTime}</span>
        <span>${flight.stop}</span>
        <span>${flight.arriveTime}</span>
        <span>${flight.arriveCode}</span>
      </div>
      <div class="flight-footer"><span>${flight.duration}</span><em>${isHeld ? "Held" : "View"}</em></div>
    `;
    button.addEventListener("click", () => openFlightDetail(id));
    grid.appendChild(button);
  });
}

function openFlightDetail(id) {
  setFlightDetail(id);
  navigateBrowser("flight-detail", true, id);
}

function setFlightDetail(id) {
  const flight = flightData[id];
  if (!flight) return;
  selectedFlightId = id;
  selectedSeat = Object.prototype.hasOwnProperty.call(heldFlightSeats, id) ? (heldFlightSeats[id] || null) : null;

  $("flight-detail-route").textContent = flight.route;
  $("flight-detail-number").textContent = flight.number;
  $("flight-detail-departure").textContent = `${flight.departCode} · ${flight.departTime}`;
  $("flight-detail-arrival").textContent = `${flight.arriveCode} · ${flight.arriveTime}${flight.airportNote ? " · " + flight.airportNote : ""}`;
  $("flight-detail-duration").textContent = flight.duration;
  $("flight-detail-fare").textContent = flight.fare;
  $("flight-detail-cabin").textContent = flight.cabin;
  $("flight-detail-baggage").textContent = flight.baggage;

  renderSeatMap();
  updateFlightDetailState();
}

function renderSeatMap() {
  const grid = $("seat-grid");
  if (!grid) return;
  grid.innerHTML = "";

  seats.forEach((seat) => {
    const button = document.createElement("button");
    button.className = "seat-button";
    button.type = "button";
    button.dataset.seat = seat;
    button.textContent = seat;
    button.addEventListener("click", () => selectSeat(seat));
    grid.appendChild(button);
  });
}

function updateFlightDetailState() {
  const holdButton = $("hold-flight-button");
  const seatCard = $("seat-card");
  const status = $("seat-status");
  const seatCopy = $("flight-detail-seat-copy");
  if (!selectedFlightId || !holdButton || !status || !seatCopy) return;

  const isHeldFlight = Object.prototype.hasOwnProperty.call(heldFlightSeats, selectedFlightId);

  document.querySelectorAll(".seat-button").forEach((button) => {
    const seat = button.dataset.seat;
    button.classList.toggle("active", !!selectedSeat && selectedSeat === seat);
    button.disabled = isHeldFlight;
  });

  seatCard?.classList.toggle("locked", isHeldFlight);

  if (!isHeldFlight) {
    holdButton.disabled = false;
    holdButton.textContent = "Hold this option";
    status.textContent = selectedSeat ? `Seat selected: ${selectedSeat}` : "No seat selected.";
    seatCopy.textContent = "Available";
    return;
  }

  holdButton.disabled = true;
  holdButton.textContent = "Held";
  status.textContent = selectedSeat ? `Held seat: ${selectedSeat}` : "Held without seat.";
  seatCopy.textContent = "Locked";
}

function selectSeat(seat) {
  if (Object.prototype.hasOwnProperty.call(heldFlightSeats, selectedFlightId)) return;
  selectedSeat = seat;
  document.querySelectorAll(".seat-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.seat === seat);
  });
  const status = $("seat-status");
  if (status) status.textContent = `Seat selected: ${seat}`;
}

function holdSelectedFlight() {
  if (!selectedFlightId || Object.prototype.hasOwnProperty.call(heldFlightSeats, selectedFlightId)) return;
  const flight = flightData[selectedFlightId];
  heldFlightSeats[selectedFlightId] = selectedSeat || "";
  renderFlights();
  updateFlightDetailState();

  const seatSentence = selectedSeat ? `Seat ${selectedSeat} noted.` : "Seat not selected.";
  queueMsnMessage(
    flight.desk,
    `Hi ${getBookingName()}. Your selected option ${flight.number} (${flight.route}) is now on hold. Check-in opens 24 hours before departure. ${seatSentence}`
  );
}

function renderOrangeDays() {
  const ribbon = $("orange-day-ribbon");
  if (!ribbon) return;
  ribbon.innerHTML = "";

  orangeDays.forEach((day) => {
    const button = document.createElement("button");
    button.className = "day-pill";
    button.classList.toggle("active", selectedOrangeDay === day);
    button.type = "button";
    button.dataset.day = day;
    button.textContent = day;
    button.addEventListener("click", () => {
      selectedOrangeDay = day;
      renderOrangeDays();
      if (currentOrangePanel === "lineup") renderOrangePanel("lineup");
    });
    ribbon.appendChild(button);
  });
}

function renderOrangePanel(panel) {
  currentOrangePanel = panel;
  document.querySelectorAll(".orange-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.orangePanel === panel);
  });

  const container = $("orange-panel");
  if (!container) return;

  if (panel === "lineup") {
    const file = orangeLineup[selectedOrangeDay];
    container.innerHTML = `
      <div class="lineup-board">
        <div class="lineup-board-head">
          <span>${selectedOrangeDay}</span>
          <div>
            <strong>${file.board}</strong>
            <div class="lineup-meta-strip">${file.meta.map((item) => `<b>${item}</b>`).join("")}</div>
          </div>
        </div>
        <div class="lineup-rows">
          ${file.picks.map(([name, tag], index) => `
            <div class="lineup-row ${index === 0 ? "top-row" : ""}">
              <em>${String(index + 1).padStart(2, "0")}</em>
              <strong>${name}</strong>
              <span>${tag}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;
    updateOrangeConfirmState();
    return;
  }

  if (panel === "camp") {
    container.innerHTML = `
      <div class="camp-layout">
        <div class="camp-task-card">
          <span>Camp task</span>
          <strong>Borrowing beer for the week</strong>
          <small>${getBookingName()}</small>
          <div class="camp-progress-bar"><span class="camp-progress-fill" id="camp-progress-fill"></span></div>
          <em class="camp-progress-text" id="camp-progress-text">0 / ${campItems.length} packed</em>
        </div>
        <div class="packing-list" id="camp-packing-list">
          <h3>Packing list</h3>
          ${campItems.map(([key, label]) => `
            <label data-camp-label="${key}">
              <input class="camp-checkbox" data-camp-key="${key}" type="checkbox" ${campChecklist[key] ? "checked" : ""} ${campConfirmed ? "disabled" : ""} />
              ${label}
            </label>
          `).join("")}
        </div>
      </div>
    `;
    bindCampChecks();
    updateOrangeConfirmState();
    return;
  }

  const allPacked = Object.values(campChecklist).every(Boolean);
  container.innerHTML = `
    <div class="access-sheet">
      <div class="access-sheet-title"><span>Access note</span><strong>${getBookingName()} / row 017</strong></div>
      <div class="access-note-grid">
        <div class="access-note-card"><span>Wristband</span><strong>on-site handoff</strong></div>
        <div class="access-note-card"><span>Camp</span><strong>${allPacked ? "ready for confirm" : "packing pending"}</strong></div>
        <div class="access-note-card"><span>Bring</span><strong>ID + ticket mail</strong></div>
        <div class="access-note-card"><span>Window</span><strong>partner desk</strong></div>
      </div>
      <div class="access-fineprint">orange_row=017 // camp_file=${allPacked ? "ready" : "pending"} // name=${getBookingName()}</div>
    </div>
  `;
  updateOrangeConfirmState();
}

function bindCampChecks() {
  document.querySelectorAll(".camp-checkbox").forEach((box) => {
    const key = box.dataset.campKey;
    const label = box.closest("label");
    label?.classList.toggle("done", box.checked);
    box.addEventListener("change", () => {
      campChecklist[key] = box.checked;
      label?.classList.toggle("done", box.checked);
      updateOrangeConfirmState();
    });
  });
}

function updateOrangeConfirmState() {
  const total = campItems.length;
  const done = Object.values(campChecklist).filter(Boolean).length;
  const complete = done === total;
  const button = $("orange-confirm-button");
  const miniStatus = $("orange-camp-mini-status");

  const fill = $("camp-progress-fill");
  const text = $("camp-progress-text");
  if (fill) fill.style.width = Math.round((done / total) * 100) + "%";
  if (text) text.textContent = `${done} / ${total} packed`;
  if (miniStatus) miniStatus.textContent = campConfirmed ? "confirmed" : complete ? "ready" : "pending pack";

  if (!button) return;
  if (campConfirmed) {
    button.disabled = true;
    button.textContent = "Camp confirmed";
    return;
  }

  button.disabled = !complete;
  button.textContent = complete ? "Confirm camp allocation" : "Complete packing list";
}

function confirmOrange() {
  const complete = Object.values(campChecklist).every(Boolean);
  if (!complete || campConfirmed) {
    shakeElement($("orange-panel"));
    return;
  }

  campConfirmed = true;
  updateOrangeConfirmState();
  renderOrangePanel(currentOrangePanel);
  queueMsnMessage(
    "CAMPEN",
    `Hey ${getBookingName()}. Lovely of you to join us. Practical info: wristband handoff is on site, camp placement follows the partner file. Btw, you are in charge of borrowing beer for the week. Best, CAMPEN.`
  );
}

function renderCountries() {
  const grid = $("country-grid");
  if (!grid) return;
  grid.innerHTML = "";

  Object.entries(countryData).forEach(([country, data], index) => {
    const button = document.createElement("button");
    button.className = "country-card";
    button.type = "button";
    button.dataset.country = country;
    button.innerHTML = `
      <span class="country-card-index">${String(index + 1).padStart(2, "0")} / ${data.code}</span>
      <strong>${country}</strong>
      <small>${data.sub}</small>
      <em>${data.see}</em>
    `;
    button.addEventListener("click", () => openCountry(country));
    grid.appendChild(button);
  });
}

function openCountry(country) {
  setCountryDetail(country, true);
}

function setCountryDetail(country, pushHistory = true) {
  const data = countryData[country];
  if (!data) return;

  $("country-path").textContent = `TravelPortal / Balkan / ${data.slug}`;
  $("country-title").textContent = country;
  $("country-copy").textContent = data.copy;
  $("country-code").textContent = data.code;
  $("country-region").textContent = data.sub;
  $("country-dish").textContent = data.dish;
  $("country-see").textContent = data.see;
  $("country-note").textContent = data.note;
  $("country-border").textContent = data.border;
  $("country-drive").textContent = data.drive;

  const itinerary = $("country-itinerary");
  if (itinerary) {
    itinerary.innerHTML = `<span>Route marks</span>${data.stops.map((stop) => `<b>${stop}</b>`).join("")}`;
  }

  document.querySelectorAll(".country-card").forEach((button) => {
    button.classList.toggle("active", button.dataset.country === country);
  });

  navigateBrowser("balkan-country", pushHistory, data.slug);
}

function renderVehicles() {
  const grid = $("vehicle-grid");
  if (!grid) return;
  grid.innerHTML = "";

  Object.entries(vehicleData).forEach(([name, data]) => {
    const button = document.createElement("button");
    button.className = "vehicle-card";
    button.classList.toggle("active", selectedVehicle === name);
    button.type = "button";
    button.disabled = vehicleReserved;
    button.dataset.vehicle = name;
    button.innerHTML = `<strong>${name}</strong><span>${data.sub}</span>`;
    button.addEventListener("click", () => selectVehicle(name));
    grid.appendChild(button);
  });
}

function selectVehicle(name) {
  if (vehicleReserved) return;
  selectedVehicle = name;
  const status = $("rental-status");
  if (status) status.textContent = `${name} selected.`;
  renderVehicles();
}

function reserveVehicle() {
  if (vehicleReserved) return;

  if (!selectedVehicle) {
    const status = $("rental-status");
    if (status) status.textContent = "Choose one vehicle first.";
    shakeElement(document.querySelector(".rental-desk"));
    return;
  }

  vehicleReserved = true;
  $("reserve-car-button").disabled = true;
  $("reserve-car-button").textContent = "Vehicle reserved";
  $("rental-status").textContent = `${selectedVehicle} reserved.`;
  renderVehicles();

  queueMsnMessage(
    "Adriatic AutoRent",
    `Hi ${getBookingName()}. ${vehicleData[selectedVehicle].message}`
  );
}

function randomMessageDelay() {
  return 900 + Math.floor(Math.random() * 1900);
}

function queueMsnMessage(contact, message, status = "Status: Online") {
  setTimeout(() => pushMsnMessage(contact, message, status), randomMessageDelay());
}

function pushMsnMessage(contact, message, status) {
  if (!msnStore[contact]) {
    msnStore[contact] = { status, messages: [], unread: 0 };
  }

  const convo = msnStore[contact];
  convo.status = status;
  convo.messages.push({
    text: message,
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  });

  const msnOpen = $("msn-window")?.classList.contains("open");
  if (msnOpen && activeMsnContact === contact) {
    showMsnConversation(contact, true);
  } else {
    convo.unread += 1;
  }

  renderMsnContacts();
  updateMsnBadge();
}

function renderMsnContacts() {
  const list = $("msn-contact-list");
  if (!list) return;
  list.innerHTML = "";

  Object.entries(msnStore).forEach(([name, convo]) => {
    const button = document.createElement("button");
    button.className = "msn-contact-item";
    button.classList.toggle("active", name === activeMsnContact);
    button.type = "button";
    button.dataset.contact = name;
    button.innerHTML = `
      <span class="msn-contact-dot">${name.slice(0, 1)}</span>
      <span><strong>${name}</strong><small>${convo.status.replace("Status: ", "")}</small></span>
      ${convo.unread ? `<em>${convo.unread}</em>` : ""}
    `;
    button.addEventListener("click", () => showMsnConversation(name, true));
    list.appendChild(button);
  });
}

function showMsnConversation(contact, markRead = true) {
  const convo = msnStore[contact];
  if (!convo) return;

  activeMsnContact = contact;
  $("msn-avatar").textContent = contact.slice(0, 1);
  $("msn-contact-name").textContent = contact;
  $("msn-contact-status").textContent = convo.status;

  const messages = $("msn-messages");
  messages.innerHTML = "";
  convo.messages.forEach((msg) => {
    const bubble = document.createElement("div");
    bubble.className = "msn-message";
    bubble.innerHTML = `<small>${msg.time}</small><div>${msg.text}</div>`;
    messages.appendChild(bubble);
  });

  if (markRead) convo.unread = 0;
  renderMsnContacts();
  updateMsnBadge();
  messages.scrollTop = messages.scrollHeight;
}

function updateMsnBadge() {
  const badge = $("msn-badge");
  if (!badge) return;
  const totalUnread = Object.values(msnStore).reduce((sum, convo) => sum + convo.unread, 0);
  badge.textContent = String(totalUnread);
  badge.classList.toggle("hidden", totalUnread === 0);
}

function openMsnWindow() {
  const firstUnread = Object.keys(msnStore).find((name) => msnStore[name].unread > 0);
  if (firstUnread) {
    showMsnConversation(firstUnread, true);
    return;
  }
  if (activeMsnContact && msnStore[activeMsnContact]) {
    showMsnConversation(activeMsnContact, false);
    return;
  }
  renderMsnContacts();
}

function closeStartMenu() {
  $("start-menu")?.classList.remove("open");
}

function toggleStartMenu() {
  $("start-menu")?.classList.toggle("open");
}

function bindWindowOpeners() {
  document.querySelectorAll("[data-window]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const isDesktop = button.classList.contains("desktop-icon");
      const isRecycleFile = button.closest("#recycle-files");

      if (isDesktop) {
        document.querySelectorAll(".desktop-icon").forEach((icon) => icon.classList.remove("selected"));
        button.classList.add("selected");
      }

      if (isRecycleFile) return;
      event.stopPropagation();
      openWindow(button.dataset.window);
    });
  });
}

function bindWindowDragging() {
  document.querySelectorAll(".window-titlebar").forEach((titlebar) => {
    titlebar.addEventListener("mousedown", (event) => {
      if (event.target.classList.contains("window-close")) return;
      draggingWindow = titlebar.closest(".window");
      if (!draggingWindow) return;

      highestZIndex += 1;
      draggingWindow.style.zIndex = highestZIndex;
      const rect = draggingWindow.getBoundingClientRect();
      dragOffsetX = event.clientX - rect.left;
      dragOffsetY = event.clientY - rect.top;
      document.body.style.cursor = "move";
      event.preventDefault();
    });
  });

  document.addEventListener("mousemove", (event) => {
    if (!draggingWindow) return;
    const taskbarHeight = 38;
    const maxLeft = Math.max(0, window.innerWidth - draggingWindow.offsetWidth);
    const maxTop = Math.max(0, window.innerHeight - draggingWindow.offsetHeight - taskbarHeight);
    const left = Math.max(0, Math.min(event.clientX - dragOffsetX, maxLeft));
    const top = Math.max(0, Math.min(event.clientY - dragOffsetY, maxTop));
    draggingWindow.style.left = left + "px";
    draggingWindow.style.top = top + "px";
  });

  document.addEventListener("mouseup", () => {
    if (draggingWindow) {
      draggingWindow = null;
      document.body.style.cursor = "";
    }
  });
}

function bindDesktopSelection() {
  const desktop = $("desktop");
  const box = $("selection-box");
  if (!desktop || !box) return;

  desktop.addEventListener("mousedown", (event) => {
    if (event.target.closest(".window") || event.target.closest(".desktop-icon") || event.target.closest(".taskbar") || event.target.closest(".start-menu")) return;
    selecting = true;
    selectionStartX = event.clientX;
    selectionStartY = event.clientY;
    box.style.left = selectionStartX + "px";
    box.style.top = selectionStartY + "px";
    box.style.width = "0px";
    box.style.height = "0px";
    box.style.display = "block";
    document.querySelectorAll(".desktop-icon").forEach((icon) => icon.classList.remove("selected"));
    closeStartMenu();
  });

  document.addEventListener("mousemove", (event) => {
    if (!selecting) return;
    const left = Math.min(selectionStartX, event.clientX);
    const top = Math.min(selectionStartY, event.clientY);
    const width = Math.abs(event.clientX - selectionStartX);
    const height = Math.abs(event.clientY - selectionStartY);
    box.style.left = left + "px";
    box.style.top = top + "px";
    box.style.width = width + "px";
    box.style.height = height + "px";

    const rect = box.getBoundingClientRect();
    document.querySelectorAll(".desktop-icon").forEach((icon) => {
      const iconRect = icon.getBoundingClientRect();
      const overlaps = rect.left < iconRect.right && rect.right > iconRect.left && rect.top < iconRect.bottom && rect.bottom > iconRect.top;
      icon.classList.toggle("selected", overlaps);
    });
  });

  document.addEventListener("mouseup", () => {
    if (!selecting) return;
    selecting = false;
    box.style.display = "none";
  });
}

function bindStaticControls() {
  document.addEventListener("click", (event) => {
    if (event.target.closest("#user-tile")) {
      event.preventDefault();
      openPasswordDialog();
      return;
    }
  });

  $("login-button")?.addEventListener("click", osLogin);
  $("password")?.addEventListener("keydown", (event) => { if (event.key === "Enter") osLogin(); });
  $("cancel-button")?.addEventListener("click", () => showScreen("welcome-screen"));
  $("shutdown-button")?.addEventListener("click", () => showScreen("welcome-screen"));
  $("options-button")?.addEventListener("click", () => shakeElement(document.querySelector(".dialog-window")));

  $("start-button")?.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleStartMenu();
  });
  $("start-menu")?.addEventListener("click", (event) => event.stopPropagation());
  document.addEventListener("click", closeStartMenu);
  $("logoff-button")?.addEventListener("click", () => window.location.reload());
  $("desktop-shutdown-button")?.addEventListener("click", () => showScreen("welcome-screen"));

  document.querySelectorAll(".window-close").forEach((button) => {
    button.addEventListener("click", () => closeWindow(button.closest(".window")));
  });
  document.querySelectorAll(".window-close-soft").forEach((button) => {
    button.addEventListener("click", () => closeWindow(button.closest(".window")));
  });
  document.querySelectorAll(".window").forEach((win) => {
    win.addEventListener("mousedown", () => {
      highestZIndex += 1;
      win.style.zIndex = highestZIndex;
    });
  });

  document.querySelectorAll(".computer-drive-nav").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      switchComputerView(button.dataset.computerView);
    });
  });
  $("computer-back-button")?.addEventListener("click", () => switchComputerView("root"));

  $("restore-recycle-button")?.addEventListener("click", restoreRecycleBin);
  $("empty-recycle-button")?.addEventListener("click", emptyRecycleBin);
  $("passwd-file")?.addEventListener("click", handlePasswdInBin);
  $("passwd-file")?.addEventListener("dblclick", handlePasswdInBin);

  ["denmark-rant-trash", "duke-rant-trash"].forEach((id) => {
    const item = $(id);
    item?.addEventListener("click", () => selectTrashFile(item.dataset.trashId));
    item?.addEventListener("dblclick", () => openWindow(item.dataset.window));
  });

  $("travel-login-button")?.addEventListener("click", runTravelLogin);
  ["travel-username-input", "travel-password-input"].forEach((id) => {
    $(id)?.addEventListener("keydown", (event) => { if (event.key === "Enter") runTravelLogin(); });
  });

  document.querySelectorAll(".agency-card").forEach((button) => {
    button.addEventListener("click", () => navigateBrowser(button.dataset.page));
  });
  $("browser-back-button")?.addEventListener("click", browserBack);
  $("browser-home-button")?.addEventListener("click", browserHome);

  $("hold-flight-button")?.addEventListener("click", holdSelectedFlight);
  document.querySelectorAll(".orange-tab").forEach((button) => {
    button.addEventListener("click", () => renderOrangePanel(button.dataset.orangePanel));
  });
  $("orange-confirm-button")?.addEventListener("click", confirmOrange);
  $("country-back-button")?.addEventListener("click", () => navigateBrowser("balkan"));
  $("reserve-car-button")?.addEventListener("click", reserveVehicle);

  window.addEventListener("resize", () => {
    document.querySelectorAll(".window.open").forEach(clampWindow);
  });
}

function boot() {
  if (booted) return;
  booted = true;

  try {
    bindStaticControls();
    bindWindowOpeners();
    bindWindowDragging();
    bindDesktopSelection();
    renderFlights();
    renderOrangeDays();
    renderOrangePanel("lineup");
    renderCountries();
    renderVehicles();
    renderMsnContacts();
    syncDynamicNames();
    switchComputerView("root");
    updateClock();
    setInterval(updateClock, 1000);
  } catch (error) {
    console.error("Fortia boot failed", error);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
