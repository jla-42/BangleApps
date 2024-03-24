const w = require("weather");
const locale = require("locale");

// Weather icons from https://icons8.com/icon/set/weather/color
function getSun() {
  return require("heatshrink").decompress(atob("mEwwhC/AH4AbhvQC6vd7ouVC4IwUCwIwUFwQwQCYgAHDZQXc9wACC6QWDDAgXN7wXF9oXPCwowDC5guGGAYXMCw4wCC5RGJJAZGTJBiNISIylQVJrLCC5owGF65fXR7AwBC5jvhC7JIILxapDFxAXOGAy9KC4owGBAQXODAgHDC54AHC8T0FAAQSOGg4qPGA4WUGAIuVC7AA/AH4AEA="));
}
function getPartSun() {
  return require("heatshrink").decompress(atob("mEwwhC/AH4AY6AWVhvdC6vd7owUFwIABFiYAFGR4Xa93u9oXTCwIYDC6HeC4fuC56MBC4ySOIwpIQXYQXHmYABRpwXECwQYKF5HjC4kwL5gQCAYYwO7wqFAAowK7wWKJBgXLJBPd6YX/AAoVMAAM/Cw0DC5yRHCx5JGFyAwGCyIwFC/4XyR4inXa64wRFwowQCw4A/AH4AkA"));
}
function getCloud() {
  return require("heatshrink").decompress(atob("mEwwhC/AH4A/AH4AtgczmYWWDCgWDmcwIKAuEGBoSGGCAWKC7BIKIxYX6CpgABn4tUSJIWPJIwuQGAwWRGAoX/C+SPEU67XXGCIuFGCAWHAH4A/AH4A/ADg="));
}
function getSnow() {
  return require("heatshrink").decompress(atob("mEwwhC/AH4AhxGAC9YUBC4QZRhAVBAIWIC6QAEI6IYEI5cIBgwWOC64NCKohHPNox3RBgqnQEo7XPHpKONR5AXYAH4ASLa4XWXILiBC6r5LDBgWWDBRrKC5hsCEacIHawvMCIwvQC5QvQFAROEfZ5ADLJ4YGCywvVI7CPGC9IA/AH4AF"));
}
function getRain() {
  return require("heatshrink").decompress(atob("mEwwhC/AH4AFgczmYWWDCgWDmcwIKAuEGBoSGGCAWKC7BIKIxYX6CpgABn4tUSJIWPJIwuQGAwWRGAoX/C+SPEU67XXGCIuFGCAWHAGeIBJEIwAVJhGIC5AJBC5QMJEJQMEC44JBC6QSCC54FHLxgNBBgYSEDgKpPMhQXneSwuUAH4A/AA4="));
}
function getStorm() {
  return require("heatshrink").decompress(atob("mEwwhC/AFEzmcwCyoYUgYXDmYuVGAY0OFwocHC6pNLCxYXYJBQXuCxhhJRpgYKCyBKFFyIXFCyJIFC/4XaO66nU3eza6k7C4IWFGBwXBCwwwO3ewC5AZMC6RaCIxZiI3e7AYYwRCQIIBC4QwPIQIpDC5owDhYREIxgAEFIouNC4orDFyBGBGAcLC6BaFhYWRLSRIFISQXcCyqhRAH4Az"));
}
// err icon - https://icons8.com/icons/set/error
function getErr() {
  return require("heatshrink").decompress(atob("mEwwkBiIA/AH4AZUAIWUiAXBWqgXXdIYuVGCgXBgICCIyYXCJCQTDC6QrEMCQSEJCQRFC6ApGJCCiDDQSpQFAYXEJBqNGJCA/EC4ZIOEwgXFJBgNEAhKlNAgxIKBgoXEJBjsLC5TsIeRycMBhRrMMBKzQEozjOBxAgHGww+IA6wfSH4hnIC47OMSJqlRIJAXCACIXaGoQARPwwuTAH4A/ABw"));
}
function getDummy() {
  return require("heatshrink").decompress(atob("gMBwMAwA"));
}

/**
Choose weather icon to display based on condition.
Based on function from the Bangle weather app so it should handle all of the conditions
sent from gadget bridge.
*/
function chooseIcon(condition) {
  condition = condition.toLowerCase();
  if (condition.includes("thunderstorm") ||
    condition.includes("squalls") ||
    condition.includes("tornado")) return getStorm;
  if (condition.includes("freezing") || condition.includes("snow") ||
    condition.includes("sleet")) {
    return getSnow;
  }
  if (condition.includes("drizzle") ||
    condition.includes("shower") ||
    condition.includes("rain")) return getRain;
  if (condition.includes("clear")) return getSun;
  if (condition.includes("clouds")) return getCloud;
  if (condition.includes("few clouds") ||
    condition.includes("scattered clouds") ||
    condition.includes("mist") ||
    condition.includes("smoke") ||
    condition.includes("haze") ||
    condition.includes("sand") ||
    condition.includes("dust") ||
    condition.includes("fog") ||
    condition.includes("ash")) {
    return getPartSun;
  }
  return getCloud;
}
function condenseWeather(condition) {
  condition = condition.toLowerCase();
  if (condition.includes("thunderstorm") ||
    condition.includes("squalls") ||
    condition.includes("tornado")) return "storm";
  if (condition.includes("freezing") || condition.includes("snow") ||
    condition.includes("sleet")) {
    return "snow";
  }
  if (condition.includes("drizzle") ||
    condition.includes("shower") ||
    condition.includes("rain")) return "rain";
  if (condition.includes("clear")) return "clear";
  if (condition.includes("clouds")) return "cloudy";
  if (condition.includes("few clouds") ||
    condition.includes("scattered clouds") ||
    condition.includes("mist") ||
    condition.includes("smoke") ||
    condition.includes("haze") ||
    condition.includes("sand") ||
    condition.includes("dust") ||
    condition.includes("fog") ||
    condition.includes("ash")) {
    return "scattered";
  } else return "N/A";
}
/*
* Choose weather icon to display based on weather conditition code
* https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
*/
function chooseIconByCode(code) {
  const codeGroup = Math.round(code / 100);
  switch (codeGroup) {
    case 2: return getStorm;
    case 3: return getRain;
    case 5:
      switch (code) {
        case 511: return getSnow;
        default: return getRain;
      }
    case 6: return getSnow;
    case 7: return getPartSun;
    case 8:
      switch (code) {
        case 800: return getSun;
        case 804: return getCloud;
        default: return getPartSun;
      }
    default: return getCloud;
  }
}
// copied from: https://gist.github.com/IamSilviu/5899269#gistcomment-3035480
function ISO8601_week_no(date) {
  var tdt = new Date(date.valueOf());
  var dayn = (date.getDay() + 6) % 7;
  tdt.setDate(tdt.getDate() - dayn + 3);
  var firstThursday = tdt.valueOf();
  tdt.setMonth(0, 1);
  if (tdt.getDay() !== 4) {
    tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
  }
  return 1 + Math.ceil((firstThursday - tdt) / 604800000);
}

function format(value) {
  return ("0" + value).substr(-2);
}

const ClockFace = require("ClockFace");
const clock = new ClockFace({
  init: function () {
    const appRect = Bangle.appRect;

    this.viewport = {
      width: appRect.w,
      height: appRect.h
    };

    this.center = {
      x: this.viewport.width / 2,
      y: Math.round((this.viewport.height / 2) + appRect.y)
    };

    this.scale = g.getWidth() / this.viewport.width;
    this.centerTimeScaleX = this.center.x + 32 * this.scale;
    this.centerDatesScaleX = this.center.x + 40 * this.scale;
  },
  draw: function (date) {
    const hour = date.getHours() - (this.is12Hour && date.getHours() > 12 ? 12 : 0);
    const month = date.getMonth() + 1;
    const monthName = require("date_utils").month(month, 1);
    const dayName = require("date_utils").dow(date.getDay(), 1);
    let steps = Bangle.getHealthStatus("day").steps;
    let curr = w.get(); // Get weather from weather app.
    const temp = locale.temp(curr.temp - 273.15).match(/^(\D*\d*)(.*)$/);
    let w_icon = chooseIcon(curr.txt);


    g.setFontAlign(1, 0).setFont("Vector", 90 * this.scale);
    g.drawString(format(hour), this.centerTimeScaleX, this.center.y - 31 * this.scale);
    g.drawString(format(date.getMinutes()), this.centerTimeScaleX, this.center.y + 46 * this.scale);

    g.fillRect(this.center.x + 30 * this.scale, this.center.y - 72 * this.scale, this.center.x + 32 * this.scale, this.center.y + 74 * this.scale);

    g.setFontAlign(-1, 0).setFont("Vector", 16 * this.scale);
    g.drawString(format(date.getDate()), this.centerDatesScaleX, this.center.y - 62 * this.scale);  //26
    g.drawString("." + format(month) + ".", this.centerDatesScaleX + 20, this.center.y - 62 * this.scale);  //44
    g.drawString(date.getFullYear(date), this.centerDatesScaleX, this.center.y - 46 * this.scale); //62
    if (this.showWeekNum)
    g.drawString("CW" + format(ISO8601_week_no(date)), this.centerDatesScaleX, this.center.y + -30 * this.scale); //15
    g.drawString(condenseWeather(curr.txt), this.centerDatesScaleX, this.center.y + 24 * this.scale);
    
    //g.drawImage(w_icon, this.centerDatesScaleX, this.center.y + 24 * this.scale);

    g.drawString(curr.temp - 273 + " °C", this.centerDatesScaleX, this.center.y + 52 * this.scale); //48
    g.drawString(steps, this.centerDatesScaleX, this.center.y + 66 * this.scale);

  },
  settingsFile: "ffcniftyapp.json"
});
clock.start();