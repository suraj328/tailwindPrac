const emailRegx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const spaceRegx = /\s/;
const addressRegx = /[-,]/;
const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/;
//navbar
const navMenu = document.getElementById("nav-list-btn");
const navList = document.getElementById("nav-list");

navMenu.addEventListener("click", () => {
  navList.classList.toggle("hidden");
});

//login modal and login button code start
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeLoginModal = document.getElementById("closeLoginModal");

//open login modal
loginBtn.addEventListener("click", () => {
  loginModal.classList.toggle("hidden");
  setTimeout(() => {
    navList.classList.toggle("hidden");
  }, 0);
});
// close login modal
closeLoginModal.addEventListener("click", () => {
  loginModal.classList.toggle("hidden");
});
//login modal and login button code end

// signup modal
var signUpEmailBool = false;
var signUpFullNameBool = false;
var signUpNumberBool = false;
var signupSlideQueue = -1;

const signUpNext = document.getElementById("signUpNext");
const signUpPrev = document.getElementById("signUpPrev");
const signUpEmail = document.getElementById("signUpEmail");
const signUpFullName = document.getElementById("signUpFullName");
const signUpNumber = document.getElementById("signUpNumber");
const signUpAddress = document.getElementById("signUpAddress");
const signUpPassword = document.getElementById("signUpPassword");
const signUpRePassword = document.getElementById("signUpRePassword");
// error
const signUpError = document.getElementById("signUpError");

//signup box
const signUpEmailBox = document.getElementById("signUpEmailBox");
const signUpFullNameBox = document.getElementById("signUpFullNameBox");
const signUpNumberBox = document.getElementById("signUpNumberBox");
const signUpAddressBox = document.getElementById("signUpAddressBox");
const signUpPasswordBox = document.getElementById("signUpPasswordBox");

//key listener for input element
// if (signUpEmail.value.trim() != "" && emailRegx.test(signUpEmail.value)) {
//   signUpEmailBool = true;
// } else {
//   signUpEmailBool = false;
// }
signUpEmail.addEventListener("keypress", (e) => {
  if (e.target.value.trim() != "" && emailRegx.test(e.target.value)) {
    // signUpEmailBool = true;
    signupSlideQueue = 0;
    signUpError.innerHTML = "";
  } else {
    signUpEmailBool = false;
    signUpError.innerHTML = `<span>Invalid Email</span>`;
  }
});
// full name
// if (
//   signUpFullName.value.trim() != "" &&
//   spaceRegx.test(signUpFullName.value.trim()) &&
//   signUpFullName.value.trim().length > 6
// ) {
//   signUpFullNameBool = true;
// } else {
//   signUpFullNameBool = false;
// }
signUpFullName.addEventListener("keypress", (e) => {
  if (
    e.target.value.trim() != "" &&
    e.target.value.length > 6 &&
    spaceRegx.test(e.target.value)
  ) {
    // signUpFullNameBool = true;
    signupSlideQueue = 1;

    signUpError.innerHTML = "";
  } else {
    // signUpFullNameBool = true;
    signupSlideQueue = 1;

    signUpError.innerHTML = `<span>too short</span>`;
  }
});
// number
console.log("");
// if (signUpNumber.value.trim() == "") {
//     signUpNumberBool = false;
//     signUpError.innerHTML = `<span>Empty not allowd</span>`;
//   } else if (signUpNumber.value% 1 != 0) {
//     signUpError.innerHTML = `<span>No string allowed</span>`;
//   } else if (signUpNumber.value.length < 10 || signUpNumber.value.length > 10) {
//     signUpNumberBool = false;
//     signUpError.innerHTML = `<span> 10 digit number required </span>`;
//   } else {
//     signUpNumberBool = true;
//     signUpError.innerHTML = "";
//   }
signUpNumber.addEventListener("keypress", (e) => {
  if (e.target.value.trim() == "") {
    signUpNumberBool = false;
    signUpError.innerHTML = "";
    signUpError.innerHTML = `<span>Empty not allowd</span>`;
  } else if (e.target.value % 1 != 0) {
    signUpError.innerHTML = "";
    signUpError.innerHTML = `<span>No string allowed</span>`;
  } else if (e.target.value.length < 9 || e.target.value.length > 9) {
    signUpNumberBool = false;
    signUpError.innerHTML = `<span> 10 digit number required </span>`;
  } else {
    // signUpNumberBool = true;
    signupSlideQueue = 2;
    signUpError.innerHTML = "";
  }
});

signUpAddress.addEventListener("keypress", (e) => {
  // console.log(e.target.value);
  if (e.target.value.trim() == "") {
    signUpError.innerHTML = "";
    signUpError.innerHTML = `<span>Empty not allowed</span>`;
  } else if (e.target.value.trim().length < 5) {
    signUpError.innerHTML = "";
    signUpError.innerHTML = `<span>address is too short</span>`;
  } else if (!addressRegx.test(e.target.value)) {
    signUpError.innerHTML = "";
    signUpError.innerHTML = `<span>Invalid Address <br/> like:-koteshwor-32,Kathmandu </span>`;
  } else {
    signupSlideQueue = 3;
    signUpError.innerHTML = "";
  }
});
var pwd = 0;


signUpPassword.addEventListener("keypress", (e) => {
  
  if (e.target.value.trim() == "") {
    signUpError.innerHTML = "";
    signUpError.innerHTML = `<span>Empty not allowed</span>`;
    pwd = 0;
    signUpRePassword.classList.add("hidden");
  } else if (e.target.value.trim().length < 8) {
    signUpError.innerHTML = "";
    signUpError.innerHTML = `<span>Most Conatain 8 character</span>`;
    pwd = 0;
  signUpRePassword.classList.add("hidden");
  } else if (!pwdRegex.test(e.target.value)) {
    signUpError.innerHTML = "";
    signUpError.innerHTML = `<span>most conatain <br/> small capital sybmol number</span>`;
  } else {
    signUpError.innerHTML = "";
    signUpRePassword.classList.remove("hidden");
    pwd = 1;
  }
});

signUpRePassword.addEventListener("keypress", (e) => {
  
  if (e.target.value.trim() == "") {
    signUpError.innerHTML = "";
    signUpError.innerHTML = `<span>Empty not allowed</span>`;
    
  } else if (e.target.value.trim().length < 8) {
    signUpError.innerHTML = "";
    signUpError.innerHTML = `<span>Most Conatain 8 character</span>`;
   
  } else if (!pwdRegex.test(e.target.value)) {
    signUpError.innerHTML = "";
    signUpError.innerHTML = `<span class ="text-sm">most conatain <br/> small capital sybmol number</span>`;
  }else if((signUpRePassword.value.trim()) != (signUpPassword.value.trim()) ){
    signUpError.innerHTML = "";
    signUpError.innerHTML = `<span>Different Password</span>`;
  } else {
    signUpError.innerHTML = "";
    
    if(pwd == 1){
      signupSlideQueue = 4;
    }
  }
});

//function for hidding and showing slides

const signUpPrevBtnShow = () => {
  signUpPrev.classList.remove("hidden");
};
const signUpPrevBtnHide = () => {
  signUpPrev.classList.add("hidden");
};

const emailNextSlide = () => {
  signUpFullNameBox.classList.remove("hidden");
  signUpEmailBox.classList.add("hidden");
  signUpPrevBtnShow();
};

const emailFullNameNextSlide = () => {
  signUpFullNameBox.classList.add("hidden");
  signUpNumberBox.classList.remove("hidden");
  signUpPrevBtnShow();
};

const signUpNumberNextSlide = () => {
  signUpNumberBox.classList.add("hidden");
  signUpAddressBox.classList.remove("hidden");
  signUpPrevBtnShow();
};

const signUpAddressNextSlide = () => {
  signUpAddressBox.classList.add("hidden");
  signUpPasswordBox.classList.remove("hidden");
  signUpPrevBtnShow();
};

// signup next btn event listener
signUpNext.addEventListener("click", () => {
  // signupSlideQueue = '';

  console.log("next click");

  // if (signUpEmailBool) {
  //   signupSlideQueue = 0;
  //   emailNextSlide();
  // }
  // if (signUpFullNameBool) {
  //   signupSlideQueue = 1;
  //   emailFullNameNextSlide();
  // }
  // if (signUpNumberBool) {
  //   signupSlideQueue = 2;
  //   signUpNumberNextSlide();
  // }

  if (signupSlideQueue == 0) {
    signupSlideQueue = 0;

    emailNextSlide();
  }
  if (signupSlideQueue == 1) {
    signupSlideQueue = 1;

    emailFullNameNextSlide();
  }
  if (signupSlideQueue == 2) {
    signupSlideQueue = 2;

    signUpNumberNextSlide();
  }
  if (signupSlideQueue == 3) {
    signupSlideQueue = 3;
    signUpAddressNextSlide();
  }
});

// signup prev btn event listener

const addressPrevSlide = () => {
  signUpAddressBox.classList.add("hidden");
  signUpNumberBox.classList.remove("hidden");
};
const numberPrevSlide = () => {
  signUpNumberBox.classList.add("hidden");
  signUpFullNameBox.classList.remove("hidden");
};

const fullNamePrevSlide = () => {
  signUpFullNameBox.classList.add("hidden");
  signUpEmailBox.classList.remove("hidden");
  signUpPrevBtnHide();
};
const passwordPrevSlide = () => {
  signUpPasswordBox.classList.add("hidden");
  signUpAddressBox.classList.remove("hidden");
  signUpPrevBtnShow();
};
signUpPrev.addEventListener("click", () => {
  console.log(signupSlideQueue);
  switch (signupSlideQueue) {
    //email
    case 0:
      signupSlideQueue = 0;
      fullNamePrevSlide();
      break;
    //full name
    case 1:
      signupSlideQueue -= 1;
      numberPrevSlide();
      break;
    //number
    case 2:
      signupSlideQueue -= 1;
      addressPrevSlide();
      break;
    // address
    case 3:
      signupSlideQueue -= 1;
      passwordPrevSlide();
      break;
    default:
      break;
  }
});
