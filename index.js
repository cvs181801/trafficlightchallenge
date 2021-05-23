//huge courtesy to my friend Florin for css of the traffic light. https://twitter.com/florinpop1705

// let active = 0;
// let lights = document.querySelectorAll('.circle');

// const switchLight = (currentLight) =>{
//     currentLight.classList.add(currentLight.getAttribute('color'));
// }
// const turnOffLight = (currentLight) =>{
//     currentLight.className = 'circle'
// }

// const changeLight = ()=>{
//     let currentLight = lights[active];
//     if (active === 0 ) {
//         switchLight(currentLight);
//     }
//}

//changeLight();

//(async function() {
 //   try{
 //      await changeLight()
 //      await changeLight()
 //      await changeLight()
 //   }catch(err){
//        console.log(err)
//    }
//})();


//const style = document.createElement('style');


//****try again
// let light = querySelector('circle');

// function switchLight() {
//     light.remove('#circle');
//     light.classList.add
//     light.classList.toggle('circle-red');
//     light.style.display = block;
    
// }


// switchLight();

//****try again

// const redLightDiv = document.createElement('div');
// const yellowLightDiv = document.createElement('div');
// const greenLightDiv = document.createElement('div');


// containerElement = document.querySelector('.container');
// circleOneElement = document.querySelector('.circle1');
// circleTwoElement = document.querySelector('.circle2');
// circleThreeElement = document.querySelector('.circle3');


// redLightDiv.innerHTML = `<div id="circle-red"></div>`
// yellowLightDiv.innerHTML = `<div id="circle-yellow"></div>`
// greenLightDiv.innerHTML = `<div id="circle-green"></div>`

//circleOneElement.remove();
//redLightDiv.parentNode.insertBefore(containerElement, circleTwoElement);

//*** try again */

//lets try the getElementsByTagName() method which returns an array. use it w the div's

//const lights = document.getElementsByTagName('div');

// let parentLightDiv = lights[0];
// let redLightDiv = lights[1].innerHTML = `<div id="circle-red"></div>`;
// let yellowLightDiv = lights[2].innerHTML = `<div id="circle-yellow"></div>`;
// let greenLightDiv = lights[3].innerHTML = `<div id="circle-green"></div>`;
// yellowLightDiv.replaceChild(redLightDiv, greenLightDiv);

// *** try again ** 

const redLightDiv = document.getElementById("circle-red");
const yellowLightDiv = document.getElementById("circle-yellow");
const greenLightDiv = document.getElementById("circle-green");


    setTimeout(function() {
        redLightDiv.classList.toggle('hidden');
    }, 3000);
   


//yellowLightDiv.classList.toggle('hidden');