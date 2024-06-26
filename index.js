if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(pos){
        console.log(pos);
        const lat = pos.coords.latitude ;
        const long  = pos.coords.longitude ;
        getWeatherData(`${lat},${long}`)
    })
} else{
    console.log('can not get weather data');
}
const searchLocation = document.getElementById('search')
async function getWeatherData( locaton){
    let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${locaton}&days=3&key=3eca33ecb8204e4fa76120419242606`)
    let data =await res.json()
    console.log(data) 
    displayTodayWeather(data)
    displaytomoro(data)
}
    searchLocation.addEventListener('input',function(e){
        getWeatherData(e.target.value)
    });


    function displayTodayWeather(data){
    
        const todaydate = data.current.last_updated
        let date = new Date(todaydate);
        const todayWeekDay = date.toLocaleString('en-us',{weekday:'long'});
        const todayDay = date.getDate()
        console.log(todayDay)
        const todayMonth = data.toLocaleString('en-us',  {month:'long'});
        const cityName = data.location.name;
        const toddegree = data.current.temp_c;
        const todaycondition = data.current.condition.text;
        const humidity =data.current.humidity;
        imgToday.setAttribute('src' ,data.current.condition.icon);
        todc4.innerHTML = todayWeekDay;
        datee.innerHTML =`${todayDay}  ${todayMonth}`;
        neww.innerHTML = cityName;
        tepra.innerHTML =toddegree;
        clouds.innerHTML =todaycondition;
        humtoday.innerHTML = humidity;
        windSpeedToday.innerHTML =data.current.wind_kph;
        dirToday.innerHTML= data.current.wind_dir;
    }
    function displaytomoro({forecast}){
        tmoror.innerHTML =new Date(forecast.forcastday[1].date).toLocaleString
    }

