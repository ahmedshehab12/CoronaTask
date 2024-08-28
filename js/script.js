const toogle =document.getElementById('toogle');
const navbar =document.getElementById('navbar-default');
toogle.addEventListener('click',()=>{
    navbar.classList.toggle('hidden');  
})

const topButton = document.getElementById('top');
topButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


