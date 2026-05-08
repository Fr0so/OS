* { box-sizing: border-box; }
html, body { width: 100%; height: 100%; margin: 0; }
body {
  font-family: Tahoma, Verdana, Segoe UI, sans-serif;
  overflow: hidden;
  background: #004e98;
}
button, input, textarea { font: inherit; }
button { user-select: none; }
.screen { display: none; width: 100vw; height: 100vh; }
.screen.active { display: block; }
.hidden { display: none !important; }

/* WELCOME */
#welcome-screen { position: relative; background: #5c86dd; color: white; }
.top-band { height: 80px; background: #003399; border-bottom: 1px solid rgba(255,255,255,.45); }
.bottom-band { position: absolute; left: 0; right: 0; bottom: 0; height: 32px; background: #003399; border-top: 1px solid rgba(255,255,255,.25); }
.welcome-layout { position: absolute; top: 80px; bottom: 32px; left: 0; right: 0; display: grid; grid-template-columns: 1fr 1px 1fr; align-items: center; padding: 0 8vw; }
.welcome-left { justify-self: end; width: min(380px, 90%); padding-right: 36px; text-align: right; }
.welcome-divider { width: 1px; height: 340px; background: rgba(255,255,255,.2); }
.welcome-right { justify-self: start; width: min(380px, 90%); padding-left: 28px; }
.brand-block { display: flex; align-items: center; justify-content: flex-end; gap: 14px; margin-bottom: 14px; text-shadow: 0 2px 4px rgba(0,0,0,.25); }
.brand-small { font-size: 11px; opacity: .8; }
.brand-main { font-size: 32px; line-height: 1; letter-spacing: -1px; }
.brand-main span { color: #ff9f36; font-size: 18px; margin-left: 2px; }
.begin-text { margin: 0; font-size: 18px; font-weight: bold; color: rgba(255,255,255,.88); text-shadow: 1px 1px 2px rgba(0,0,0,.35); }
.user-tile {
  display: flex; align-items: center; gap: 12px; width: 335px; height: 70px; padding: 8px 12px;
  border: 1px solid transparent; border-radius: 5px;
  background: linear-gradient(90deg, rgba(0,60,160,.72), rgba(0,60,160,.08));
  color: white; cursor: pointer; text-align: left;
}
.user-tile:hover, .user-tile:focus { border-color: rgba(255,255,255,.85); background: linear-gradient(90deg, rgba(0,60,160,.92), rgba(0,60,160,.22)); outline: none; }
.user-avatar, .start-menu-avatar {
  display: grid; place-items: center; border: 2px solid #ffc84a; border-radius: 4px;
  background: radial-gradient(circle at 35% 30%, #f9e7b0, transparent 16%), linear-gradient(135deg, #6b1d1d, #c97c2d 45%, #1b1008);
  color: white; font-weight: bold;
}
.user-avatar { width: 52px; height: 52px; font-size: 24px; }
.user-tile span { font-size: 20px; font-weight: bold; }

/* LOGO */
.fortia-logo {
  position: relative; width: 52px; height: 43px; transform: skewY(-8deg) rotate(-4deg);
  background: linear-gradient(135deg, #2196ff, #075ac9) left bottom / 24px 20px no-repeat,
              linear-gradient(135deg, #ffd234, #ff981a) right bottom / 24px 20px no-repeat;
}
.fortia-logo::before, .fortia-logo::after {
  content: ""; position: absolute; width: 24px; height: 20px; box-shadow: 0 1px 2px rgba(0,0,0,.25);
}
.fortia-logo::before { left: 0; top: 0; background: linear-gradient(135deg, #ff4a2f, #ffb02f); }
.fortia-logo::after { right: 0; top: 0; background: linear-gradient(135deg, #21c14a, #72df44); }
.fortia-logo.large { width: 58px; height: 48px; }

/* LOGIN */
#password-screen { position: relative; background: #00529f; }
.dialog-window {
  position: absolute; top: 50%; left: 50%; width: 430px; transform: translate(-50%, -50%);
  border: 2px solid #0740c7; background: #ece9d8; box-shadow: 0 10px 24px rgba(0,0,0,.35);
}
.dialog-titlebar, .window-titlebar {
  display: flex; align-items: center; justify-content: space-between; height: 29px; padding: 6px 8px 6px 10px;
  background: linear-gradient(#3a8cff, #0057d9 52%, #003eb3); color: white; font-weight: bold; font-size: 13px;
}
.dialog-hero { display: flex; align-items: center; justify-content: center; gap: 14px; height: 94px; background: linear-gradient(90deg, #6c97e9, #d8e6ff); border-bottom: 4px solid #d6b15c; }
.dialog-brand { color: white; font-size: 30px; letter-spacing: -1px; text-shadow: 1px 1px 2px rgba(0,0,0,.25); }
.dialog-brand span { color: #ff8733; font-size: 17px; margin-left: 2px; }
.dialog-subtitle { color: white; font-size: 17px; text-shadow: 1px 1px 2px rgba(0,0,0,.25); }
.dialog-body { padding: 18px 10px 12px; color: #111; font-size: 12px; }
.form-row { display: grid; grid-template-columns: 78px 1fr; align-items: center; gap: 2px; margin-bottom: 8px; }
.form-row input, .travel-login-form input, .msn-input-row input {
  height: 24px; border: 1px solid #8aa2bf; padding: 2px 6px; background: white;
}
.form-row input:focus, .travel-login-form input:focus, textarea:focus { outline: 1px solid #316ac5; }
#login-message { min-height: 17px; margin: 0 0 4px 78px; color: #b00000; white-space: pre-line; }
.dialog-bottom { display: flex; align-items: end; justify-content: space-between; margin-top: 12px; }
.language-box { display: inline-grid; place-items: center; width: 18px; height: 18px; background: #3e8ce8; color: white; font-size: 11px; }
.dialog-buttons { display: flex; gap: 7px; }
.dialog-buttons button, .xp-button, .window-toolbar button, .portal-tab {
  min-width: 75px; height: 24px; padding: 1px 10px; border: 1px solid #003c74; border-radius: 2px;
  background: linear-gradient(#fff, #e7e7dc); color: #111; cursor: pointer;
}
.dialog-buttons button:hover, .xp-button:hover, .window-toolbar button:hover, .portal-tab:hover { border-color: #245edb; }
.dialog-buttons button:active, .xp-button:active, .window-toolbar button:active, .portal-tab:active { background: linear-gradient(#d6d6ca, #fff); }

/* DESKTOP */
#desktop {
  position: relative; color: white; background-color: #2b76cf;
  background-image: url("images/background.jpg"); background-size: cover; background-position: center; background-repeat: no-repeat;
}
.desktop-icons {
  position: relative; z-index: 2; display: grid; grid-template-columns: 92px; gap: 15px; padding: 22px;
}
.desktop-icon {
  display: grid; justify-items: center; gap: 6px; width: 82px; padding: 6px 4px; border: 1px solid transparent;
  background: transparent; color: white; cursor: pointer; text-shadow: 1px 1px 2px rgba(0,0,0,.75);
}
.desktop-icon:hover, .desktop-icon:focus, .desktop-icon.selected { border: 1px dotted rgba(255,255,255,.85); background: rgba(0,70,180,.35); outline: none; }
.desktop-recycle-icon { position: absolute; top: 22px; right: 22px; z-index: 2; }

/* ICONS */
.icon, .mini-icon { display: block; width: 42px; height: 36px; filter: drop-shadow(1px 2px 2px rgba(0,0,0,.4)); }
.mini-icon { width: 22px; height: 20px; filter: none; }
.folder-mini, .folder-icon { border-radius: 4px 4px 3px 3px; background: linear-gradient(#ffe88a, #e5ad28); }
.computer-icon, .system-icon, .computer-mini, .system-mini { border-radius: 4px; background: linear-gradient(#b7d8ff, #4b84c4 70%, #1f3f66 71%); border: 2px solid #d8ebff; }
.recycle-icon, .recycle-mini { position: relative; border: 2px solid #d6efff; border-radius: 3px; background: linear-gradient(#e9f8ff, #8cc0d8); }
.recycle-icon::before, .recycle-mini::before { content: ""; position: absolute; top: -7px; left: 5px; width: 28px; height: 6px; border-radius: 2px; background: #d6efff; }
.recycle-icon::after, .recycle-mini::after { content: "♻"; position: absolute; inset: 0; display: grid; place-items: center; color: #1a5d7a; font-size: 20px; }
.recycle-mini::after { font-size: 13px; }
.exe-icon, .exe-mini, .exe-file-icon {
  position: relative; border-radius: 4px; background: linear-gradient(#ececec, #a3a3a3); border: 1px solid #555;
}
.exe-icon::after, .exe-mini::after, .exe-file-icon::after { content: "EXE"; position: absolute; inset: 0; display: grid; place-items: center; color: #003399; font-size: 11px; font-weight: bold; }
.exe-mini::after { font-size: 8px; }
.music-icon, .music-mini { position: relative; border-radius: 5px; background: linear-gradient(#ffcf6b, #d46b00); border: 1px solid #fff1bd; }
.music-icon::after, .music-mini::after { content: "♪"; position: absolute; inset: 0; display: grid; place-items: center; color: #713500; font-size: 28px; font-weight: bold; }
.music-mini::after { font-size: 14px; }
.msn-icon, .msn-mini, .msn-file-icon { position: relative; border-radius: 50%; background: linear-gradient(135deg, #7ee875, #1c8fd4); border: 2px solid rgba(255,255,255,.9); }
.help-icon, .help-mini { position: relative; border-radius: 50%; background: linear-gradient(#fff, #7bb2ff); border: 2px solid #0b55c8; }
.help-icon::after, .help-mini::after { content: "?"; position: absolute; inset: 0; display: grid; place-items: center; color: #003c9f; font-weight: bold; font-size: 26px; }
.help-mini::after { font-size: 15px; }
.big-mini { width: 42px; height: 32px; flex: 0 0 auto; }

/* WINDOWS */
.window {
  position: absolute; z-index: 5; display: none; width: min(430px, calc(100vw - 34px)); min-height: 230px;
  border: 3px solid #0054e3; border-radius: 8px 8px 3px 3px; background: #ece9d8; color: #111;
  box-shadow: 6px 8px 20px rgba(0,0,0,.35);
}
.window.open { display: block; }
.large-window { width: min(720px, calc(100vw - 34px)); min-height: 420px; }
.text-window { width: min(560px, calc(100vw - 34px)); min-height: 350px; background: white; }
.travel-window { width: min(920px, calc(100vw - 34px)); min-height: 610px; }
.music-window { width: min(700px, calc(100vw - 34px)); min-height: 430px; }
.help-window { width: min(720px, calc(100vw - 34px)); min-height: 470px; }
.msn-window { width: min(450px, calc(100vw - 34px)); min-height: 500px; }
.system-window { width: min(580px, calc(100vw - 34px)); min-height: 420px; }
.window-titlebar { border-radius: 4px 4px 0 0; cursor: move; text-shadow: 1px 1px 1px rgba(0,0,0,.45); }
.window-close {
  display: grid; place-items: center; width: 24px; height: 22px; border: 1px solid white; border-radius: 3px;
  background: linear-gradient(#ffb39d, #e64b25 50%, #b9240a); color: white; font-size: 18px; line-height: 1; cursor: pointer;
}
.window-toolbar { display: flex; gap: 6px; align-items: center; padding: 6px; border-bottom: 1px solid #c6c3b5; background: #ece9d8; }
.window-content { padding: 16px; font-size: 14px; }
.window-content h2 { margin: 0 0 10px; font-size: 22px; }
.toolbar-status { margin-left: auto; color: #444; font-size: 12px; }

/* MY COMPUTER */
.computer-layout { display: grid; grid-template-columns: 1fr; min-height: 385px; background: white; }
.computer-content { padding: 16px; }
.computer-content h2 { margin: 0 0 16px; font-size: 18px; }
.drive-item {
  display: flex; align-items: center; gap: 12px; width: 100%; padding: 9px; border: 1px solid transparent;
  background: white; color: #111; text-align: left; cursor: pointer;
}
.drive-item:hover { border: 1px solid #9bbce6; background: #eef6ff; }
.drive-item strong, .drive-item span { display: block; }
.drive-item span { margin-top: 2px; color: #555; font-size: 12px; }
.drive-icon { width: 42px; height: 28px; border-radius: 4px; background: linear-gradient(#d5d5d5, #777); border: 1px solid #555; }
.future-drive { background: linear-gradient(#b7ffd5, #277a44); }
.explorer-content {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(105px, 1fr)); align-content: start; gap: 16px;
  min-height: 320px; background: white;
}
.file-item {
  display: grid; justify-items: center; gap: 6px; padding: 8px 4px; border: 1px solid transparent;
  background: transparent; color: #111; cursor: pointer; text-align: center;
}
.file-item:hover, .file-item:focus, .file-item.selected { border: 1px dotted #316ac5; background: #dcebff; outline: none; }
.file-icon { position: relative; display: block; width: 36px; height: 42px; }
.txt-icon { background: white; border: 1px solid #8a8a8a; box-shadow: 2px 2px 0 #d6d6d6; }
.txt-icon::before { content: ""; position: absolute; top: 8px; left: 7px; right: 7px; height: 2px; background: #8a8a8a; box-shadow: 0 7px 0 #8a8a8a, 0 14px 0 #8a8a8a; }
.locked-file-icon { border-radius: 4px; border: 1px solid #555; background: linear-gradient(#fff, #b8d4ff); }
.locked-file-icon::after { content: "🔒"; position: absolute; inset: 0; display: grid; place-items: center; font-size: 18px; }
.broken-icon { background: repeating-linear-gradient(45deg, #777, #777 5px, #ccc 5px, #ccc 10px); border: 1px solid #333; }

/* NOTEPAD */
.notepad-menu { height: 24px; padding: 4px 8px; background: #ece9d8; border-bottom: 1px solid #c6c3b5; color: #111; font-size: 12px; }
.notepad-content { min-height: 290px; padding: 12px; background: white; color: #111; font-family: "Lucida Console", Consolas, monospace; font-size: 13px; line-height: 1.5; }

/* HELP */
.help-shell { background: white; min-height: 430px; }
.help-header { padding: 16px; background: linear-gradient(#fff, #d9ebff); border-bottom: 1px solid #9dbde3; }
.help-header h2, .help-header p { margin: 0; }
.empty-help-content { min-height: 340px; display: grid; place-items: center; align-content: center; gap: 12px; background: linear-gradient(#fff, #f6fbff); color: #5b6b82; }
.help-empty-icon {
  display: grid; place-items: center; width: 70px; height: 70px; border-radius: 50%;
  background: linear-gradient(#cfe3ff, #8eb8ff); color: #003b9b; font-size: 34px; font-weight: bold;
}

/* TRAVEL PORTAL */
.access-content { padding: 0; background: #d8e4f6; }
.travel-login-screen, .travel-loader-screen { min-height: 570px; padding: 24px; background: linear-gradient(180deg, #f4f7fb, #d8e4f6 46%, #cedbee); }
.travel-login-panel {
  max-width: 520px; margin: 22px auto; padding: 28px; border: 1px solid #9cb4d2; border-radius: 8px;
  background: linear-gradient(180deg, #ffffff, #edf3fb 70%, #e1eaf7); box-shadow: 0 12px 28px rgba(34,66,120,.16);
}
.travel-login-brand { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
.travel-badge {
  display: grid; place-items: center; width: 54px; height: 54px; border-radius: 10px;
  background: linear-gradient(135deg, #1d4f90, #79b2ff); color: #fff; font-size: 22px; font-weight: bold;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.45);
}
.travel-badge.small { width: 44px; height: 44px; font-size: 18px; }
.travel-login-kicker, .page-kicker { color: #315182; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: .4px; }
.travel-login-panel h2, .section-head h2, .system-top h2 { margin: 4px 0 0; font-size: 28px; color: #1a2d47; }
.travel-login-art {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 18px 0 22px;
}
.art-window {
  height: 80px; border: 1px solid #b7c8df; border-radius: 8px; background: linear-gradient(180deg, #fbfdff, #e1ebf7);
  position: relative; overflow: hidden;
}
.art-window::before {
  content: ""; position: absolute; inset: 12px; border-radius: 5px; background: linear-gradient(135deg, rgba(59,115,201,.24), rgba(255,255,255,.4));
}
.art-window::after { content: ""; position: absolute; left: 12px; right: 12px; bottom: 14px; height: 10px; background: rgba(76,108,157,.18); border-radius: 999px; }
.art-window-b::before { background: linear-gradient(135deg, rgba(229,154,54,.25), rgba(255,255,255,.35)); }
.art-window-c::before { background: linear-gradient(135deg, rgba(101,156,92,.25), rgba(255,255,255,.35)); }
.travel-login-form { display: grid; gap: 8px; }
.travel-login-form label { color: #384e68; font-size: 12px; font-weight: bold; }
.travel-login-actions { display: flex; align-items: center; gap: 12px; margin-top: 10px; }
#access-message { min-height: 18px; margin: 0; color: #b00000; }
.loader-brand-row { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
.loader-brand-row h2 { margin: 0 0 4px; }
.loader-brand-row p { margin: 0; color: #4d6079; }
.progress-shell { width: 100%; height: 22px; padding: 2px; border: 1px solid #5d7fa8; background: white; }
.progress-bar { width: 0%; height: 100%; background: linear-gradient(90deg, #0d6adf, #65b7ff); }
.loader-log { margin-top: 14px; padding-left: 18px; font-family: "Lucida Console", Consolas, monospace; font-size: 12px; line-height: 1.6; color: #30445f; }
.travel-browser-shell { background: #fbfdff; min-height: 570px; }
.portal-toolbar { display: flex; align-items: center; gap: 6px; padding: 8px; background: linear-gradient(#f6f3ea, #e3ded0); border-bottom: 1px solid #c0b9aa; }
.tiny-button { min-width: auto; height: 22px; padding: 1px 9px; font-size: 11px; }
.address-bar { flex: 1; height: 24px; padding: 4px 8px; border: 1px solid #7f9db9; background: white; font-size: 12px; color: #111; }
.portal-tabbar { display: flex; gap: 6px; padding: 8px 10px; border-bottom: 1px solid #d6deeb; background: linear-gradient(#eef3fa, #e5edf8); }
.portal-tab { min-width: auto; height: 26px; padding: 2px 12px; }
.portal-tab.active { background: linear-gradient(#fff, #dce8f8); border-color: #4a78bf; }
.browser-page { display: none; padding: 20px; min-height: 490px; }
.browser-page.active { display: block; }
.portal-dashboard { display: grid; gap: 18px; }
.clean-hero { display: flex; justify-content: space-between; gap: 20px; padding: 22px; border: 1px solid #c9d7eb; background: linear-gradient(135deg, #fdfefe, #edf4fc); }
.portal-status-card { min-width: 180px; padding: 14px; border: 1px solid #b7c8df; background: white; box-shadow: inset 0 1px 0 rgba(255,255,255,.65); }
.portal-status-card span, .portal-status-card small { display: block; color: #5c6e85; }
.portal-status-card strong { display: block; margin: 6px 0 4px; font-size: 20px; color: #1b324f; }
.portal-grid { display: grid; gap: 14px; }
.dashboard-grid { grid-template-columns: repeat(3, 1fr); }
.portal-card {
  display: grid; gap: 6px; padding: 18px; border: 1px solid #b8c8dc; background: linear-gradient(#fff, #edf3fb); text-align: left; cursor: pointer;
}
.portal-card:hover { background: #dcecff; }
.portal-icon { font-size: 34px; color: #1b4f91; }
.portal-card p { margin: 0; color: #4c5d74; }
.orange-card .portal-icon, .orange-chip { color: #d76700; }
.road-card .portal-icon { color: #546f38; }
.travel-response { padding: 10px 12px; border: 1px solid #c2bea9; background: #fffbe6; font-size: 13px; }
.section-head { display: flex; justify-content: space-between; align-items: start; gap: 14px; margin-bottom: 18px; }
.section-chip {
  padding: 5px 10px; border: 1px solid #a9bdd9; background: linear-gradient(#fff, #eef3fb); color: #38557c; font-size: 12px; font-weight: bold;
}
.flight-page { background: linear-gradient(#f7fbff, #fff); }
.flight-option-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
.flight-card {
  display: grid; gap: 10px; padding: 16px; border: 1px solid #c6d5e8; background: linear-gradient(#fff, #f1f6fc); cursor: pointer; text-align: left;
}
.flight-card:hover, .travel-select-button.selected-travel-option { border-color: #4a78bf; background: #e7f0ff; }
.flight-card-top, .flight-meta, .flight-footer { display: grid; align-items: center; }
.flight-card-top { grid-template-columns: 1fr auto; color: #233b58; }
.flight-meta { grid-template-columns: 48px 1fr 58px 1fr 48px; gap: 6px; color: #5e7085; font-size: 12px; }
.flight-footer { grid-template-columns: 1fr auto; color: #355887; font-size: 12px; }
.flight-footer em { font-style: normal; font-weight: bold; }
.roskilde-page { background: radial-gradient(circle at top right, rgba(255,122,0,.18), transparent 30%), linear-gradient(#fff9f1, #fff); }
.orange-layout { display: grid; grid-template-columns: minmax(0, 1.5fr) 250px; gap: 16px; }
.orange-pass { padding: 20px; border: 1px solid #efb05a; background: linear-gradient(#fff8ef, #fff1dc); }
.orange-pass-top { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
.orange-dot { width: 44px; height: 44px; border-radius: 50%; background: #ff7a00; box-shadow: 0 0 0 8px rgba(255,122,0,.18); }
.orange-pass p { line-height: 1.5; color: #5a4533; }
.orange-features { margin: 16px 0; padding-left: 18px; color: #6b523b; }
.orange-sidepanel { display: grid; gap: 12px; }
.info-card { padding: 14px; border: 1px solid #ecc999; background: white; }
.info-card h3 { margin: 0 0 6px; font-size: 14px; color: #8b4f10; }
.info-card p { margin: 0; color: #5c4a36; }
.balkan-page { background: linear-gradient(135deg, rgba(88,120,72,.12), transparent 45%), linear-gradient(#fffdf5, #fff); }
.roadtrip-grid-panel { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(220px, .8fr); gap: 18px; }
.roadtrip-map {
  display: flex; align-items: center; margin-bottom: 18px; padding: 18px; border: 1px solid #c8c0a5; background: #fffaf0; overflow-x: auto;
}
.map-node { display: grid; place-items: center; min-width: 88px; height: 42px; border: 1px solid #8c7b52; border-radius: 999px; background: white; font-weight: bold; color: #58491d; }
.map-node.active { background: #dff1d7; }
.map-line { width: 52px; height: 2px; background: #8c7b52; flex: 0 0 auto; }
.stop-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.stop-card { padding: 12px; border: 1px solid #d7ceb4; background: white; }
.stop-card strong, .stop-card span { display: block; }
.stop-card strong { color: #51653d; margin-bottom: 4px; }
.vehicle-heading { margin: 0 0 10px; color: #4e6540; }
.vehicle-list { display: grid; gap: 10px; }
.vehicle-card {
  display: grid; gap: 4px; text-align: left; padding: 12px; border: 1px solid #c8d0b8; background: linear-gradient(#fff, #f7fbf4); cursor: pointer;
}
.vehicle-card strong { color: #324826; }
.vehicle-card span { color: #5d6a56; font-size: 12px; }
.roadtrip-save { margin-top: 14px; }

/* MUSIC */
.media-player { display: grid; grid-template-columns: 180px 1fr; min-height: 390px; background: #101010; color: white; }
.media-sidebar { padding: 20px; background: linear-gradient(#2a2a2a, #111); border-right: 1px solid #444; text-align: center; }
.media-disc { width: 118px; height: 118px; margin: 10px auto 14px; border-radius: 50%; background: radial-gradient(circle, #111 0 13%, #bdbdbd 14% 17%, #111 18% 24%, #3a3a3a 25% 100%); box-shadow: 0 0 18px rgba(255,255,255,.15); }
.media-main { padding: 18px; }
.media-main h2 { color: white; margin-top: 0; }
.media-subtitle { color: #cfcfcf; }
.spotify-box { margin-top: 14px; padding: 10px; border: 1px solid #454545; background: #181818; }
.spotify-embed { border-radius: 8px; }

/* MSN */
.msn-shell { display: grid; grid-template-rows: auto 1fr auto; min-height: 460px; background: #dbeeff; }
.msn-header { display: flex; gap: 10px; align-items: center; padding: 12px; background: linear-gradient(#fff, #bfdfff); border-bottom: 1px solid #8bb8e8; }
.msn-header p { margin: 2px 0 0; color: #287000; font-size: 12px; }
.msn-avatar { display: grid; place-items: center; width: 46px; height: 46px; border: 1px solid #6ea4d8; border-radius: 4px; background: linear-gradient(135deg, #6ee36a, #168bd1); color: white; font-size: 26px; font-weight: bold; }
.msn-messages { padding: 12px; background: white; overflow-y: auto; }
.msn-input-row { display: flex; gap: 6px; padding: 8px; background: #dbeeff; }
.msn-input-row input { flex: 1; }

/* SYSTEM */
.system-shell { padding: 18px; background: linear-gradient(#fcfdff, #edf3fb); min-height: 360px; }
.system-top { display: flex; justify-content: space-between; align-items: start; margin-bottom: 18px; }
.system-version {
  min-width: 74px; padding: 8px 12px; border: 1px solid #bccce2; background: white; text-align: center; font-weight: bold; color: #355887;
}
.system-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 16px; }
.system-card { padding: 14px; border: 1px solid #c6d5e8; background: white; }
.system-card span { display: block; color: #617284; font-size: 12px; }
.system-card strong { display: block; margin-top: 4px; color: #233b58; font-size: 18px; }
.system-panels { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.system-panel { padding: 14px; border: 1px solid #c6d5e8; background: white; }
.system-panel h3 { margin: 0 0 8px; font-size: 14px; color: #355887; }
.system-panel ul { margin: 0; padding-left: 18px; line-height: 1.7; color: #42566e; }

/* START MENU */
.start-menu {
  position: absolute; left: 3px; bottom: 38px; z-index: 30; display: none; width: 340px;
  border: 2px solid #0b55c8; border-radius: 8px 8px 0 0; background: #fff; color: #111; box-shadow: 5px 6px 18px rgba(0,0,0,.35); overflow: hidden;
}
.start-menu.open { display: block; }
.start-menu-header { display: flex; align-items: center; gap: 10px; height: 66px; padding: 10px; background: linear-gradient(#3b90ff, #0057d9 52%, #003eb3); color: white; font-size: 18px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,.45); }
.start-menu-avatar { width: 42px; height: 42px; font-size: 21px; }
.start-menu-body { display: grid; padding: 8px; background: #fff; }
.start-menu-item { display: flex; align-items: center; gap: 9px; height: 34px; padding: 4px 8px; border: 0; background: white; color: #111; cursor: pointer; text-align: left; }
.start-menu-item:hover { background: #316ac5; color: white; }
.start-menu-footer { display: flex; justify-content: flex-end; gap: 8px; padding: 8px; background: linear-gradient(#d7e8ff, #b9d5ff); border-top: 1px solid #8ab2ef; }
.start-menu-footer button {
  min-width: 72px; height: 25px; border: 1px solid #003c74; border-radius: 3px; background: linear-gradient(#fff, #e7e7dc); cursor: pointer;
}

/* SELECTION + TASKBAR */
#selection-box { position: absolute; z-index: 4; display: none; border: 1px solid #7db7ff; background: rgba(49,106,197,.28); pointer-events: none; }
.taskbar {
  position: absolute; z-index: 20; left: 0; right: 0; bottom: 0; display: flex; align-items: center; height: 38px;
  background: linear-gradient(#2b79e6, #0b55c8 45%, #063b9f); box-shadow: inset 0 1px 0 rgba(255,255,255,.35);
}
#start-button {
  display: flex; align-items: center; gap: 7px; height: 32px; margin-left: 3px; padding: 0 18px 0 12px;
  border: 1px solid #0b6419; border-radius: 0 12px 12px 0; background: linear-gradient(#6ee36a, #249a2f 45%, #0f6b1f);
  color: white; font-size: 15px; font-weight: bold; font-style: italic; text-shadow: 1px 1px 1px rgba(0,0,0,.55); cursor: pointer;
}
#start-button:hover { filter: brightness(1.08); }
.start-dot { width: 17px; height: 17px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, white, transparent 15%), linear-gradient(135deg, #ff5757, #f2c94c 48%, #37c75b 49%, #2388ff); }
.taskbar-spacer { flex: 1; }
#clock { display: grid; place-items: center; height: 100%; min-width: 88px; padding: 0 12px; border-left: 1px solid rgba(255,255,255,.25); background: rgba(0,0,0,.08); color: white; font-size: 13px; }

/* RESPONSIVE */
@media (max-width: 860px) {
  .dashboard-grid, .flight-option-grid, .orange-layout, .roadtrip-grid-panel, .system-panels, .system-grid, .stop-list { grid-template-columns: 1fr; }
  .travel-login-art { grid-template-columns: 1fr; }
}
@media (max-width: 700px) {
  .welcome-layout { grid-template-columns: 1fr; grid-template-rows: auto auto; justify-items: center; align-content: center; gap: 34px; padding: 0 24px; }
  .welcome-left { justify-self: center; width: 100%; padding-right: 0; text-align: center; }
  .brand-block { justify-content: center; }
  .welcome-divider, .media-sidebar { display: none; }
  .welcome-right { justify-self: center; width: 100%; padding-left: 0; display: flex; justify-content: center; }
  .user-tile, .dialog-window, .start-menu { width: min(335px, calc(100vw - 24px)); }
  .dialog-buttons { flex-wrap: wrap; justify-content: flex-end; }
  .desktop-recycle-icon { right: 12px; top: 12px; }
}

.portal-fixed-response { margin: 0 20px 20px; }

/* v4 overrides */
.desktop-icon span:last-child { display: block; width: 100%; text-align: center; line-height: 1.15; }
.desktop-icon .icon { margin: 0 auto; }
.desktop-icons { align-content: start; }

.travel-window { width: min(940px, calc(100vw - 34px)); }
.travel-login-panel { max-width: 560px; }
.art-window {
  display: grid; align-content: end; padding: 12px; color: #29435f;
}
.art-window strong { position: relative; z-index: 1; font-size: 14px; }
.art-window span { position: relative; z-index: 1; font-size: 11px; color: #5a6f8a; }

.flight-detail-page { background: linear-gradient(#f8fbff, #ffffff); }
.flight-detail-layout { display: grid; grid-template-columns: minmax(0,1.4fr) minmax(260px,.8fr); gap: 16px; }
.flight-detail-card, .flight-seat-card {
  padding: 18px; border: 1px solid #c6d5e8; background: linear-gradient(#fff, #f3f8ff);
}
.detail-strip { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 14px; }
.detail-strip div, .detail-info-box { padding: 12px; border: 1px solid #d5e0ee; background: white; }
.detail-strip span, .detail-info-box span, .roadtrip-note-card span { display: block; color: #617284; font-size: 12px; }
.detail-strip strong, .detail-info-box strong { display: block; margin-top: 4px; color: #233b58; }
.detail-info-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.flight-seat-card h3 { margin: 0 0 14px; color: #233b58; }
.seat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.seat-button {
  height: 38px; border: 1px solid #b5c8de; background: white; color: #244264; cursor: pointer;
}
.seat-button:hover, .seat-button.active { border-color: #4a78bf; background: #deebff; }
.seat-status { min-height: 18px; margin: 12px 0 14px; color: #53677f; }

.orange-shell { display: grid; grid-template-columns: minmax(280px, .95fr) minmax(0,1.2fr); gap: 18px; }
.orange-ticket-panel {
  padding: 18px; border: 1px solid #f0b76b; background: radial-gradient(circle at top right, rgba(255,145,0,.25), transparent 30%), linear-gradient(#fff8ef, #ffefdc);
}
.orange-ticket-header { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
.orange-stage-lines { display: grid; gap: 8px; margin-bottom: 18px; }
.orange-stage-lines span { display: block; height: 18px; border-radius: 999px; background: linear-gradient(90deg, rgba(255,122,0,.88), rgba(255,180,90,.35)); }
.orange-week-ribbon { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; }
.day-pill {
  padding: 10px 6px; border: 1px solid #efb05a; background: white; color: #8d4e12; font-size: 12px; font-weight: bold; cursor: pointer;
}
.day-pill.active, .day-pill:hover { background: #ffe0bb; }
.orange-side-stack { display: grid; gap: 14px; }
.orange-module-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.orange-module, .postcard-card {
  padding: 14px; border: 1px solid #efc38e; background: linear-gradient(#fff, #fff6ec); text-align: left; cursor: pointer;
}
.orange-module strong, .orange-module span, .postcard-card strong, .postcard-card span { display: block; }
.orange-module span, .postcard-card span { margin-top: 4px; font-size: 12px; color: #8a6a48; }
.orange-module.active, .orange-module:hover { background: #ffe6c8; border-color: #df8d2a; }
.orange-panel-display { min-height: 184px; padding: 16px; border: 1px solid #efc38e; background: #fffdf9; }
.orange-lineup-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.orange-lineup-card {
  padding: 14px; border: 1px solid #ffd4a0; background: linear-gradient(#fff9f1, #fff1e0); color: #7a4f1d;
}
.orange-lineup-card span, .orange-lineup-card strong, .orange-lineup-card small { display: block; }
.orange-lineup-card strong { margin: 6px 0; font-size: 22px; }
.orange-confirm-button { justify-self: start; }

.roadtrip-shell { display: grid; grid-template-columns: minmax(0,1.3fr) minmax(270px,.85fr); gap: 18px; }
.roadtrip-board { display: grid; gap: 16px; }
.modern-roadtrip-map {
  padding: 20px; border: 1px solid #d9cfb2; background: linear-gradient(#fffef9, #fff9ec); border-radius: 6px;
}
.route-stop-button { cursor: pointer; }
.route-stop-button.active, .postcard-card.active, .car-option-button.active { border-color: #5f7c3b; background: #edf6e6; }
.roadtrip-postcards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.roadtrip-sidepanel { display: grid; gap: 12px; }
.roadtrip-note-card { padding: 14px; border: 1px solid #cdd7c0; background: white; }
.roadtrip-note-card strong { display: block; margin: 4px 0 8px; color: #334825; font-size: 22px; }
.roadtrip-note-card p { margin: 0; color: #5b6952; line-height: 1.5; }
.roadtrip-vehicle-list .vehicle-card { border-color: #c8d0b8; }
.roadtrip-vehicle-list .vehicle-card.active { background: #edf6e6; border-color: #698b45; }

.msn-message { max-width: 82%; margin-bottom: 10px; padding: 10px 12px; border-radius: 12px; border: 1px solid #b7d0ef; background: #eef5ff; color: #193356; box-shadow: 0 1px 0 rgba(255,255,255,.8) inset; }
.msn-message small { display: block; margin-bottom: 4px; color: #56718f; }
.msn-message.system { margin-left: auto; background: #f0f0f0; border-color: #d3d3d3; color: #444; }

@media (max-width: 860px) {
  .flight-detail-layout, .orange-shell, .roadtrip-shell, .orange-module-grid, .orange-lineup-cards, .roadtrip-postcards, .detail-strip, .detail-info-grid { grid-template-columns: 1fr; }
  .orange-week-ribbon { grid-template-columns: repeat(3, 1fr); }
}

/* v5 refinements */
.desktop-icon { position: relative; align-items: start; }
.desktop-icon .icon { justify-self: center; }
.desktop-icon > span:last-child { width: 82px; text-align: center; line-height: 1.15; overflow-wrap: anywhere; }
.notification-badge {
  position: absolute; left: 14px; top: 4px; min-width: 19px; height: 19px; padding: 0 5px;
  display: grid; place-items: center; border-radius: 999px; background: #e21b1b; color: #fff;
  border: 1px solid #fff; font-size: 11px; font-weight: bold; text-shadow: none; box-shadow: 1px 1px 2px rgba(0,0,0,.45);
}
.txt-icon.deleted { opacity: .7; }
.exe-file-icon { border-radius: 4px; background: linear-gradient(#ececec, #a3a3a3); border: 1px solid #555; }
.exe-file-icon::after { content: "EXE"; position: absolute; inset: 0; display: grid; place-items: center; color: #003399; font-size: 11px; font-weight: bold; }

.msn-window { width: min(660px, calc(100vw - 34px)); min-height: 500px; }
.msn-app-shell { display: grid; grid-template-columns: 205px 1fr; min-height: 460px; background: #dbeeff; }
.msn-contact-list { padding: 8px; border-right: 1px solid #8bb8e8; background: linear-gradient(#f8fcff, #cfe8ff); overflow-y: auto; }
.msn-contact-item {
  position: relative; display: grid; grid-template-columns: 34px 1fr auto; align-items: center; gap: 8px; width: 100%;
  min-height: 48px; margin-bottom: 6px; padding: 6px; border: 1px solid transparent; background: transparent; text-align: left; cursor: pointer;
}
.msn-contact-item:hover, .msn-contact-item.active { border-color: #76a6dd; background: white; }
.msn-contact-dot { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 7px; color: white; background: linear-gradient(135deg, #6ee36a, #168bd1); font-weight: bold; }
.msn-contact-item strong, .msn-contact-item small { display: block; }
.msn-contact-item small { color: #477091; font-size: 11px; margin-top: 2px; }
.msn-contact-item em { min-width: 18px; height: 18px; display: grid; place-items: center; border-radius: 999px; background: #e21b1b; color: #fff; font-style: normal; font-size: 11px; }
.msn-conversation-panel { display: grid; grid-template-rows: auto 1fr auto; min-height: 460px; }
.msn-chat-header { display: flex; gap: 10px; align-items: center; padding: 12px; background: linear-gradient(#fff, #bfdfff); border-bottom: 1px solid #8bb8e8; }
.msn-chat-header p { margin: 2px 0 0; color: #287000; font-size: 12px; }
.msn-empty-state { color: #6a7f93; text-align: center; padding: 35px 10px; font-size: 13px; }

.packing-list-panel { display: grid; gap: 9px; color: #6d4b24; }
.packing-list-panel h3 { margin: 0 0 5px; color: #8b4f10; }
.packing-list-panel label { display: flex; align-items: center; gap: 8px; padding: 8px; border: 1px solid #f1c58f; background: #fffaf3; }

.travel-browser-shell { background: radial-gradient(circle at top left, rgba(255,160,50,.16), transparent 28%), radial-gradient(circle at bottom right, rgba(64,119,190,.18), transparent 32%), #fbfdff; }
.portal-dashboard .portal-card { min-height: 145px; }
.postcard-card { min-height: 88px; }
.map-node { white-space: nowrap; }
@media (max-width: 760px) { .msn-app-shell { grid-template-columns: 1fr; } .msn-contact-list { border-right: 0; border-bottom: 1px solid #8bb8e8; max-height: 170px; } }

/* v10 hardening + redesign pass */
#desktop { position: relative; }
#desktop-recycle-icon,
#desktop .desktop-recycle-icon {
  position: absolute !important;
  top: 22px !important;
  right: 22px !important;
  left: auto !important;
  bottom: auto !important;
  z-index: 3 !important;
}
.desktop-icons { grid-auto-rows: max-content; align-content: start; }
.desktop-icon { position: relative; }
.desktop-icon span:last-child { width: 100%; text-align: center; line-height: 1.12; }
.notification-badge {
  position: absolute; top: 1px; left: 6px; min-width: 18px; height: 18px; padding: 0 5px;
  display: grid; place-items: center; border-radius: 999px; background: #e21b1b; color: #fff;
  font-size: 11px; font-weight: bold; text-shadow: none; box-shadow: 0 1px 3px rgba(0,0,0,.45);
}
.notification-badge.hidden { display: none; }

.secret-agency-home { display: grid; gap: 18px; min-height: 485px; }
.agency-hero-card {
  position: relative; display: grid; grid-template-columns: 1fr 220px; gap: 24px; overflow: hidden;
  padding: 26px; border: 1px solid #8fa9cd;
  background:
    radial-gradient(circle at top right, rgba(255,196,87,.42), transparent 32%),
    repeating-linear-gradient(135deg, rgba(34,74,126,.07), rgba(34,74,126,.07) 8px, transparent 8px, transparent 18px),
    linear-gradient(135deg, #fff8e9, #e2efff 55%, #d5e0f4);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.8);
}
.agency-stamp {
  position: absolute; top: 16px; right: 22px; transform: rotate(4deg);
  padding: 6px 10px; border: 2px solid #b2502a; color: #9b3517; background: rgba(255,255,255,.55);
  font-weight: bold; letter-spacing: 1px; font-size: 11px;
}
.agency-copy h2 { margin: 6px 0 8px; font-size: 36px; color: #1e385f; letter-spacing: -.6px; }
.agency-copy p { margin: 0; max-width: 460px; color: #425a7b; line-height: 1.55; }
.agency-ticket-stack { display: grid; gap: 10px; align-content: center; padding-top: 26px; }
.agency-ticket-stack span { height: 48px; border: 1px dashed #6d86aa; background: linear-gradient(90deg, #fff, #f3e3b5); box-shadow: 3px 4px 0 rgba(41,64,103,.12); }
.agency-ticket-stack span:nth-child(2) { transform: translateX(16px); background: linear-gradient(90deg, #fff, #d7ecff); }
.agency-ticket-stack span:nth-child(3) { transform: translateX(6px); background: linear-gradient(90deg, #fff, #ffe0c0); }
.agency-route-board { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.agency-board-card {
  display: grid; gap: 8px; padding: 18px; min-height: 148px; border: 1px solid #aebfd6;
  background: linear-gradient(180deg, #fff, #edf5ff); text-align: left; cursor: pointer; color: #263b58;
}
.agency-board-card:hover { background: #e1efff; border-color: #4a78bf; }
.agency-board-card.orange-card { background: linear-gradient(180deg, #fff8ed, #ffe3bd); border-color: #ecae61; }
.agency-board-card.road-card { background: linear-gradient(180deg, #fffdf2, #e9f2dc); border-color: #b7c999; }
.agency-card-code { justify-self: start; padding: 3px 7px; border: 1px solid currentColor; font-size: 11px; font-weight: bold; opacity: .75; }
.agency-board-card strong { font-size: 19px; }
.agency-board-card p { margin: 0; color: #50627b; line-height: 1.4; }
.agency-footer-strip { display: flex; flex-wrap: wrap; gap: 8px; padding: 10px; border: 1px solid #c4d0de; background: #fff; color: #52667f; font-size: 12px; }
.agency-footer-strip span { padding: 4px 8px; background: #eef5ff; border: 1px solid #d3e0ef; }

.flight-route-button.selected-flight-locked {
  background: linear-gradient(#2e507d, #1b3355) !important;
  border-color: #10243f !important;
  color: #fff !important;
}
.flight-route-button.selected-flight-locked .flight-card-top,
.flight-route-button.selected-flight-locked .flight-meta,
.flight-route-button.selected-flight-locked .flight-footer { color: #fff !important; }
.flight-route-button.unavailable-flight { opacity: .42; cursor: not-allowed; filter: grayscale(.45); }
.seat-button:disabled, #save-flight-button:disabled { opacity: .62; cursor: not-allowed; }

.balkan-landing { display: grid; gap: 16px; }
.balkan-cover {
  display: grid; grid-template-columns: 1fr 250px; gap: 18px; padding: 22px; border: 1px solid #b5c79a;
  background:
    radial-gradient(circle at 80% 20%, rgba(129,161,88,.35), transparent 30%),
    linear-gradient(135deg, #fffdf1, #edf6e4);
}
.balkan-cover h2 { margin: 6px 0 8px; font-size: 32px; color: #314f22; }
.balkan-cover p { margin: 0; color: #5c6d54; line-height: 1.5; }
.balkan-cover-map { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; align-content: center; }
.balkan-cover-map span { display: grid; place-items: center; min-height: 48px; border: 1px solid #8ea56b; background: #fff; color: #415f2e; font-weight: bold; box-shadow: 2px 3px 0 rgba(73,92,45,.12); }
.country-card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.country-card {
  display: grid; gap: 6px; padding: 16px; min-height: 118px; text-align: left; cursor: pointer;
  border: 1px solid #c7d6b1; background: linear-gradient(#fff, #f4faed); color: #304927;
}
.country-card:hover, .country-card.active { background: #e3f2d5; border-color: #6f9149; }
.country-card span { font-size: 11px; opacity: .68; font-weight: bold; }
.country-card strong { font-size: 18px; }
.country-card small { color: #627356; line-height: 1.35; }
.vehicle-desk-panel {
  display: grid; grid-template-columns: 180px 1fr auto; gap: 14px; align-items: center; padding: 14px;
  border: 1px solid #c7d6b1; background: linear-gradient(#fff, #f7fbf4);
}
.vehicle-desk-copy h3 { margin: 4px 0; color: #314f22; }
.vehicle-desk-copy p { margin: 0; color: #65745a; font-size: 12px; }
.country-detail-sheet { display: grid; gap: 16px; }
.country-detail-hero {
  display: grid; grid-template-columns: 1fr 120px; gap: 18px; padding: 24px; border: 1px solid #b6c89a;
  background: linear-gradient(135deg, #fffaf0, #eaf5e0);
}
.country-detail-hero h2 { margin: 6px 0 8px; font-size: 36px; color: #304927; }
.country-detail-hero p { margin: 0; color: #596d50; line-height: 1.55; }
.country-detail-code { display: grid; place-items: center; border: 2px solid #6f9149; background: #fff; color: #314f22; font-size: 36px; font-weight: bold; }
.country-fact-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.country-fact-card { padding: 16px; border: 1px solid #cad9b7; background: #fff; }
.country-fact-card.wide { grid-column: 1 / -1; }
.country-fact-card span { display: block; color: #68775e; font-size: 12px; margin-bottom: 6px; }
.country-fact-card strong { color: #304927; line-height: 1.45; }
.car-option-button.active { background: #dcefcf !important; border-color: #6f9149 !important; }
.car-option-button:disabled, #save-car-button:disabled { opacity: .7; cursor: not-allowed; }
.camp-pack-layout { display: grid; grid-template-columns: 190px 1fr; gap: 14px; }
.camp-task-card { padding: 14px; border: 1px solid #efc38e; background: linear-gradient(#fff8ef, #ffe3c2); }
.camp-task-card span, .camp-task-card small { display: block; color: #8a5d2e; }
.camp-task-card strong { display: block; margin: 7px 0; color: #7a3f0c; }

.msn-contact-empty { padding: 12px; color: #5d7490; font-size: 12px; text-align: center; }
.msn-contact-list:empty::before { content: "No contacts yet."; display: block; padding: 12px; color: #5d7490; font-size: 12px; text-align: center; }
.msn-chat-header { min-height: 70px; }
.msn-message { max-width: 90%; }

@media (max-width: 860px) {
  .agency-hero-card, .agency-route-board, .balkan-cover, .country-card-grid, .vehicle-desk-panel, .country-detail-hero, .country-fact-grid, .camp-pack-layout { grid-template-columns: 1fr; }
  .country-fact-card.wide { grid-column: auto; }
}
@media (max-width: 700px) {
  #desktop-recycle-icon, #desktop .desktop-recycle-icon { top: 12px !important; right: 12px !important; }
}


/* v11 verified fixes */
#desktop .desktop-icons {
  position: absolute !important;
  top: 22px !important;
  left: 22px !important;
  right: auto !important;
  bottom: auto !important;
  z-index: 2 !important;
  display: grid !important;
  grid-template-columns: 92px !important;
  grid-auto-rows: max-content !important;
  gap: 15px !important;
  padding: 0 !important;
  margin: 0 !important;
}
#desktop #desktop-recycle-icon.desktop-recycle-icon {
  position: absolute !important;
  top: 22px !important;
  right: 22px !important;
  left: auto !important;
  bottom: auto !important;
  z-index: 4 !important;
  margin: 0 !important;
  transform: none !important;
}
#desktop .desktop-icon {
  width: 82px !important;
  min-height: 72px;
}
#desktop .desktop-icon > span:last-child {
  width: 82px !important;
  max-width: 82px !important;
  text-align: center !important;
}

.flight-route-button {
  transition: background .16s ease, border-color .16s ease, filter .16s ease;
}
.flight-route-button.selected-flight-locked {
  background: linear-gradient(180deg, #314f79, #172d4c) !important;
  color: #fff !important;
  border-color: #0d203a !important;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.12), 0 4px 10px rgba(12,32,62,.18);
}
.flight-route-button.selected-flight-locked .flight-card-top,
.flight-route-button.selected-flight-locked .flight-meta,
.flight-route-button.selected-flight-locked .flight-footer,
.flight-route-button.selected-flight-locked strong,
.flight-route-button.selected-flight-locked span,
.flight-route-button.selected-flight-locked em {
  color: #fff !important;
}
.flight-route-button.view-only-flight {
  opacity: .82;
}
.flight-route-button.view-only-flight:hover {
  opacity: 1;
  border-color: #4a78bf;
}
.flight-lock-status {
  min-height: 18px;
  color: #6b4b1d;
  font-size: 12px;
}
.flight-seat-card.locked-mode {
  background: linear-gradient(#f7f7f7, #ececec);
  border-color: #c4c4c4;
}
.flight-seat-card.locked-mode .seat-button:not(.active) {
  opacity: .46;
}
.seat-button:disabled, #save-flight-button:disabled {
  opacity: .66 !important;
  cursor: default !important;
}

.msn-contact-list:empty::before {
  content: "" !important;
  display: none !important;
}
.msn-contact-empty { display: none !important; }
.msn-contact-item { animation: msnContactIn .18s ease-out; }
@keyframes msnContactIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }

.camp-pack-layout {
  grid-template-columns: 210px 1fr;
  align-items: start;
}
.camp-task-card strong { font-size: 18px; }
.camp-progress-bar {
  height: 10px;
  border: 1px solid #c88a42;
  background: #fff4e3;
  margin-top: 10px;
  padding: 1px;
}
.camp-progress-fill {
  display: block;
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #d46b00, #ffb25b);
}
.camp-progress-text {
  display: block;
  margin-top: 8px;
  color: #74480f;
  font-size: 12px;
}
.packing-list-panel label.done {
  background: #fff0d7;
  text-decoration: line-through;
  color: #8d6a3f;
}
.orange-confirm-button:disabled {
  opacity: .55;
  cursor: default;
}

.balkan-page {
  background:
    radial-gradient(circle at 15% 8%, rgba(255, 206, 116, .32), transparent 24%),
    radial-gradient(circle at 90% 30%, rgba(115, 151, 76, .25), transparent 28%),
    linear-gradient(#fffef7, #eef6e7) !important;
}
.balkan-landing { gap: 18px; }
.balkan-cover {
  position: relative;
  overflow: hidden;
  border-color: #8fa76a;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.85), 0 7px 18px rgba(74,92,48,.12);
}
.balkan-cover::after {
  content: "";
  position: absolute;
  inset: auto -30px -45px auto;
  width: 190px;
  height: 140px;
  border-radius: 50%;
  background: rgba(111,145,73,.18);
}
.balkan-trail-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  padding: 10px 12px;
  border: 1px solid #c7d6b1;
  background: rgba(255,255,255,.72);
  color: #536947;
  font-size: 12px;
}
.balkan-trail-strip b { color: #78935c; }
.country-card {
  position: relative;
  overflow: hidden;
  border-color: #b9cca0;
  min-height: 132px;
}
.country-card::after {
  content: "";
  position: absolute;
  right: -22px;
  bottom: -20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(111,145,73,.12);
}
.country-card:hover { transform: translateY(-1px); }
.country-card.active { box-shadow: inset 0 0 0 2px rgba(111,145,73,.25); }
.vehicle-desk-panel {
  border-color: #9fb982;
  box-shadow: 0 6px 14px rgba(74,92,48,.1);
}
.country-detail-sheet { min-height: 470px; }
.country-detail-hero {
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 18px rgba(74,92,48,.12);
}
.country-detail-hero::after {
  content: "";
  position: absolute;
  right: -26px;
  top: -26px;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: rgba(111,145,73,.12);
}
.country-detail-code { z-index: 1; }

@media (max-width: 700px) {
  #desktop .desktop-icons { top: 12px !important; left: 12px !important; }
  #desktop #desktop-recycle-icon.desktop-recycle-icon { top: 12px !important; right: 12px !important; }
}
