const SETTINGS_FILE = "quietSwitch.json";
const storage = require("Storage");

//check if settings file exists and create if missing
if (storage.read(SETTINGS_FILE) === undefined) {
  print("data file not existing, using defaults");
  let saved = {
    quietWhenSleep: 0, //off
    quietMode: 1, //alerts
    disableWakeOnFaceUpWhenSleep: false,
    disableWakeOnTouchWhenSleep: false,
    disableWakeOnDoubleTapWhenSleep: false,
    disableWakeOnTwistWhenSleep: false
  };
  storage.writeJSON(SETTINGS_FILE, saved);
}

let saved = storage.readJSON(SETTINGS_FILE, 1) || {};
const disabledFormat = v => v ? /*LANG*/"Disabled" : "---";

// Wake on menu
const wakeOnMenu = {
    "": {
    "title": /*LANG*/"Wake on sleep"
  },
  "Back": {
    onchange: () => {
      E.showMenu(mainmenu);
    }
  },
  "Wake on FaceUp": {
    value: "wakeOnFaceUpWhenSleep" in saved,
    format: disabledFormat,
    onchange: v => {
      saved.disableWakeOnFaceUpWhenSleep = v;
      storage.writeJSON(SETTINGS_FILE, saved);
    }
  },
  "Wake on Tap": {
    value: "wakeOnTouchWhenSleep" in saved,
    format: disabledFormat,
    onchange: v => {
      saved.disableWakeOnTouchWhenSleep = v;
      storage.writeJSON(SETTINGS_FILE, saved);
    }
  },
  "Wake on double Tap": {
    value: "wakeOnDoubleTapWhenSleep" in saved,
    format: disabledFormat,
    onchange: v => {
      saved.disableWakeOnDoubleTapWhenSleep = v;
      storage.writeJSON(SETTINGS_FILE, saved);
    }
  },
  "Wake on Twist": {
    value: "wakeOnTwistWhenSleep" in saved,
    format: disabledFormat,
    onchange: v => {
      saved.disableWakeOnTwistWhenSleep = v;
      storage.writeJSON(SETTINGS_FILE, saved);
    }
  },
};

// Main menu
var mainmenu = {
  "": {
    "title": /*LANG*/"Quiet Switch"
  },

  /*LANG*/"Quiet Switch": {
    value: "quietWhenSleep" in saved,
    format: v => v ? /*LANG*/"On" : "Off",
    min: 0, max: 1, step: 1,
    onchange: v => {
      saved.quietWhenSleep = v;
      storage.writeJSON(SETTINGS_FILE, saved);
    }
  },
  "Quiet Mode": {
    value: "quietMode" in saved,
    format: v => v ? /*LANG*/"Alerts" : "Silent",
    min: 0, max: 1, step: 1,
    onchange: v => {
      saved.quietMode = v;
      storage.writeJSON(SETTINGS_FILE, saved);
    }
  },

  /*LANG*/"Disable wake on event when asleep": {
    onchange: () => {
      E.showMenu(wakeOnMenu);
      print (saved);
    }
  },

  /*LANG*/"Exit": function () { load(); },
};

// Actually display the main menu
E.showMenu(mainmenu);