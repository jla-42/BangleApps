// first ensure that the sleeplog trigger object is available (sleeplog is enabled)
if (typeof(global.sleeplog || {}).trigger === "object") { // then add your parameters with the function to call as object into the trigger object
    global.sleeplog.trigger["quietMode"] = {
        onChange: true, // false as default, if true call fn only on a status change
        from: 0,
        // 0 as default, in ms, first time fn will be called
        // to: 24*60*60*1000, // 24h as default, in ms, last time fn will be called
        to: 0,
        // reference time to from & to is rounded to full minutes
        fn: function (data, thisTriggerEntry) {

            if ((data.status === 3 || data.status === 4) && (data.prevStatus !== 3 && data.prevStatus !== 4)) {
                let aSettings = require('Storage').readJSON('quietSwitch.json', 1) || {};
                const DEFAULTS = {
                    'quietWhenSleep': false,
                    'quietMode': 1,
                    'disableWakeOnFaceUpWhenSleep': 0,
                    'disableWakeOnTouchWhenSleep': 0,
                    'disableWakeOnDoubleTapWhenSleep': 0,
                    'disableWakeOnTwistWhenSleep': 0
                };
                Object.keys(DEFAULTS).forEach(k => {
                    if (aSettings[k] === undefined) {
                        aSettings[k] = DEFAULTS[k];
                        print("value " + k + "is missing")
                    }
    global.sleeplog.trigger["quietMode"] = {
        onChange: true, // false as default, if true call fn only on a status change
        from: 0,
        // 0 as default, in ms, first time fn will be called
        // to: 24*60*60*1000, // 24h as default, in ms, last time fn will be called
        to: 0,
        // reference time to from & to is rounded to full minutes
        fn: function (data, thisTriggerEntry) {

            if ((data.status === 3 || data.status === 4) && (data.prevStatus !== 3 && data.prevStatus !== 4)) {
                let aSettings = require('Storage').readJSON('quietSwitch.json', 1) || {};
                const DEFAULTS = {
                    'quietWhenSleep': false,
                    'quietMode': 1,
                    'disableWakeOnFaceUpWhenSleep': 0,
                    'disableWakeOnTouchWhenSleep': 0,
                    'disableWakeOnDoubleTapWhenSleep': 0,
                    'disableWakeOnTwistWhenSleep': 0
                };
                Object.keys(DEFAULTS).forEach(k => {
                    if (aSettings[k] === undefined) {
                        aSettings[k] = DEFAULTS[k];
                        print("value " + k + "is missing")
                    }

                });
                });

                if (aSettings && aSettings['quietWhenSleep']) {
                    console.log("the sleep status is: " + data.status);
                    let quietMode = aSettings['quietMode'];
                    delete aSettings;
                    let bSettings = require("Storage").readJSON('setting.json', true) || {};
                    let current = 0 | bSettings.quiet;
                    console.log("quiet mode is:" + current);
                    if (current !== quietMode) {
                        console.log("fallen asleep");
                        bSettings.quiet = quietMode;
                        aSettings.wakeOnDoubleTapNormal = bSettings.options.wakeOnDoubleTap;
                        aSettings.wakeOnTouchNormal = bSettings.options.wakeOnTouch;
                        aSettings.wakeOnFaceUpNormal = bSettings.options.wakeOnFaceUp;
                        aSettings.wakeOnTwistNormal = bSettings.options.wakeOnTwist;

                        if (aSettings.disableWakeOnFaceUpWhenSleep === 1) {
                            bSettings.options.wakeOnFaceUp = false;
                            console.log("disabling wakeOnFaceUp");
                        }
                        if (aSettings.disableWakeOnTouchWhenSleep === 1) {
                            bSettings.options.wakeOnTouch = false;
                            console.log("disabling wakeOnTouch");
                        }
                        if (aSettings.disableWakeOnDoubleTapWhenSleep === 1) {
                            bSettings.options.wakeOnDoubleTap = false;
                            console.log("disabling wakeOnDoubleTap");
                        }
                        if (aSettings.disableWakeOnTwistWhenSleep === 1) {
                            bSettings.options.wakeOnTwist = false;
                            console.log("disabling wakeOnTwist");
                        }
                if (aSettings && aSettings['quietWhenSleep']) {
                    console.log("the sleep status is: " + data.status);
                    let quietMode = aSettings['quietMode'];
                    delete aSettings;
                    let bSettings = require("Storage").readJSON('setting.json', true) || {};
                    let current = 0 | bSettings.quiet;
                    console.log("quiet mode is:" + current);
                    if (current !== quietMode) {
                        console.log("fallen asleep");
                        bSettings.quiet = quietMode;
                        aSettings.wakeOnDoubleTapNormal = bSettings.options.wakeOnDoubleTap;
                        aSettings.wakeOnTouchNormal = bSettings.options.wakeOnTouch;
                        aSettings.wakeOnFaceUpNormal = bSettings.options.wakeOnFaceUp;
                        aSettings.wakeOnTwistNormal = bSettings.options.wakeOnTwist;

                        if (aSettings.disableWakeOnFaceUpWhenSleep === 1) {
                            bSettings.options.wakeOnFaceUp = false;
                            console.log("disabling wakeOnFaceUp");
                        }
                        if (aSettings.disableWakeOnTouchWhenSleep === 1) {
                            bSettings.options.wakeOnTouch = false;
                            console.log("disabling wakeOnTouch");
                        }
                        if (aSettings.disableWakeOnDoubleTapWhenSleep === 1) {
                            bSettings.options.wakeOnDoubleTap = false;
                            console.log("disabling wakeOnDoubleTap");
                        }
                        if (aSettings.disableWakeOnTwistWhenSleep === 1) {
                            bSettings.options.wakeOnTwist = false;
                            console.log("disabling wakeOnTwist");
                        }

                        require("Storage").writeJSON("setting.json", bSettings);
                    }
                    delete bSettings;
                }
            } else if ((data.status === 2 || data.status === 1) && (data.prevStatus !== 2 && data.prevStatus !== 1)) {
                let aSettings = require('Storage').readJSON('quietSwitch.json', 1) || {};
                const DEFAULTS = {
                    'quietWhenSleep': false,
                    'quietMode': 1,
                    'disableWakeOnFaceUpWhenSleep': 0,
                    'disableWakeOnTouchWhenSleep': 0,
                    'disableWakeOnDoubleTapWhenSleep': 0,
                    'disableWakeOnTwistWhenSleep': 0
                };
                Object.keys(DEFAULTS).forEach(k => {
                    if (aSettings[k] === undefined) {
                        aSettings[k] = DEFAULTS[k];
                        print("value " + k + "is missing")
                    }

                });

                if (aSettings && aSettings['quietWhenSleep']) {
                    console.log("the sleep status is: " + data.status);

                    // let quietMode = aSettings['quietMode'];        
                    delete aSettings;
                    let bSettings = require("Storage").readJSON('setting.json', true) || {};
                    let current = 0 | bSettings.quiet;
                    console.log("quiet mode is:" + current);
                    if (current !== 0) {
                        console.log("woken up");
                        bSettings.quiet = 0;
                        if (aSettings.disableWakeOnFaceUpWhenSleep === 1) {
                            bSettings.options.wakeOnFaceUp = aSettings.wakeOnFaceUpNormal;
                            console.log("enabling wakeOnTwist");
                        }
                        if (aSettings.disableWakeOnTouchWhenSleep === 1) {
                            bSettings.options.wakeOnTouch = aSettings.wakeOnTouchNormal;
                            console.log("enabling wakeOnTwist");
                        }
                        if (aSettings.disableWakeOnDoubleTapWhenSleep === 1) {
                            bSettings.options.wakeOnDoubleTap = aSettings.wakeOnDoubleTapNormal;
                            console.log("enabling wakeOnTwist");
                        }
                        if (aSettings.disableWakeOnTwistWhenSleep === 1) {
                            bSettings.options.wakeOnTwist = aSettings.wakeOnTwistNormal;
                            console.log("enabling wakeOnTwist");
                        }


                        require("Storage").writeJSON("setting.json", bSettings);
                    }
                    delete bSettings;
                }
            }
        }
    };
}
