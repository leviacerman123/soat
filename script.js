let upDate = setInterval(() =>{
    let year = new Date().getFullYear()
    let time = document.querySelector(`.yill`)
    time.innerHTML = ` Yill: ${year}`



    let month = new Date().getMonth()
    let time1 = document.querySelector(`.oy`)
    time1.innerHTML = ` Oy: ${month + 1}`



    let day = new Date().getDay()
    let time2 = document.querySelector(`.kun`)
    time2.innerHTML = ` Kun: ${day}`



    let hour = new Date().getHours()
    let time3 = document.querySelector(`.soat`)
    time3.innerHTML = ` soat: ${hour}`



    let minut = new Date().getMinutes()
    let time4 = document.querySelector(`.minut`)
    time4.innerHTML = ` minut ${minut}`



    let secund = new Date().getSeconds()
    let time5 = document.querySelector(`.secund`)
    time5.innerHTML = ` secund: ${secund}`

} , 1000)