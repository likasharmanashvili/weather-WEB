
interface Location {
    name: string;
    region: string;
    country: string;
    localtime_epoch: number;
    localtime: string;
}

interface Condition {
    text: string;
    humidity: number;
}

interface Day {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    condition: Condition;
    
}

interface ForecastDay {
    date: string;
    day: Day;
}

interface Forecast {
    forecastday: ForecastDay[];
}

interface WeatherDataS {
    location: Location;
    current: any; 
    forecast: Forecast;
}

export default WeatherDataS;
