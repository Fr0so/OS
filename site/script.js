/* =============================================
   FORTIA OS — script.js
   ============================================= */

const OS_PASSWORD      = "Rigsby";
const TRAVEL_USERNAME  = "name";
const TRAVEL_PASSWORD  = "letmein";
const DEFAULT_USER_NAME = "Name";

const $ = (id) => document.getElementById(id);

/* ─── Data ──────────────────────────────────── */

const flightData = {
  "nyc-cph":    { route:"NYC → CPH",     number:"SK 912",   departCode:"JFK", departTime:"08:20", arriveCode:"CPH", arriveTime:"21:35", stop:"Direct",  duration:"7h 15m", fare:"Classic", cabin:"Economy", baggage:"1 cabin bag + checked bag",  desk:"SAS Travel Desk" },
  "cph-nyc":    { route:"CPH → NYC",     number:"SK 911",   departCode:"CPH", departTime:"13:40", arriveCode:"JFK", arriveTime:"16:10", stop:"Direct",  duration:"8h 30m", fare:"Classic", cabin:"Economy", baggage:"1 cabin bag + checked bag",  desk:"SAS Travel Desk" },
  "cph-tirana": { route:"CPH → Tirana",  number:"OU 481",   departCode:"CPH", departTime:"09:05", arriveCode:"TIA", arriveTime:"13:55", stop:"1 stop",  duration:"4h 50m", fare:"Saver",   cabin:"Economy", baggage:"1 cabin bag",               desk:"Adriatic Air Desk", airportNote:"TIA / Tirana International Airport" },
  "tirana-cph": { route:"Tirana → CPH",  number:"OU 482",   departCode:"TIA", departTime:"14:40", arriveCode:"CPH", arriveTime:"19:20", stop:"1 stop",  duration:"4h 40m", fare:"Saver",   cabin:"Economy", baggage:"1 cabin bag",               desk:"Adriatic Air Desk", airportNote:"TIA / Tirana International Airport" },
  "cph-zurich": { route:"CPH → Zurich",  number:"LX 1271",  departCode:"CPH", departTime:"11:25", arriveCode:"ZRH", arriveTime:"13:20", stop:"Direct",  duration:"1h 55m", fare:"Flex",    cabin:"Economy", baggage:"1 cabin bag",               desk:"Swiss Booking Desk" }
};

const seatMaps = {
  "nyc-cph":    ["4A","18C","7F","23B","11D","29A","15E","32C","6B","21F"],
  "cph-nyc":    ["3D","16A","27F","8C","22E","10B","34A","14F","25C","5E"],
  "cph-tirana": ["2A","19D","6C","24F","12B","31A","9E","17F","28C","4D"],
  "tirana-cph": ["5F","20A","13C","26D","7B","33E","11A","18F","30C","3B"],
  "cph-zurich": ["1C","14A","8F","21D","4B","27E","12F","19A","6D","24C"]
};

const orangeDays = ["Mon 29","Tue 30","Wed 01","Thu 02","Fri 03","Sat 04"];

const orangeLineup = {
  "Mon 29": { board:"First Days file", picks:[["Tessa","Song placeholder"],["TV-2","Song placeholder"],["EsDeeKid","Song placeholder"]] },
  "Tue 30": { board:"First Days file", picks:[["Addison Rae","Song placeholder"],["Lily Allen","Song placeholder"],["Kneecap","Song placeholder"]] },
  "Wed 01": { board:"Orange opening slip", picks:[["Pil","Song placeholder"],["Wolf Alice","Song placeholder"],["Little Simz","Song placeholder"]] },
  "Thu 02": { board:"Main field slip", picks:[["Gorillaz","Song placeholder"],["Zara Larsson","Song placeholder"],["Jennie","Song placeholder"]] },
  "Fri 03": { board:"Weekend slip", picks:[["The Cure","Song placeholder"],["Clipse","Song placeholder"],["Wolf Alice","Song placeholder"]] },
  "Sat 04": { board:"Closing slip", picks:[["Gorillaz","Song placeholder"],["Yung Lean & Bladee","Song placeholder"],["Zara Larsson","Song placeholder"]] }
};

const campItems = [
  ["tape",      "Pavilion tape"],
  ["powerbank", "Powerbank"],
  ["rain",      "Rain cover"],
  ["sunscreen", "Sunscreen"],
  ["socks",     "Dry socks"],
  ["beer",      "Bring 4 rammer øl"]
];
const campChecklist = Object.fromEntries(campItems.map(([k]) => [k, false]));

const countryData = {
  "Albania": {
    code:"AL",
    slug:"albania",
    sub:"Tirana / Riviera",
    dish:"Tavë kosi",
    dishDesc:"Baked lamb and rice in yogurt custard.",
    see:"Tirana, Gjirokastër, Himarë coast",
    note:"Hospitality is central; coffeehouses, family ties, and evening street life shape everyday social culture.",
    border:"US: visa-free up to 1 year. Danish: visa-free up to 90 days.",
    drive:"Mountain roads look short on paper and then eat the afternoon.",
    copy:"Tirana pickup, bunker edges, mountain turns and a southbound coast file with too many places to stop.",
    stops:["Tirana","Gjirokastër","Himarë","Ksamil"]
  },
  "Montenegro": {
    code:"ME",
    slug:"montenegro",
    sub:"Bay of Kotor",
    dish:"Njeguši prosciutto",
    dishDesc:"Air-dried mountain ham, usually served thinly sliced.",
    see:"Kotor bay road and Lovćen switchbacks",
    note:"Culture is tied to clans, Orthodox monasteries, coastal Venetian towns, and a strong mountain identity.",
    border:"US/Danish: visa-free up to 90 days with a valid passport.",
    drive:"Take the bay road slowly; buses do not care about your confidence.",
    copy:"Kotor stone, steep turns, bay water and a route that looks tiny until the road starts climbing.",
    stops:["Kotor","Perast","Lovćen","Budva"]
  },
  "Croatia": {
    code:"HR",
    slug:"croatia",
    sub:"Coast / old towns",
    dish:"Peka",
    dishDesc:"Meat or seafood slow-cooked under an iron bell.",
    see:"Adriatic old towns and late ferries",
    note:"Coastal culture mixes Adriatic, Mediterranean, and Central European influences; town squares and cafés anchor daily life.",
    border:"US/Danish: visa-free under Schengen 90/180 short-stay rules.",
    drive:"Coast roads reward early starts and punish heroic schedules.",
    copy:"A clean coast card: old stone, ferry timing, late dinners and one folder just for parking notes.",
    stops:["Dubrovnik","Split","Zadar","Plitvice"]
  },
  "Kosovo": {
    code:"XK",
    slug:"kosovo",
    sub:"Prizren",
    dish:"Flija",
    dishDesc:"Layered pastry cooked slowly, usually with cream.",
    see:"Prizren old town and fortress walk",
    note:"Albanian culture dominates public life, with strong family networks, café culture, music, and hospitality.",
    border:"US/Danish: visa-free up to 90 days within 6 months.",
    drive:"Short drives, dense towns, park once and walk.",
    copy:"A compact city sheet for Prizren, border timing and the kind of coffee break that rewrites the afternoon.",
    stops:["Prizren","Pristina","Rugova","Gjakova"]
  },
  "Serbia": {
    code:"RS",
    slug:"serbia",
    sub:"Belgrade",
    dish:"Ćevapi",
    dishDesc:"Grilled minced-meat sausages served with flatbread.",
    see:"Belgrade after dark",
    note:"Orthodox traditions, kafana social life, music, and Belgrade’s urban culture are central to Serbian identity.",
    border:"US/Danish: visa-free up to 90 days; register your stay locally.",
    drive:"City traffic first, river roads after.",
    copy:"Belgrade city file with night notes, river edges, parking caution and one very optimistic morning departure.",
    stops:["Belgrade","Novi Sad","Niš","Tara"]
  },
  "North Macedonia": {
    code:"MK",
    slug:"north-macedonia",
    sub:"Lake Ohrid",
    dish:"Tavče gravče",
    dishDesc:"Baked beans with paprika, often served in a clay dish.",
    see:"Lake Ohrid and old town steps",
    note:"Macedonian, Albanian, Ottoman, and Orthodox influences meet in food, music, markets, and religious sites.",
    border:"US/Danish: visa-free up to 90 days for short tourist stays.",
    drive:"Lake roads are easy until everyone stops for the same view.",
    copy:"Ohrid lake card, soft mornings, monastery stops and a southern route that should not be rushed.",
    stops:["Ohrid","Skopje","Bitola","Matka Canyon"]
  }
};

const vehicleData = {
  "Volkswagen Golf":{ sub:"Compact • manual • safe default",  message:"Your Volkswagen Golf reservation is confirmed for pickup in Tirana. Compact class noted. Bring passport and driving license." },
  "Suzuki Jimny":   { sub:"Small 4x4 • tighter roads",        message:"Your Suzuki Jimny reservation is confirmed for pickup in Tirana. Small 4x4 class noted. Bring passport and driving license." },
  "Fiat Panda 4x4": { sub:"Light utility • weirdly correct",  message:"Your Fiat Panda 4x4 reservation is confirmed for pickup in Tirana. Light 4x4 class noted. Bring passport and driving license." }
};

/* ─── State ─────────────────────────────────── */

let booted          = false;
let highestZIndex   = 10;
let currentComputerView = "root";
let selectedTrashId = null;
let travelLoaded    = false;
let currentTravelName = DEFAULT_USER_NAME;
let browserHistory  = ["home"];
let selectedFlightId = null;
let selectedSeat     = null;
let selectedOrangeDay = "Mon 29";
let currentOrangePanel = "lineup";
let campConfirmed   = false;
let selectedVehicle = null;
let vehicleReserved = false;
let activeMsnContact = null;
let osPasswordAttempts = 0;

let draggingWindow  = null;
let dragOffsetX = 0, dragOffsetY = 0;
let selecting = false, selectionStartX = 0, selectionStartY = 0;

const heldFlightSeats = {};
const msnStore = {};

/* ─── Utilities ─────────────────────────────── */

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $(id)?.classList.add("active");
}

function getOsName()      { return ($("username")?.value || DEFAULT_USER_NAME).trim() || DEFAULT_USER_NAME; }
function getBookingName() { return (currentTravelName || getOsName()).trim() || DEFAULT_USER_NAME; }

function syncDynamicNames() {
  document.querySelectorAll(".dynamic-booking-name").forEach((el) => { el.textContent = getBookingName(); });
}

function updateClock() {
  const el = $("clock");
  const now = new Date();
  if (el) {
    const time = now.toLocaleTimeString([], { hour:"numeric", minute:"2-digit", hour12:true });
    const date = now.toLocaleDateString("en-GB", { day:"2-digit", month:"2-digit", year:"numeric" });
    el.innerHTML = `<span class="clock-time">${time}</span><span class="clock-date">${date}</span>`;
  }
  checkBirthdayPopup(now);
}

function isBirthdayDate(date = new Date()) {
  return date.getFullYear() === 2026 && date.getMonth() === 4 && date.getDate() === 25;
}

function nudgeBirthdayPopup() {
  const popup = $("birthday-popup");
  if (!popup) return;
  popup.classList.remove("birthday-nudge");
  void popup.offsetWidth;
  popup.classList.add("birthday-nudge");
}

function dismissBirthdayPopup() {
  const overlay = $("birthday-overlay");
  overlay?.remove();
  document.body.classList.remove("birthday-active");
  try { localStorage.setItem("fortia-birthday-2026-thanked", "yes"); } catch (_) {}
}

function showBirthdayPopup() {
  if ($("birthday-overlay")) return;
  let alreadyThanked = false;
  try { alreadyThanked = localStorage.getItem("fortia-birthday-2026-thanked") === "yes"; } catch (_) {}
  if (alreadyThanked) return;

  const overlay = document.createElement("div");
  overlay.id = "birthday-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.innerHTML = `
    <div id="birthday-popup">
      <div class="birthday-titlebar">Fortia OS Reminder</div>
      <div class="birthday-body">
        <div class="birthday-icon" aria-hidden="true">🎂</div>
        <div>
          <h2>Happy birthday!</h2>
          <p>Today is 25/05/2026.</p>
          <button id="birthday-thank-you" type="button">Thank you</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  document.body.classList.add("birthday-active");
  $("birthday-thank-you")?.focus();
}

function checkBirthdayPopup(date = new Date()) {
  if (isBirthdayDate(date)) showBirthdayPopup();
}

function guardBirthdayInteraction(e) {
  if (!$("birthday-overlay")) return;
  if (e.target.closest("#birthday-thank-you")) {
    if (e.type === "click") dismissBirthdayPopup();
    return;
  }
  e.preventDefault();
  e.stopPropagation();
  nudgeBirthdayPopup();
}

["mousedown","click","dblclick","contextmenu"].forEach((eventName) => {
  document.addEventListener(eventName, guardBirthdayInteraction, true);
});

function shakeElement(el) {
  if (!el) return;
  const base = getComputedStyle(el).transform;
  const prefix = base && base !== "none" ? base + " " : "";
  el.animate([
    { transform:`${prefix}translateX(0)` },
    { transform:`${prefix}translateX(-7px)` },
    { transform:`${prefix}translateX(7px)` },
    { transform:`${prefix}translateX(-4px)` },
    { transform:`${prefix}translateX(4px)` },
    { transform:`${prefix}translateX(0)` }
  ], { duration:210 });
}

/* ─── Screens ───────────────────────────────── */

function openPasswordDialog() {
  showScreen("password-screen");
  const pw = $("password"), msg = $("login-message");
  osPasswordAttempts = 0;
  if (msg) msg.textContent = "";
  if (pw)  { pw.value = ""; setTimeout(() => pw.focus(), 30); }
}

function osLogin() {
  const pw = $("password"), msg = $("login-message");
  if (!pw || !msg) return;
  if (pw.value === OS_PASSWORD) { msg.textContent = ""; osPasswordAttempts = 0; startOsLoader(); return; }
  osPasswordAttempts++;
  msg.textContent = osPasswordAttempts >= 2 ? "Wrong password. Hint: R****y" : "Wrong password.";
  pw.value = ""; pw.focus();
  shakeElement(document.querySelector(".dialog-window"));
}

function startOsLoader() {
  const body = $("os-login-body"); if (!body) return;
  body.innerHTML = `<p id="os-loader-line">Loading personal settings...</p><div class="progress-shell"><div class="progress-bar" id="os-progress-bar"></div></div>`;
  const steps = [[18,"Loading personal settings..."],[36,"Preparing desktop..."],[58,"Mounting local drives..."],[81,"Loading Fortia shell..."],[100,"Ready."]];
  let i = 0;
  function next() {
    const [pct, text] = steps[i];
    $("os-loader-line").textContent = text;
    $("os-progress-bar").style.width = pct + "%";
    i++;
    if (i < steps.length) setTimeout(next, 420);
    else setTimeout(() => { showScreen("desktop"); syncDynamicNames(); updateClock(); }, 260);
  }
  next();
}

/* ─── Window management ─────────────────────── */

function openWindow(id) {
  const win = $(id); if (!win) return;
  highestZIndex++; win.classList.add("open"); win.style.zIndex = highestZIndex;
  placeWindow(win); closeStartMenu();
  if (id === "computer-window") switchComputerView(currentComputerView);
  if (["booking-username-window","passwd-window","program-window","system-window"].includes(id)) syncDynamicNames();
  if (id === "msn-window") openMsnWindow();
  const input = win.querySelector("input:not([readonly])");
  if (input) setTimeout(() => input.focus(), 40);
}

function closeWindow(win) { win?.classList.remove("open"); }

function placeWindow(win) {
  if (!win.style.left) win.style.left = (win.dataset.defaultLeft || "120") + "px";
  if (!win.style.top)  win.style.top  = (win.dataset.defaultTop  || "80")  + "px";
  requestAnimationFrame(() => clampWindow(win));
}

function clampWindow(win) {
  const tbH = 38, margin = 12, rect = win.getBoundingClientRect();
  const maxLeft = Math.max(margin, window.innerWidth  - rect.width  - margin);
  const maxTop  = Math.max(margin, window.innerHeight - rect.height - tbH - margin);
  const left = parseInt(win.style.left || win.dataset.defaultLeft || "120", 10);
  const top  = parseInt(win.style.top  || win.dataset.defaultTop  || "80",  10);
  win.style.left = Math.max(margin, Math.min(left, maxLeft)) + "px";
  win.style.top  = Math.max(margin, Math.min(top,  maxTop))  + "px";
}

/* ─── My Computer ───────────────────────────── */

function switchComputerView(view) {
  currentComputerView = view;
  $("computer-root-view")?.classList.toggle("hidden",    view !== "root");
  $("computer-localdisk-view")?.classList.toggle("hidden", view !== "localdisk");
  $("computer-summer-view")?.classList.toggle("hidden",  view !== "summer");
  const back = $("computer-back-button"); if (back) back.disabled = view === "root";
  const titleMap = { root:"My Computer", localdisk:"Local Disk (C:) - My Computer", summer:"Summer 2026 (F:) - My Computer" };
  if ($("computer-title")) $("computer-title").textContent = titleMap[view] || "My Computer";
}

/* ─── Recycle Bin ───────────────────────────── */

function selectTrashFile(id) {
  selectedTrashId = id;
  document.querySelectorAll("#recycle-files .file-item").forEach((item) => {
    item.classList.toggle("selected", item.dataset.trashId === id);
  });
}

function addFileToEmptyFolder(windowId, label) {
  const folder = $("empty-folder-content"); if (!folder) return;
  $("empty-folder-placeholder")?.remove();
  if (folder.querySelector(`[data-window="${windowId}"]`)) return;
  const item = document.createElement("button");
  item.className = "file-item"; item.type = "button"; item.dataset.window = windowId;
  item.innerHTML = `<span class="file-icon txt-icon"></span><span>${label}</span>`;
  item.addEventListener("click", () => openWindow(windowId));
  folder.appendChild(item);
}

function restoreRecycleBin() {
  const status = $("recycle-status");
  if (!selectedTrashId) {
    if (status) status.textContent = "Select one item to restore.";
    shakeElement($("recycle-window")); return;
  }
  const map = {
    passwd: ["passwd-window",       "passwd.txt",           "passwd-file"],
    denmark:["denmark-rant-window", "Danmark VM 26.txt",    "denmark-rant-trash"],
    duke:   ["duke-rant-window",    "March madness 26.txt", "duke-rant-trash"]
  };
  const entry = map[selectedTrashId];
  if (!entry) { if (status) status.textContent = "Cannot restore selected item."; shakeElement($("recycle-window")); return; }
  const [windowId, label, trashId] = entry;
  addFileToEmptyFolder(windowId, label);
  $(trashId)?.remove();
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

/* ─── TravelPortal login ─────────────────────── */

function runTravelLogin() {
  const username = $("travel-username-input")?.value.trim() || "";
  const password = $("travel-password-input")?.value.trim() || "";
  const msg = $("travel-login-message");
  if (username.toLowerCase() === TRAVEL_USERNAME && password.toLowerCase() === TRAVEL_PASSWORD) {
    currentTravelName = username || getOsName(); syncDynamicNames();
    if (msg) msg.textContent = "";
    $("travel-login-screen")?.classList.add("hidden");
    if (travelLoaded) {
      $("travel-loader-screen")?.classList.add("hidden");
      $("travel-browser")?.classList.remove("hidden");
      navigateBrowser("home", false);
    } else { startTravelLoader(); }
    return;
  }
  if (msg) msg.textContent = "Authentication failed.";
  const pw = $("travel-password-input"); if (pw) { pw.value = ""; pw.focus(); }
  shakeElement($("program-window"));
}

function startTravelLoader() {
  const loader = $("travel-loader-screen"), browser = $("travel-browser");
  const progress = $("progress-bar"), line = $("loader-line"), log = $("loader-log");
  if (!loader || !browser || !progress || !line || !log) return;
  loader.classList.remove("hidden"); browser.classList.add("hidden");
  progress.style.width = "0%"; log.innerHTML = "";
  const steps = [[14,"Opening travel files...","travel files"],[31,"Reading route slips...","route slips"],[49,"Loading fare tables...","fare tables"],[67,"Checking allocation cards...","allocation cards"],[84,"Preparing road file...","road file"],[100,"Ready.","ready"]];
  let i = 0;
  function next() {
    const [pct, text, label] = steps[i];
    progress.style.width = pct + "%"; line.textContent = text;
    const li = document.createElement("li"); li.textContent = label; log.appendChild(li);
    i++;
    if (i < steps.length) setTimeout(next, 360);
    else setTimeout(() => { travelLoaded = true; loader.classList.add("hidden"); browser.classList.remove("hidden"); navigateBrowser("home", false); }, 280);
  }
  setTimeout(next, 120);
}

/* ─── Browser navigation ─────────────────────── */

function addressForPage(page, detail) {
  if (page === "home")           return "travelportal://home";
  if (page === "flights")        return "travelportal://flights";
  if (page === "flight-detail")  return detail ? `travelportal://flights/${detail}` : "travelportal://flights/detail";
  if (page === "orange")         return "travelportal://roskilde";
  if (page === "balkan")         return "travelportal://balkan";
  if (page === "balkan-country") return detail ? `travelportal://balkan/${detail}` : "travelportal://balkan/country";
  return "travelportal://home";
}

function navigateBrowser(page, addHistory = true, detail = "") {
  document.querySelectorAll(".browser-page").forEach((s) => s.classList.remove("active"));
  $("page-" + page)?.classList.add("active");
  const addr = $("browser-address"); if (addr) addr.textContent = addressForPage(page, detail);
  const item = detail ? `${page}:${detail}` : page;
  if (addHistory && browserHistory[browserHistory.length - 1] !== item) browserHistory.push(item);
  const back = $("browser-back-button"); if (back) back.disabled = browserHistory.length <= 1;
}

function navigateFromHistory(item) {
  const [page, detail = ""] = item.split(":");
  if (page === "flight-detail") { setFlightDetail(detail); navigateBrowser(page, false, detail); return; }
  if (page === "balkan-country") {
    const country = Object.keys(countryData).find((n) => countryData[n].slug === detail);
    if (country) setCountryDetail(country, false);
    navigateBrowser(page, false, detail); return;
  }
  navigateBrowser(page, false);
}

function browserBack() {
  if (browserHistory.length <= 1) return;
  browserHistory.pop();
  navigateFromHistory(browserHistory[browserHistory.length - 1]);
}

function browserHome() { navigateBrowser("home"); }

/* ─── Flights ────────────────────────────────── */

function renderFlights() {
  const grid = $("flight-grid"); if (!grid) return; grid.innerHTML = "";
  Object.entries(flightData).forEach(([id, f]) => {
    const held = Object.hasOwn(heldFlightSeats, id);
    const row = document.createElement("tr");
    row.className = "flight-row" + (held ? " held" : "");
    row.tabIndex = 0;
    row.dataset.flightId = id;
    row.innerHTML = `
      <td><strong>${f.route}</strong></td>
      <td>${f.number}</td>
      <td><span>${f.departCode}</span><small>${f.departTime}</small></td>
      <td><span>${f.arriveCode}</span><small>${f.arriveTime}</small></td>
      <td>${f.stop}</td>
      <td>${f.duration}</td>
      <td><em>${held ? "held" : "View"}</em></td>`;
    row.addEventListener("click", () => openFlightDetail(id));
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openFlightDetail(id); }
    });
    grid.appendChild(row);
  });
}

function openFlightDetail(id) { setFlightDetail(id); navigateBrowser("flight-detail", true, id); }

function setFlightDetail(id) {
  const f = flightData[id]; if (!f) return;
  selectedFlightId = id;
  selectedSeat = Object.hasOwn(heldFlightSeats, id) ? (heldFlightSeats[id] || null) : null;
  $("flight-detail-route").textContent  = f.route;
  $("flight-detail-number").textContent = f.number;
  $("flight-detail-departure").textContent = `${f.departCode} · ${f.departTime}`;
  $("flight-detail-arrival").textContent   = `${f.arriveCode} · ${f.arriveTime}${f.airportNote ? " · " + f.airportNote : ""}`;
  $("flight-detail-duration").textContent  = f.duration;
  $("flight-detail-fare").textContent      = f.fare;
  $("flight-detail-cabin").textContent     = f.cabin;
  $("flight-detail-baggage").textContent   = f.baggage;
  renderSeatMap(); updateFlightDetailState();
}

function renderSeatMap() {
  const grid = $("seat-grid"); if (!grid) return; grid.innerHTML = "";
  const seats = seatMaps[selectedFlightId] || seatMaps["nyc-cph"];
  seats.forEach((seat) => {
    const btn = document.createElement("button");
    btn.className = "seat-button"; btn.type = "button"; btn.dataset.seat = seat; btn.textContent = seat;
    btn.addEventListener("click", () => selectSeat(seat));
    grid.appendChild(btn);
  });
}

function updateFlightDetailState() {
  const holdBtn = $("hold-flight-button"), seatCard = $("seat-card");
  const status = $("seat-status"), seatCopy = $("flight-detail-seat-copy");
  if (!selectedFlightId || !holdBtn || !status || !seatCopy) return;
  const isHeld = Object.hasOwn(heldFlightSeats, selectedFlightId);
  document.querySelectorAll(".seat-button").forEach((btn) => {
    btn.classList.toggle("active", !!selectedSeat && selectedSeat === btn.dataset.seat);
    btn.disabled = isHeld;
  });
  seatCard?.classList.toggle("locked", isHeld);
  if (!isHeld) {
    holdBtn.disabled = false; holdBtn.textContent = "Hold this option";
    status.textContent = selectedSeat ? `Seat selected: ${selectedSeat}` : "No seat selected.";
    seatCopy.textContent = "Available"; return;
  }
  holdBtn.disabled = true; holdBtn.textContent = "Option locked";
  status.textContent = selectedSeat ? `Locked seat: ${selectedSeat}` : "Option locked without seat.";
  seatCopy.textContent = "Locked";
}

function selectSeat(seat) {
  if (Object.hasOwn(heldFlightSeats, selectedFlightId)) return;
  selectedSeat = seat;
  document.querySelectorAll(".seat-button").forEach((btn) => btn.classList.toggle("active", btn.dataset.seat === seat));
  const status = $("seat-status"); if (status) status.textContent = `Seat selected: ${seat}`;
}

function holdSelectedFlight() {
  if (!selectedFlightId || Object.hasOwn(heldFlightSeats, selectedFlightId)) return;
  const f = flightData[selectedFlightId];
  heldFlightSeats[selectedFlightId] = selectedSeat || "";
  renderFlights(); updateFlightDetailState();
  queueMsnMessage(f.desk, `Hi ${getBookingName()}. ${f.number} (${f.route}) is now on hold. ${selectedSeat ? `Seat ${selectedSeat} noted.` : "Seat not selected."}`);
}

/* ─── Orange / Roskilde ─────────────────────── */

function renderOrangeDays() {
  const ribbon = $("orange-day-ribbon"); if (!ribbon) return; ribbon.innerHTML = "";
  orangeDays.forEach((day) => {
    const btn = document.createElement("button");
    btn.className = "day-pill" + (selectedOrangeDay === day ? " active" : "");
    btn.type = "button"; btn.textContent = day;
    btn.addEventListener("click", () => {
      selectedOrangeDay = day; renderOrangeDays();
      if (currentOrangePanel === "lineup") renderOrangePanel("lineup");
    });
    ribbon.appendChild(btn);
  });
}

function renderOrangePanel(panel) {
  if (panel === "access") panel = "lineup";
  currentOrangePanel = panel;
  document.querySelectorAll(".orange-tab").forEach((btn) => btn.classList.toggle("active", btn.dataset.orangePanel === panel));
  const container = $("orange-panel"); if (!container) return;

  if (panel === "lineup") {
    const file = orangeLineup[selectedOrangeDay];
    container.innerHTML = `
      <div class="lineup-board">
        <div class="lineup-board-head">
          <div>
            <strong>${file.board}</strong>
            <small>artist / song placeholders</small>
          </div>
          <span>${selectedOrangeDay}</span>
        </div>
        <div class="lineup-rows">
          ${file.picks.slice(0, 3).map(([name, song]) => `
            <div class="lineup-row artist-highlight-row">
              <strong>${name}</strong>
              <span class="artist-song">${song}</span>
            </div>`).join("")}
        </div>
      </div>`;
    updateOrangeConfirmState(); return;
  }

  if (panel === "camp") {
    container.innerHTML = `
      <div class="camp-layout">
        <div class="camp-task-card">
          <span>Camp task</span>
          <strong>Bring 4 rammer øl</strong>
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
            </label>`).join("")}
        </div>
      </div>`;
    bindCampChecks(); updateOrangeConfirmState(); return;
  }

  renderOrangePanel("lineup");
}

function bindCampChecks() {
  document.querySelectorAll(".camp-checkbox").forEach((box) => {
    const key = box.dataset.campKey, label = box.closest("label");
    label?.classList.toggle("done", box.checked);
    box.addEventListener("change", () => {
      campChecklist[key] = box.checked;
      label?.classList.toggle("done", box.checked);
      updateOrangeConfirmState();
    });
  });
}

function updateOrangeConfirmState() {
  const total = campItems.length, done = Object.values(campChecklist).filter(Boolean).length;
  const complete = done === total;
  const btn = $("orange-confirm-button"), mini = $("orange-camp-mini-status");
  const fill = $("camp-progress-fill"), text = $("camp-progress-text");
  if (fill) fill.style.width = Math.round((done / total) * 100) + "%";
  if (text) text.textContent = `${done} / ${total} packed`;
  if (mini) mini.textContent = campConfirmed ? "confirmed" : complete ? "ready" : "pending pack";
  if (!btn) return;
  if (campConfirmed) { btn.disabled = true; btn.textContent = "Camp confirmed"; return; }
  btn.disabled = !complete;
  btn.textContent = complete ? "Confirm camp allocation" : "Complete packing list";
}

function confirmOrange() {
  if (!Object.values(campChecklist).every(Boolean) || campConfirmed) { shakeElement($("orange-panel")); return; }
  campConfirmed = true; updateOrangeConfirmState(); renderOrangePanel(currentOrangePanel);
  queueMsnMessage("CAMPEN", `Hey ${getBookingName()}. Wristband handoff is on site. Camp placement follows row 017. Bring the pack list. Bring 4 rammer øl.`);
}

/* ─── Balkan ────────────────────────────────── */

function renderCountries() {
  const grid = $("country-grid"); if (!grid) return; grid.innerHTML = "";
  Object.entries(countryData).forEach(([country, data], i) => {
    const btn = document.createElement("button");
    btn.className = `country-card country-${data.slug}`;
    btn.type = "button";
    btn.dataset.country = country;
    btn.innerHTML = `
      <span>${data.code}</span>
      <strong>${country}</strong>`;
    btn.addEventListener("click", () => openCountry(country));
    grid.appendChild(btn);
  });
}

function openCountry(country) { setCountryDetail(country, true); }

function setCountryDetail(country, pushHistory = true) {
  const d = countryData[country]; if (!d) return;
  $("country-path").textContent   = `TravelPortal / Balkan / ${d.slug}`;
  $("country-title").textContent  = country;
  $("country-copy").textContent   = d.copy;
  $("country-code").textContent   = d.code;
  $("country-region").textContent = d.sub;
  const dishEl = $("country-dish");
  if (dishEl) dishEl.innerHTML = `<span>${d.dish}</span><em>${d.dishDesc || ""}</em>`;
  $("country-see").textContent    = d.see;
  $("country-note").textContent   = d.note;
  $("country-border").textContent = d.border;
  $("country-drive").textContent  = d.drive;
  const itin = $("country-itinerary");
  if (itin) itin.innerHTML = `<span>Route marks</span>${d.stops.map((s) => `<b>${s}</b>`).join("")}`;
  document.querySelectorAll(".country-card").forEach((btn) => btn.classList.toggle("active", btn.dataset.country === country));
  navigateBrowser("balkan-country", pushHistory, d.slug);
}

function renderVehicles() {
  const grid = $("vehicle-grid"); if (!grid) return; grid.innerHTML = "";
  Object.entries(vehicleData).forEach(([name, d]) => {
    const btn = document.createElement("button");
    btn.className = "vehicle-card" + (selectedVehicle === name ? " active" : "");
    btn.type = "button"; btn.disabled = vehicleReserved; btn.dataset.vehicle = name;
    btn.innerHTML = `<strong>${name}</strong><span>${d.sub}</span>`;
    btn.addEventListener("click", () => selectVehicle(name));
    grid.appendChild(btn);
  });
}

function selectVehicle(name) {
  if (vehicleReserved) return;
  selectedVehicle = name;
  const status = $("rental-status"); if (status) status.textContent = `${name} selected.`;
  renderVehicles();
}

function reserveVehicle() {
  if (vehicleReserved) return;
  if (!selectedVehicle) {
    const status = $("rental-status"); if (status) status.textContent = "Choose one vehicle first.";
    shakeElement(document.querySelector(".rental-desk")); return;
  }
  vehicleReserved = true;
  const btn = $("reserve-car-button");
  if (btn) { btn.disabled = true; btn.textContent = "Vehicle reserved"; }
  const status = $("rental-status"); if (status) status.textContent = `${selectedVehicle} reserved.`;
  renderVehicles();
  queueMsnMessage("Adriatic AutoRent", `Hi ${getBookingName()}. ${vehicleData[selectedVehicle].message}`);
}

/* ─── MSN Messenger ─────────────────────────── */

function randomMessageDelay() { return 900 + Math.floor(Math.random() * 1900); }

function queueMsnMessage(contact, message, status = "Status: Online") {
  setTimeout(() => pushMsnMessage(contact, message, status), randomMessageDelay());
}

function pushMsnMessage(contact, message, status) {
  if (!msnStore[contact]) msnStore[contact] = { status, messages:[], unread:0 };
  const convo = msnStore[contact]; convo.status = status;
  convo.messages.push({ text:message, time:new Date().toLocaleTimeString([], { hour:"2-digit", minute:"2-digit" }) });
  const msnOpen = $("msn-window")?.classList.contains("open");
  if (msnOpen && activeMsnContact === contact) showMsnConversation(contact, true);
  else convo.unread++;
  renderMsnContacts(); updateMsnBadge();
}

function renderMsnContacts() {
  const list = $("msn-contact-list"); if (!list) return; list.innerHTML = "";
  Object.entries(msnStore).forEach(([name, convo]) => {
    const btn = document.createElement("button");
    btn.className = "msn-contact-item" + (name === activeMsnContact ? " active" : "");
    btn.type = "button"; btn.dataset.contact = name;
    btn.innerHTML = `
      <span class="msn-contact-dot">${name.slice(0, 1)}</span>
      <span><strong>${name}</strong><small>${convo.status.replace("Status: ", "")}</small></span>
      ${convo.unread ? `<em>${convo.unread}</em>` : ""}`;
    btn.addEventListener("click", () => showMsnConversation(name, true));
    list.appendChild(btn);
  });
}

function showMsnConversation(contact, markRead = true) {
  const convo = msnStore[contact]; if (!convo) return;
  activeMsnContact = contact;
  $("msn-avatar").textContent = contact.slice(0, 1);
  $("msn-contact-name").textContent = contact;
  $("msn-contact-status").textContent = convo.status;
  const messages = $("msn-messages"); messages.innerHTML = "";
  convo.messages.forEach((msg) => {
    const bubble = document.createElement("div");
    bubble.className = "msn-message";
    bubble.innerHTML = `<small>${msg.time}</small><div>${msg.text}</div>`;
    messages.appendChild(bubble);
  });
  if (markRead) convo.unread = 0;
  renderMsnContacts(); updateMsnBadge();
  messages.scrollTop = messages.scrollHeight;
}

function updateMsnBadge() {
  const badge = $("msn-badge"); if (!badge) return;
  const total = Object.values(msnStore).reduce((sum, c) => sum + c.unread, 0);
  badge.textContent = String(total); badge.classList.toggle("hidden", total === 0);
}

function openMsnWindow() {
  const firstUnread = Object.keys(msnStore).find((n) => msnStore[n].unread > 0);
  if (firstUnread) { showMsnConversation(firstUnread, true); return; }
  if (activeMsnContact && msnStore[activeMsnContact]) { showMsnConversation(activeMsnContact, false); return; }
  renderMsnContacts();
}

/* ─── Start menu ────────────────────────────── */

function closeStartMenu() { $("start-menu")?.classList.remove("open"); }
function toggleStartMenu() { $("start-menu")?.classList.toggle("open"); }

/* ─── Event binding ─────────────────────────── */

function bindWindowOpeners() {
  document.querySelectorAll("[data-window]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (btn.closest("#recycle-files")) return;  // recycle bin files handled separately
      if (btn.classList.contains("desktop-icon")) {
        document.querySelectorAll(".desktop-icon").forEach((ic) => ic.classList.remove("selected"));
        btn.classList.add("selected");
      }
      e.stopPropagation(); openWindow(btn.dataset.window);
    });
  });
}

function bindWindowDragging() {
  document.querySelectorAll(".window-titlebar").forEach((bar) => {
    bar.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains("window-close")) return;
      draggingWindow = bar.closest(".window"); if (!draggingWindow) return;
      highestZIndex++; draggingWindow.style.zIndex = highestZIndex;
      const rect = draggingWindow.getBoundingClientRect();
      dragOffsetX = e.clientX - rect.left; dragOffsetY = e.clientY - rect.top;
      document.body.style.cursor = "move"; e.preventDefault();
    });
  });
  document.addEventListener("mousemove", (e) => {
    if (!draggingWindow) return;
    const tbH = 38, maxLeft = Math.max(0, window.innerWidth - draggingWindow.offsetWidth), maxTop = Math.max(0, window.innerHeight - draggingWindow.offsetHeight - tbH);
    draggingWindow.style.left = Math.max(0, Math.min(e.clientX - dragOffsetX, maxLeft)) + "px";
    draggingWindow.style.top  = Math.max(0, Math.min(e.clientY - dragOffsetY, maxTop))  + "px";
  });
  document.addEventListener("mouseup", () => { if (draggingWindow) { draggingWindow = null; document.body.style.cursor = ""; } });
}

function bindDesktopSelection() {
  const desktop = $("desktop"), box = $("selection-box"); if (!desktop || !box) return;
  desktop.addEventListener("mousedown", (e) => {
    if (e.target.closest(".window, .desktop-icon, .taskbar, .start-menu")) return;
    selecting = true; selectionStartX = e.clientX; selectionStartY = e.clientY;
    box.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;width:0;height:0;display:block`;
    document.querySelectorAll(".desktop-icon").forEach((ic) => ic.classList.remove("selected"));
    closeStartMenu();
  });
  document.addEventListener("mousemove", (e) => {
    if (!selecting) return;
    const left = Math.min(selectionStartX, e.clientX), top = Math.min(selectionStartY, e.clientY);
    const width = Math.abs(e.clientX - selectionStartX), height = Math.abs(e.clientY - selectionStartY);
    box.style.left = left+"px"; box.style.top = top+"px"; box.style.width = width+"px"; box.style.height = height+"px";
    const rect = box.getBoundingClientRect();
    document.querySelectorAll(".desktop-icon").forEach((ic) => {
      const ir = ic.getBoundingClientRect();
      ic.classList.toggle("selected", rect.left < ir.right && rect.right > ir.left && rect.top < ir.bottom && rect.bottom > ir.top);
    });
  });
  document.addEventListener("mouseup", () => { if (selecting) { selecting = false; box.style.display = "none"; } });
}

function bindStaticControls() {
  // Welcome / login
  document.addEventListener("click", (e) => { if (e.target.closest("#user-tile")) { e.preventDefault(); openPasswordDialog(); } });
  $("login-button")?.addEventListener("click", osLogin);
  $("password")?.addEventListener("keydown", (e) => { if (e.key === "Enter") osLogin(); });
  $("cancel-button")?.addEventListener("click", () => showScreen("welcome-screen"));
  $("shutdown-button")?.addEventListener("click", () => showScreen("welcome-screen"));
  $("options-button")?.addEventListener("click", () => shakeElement(document.querySelector(".dialog-window")));

  // Taskbar / Start menu
  $("start-button")?.addEventListener("click", (e) => { e.stopPropagation(); toggleStartMenu(); });
  $("start-menu")?.addEventListener("click", (e) => e.stopPropagation());
  document.addEventListener("click", closeStartMenu);
  $("logoff-button")?.addEventListener("click", () => window.location.reload());
  $("desktop-shutdown-button")?.addEventListener("click", () => showScreen("welcome-screen"));

  // Window controls
  document.querySelectorAll(".window-close").forEach((btn) => btn.addEventListener("click", () => closeWindow(btn.closest(".window"))));
  document.querySelectorAll(".window-close-soft").forEach((btn) => btn.addEventListener("click", () => closeWindow(btn.closest(".window"))));
  document.querySelectorAll(".window").forEach((win) => win.addEventListener("mousedown", () => { highestZIndex++; win.style.zIndex = highestZIndex; }));

  // My Computer
  document.querySelectorAll(".computer-drive-nav").forEach((btn) => btn.addEventListener("click", (e) => { e.stopPropagation(); switchComputerView(btn.dataset.computerView); }));
  $("computer-back-button")?.addEventListener("click", () => switchComputerView("root"));

  // Recycle Bin
  $("restore-recycle-button")?.addEventListener("click", restoreRecycleBin);
  $("empty-recycle-button")?.addEventListener("click", emptyRecycleBin);
  $("passwd-file")?.addEventListener("click", handlePasswdInBin);
  $("passwd-file")?.addEventListener("dblclick", handlePasswdInBin);
  ["denmark-rant-trash","duke-rant-trash"].forEach((id) => {
    const item = $(id);
    item?.addEventListener("click", () => selectTrashFile(item.dataset.trashId));
    item?.addEventListener("dblclick", () => {
      if (!$(id)) return;
      selectTrashFile(item.dataset.trashId);
    });
  });

  // Travel Portal
  $("travel-login-button")?.addEventListener("click", runTravelLogin);
  ["travel-username-input","travel-password-input"].forEach((id) => $(id)?.addEventListener("keydown", (e) => { if (e.key === "Enter") runTravelLogin(); }));
  document.querySelectorAll(".agency-card, .invite-card, .tp-invite-card").forEach((btn) => btn.addEventListener("click", () => navigateBrowser(btn.dataset.page)));
  $("browser-back-button")?.addEventListener("click", browserBack);
  $("browser-home-button")?.addEventListener("click", browserHome);

  // Flights
  $("hold-flight-button")?.addEventListener("click", holdSelectedFlight);

  // Orange
  document.querySelectorAll(".orange-tab").forEach((btn) => btn.addEventListener("click", () => renderOrangePanel(btn.dataset.orangePanel)));
  $("orange-confirm-button")?.addEventListener("click", confirmOrange);

  // Balkan
  $("country-back-button")?.addEventListener("click", () => navigateBrowser("balkan"));
  $("reserve-car-button")?.addEventListener("click", reserveVehicle);

  // Resize
  window.addEventListener("resize", () => document.querySelectorAll(".window.open").forEach(clampWindow));
}

/* ─── Boot ──────────────────────────────────── */

function boot() {
  if (booted) return; booted = true;
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
  } catch (err) {
    console.error("Fortia boot failed:", err);
  }
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
