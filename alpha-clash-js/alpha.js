// function play(){

//     const homesection = document.getElementById('home-screen');
//      homesection.classList.add('hidden');

//  const playground = document.getElementById('play-ground');
//  playground.classList.remove('hidden');

// }
function handlerKeyboardButtonpress(event){

 const   playerpressed = event.key;
const currentAlphabetElement = document.getElementById('current-alpha',playerpressed);
const currentAlpha = currentAlphabetElement.innerText;
const expectAlphabet = currentAlpha.toLowerCase();

if(expectAlphabet === playerpressed){
    console.log('you are win');
}

else{console.log('you are fail.');
}
}
    document.addEventListener('keyup',handlerKeyboardButtonpress)


function continueGame(){


    const alphabet= getARandomAlphabets();
    console.log('your random function',alphabet)


    const currentElement = document.getElementById('current-alpha');
    currentElement.innerHTML=alphabet;
    addBackgroundColorElementByid(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}