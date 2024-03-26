(function (back) {
  const settings = Object.assign({ showWeekNum: true }, require("Storage").readJSON("ffcniftyapp.json", true));

  E.showMenu({
    "": { "title": "Nifty-A Clock ++" },
    "< Back": () => back(),
    /*LANG*/"Show Week Number": {
      value: settings.showWeekNum,
      onchange: v => {
        settings.showWeekNum = v;
        require("Storage").writeJSON("ffcniftyapp.json", settings);
      }
    },
    /*LANG*/"Show Weather": {
      value: settings.showWeather,
      onchange: v => {
        settings.showWeather = v;
        require("Storage").writeJSON("ffcniftyapp.json", settings);
      }
    },
        /*LANG*/"Show Steps": {
          value: settings.showSteps,
          onchange: v => {
            settings.showSteps = v;
            require("Storage").writeJSON("ffcniftyapp.json", settings);
          }
        }
  });
})
