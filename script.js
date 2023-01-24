const key='bd49af6876da10912fe050bf1ade6546';


const getWeather= async(city)=>{
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    const response=  await fetch(url);
    const data=  await response.json();
    if(data.cod!='200'){
        alert("Enter a valid city name");
    }else{
        console.log(data);
        displayContent(data);
    }
      return;
}

let button= document.getElementById('btn')
button.addEventListener('click',()=>{
    const input = document.getElementById('val');
    getWeather(input.value);
})

const displayContent=(data)=>{
     
    document.getElementById('icon').innerHTML=`<img src=" http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
     
    document.getElementById('tempmaxval').innerHTML=`<h2>${data.main.temp_max} °C</h2>`
    document.getElementById('tempminval').innerHTML=`<h2>${data.main.temp_min} °C</h2>`
    document.getElementById('desc').innerHTML=`<h1>${data.weather[0].description}</h1>`
    document.getElementById('wind').innerHTML=`<h1> Wind Speed ${data.wind.speed}</h1>`
    document.getElementById('place').innerHTML=`<h1>${data.name}</h1>`
    document.getElementById('coun').innerHTML=`<h2>${data.sys.country}</h2>`


}