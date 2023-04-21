//navbar
const navMenu = document.getElementById("nav-list-btn");
const navList = document.getElementById("nav-list");

navMenu.addEventListener('click',()=>
{
    navList.classList.toggle("hidden");
})

//login modal and login button code start
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('loginModal');
const closeLoginModal = document.getElementById('closeLoginModal');

//open login modal
loginBtn.addEventListener('click',()=>
{
    loginModal.classList.toggle("hidden");
    setTimeout(()=>{
        navList.classList.toggle("hidden");
    },0)
})
// close login modal
closeLoginModal.addEventListener('click',()=>
{
    loginModal.classList.toggle("hidden");
})
//login modal and login button code end