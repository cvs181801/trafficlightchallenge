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

const redLightDiv = document.createElement('div');
redLightDiv.innerHTML = `<div id="circle-red"></div>`

containerElement = document.querySelector('container');
containerElement.appendChild(redLightDiv);