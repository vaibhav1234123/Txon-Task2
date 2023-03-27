function calculator(){
    let display=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let clean=document.querySelector('.clear');
    let cutt=document.querySelector('.cutt');
    let equal=document.querySelector('.equal');
    buttons.forEach(function(albtn){
        albtn.addEventListener('click',function(a){
            let number=a.target.dataset.num;
            display.value+=number;
        })
    });
    clean.addEventListener('click',function(){
        if(display.value===display.value){
            display.value='';
        }
    });
    cutt.addEventListener('click',function(){
        if(display.value===display.value){
            display.value=display.value.toString().slice(0,-1);
        }
    });
    equal.addEventListener('click',function(){
        if(display.value===display.value){
            let result=eval(display.value);
            display.value=result;
        }
    })
}
calculator()