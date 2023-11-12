`use strict`;
const mainScreen = document.querySelector(`.box-border`);
const btnStart = document.querySelector(`.start`);
const btnModal1 = document.querySelector(`.btn-modal1-2v2`)
const btnModal2 = document.querySelector(`.btn-modal2-3v3`)
const btnModal3 = document.querySelector(`.btn-modal3-4v4`)
const btnModal4 = document.querySelector(`.btn-modal4-custom`)
const modesContainer = document.querySelector(`.modes-border`);
const modal = document.querySelector(`.modal-border`);

const lineupContainer = document.querySelector(`.lineupContainer`);
const position = document.querySelectorAll(`.position`);
const pb1 = document.querySelector(`.pb1`);
const pb2 = document.querySelector(`.pb2`);
const pb3 = document.querySelector(`.pb3`);
const pb4 = document.querySelector(`.pb4`);
const pb5 = document.querySelector(`.pb5`);
const pb6 = document.querySelector(`.pb6`);
const pb7 = document.querySelector(`.pb7`);
const pb8 = document.querySelector(`.pb8`);
const pb9 = document.querySelector(`.pb9`);
const pb10 = document.querySelector(`.pb10`);

const spot1 = document.querySelector(`.spot1`);
const spot2 = document.querySelector(`.spot2`);
const spot3 = document.querySelector(`.spot3`);
const spot4 = document.querySelector(`.spot4`);
const spot5 = document.querySelector(`.spot5`);
const spot6 = document.querySelector(`.spot6`);
const spot7 = document.querySelector(`.spot7`);
const spot8 = document.querySelector(`.spot8`);
const spot9 = document.querySelector(`.spot9`);
const spot10 = document.querySelector(`.spot10`);

const playerSelect = document.querySelector(`.player-select`);
const guest = document.querySelectorAll(`.guest`);
const guest1 = document.querySelector(`.g1`);
const guest2 = document.querySelector(`.g2`);
const guest3 = document.querySelector(`.g3`);
const guest4 = document.querySelector(`.g4`);
const guest5 = document.querySelector(`.g5`);
const guest1text = document.querySelector(`.guest1text`);
const guest2text = document.querySelector(`.guest2text`);
const guest3text = document.querySelector(`.guest3text`);
const guest4text = document.querySelector(`.guest4text`);
const guest5text = document.querySelector(`.guest5text`);
const dummy1 = document.querySelector(`.d1`);
const dummy2 = document.querySelector(`.d2`);
const dummy3 = document.querySelector(`.d3`);
const dummy4 = document.querySelector(`.d4`);
const dummy5 = document.querySelector(`.d5`);
const dummies = [dummy1, dummy2, dummy3, dummy4, dummy5];

const guestList = [guest1text, guest2text, guest3text, guest4text, guest5text];

const overlay = document.querySelector(`.overlay`);
const warningContainer = document.querySelector(`.warning-border`)
const warning1 = document.querySelector(`.warning1`);
const warning2 = document.querySelector(`.warning2`);

const btnBack1 = document.querySelector(`.back1`);
const btnClear1 = document.querySelector(`.clear1`);

const hidden = document.querySelectorAll(`.hidden`);

const checkBox = document.querySelectorAll(`.checkbox`);
const checkBoxChecked = document.querySelectorAll(`.checkbox-checked`);

const player = document.querySelectorAll(`.forjs`);
const btnRandomize = document.querySelector(`.randomize`);

let selectedPlayerArray = [];
let selectedPlayerLimit;

let mode2v2 = false;
let mode3v3 = false;
let mode4v4 = false;
let mode5v5 = false;

let array2v2 = [];
let array3v3 = [];
let array4v4 = [];
let array5v5 = [];


//////////////////////////////////////////////////////////////////////
btnStart.addEventListener(`click`, function(){
  mainScreen.classList.add(`hidden`);
  modesContainer.classList.remove(`hidden`);
});

///mode selection screen////
btnModal1.addEventListener(`click`, function(){
  modesContainer.classList.add(`hidden`);
  modal.classList.remove(`hidden`);
  lineupContainer.classList.remove(`hidden`);
  mode2v2 = true;
  selectedPlayerLimit = 4;

  pb1.classList.remove(`hidden`);
  pb2.classList.remove(`hidden`);
  pb3.classList.remove(`hidden`);
  pb4.classList.remove(`hidden`);
  pb5.classList.add(`hidden`);
  pb6.classList.add(`hidden`);
  pb7.classList.add(`hidden`);
  pb8.classList.add(`hidden`);
  pb9.classList.add(`hidden`);
  pb10.classList.add(`hidden`);
});

btnModal2.addEventListener(`click`, function(){
  modesContainer.classList.add(`hidden`);
  modal.classList.remove(`hidden`);
  lineupContainer.classList.remove(`hidden`);
  mode3v3 = true
  selectedPlayerLimit = 6;

  pb1.classList.remove(`hidden`);
  pb2.classList.remove(`hidden`);
  pb3.classList.remove(`hidden`);
  pb4.classList.remove(`hidden`);
  pb5.classList.remove(`hidden`);
  pb6.classList.remove(`hidden`);
  pb7.classList.add(`hidden`);
  pb8.classList.add(`hidden`);
  pb9.classList.add(`hidden`);
  pb10.classList.add(`hidden`);
});

btnModal3.addEventListener(`click`, function(){
  modesContainer.classList.add(`hidden`);
  modal.classList.remove(`hidden`);
  lineupContainer.classList.remove(`hidden`);
  mode4v4 = true;
  selectedPlayerLimit = 8;

  pb1.classList.remove(`hidden`);
  pb2.classList.remove(`hidden`);
  pb3.classList.remove(`hidden`);
  pb4.classList.remove(`hidden`);
  pb5.classList.remove(`hidden`);
  pb6.classList.remove(`hidden`);
  pb7.classList.remove(`hidden`);
  pb8.classList.remove(`hidden`);
  pb9.classList.add(`hidden`);
  pb10.classList.add(`hidden`);
});

btnModal4.addEventListener(`click`, function(){
  modesContainer.classList.add(`hidden`);
  modal.classList.remove(`hidden`);
  lineupContainer.classList.remove(`hidden`);
  mode5v5 = true;
  selectedPlayerLimit = 10;

  pb1.classList.remove(`hidden`);
  pb2.classList.remove(`hidden`);
  pb3.classList.remove(`hidden`);
  pb4.classList.remove(`hidden`);
  pb5.classList.remove(`hidden`);
  pb6.classList.remove(`hidden`);
  pb7.classList.remove(`hidden`);
  pb8.classList.remove(`hidden`);
  pb9.classList.remove(`hidden`);
  pb10.classList.remove(`hidden`);
});



/////////////////////////////////////guest checkboxes

guest1text.addEventListener(`keyup`, function(){
  if(guest1text.value){
  guest1.classList.remove('hidden');
  dummy1.classList.add(`hidden`)
  }else{
    guest1.classList.add('hidden');
    dummy1.classList.remove(`hidden`)
  }
})

guest2text.addEventListener(`keyup`, function(){
  if(guest2text.value){
  guest2.classList.remove('hidden');
  dummy2.classList.add(`hidden`)
  }else{
  guest2.classList.add('hidden');
  dummy2.classList.remove(`hidden`)}
})

guest3text.addEventListener(`keyup`, function(){
  if(guest3text.value){
  guest3.classList.remove('hidden');
  dummy3.classList.add(`hidden`)
  }else{
  guest3.classList.add('hidden');
  dummy3.classList.remove(`hidden`);
  }
})

guest4text.addEventListener(`keyup`, function(){
  if(guest4text.value){
  guest4.classList.remove('hidden');
  dummy4.classList.add(`hidden`)
  }else{
  guest4.classList.add('hidden');
  dummy4.classList.remove(`hidden`)}
})

guest5text.addEventListener(`keyup`, function(){
  if(guest5text.value){
  guest5.classList.remove('hidden');
  dummy5.classList.add(`hidden`)
  }else{
  guest5.classList.add('hidden');
  dummy5.classList.remove(`hidden`)
}
})


//////clicks checkmark and adds/removes name from selectedPlayerArray

for(let i = 0; i < player.length; i++){
  player[i].addEventListener('click', function(){
  console.log(selectedPlayerLimit);

   if(selectedPlayerArray.length < selectedPlayerLimit){
        if(player[i].classList.contains(`g1`)){
            player[i].id = guest1text.value;
        }else if(player[i].classList.contains(`g2`)){
          player[i].id = guest2text.value;
        }else if(player[i].classList.contains(`g3`)){
          player[i].id = guest3text.value;
        }else if(player[i].classList.contains(`g4`)){
          player[i].id = guest4text.value;
        }else if(player[i].classList.contains(`g5`)){
          player[i].id = guest5text.value;
        }


        if(checkBoxChecked[i].classList.contains(`hidden`)){
           selectedPlayerArray.push(`${player[i].id}`);
           checkBoxChecked[i].classList.toggle(`hidden`);
           checkBox[i].classList.toggle(`hidden`);
          console.log(selectedPlayerArray);

        }else{
          let found = selectedPlayerArray.indexOf(`${player[i].id}`);
          selectedPlayerArray.splice(found, 1);
          checkBoxChecked[i].classList.toggle(`hidden`);
          checkBox[i].classList.toggle(`hidden`);
          console.log(selectedPlayerArray);
        }
  }else if(selectedPlayerArray.length >= selectedPlayerLimit){
       if(checkBoxChecked[i].classList.contains(`hidden`)){

         warning1.classList.remove(`hidden`);
         warningContainer.classList.remove(`hidden`);

         console.log(`too many players`);

         warning1.addEventListener(`click`,function(){
           warning1.classList.add(`hidden`);
           warningContainer.classList.add(`hidden`);
         });

          }else{
            let found = selectedPlayerArray.indexOf(`${player[i].id}`);
            selectedPlayerArray.splice(found, 1);
            // selectedPlayerArray.pop(player[i].id);
            checkBoxChecked[i].classList.toggle(`hidden`);
            checkBox[i].classList.toggle(`hidden`);
            console.log(selectedPlayerArray);
          }
        }
  });
}


///////////////randomize the array
function shuffle(array){
let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
/////////////////map selected players array to mode array
function map(array){
  for(let i=0; i<selectedPlayerArray.length; i++){
      array[i]=selectedPlayerArray[i];
    }
  }

//map(array2v2)
//////////////////


btnRandomize.addEventListener(`click`, function(){
  console.log(`button pressed`);
  if(selectedPlayerLimit <= selectedPlayerArray.length){
  shuffle(selectedPlayerArray);
  if(mode2v2){
  map(array2v2);
  spot1.textContent=array2v2[0];
  spot2.textContent=array2v2[1];
  spot3.textContent=array2v2[2];
  spot4.textContent=array2v2[3];
  }else if (mode3v3){
    map(array3v3);
    spot1.textContent=array3v3[0];
    spot2.textContent=array3v3[1];
    spot3.textContent=array3v3[2];
    spot4.textContent=array3v3[3];
    spot5.textContent=array3v3[4];
    spot6.textContent=array3v3[5];
  }else if(mode4v4){
    map(array4v4);
    spot1.textContent=array4v4[0];
    spot2.textContent=array4v4[1];
    spot3.textContent=array4v4[2];
    spot4.textContent=array4v4[3];
    spot5.textContent=array4v4[4];
    spot6.textContent=array4v4[5];
    spot7.textContent=array4v4[6];
    spot8.textContent=array4v4[7];
  }else if(mode5v5){
    map(array5v5);
    spot1.textContent=array5v5[0];
    spot2.textContent=array5v5[1];
    spot3.textContent=array5v5[2];
    spot4.textContent=array5v5[3];
    spot5.textContent=array5v5[4];
    spot6.textContent=array5v5[5];
    spot7.textContent=array5v5[6];
    spot8.textContent=array5v5[7];
    spot9.textContent=array5v5[8];
    spot10.textContent=array5v5[9];
  }
  console.log(selectedPlayerArray);
  console.log(array2v2);
  console.log(array3v3);
  console.log(array4v4);
  console.log(array5v5);
  }else{
    warning2.classList.remove(`hidden`);
    warningContainer.classList.remove(`hidden`);

    warning2.addEventListener(`click`, function(){
      warning2.classList.add(`hidden`);
      warningContainer.classList.add(`hidden`);
    })
    // prompt(`Not enough players selected`);
  }});

////back button/////////
btnBack1.addEventListener(`click`, function(){
  modal.classList.add(`hidden`);
  modesContainer.classList.remove(`hidden`);
  lineupContainer.classList.add(`hidden`);
  mode2v2 = false;
  mode3v3 = false;
  mode4v4 = false;
  mode5v5 = false;

for(let i=0; i < player.length; i++){
    checkBox[i].classList.remove(`hidden`);
    checkBoxChecked[i].classList.add(`hidden`);

    selectedPlayerArray = [];
    array2v2= [];
    array3v3= [];
    array4v4= [];
    array5v5 = [];
    spot1.textContent='';
    spot2.textContent='';
    spot3.textContent='';
    spot4.textContent='';
    spot5.textContent='';
    spot6.textContent='';
    spot7.textContent='';
    spot8.textContent='';
    spot9.textContent='';
    spot10.textContent='';
}
  });

////clear button///////////
btnClear1.addEventListener(`click`, function(){
  for(let i=0; i < player.length; i++){
    checkBox[i].classList.remove(`hidden`);
    checkBoxChecked[i].classList.add(`hidden`);

    
    
    if(mode2v2){
      selectedPlayerLimit = 4;
    }else if(mode3v3){
      selectedPlayerLimit=6;
    }else if(mode4v4){
      selectedPlayerLimit=8;
    }else if(mode5v5){
      selectedPlayerLimit=10;
    }
    selectedPlayerArray = [];
    array2v2= [];
    array3v3= [];
    array4v4= [];
    array5v5 = [];
    spot1.textContent='';
    spot2.textContent='';
    spot3.textContent='';
    spot4.textContent='';
    spot5.textContent='';
    spot6.textContent='';
    spot7.textContent='';
    spot8.textContent='';
    spot9.textContent='';  
    spot10.textContent='';

}
for(let y = 0; y < guestList.length; y++){
  guestList[y].value="";
  guest[y].classList.add('hidden');
  dummies[y].classList.remove('hidden');
}
});


