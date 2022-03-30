

const title = [
'Svezia',
'Svizzera',
'Gran Bretagna',
'Germania',
'Paradise'
]

const text = [
'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
'Lorem ipsum',
'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


let puntatore = 0;
let listaimmagini = document.getElementsByClassName('item')

let next = document.querySelector('.angel-top');
console.log(next)
next.addEventListener('click', prox);
function prox(){
    listaimmagini[puntatore].classList.remove("active");
    puntatore += 1; 
    if (puntatore > (listaimmagini.length - 1)){
        puntatore = 0
    }
    listaimmagini[puntatore].classList.add("active");
}

let prev = document.querySelector('.angel-bottom');
console.log(prev)
prev.addEventListener('click', prex);
function prex(){
    listaimmagini[puntatore].classList.remove("active");
    puntatore += -1; 
    if (puntatore < 0){
        puntatore = (listaimmagini.length - 1)
    }
    listaimmagini[puntatore].classList.add("active");
}