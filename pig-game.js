"use strict";

const playerElm0 = document.querySelector('.player--0');
const playerElm1 = document.querySelector('.player--1')

const score0Elm = document.querySelector('#score--0')
const score1Elm = document.querySelector('#score--1')

const currentElm0 = document.getElementById('current--0')
const currentElm1 = document.getElementById('current--1')

const diceElm = document.querySelector('.dice')

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

let score,currentScore, activeplayer, playing;

 
const begin = function(){
    score = [0,0]
    currentScore = 0;
    activeplayer = 0;
    playing = true;

    score0Elm.textContent = 0;
    score1Elm.textContent = 0;
    
    currentElm0.textContent = 0;
    currentElm1.textContent = 0;
    diceElm.classList.add('hidden')

     playerElm0.classList.remove('player--winner')
     playerElm1.classList.remove('player--winner')
     playerElm0.classList.add('player--active')
     playerElm1.classList.remove('player--active')

}

begin()


btnRoll.addEventListener('click', function(){
    if(playing){
        const dice = Math.trunc(Math.random() * 6 ) + 1;
        diceElm.classList.remove('hidden')
        diceElm.src = `dice-${dice}.png`
    
        if(dice !== 1){
         currentScore = currentScore + dice;
         document.getElementById(`current--${activeplayer}`).textContent = currentScore
        } else{
            Switchpalyer()
        }
    }
    
})


const Switchpalyer = function(){
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentScore = 0;
    activeplayer = (activeplayer === 0 ) ? 1 : 0;
    playerElm0.classList.toggle('player--active');
    playerElm1.classList.toggle('player--active');



}

btnHold.addEventListener('click', function(){

    if(playing){
        score[activeplayer] = score[activeplayer] + currentScore;
        document.getElementById(`score--${activeplayer}`).textContent = score[activeplayer]
        
        if(score[activeplayer] >=20){
            playing = false
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active')
    
        }else{
            Switchpalyer()
        }
    }
   
    
})


btnNew.addEventListener('click', begin)





















// console.log(NumberProduct)



// if(!NumberProduct) deleteShopping()

// var NumberProduct = 10;


// function deleteShopping(){
//  console.log('all product is deleted ')
// }





// var NumberProduct = 10;
// console.log(NumberProduct)

// is gelijk aan 

// var NumberProduct;
// NumberProduct = 10
// console.log(NumberProduct)


// als je dit doet 

// console.log(NumberProduct)

// var NumberProduct = 10;

// is gelijk aan 
 

// var NumberProduct;
// console.log(NumberProduct) /// geeft undifened aan 
// NumberProduct = 10;


// bij const en let is al volgs 


// let NumberProduct = 10;
// console.log(NumberProduct)

// is gelijk aan 


// let NumberProduct;
// NumberProduct = 10
// console.log(NumberProduct)

// als je dit doet 


// console.log(NumberProduct)

// let  NumberProduct = 10;

// is gelijk aan 
 

// let  NumberProduct;
// console.log(NumberProduct) refrens error
// NumberProduct = 10

// console.log(this);


// const CalcAge = function (birthyear){
//   console.log(2037 - birthyear)
//   console.log(this) // dit verwijst undefined
// }

// CalcAge(1991)


// const CalcAgearrow  = birthyear =>{
//     console.log(2036 - birthyear)
//     console.log(this)// deze heeft geen eigen this key word dus kijkt ie omhoog dus het verwijst naar de parent function of scope in dit geval is het global
// }

// CalcAge(1911)


// console.log(this)

// const jonas = {
//     firstname: 'jonas',
//     year: 1991,
//     CalcAge : function(){
//         console.log(2037 - this.year)
//         console.log(this)

//         const self = this

//         const ismilenial = function(){
//             console.log(self)
//             console.log(self.year >= 1988 && self.year <= 2000)
//         }
//         ismilenial()

//         const meliana = () =>{
//             console.log(this)
//             console.log(this.year >= 1988 && this.year <= 2000)
//         }
//         meliana()
//     },

//     greet : () =>{
//         console.log(this)
//         console.log( `hey ${this.year}`)
//     }
// } 

// jonas.CalcAge()
// jonas.greet()



// let lastname = 'tim';
// let oldlastname = lastname;
// lastname = 'vandijk';




// const jonna = {
//     lastname: 'dijk',
//     firstname: 'jesse',
//     age: 27
// } 

// const jonnaMR = jonna;

// jonnaMR.lastname = 'jan';
// console.log(jonna)
// console.log(jonnaMR)


// const jonna2 = {
//     lastname: 'dijk',
//     firstname: 'jesse',
//     age: 27,
//     family: ['alica','john']
// } 

// const jonnacoppy = Object.assign({},jonna2)
// jonnacoppy.lastname = 'willem'

// jonnacoppy.family.push('mary')
// jonnacoppy.family.push('joo')
// console.log(jonna2)
// console.log(jonnacoppy)



































































































// const name  = 'a'
// first()

// const first = function(){
//     const b  = 'hello';
//     second()

//     function second(x,y){
//         const c = 'hi'
//         third()
    
//     }
// }

// function third(){
//     const d = 'hey'
//     console.log(d+b+c+a)

// }
























































// let score, currentScore, activeplayer, playing;

// const begin = function(){ 
//      score = [0,0]
//      currentScore = 0;
//      activeplayer = 0;
//      playing = true;


//     currentElm0.textContent = 0;
//     currentElm1.textContent = 0;
    
//     score0Elm.textContent = 0;
//     score1Elm.textContent = 0;
    
//    diceElm.classList.add('hidden')
//    playerElm0.classList.remove('player--winner')
//    playerElm1.classList.remove('player--winner')
//    playerElm0.classList.add('player--active')
//    playerElm1.classList.remove('player--active')
// }

// begin()




// btnRoll.addEventListener('click', function(){
//     if(playing)
//      {
//         const dice = Math.trunc(Math.random() * 6 ) + 1
//         diceElm.classList.remove('hidden')
//         diceElm.src = `dice-${dice}.png`
    
//         if( dice !== 1){
//             currentScore = currentScore + dice
//             document.getElementById(`current--${activeplayer}`).textContent = currentScore
//         }else{
//            Switchplayer()
//         }
//     }
   
// })



// const Switchplayer = function(){ 
//     document.getElementById(`current--${activeplayer}`).textContent = 0;
//     activeplayer = activeplayer === 0 ? 1 : 0 ;
//     currentScore = 0;
//     playerElm0.classList.toggle('player--active');
//     playerElm1.classList.toggle('player--active')

// }



// btnHold.addEventListener('click', function(){

//     if(playing){
//         score[activeplayer] += currentScore;
//         document.getElementById(`score--${activeplayer}`).textContent = score[activeplayer];
    
//         if(score[activeplayer] >= 20){
//         playing = false
//         document.querySelector(`.player--${activeplayer}`).classList.add('player--winner')
//         document.querySelector(`.player--${activeplayer}`).classList.remove('player--active')
        
    
//         }else{
//             Switchplayer()
//         }
//     }
   
// })



// btnNew.addEventListener('click', begin);




