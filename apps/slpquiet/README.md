# Sleep Quiet

Set Quiet mode (or alarms only mode) and disable wake on on twist, tap, double tap and face up, when the sleep tracking app detects sleep (each 10 min evaluated)

## Usage

When activated, app disables all notifications / all except alarms when sleep detected. 

Also, it is possible to deactivate wake on on twist, tap, double tap and face up to preseve battery when sleep detected.
Wake on button press is not affected. (also not possible to deactivate as this is the least power demanding option)

## Controls

In the app you can activate / deactivate the functionality and define if all notifications / all except alarms are to be silenced.
In the submenu "Disable wake on event when asleep" you can define which wake on "event" is to be disabled during sleep, once detects wake up, the previous state is restored. So if you e.g. select the option to disable wake on twist and this option is already disabled, nothing gets changed.

## Creator

[jla-42](https://github.com/jla-42)

## Note
The app is based upon the [sleeplog](https://github.com/espruino/BangleApps/tree/master/apps/sleeplog) app.

It reuses the widget from [Quiet Mode Schedule and Widget](https://github.com/espruino/BangleApps/tree/master/apps/qmsched), as it does exactly what I needed, so why reinvent the wheel.

## ToDos
-further code clean up

-optimization of code (and check if needed)

-feedback is always welcome

#### Attributions
The app icon is downloaded from [https://icons8.com](https://icons8.com).

#### License
[MIT License](LICENSE)