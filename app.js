let link1 = document.querySelector('.link1')
let link2 = document.querySelector('.link2')

let change = document.querySelector('.change')

change.addEventListener('click', function(){

if(link2.classList.contains('active')){
    link2.classList.remove('active')
    link1.classList.add('active')
    change.classList.remove('new')
}
else{
    link2.classList.add('active')
    change.classList.add('new')
    link1.classList.remove('active')
}
 
});