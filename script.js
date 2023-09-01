const container = document.querySelector('.container');
const panelContainer = document.querySelector('.panel-container');
const panel = document.querySelectorAll('.panel');

let str='Satisfied';

panelContainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains('image')){
        removeActive();
        e.target.parentNode.classList.add('active');
        str = e.target.nextElementSibling.innerHTML;
        console.log(e.target.nextElementSibling.innerHTML);
    }
})

function removeActive(){
    panel.forEach(pan=>{
        pan.classList.remove('active');
    })
}

function feedbackSent(){
    const element = 
    `<strong>Thanks for submtting your valuabe feedback.</strong>
    <img src="image/heart.png" style="width: 4rem; padding:2rem 0;">
        <br> Feedback : ${str}`
    container.innerHTML=element;
}