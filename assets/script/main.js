const texto = document.getElementById('email');

texto.addEventListener('click',()=>{
    const form = document.getElementById('formulario'); 

    if (form.style.display == 'none'){
        form.style.display ='block'
    }else{
        form.style.display = 'none';
    }
});
