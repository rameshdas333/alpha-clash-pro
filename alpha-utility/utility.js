
 
 function hideElementById(elementById){
    const element = document.getElementById(elementById);
    element.classList.add('hidden');
 }


 function showElementById(elementById){
    const element = document.getElementById(elementById);
    element.classList.remove('hidden');

 }

 function addBackgroundColorElementByid(elementById){
   const element = document.getElementById(elementById);
   element.classList.add('bg-orange-400');
 }


function getARandomAlphabets(){
   const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
   const alphabets = alphabetString.split('');
   const randomnumber = Math.random()*25;
   const index = Math.round(randomnumber);
   const alphabet = alphabets[index];
   console.log(alphabet);
   return alphabet;
}