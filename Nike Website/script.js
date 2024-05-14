var timeline =  gsap.timeline()

timeline.from("#logo" ,{
    opacity :0,
    y: -30,
    delay:0.8,
    duration :1,

})
timeline.from(".part2 h4" ,{
    opacity :0,
    y: -30,
    delay:0.8,
    duration :1,
    stagger : 0.3,
})
timeline.from(".collection" ,{
    opacity :0,
    y: 30,
    delay:0.8,
    duration :1,

})
timeline.from(".hero-h1" ,{
    opacity :0,
    scale: 0.7,
    delay:0.8,
    duration :1,

})
timeline.from(".hero-p" ,{
    opacity :0,
    y: 30,
    delay:0.8,
    duration :1,

})
timeline.from(".mybtn" ,{
    opacity :0,
    y: 30,
    delay:0.8,
    duration :1,

})
timeline.from(".franchise-info" ,{
    opacity :0,
    y: -10,
    stagger : 0.3,
    delay:0.8,
    duration :1,

})

timeline.from(".shoe",{
    opacity :0,
    y: -70,
    delay:0.8,
    duration :1,

})
timeline.from(".blocks" ,{
    opacity :0,
    x: -10,
    stagger : 0.3,
    delay:0.8,
    duration :1,

})

const shoe = document.getElementById("shoe")
const shoename = document.getElementById("shoename")

function nikeshoe2(){
    shoe.src = 'images/Nike_shoe2.png'
    timeline.from(".shoe",{
        opacity :0,
        y: 70,
        delay:0.6,
        duration :1,
       
    })   
    shoename.textContent = "Blazer "
}
function nikeshoe3(){
    shoe.src = 'images/Nike_shoe3.png'
    timeline.from(".shoe",{
        opacity :0,
        y: 70,
        delay:0.6,
        duration :1,
    
    })
    shoename.textContent = "Air Force1 "  
}

function nikeshoe1(){
    shoe.src = 'images/NIke_shoe1.png'
    timeline.from(".shoe",{
        opacity :0,
        y: 70,
        delay:0.6,
        duration :1,
    
    })   
    shoename.textContent = "Air Max "  

}