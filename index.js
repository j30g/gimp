function nav(){
    var nav=document.querySelector('#nav');
    var list=document.querySelector('#hiddenList');
    if(nav.checked==true){
        list.style.display='block';
    }else{
        list.style.display='none';
    }
}