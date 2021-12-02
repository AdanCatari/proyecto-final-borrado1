addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.navToggle')
    if(navToggle){
        navToggle.addEventListener('click' , () =>{
            const menuBarra = document.querySelector('.menuBarra')
            menuBarra.classList.toggle('show')
        })
    }
})