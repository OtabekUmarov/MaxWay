const bars = document.querySelector('.bars');
const menumodal = document.querySelector('.menumodal')
const exit = document.querySelector('.exit')
const hideUl = document.querySelectorAll('.hide__ul')
const showUl = document.querySelectorAll('.show__ul')
const topSum = document.querySelector('.top')
var counter = document.querySelector('.count')
var counterMobile = document.querySelector('.countMobile')
var summa = document.querySelector('.narx')
var soni = document.querySelector('.soni')
var korzina = document.querySelector('.korzina')
var modal = document.querySelector('.modal')
var summasi = document.querySelector('.summasi')
var modalexit = document.querySelector('.exit-div')
const filtrItem = document.querySelectorAll('.filtr__item')
const korzinaMobile = document.querySelector('.korzinaMobile')
window.addEventListener('scroll',()=>{
    if(window.scrollY>400) {
        korzinaMobile.classList.add('active')
    }
    else {
        korzinaMobile.classList.remove('active')
    }
});

bars.addEventListener('click',()=>{
    menumodal.classList.add('active')
})


exit.addEventListener('click',()=>{
    menumodal.classList.remove('active')
})

for(let i=0; i < hideUl.length; i++){
    hideUl[i].addEventListener('click',()=>{
        showUl[i].classList.toggle('active')
    })
}



var zakaz = 0
var umumiy = 0

function count(t){
    zakaz ++
    sum = t.getAttribute('data-narx');
    sum = sum.replace(/,/ig,'')
    sum = parseInt(sum)
    umumiy += sum
    counter.innerHTML = zakaz
    counterMobile.innerHTML = zakaz
    summa.innerHTML = umumiy
    topSum.classList.add('active')
}
topSum.addEventListener('click', ()=>{
    topSum.classList.remove('active')
})
korzina.addEventListener('click', ()=>{
    modal.classList.add('show')
    soni.innerHTML = zakaz 
    summasi.textContent = umumiy
})
korzinaMobile.addEventListener('click',()=>{
    modal.classList.add('show')
    soni.innerHTML = zakaz 
    summasi.textContent = umumiy
})
modalexit.addEventListener('click', ()=>{
    modal.classList.remove('show')
})
var buttons = document.querySelectorAll('.filtr__item')
var items = document.querySelectorAll('.theme')
buttons.forEach(i => {
    i.addEventListener('click',(e)=>{
        document.querySelector('.filtr__item.active').classList.remove('active')
        i.classList.add('active')
        e.preventDefault()
        var link = i.getAttribute('data-filter') 
        items.forEach(item => {
            if (link == 'barchasi')
                item.style.display = 'block'
            else if (item.classList.contains(link)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })
})


var card = document.querySelector('.card')
var cont = document.querySelector('.cont')
var pitsa = document.querySelector('.pitsa')
var title = document.querySelector('.title__mixin')
var hammasini = document.querySelector('.hammasi')
var pitsaHeight = card.clientHeight;
var titleHeight = title.clientHeight;

if (window.innerWidth <= 766){
    hide()
}
function hide(){
    cont.style.height = pitsaHeight * 3 + titleHeight + 100 + 'px';
    pitsa.style.overflow = 'hidden';
    hammasini.style.display = 'block'
}

function alll(){
    cont.style.height = '100%'
    hammasini.style.display = 'none'
}