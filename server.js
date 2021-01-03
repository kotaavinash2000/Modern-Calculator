const buttons=document.querySelectorAll('.button');
const screen=document.querySelector('.text');
const equal=document.querySelector('.button-equal');
const clearbtn=document.querySelector('.button-clear');

    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click',function(){
            let number=buttons[i].getAttribute('value');
            screen.value+=number;
    });
}
equal.addEventListener('click',function(){
    let value=eval(screen.value);
    screen.value=value;

})
clearbtn.addEventListener('click',function(){
    screen.value='';
});