document.querySelector('.menu-bar').addEventListener('click',()=>{
    document.querySelector('.links-ul-mobile').classList.toggle('actives')
    document.querySelector('.resirvation__app').classList.toggle('actives')
})



document.querySelectorAll('.lists__app span').forEach((span)=>{
    if(span.classList.contains('active__links')){
        span.querySelector('a').style.color="#fff" 
    }
})