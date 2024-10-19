
import imgHeavyRain from '../assets/images/raind.webp';
import imgLIghtRain from '../assets/images/weatrain.webp';
import imgSun from '../assets/images/weatsun.webp';
import imgcloud from '../assets/images/cloudmv.webp';
import imgSunrise from '../assets/images/sunrise.webp';
import imgRain from '../assets/images/imgr.webp';
import imgWind from '../assets/images/weatwindy.webp';


export function Weather(pressure, temperatureink, humidity, sealevel, sunrise, sunset, timeinhours, timeinmins, timeinsec, ampm, mainweather, description) {
    this.pressure = pressure;
    this.temperatureink = temperatureink;
    this.humidity = humidity;
    this.sealevel = sealevel;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.timeinhours = timeinhours;
    this.timeinmins = timeinmins;
    this.timeinsec = timeinsec;
    this.ampm = ampm;
    this.mainweather = mainweather;
    this.description = description;
    this.container = document.querySelector('.content')
    this.weatherimages = [
        imgSun,
        imgLIghtRain,
        imgcloud,
        imgWind,
        imgSunrise,
        imgHeavyRain,
        imgRain,
    ];
}