import React from 'react';

const fetch_weather=()=>(
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=london&lang=id&appid=8f329191705211eed0078b4d2038571f")
    .then((response) => response.json())
    .then((json) => {
    this.setState({ data: json, 
        temp : (json.list[0].main.temp-273.15).toFixed(0),
        temp_tmr: (json.list[8].main.temp-273.15).toFixed(0),
        temp_nxt_tmr: (json.list[16].main.temp-273.15).toFixed(0),
        city_display : json.city.name ,
        icon: json.list[0].weather[0].icon,
        icon_tmr: json.list[8].weather[0].icon,
        icon_nxt_tmr: json.list[16].weather[0].icon,
        desc : json.list[0].weather[0].description,
        pod : json.list[0].sys.pod})
    })
    .catch((error) => console.error(error))
    .finally(() => {
    this.setState({ isLoading: false });
    })
);

export default fetch_weather;