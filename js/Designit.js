const emailRegx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const spaceRegx = /\s/;
const addressRegx = /[-,]/;
const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/;

//file extenson function
var getExtension = (file) => {
  const ext = file.split(".").pop();

  return ext;
};

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

// signup modal code start

// for signup open and close modal
const showSignUpModal = document.getElementById("showSignUpModal");
const closeSignUpModal =  document.getElementById("closeSignUpModal");
const signUpBtn = document.getElementById("signUpBtn");

signUpBtn.addEventListener('click',()=>{
  showSignUpModal.classList.toggle("hidden");
  setTimeout(()=>{
    navList.classList.toggle("hidden");
  },0);
});
closeSignUpModal.addEventListener('click',()=>{
  showSignUpModal.classList.toggle("hidden");
});

var signUpEmailBool = false;
var signUpFullNameBool = false;
var signUpNumberBool = false;
var signupSlideQueue = -1;

const signUpNext = document.getElementById("signUpNext");
const signUpPrev = document.getElementById("signUpPrev");
const signUpSubmitBtn = document.getElementById("signUpSubmit");
const signUpEmail = document.getElementById("signUpEmail");
const signUpFullName = document.getElementById("signUpFullName");
const signUpNumber = document.getElementById("signUpNumber");
const signUpAddress = document.getElementById("signUpAddress");
const signUpPassword = document.getElementById("signUpPassword");
const signUpRePassword = document.getElementById("signUpRePassword");
const signUpImage = document.getElementById("signUpImage");
const signUpFileName = document.getElementById("signUpFileName");
// error
const signUpError = document.getElementById("signUpError");

//signup box
const signUpEmailBox = document.getElementById("signUpEmailBox");
const signUpFullNameBox = document.getElementById("signUpFullNameBox");
const signUpNumberBox = document.getElementById("signUpNumberBox");
const signUpAddressBox = document.getElementById("signUpAddressBox");
const signUpPasswordBox = document.getElementById("signUpPasswordBox");
const signUpImageBox = document.getElementById("signUpImageBox");
const signUpDataBox = document.getElementById("signUpDataBox");

signUpEmail.addEventListener("keypress", (e) => {
  if (e.target.value.trim() != "" && emailRegx.test(e.target.value)) {
    signupSlideQueue = 0;
    signUpError.innerHTML = "";
  } else {
    signupSlideQueue = -1;
    signUpError.innerHTML = `<span>Invalid Email</span>`;
  }
});

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

signUpNumber.addEventListener("keypress", (e) => {
  if (e.target.value.trim() == "") {
    signUpNumberBool = false;
    signUpError.innerHTML = "";
    signUpError.innerHTML = `<span>Empty not allowd</span>`;
  } else if (e.target.value % 1 != 0) {
    signUpError.innerHTML = "";
    signUpError.innerHTML = `<span>No string allowed</span>`;
  } else if (
    e.target.value + e.key.length < 9 ||
    e.target.value + e.key.length > 10
  ) {
    signUpNumberBool = false;
    signUpError.innerHTML = `<span> 10,9 digit number required </span>`;
  } else {
    // signUpNumberBool = true;
    signupSlideQueue = 2;
    signUpError.innerHTML = "";
  }
});

signUpAddress.addEventListener("keypress", (e) => {
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
var rePwd = 0;

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
  } else if (
    (signUpRePassword.value + e.key).trim() != signUpPassword.value.trim()
  ) {
    signUpError.innerHTML = "";
    signUpError.innerHTML = `<span>Different Password</span>`;
  } else {
    signUpError.innerHTML = "";

    if (pwd == 1) {
      signupSlideQueue = 4;
    }
  }
});

signUpImage.addEventListener("change", () => {
  const file = signUpImage.files[0];
  const ext = getExtension(file.name);
  const validExt = ["jpg", "jpeg", "png"];
  const checkExt = validExt.includes(ext);
  signUpFileName.innerHTML = "";
  signUpFileName.innerHTML = file.name;
  if (file.name == "") {
    signUpError.innerHTML = "";
    signUpError.innerHTML = `<span>Upload Image</span>`;
  } else if (!checkExt) {
    signUpError.innerHTML = "";
    signUpError.innerHTML = "<span>" + ext + " is not valid extenson</span>";
  } else if (file.size / 1000 > 600) {
    signUpError.innerHTML = "";
    signUpError.innerHTML =
      "<span>required size < 600 kb <br/>Uploaded file size is " +
      file.size / 1000 +
      " kb </span>";
  } else {
    signUpError.innerHTML = "";
    signupSlideQueue = 5;
  }
});

// signup validation for copy paste use code start
const signUpValidation = (queue) => {
  console.log(queue);
  switch (queue) {
    case -1:
      if (signUpEmail.value.trim() != "" && emailRegx.test(signUpEmail.value)) {
        signupSlideQueue = 0;
        signUpError.innerHTML = "";
      } else {
        signUpEmailBool = -1;
        signUpError.innerHTML = `<span>Invalid Email</span>`;
      }
      break;
    case 0:
      if (
        signUpFullName.value.trim() != "" &&
        signUpFullName.value.length > 6 &&
        spaceRegx.test(signUpFullName.value)
      ) {
        // signUpFullNameBool = true;
        signupSlideQueue = 1;

        signUpError.innerHTML = "";
      } else {
        // signUpFullNameBool = true;
        signupSlideQueue = 0;

        signUpError.innerHTML = `<span>too short</span>`;
      }
      break;
    case 1:
      if (signUpNumber.value.trim() == "") {
        signUpError.innerHTML = "";
        signupSlideQueue = 1;
        signUpError.innerHTML = `<span>Empty not allowd</span>`;
      } else if (signUpNumber.value % 1 != 0) {
        signupSlideQueue = 1;
        signUpError.innerHTML = "";
        signUpError.innerHTML = `<span>No string allowed</span>`;
      } else if (
        signUpNumber.value.length < 9 ||
        signUpNumber.value.length > 10
      ) {
        signupSlideQueue = 1;
        signUpError.innerHTML = `<span> 10,9 digit number required </span>`;
      } else {
        // signUpNumberBool = true;
        signupSlideQueue = 2;
        signUpError.innerHTML = "";
      }
      break;
    case 2:
      if (signUpAddress.value.trim() == "") {
        signupSlideQueue = 2;
        signUpError.innerHTML = "";
        signUpError.innerHTML = `<span>Empty not allowed</span>`;
      } else if (signUpAddress.value.trim().length < 5) {
        signupSlideQueue = 2;
        signUpError.innerHTML = "";
        signUpError.innerHTML = `<span>address is too short</span>`;
      } else if (!addressRegx.test(signUpAddress.value)) {
        signupSlideQueue = 2;
        signUpError.innerHTML = "";
        signUpError.innerHTML = `<span>Invalid Address <br/> like:-koteshwor-32,Kathmandu </span>`;
      } else {
        signupSlideQueue = 3;
        signUpError.innerHTML = "";
      }
      break;
    case 3:
      if (signUpPassword.value.trim() == "") {
        signUpError.innerHTML = "";
        signUpError.innerHTML = `<span>Empty not allowed</span>`;
        pwd = 0;
        signUpRePassword.classList.add("hidden");
      } else if (signUpPassword.value.trim().length < 8) {
        signUpError.innerHTML = "";
        signUpError.innerHTML = `<span>Most Conatain 8 character</span>`;
        pwd = 0;
        signUpRePassword.classList.add("hidden");
      } else if (!pwdRegex.test(signUpPassword.value)) {
        signUpError.innerHTML = "";
        signUpError.innerHTML = `<span>most conatain <br/> small capital sybmol number</span>`;
      } else {
        signUpError.innerHTML = "";
        signUpRePassword.classList.remove("hidden");
        pwd = 1;
      }
      // re password
      if (signUpRePassword.value.trim() == "") {
        signUpError.innerHTML = "";
        signUpError.innerHTML = `<span>Empty not allowed</span>`;
      } else if (signUpRePassword.value.trim().length < 8) {
        signUpError.innerHTML = "";
        signUpError.innerHTML = `<span>Most Conatain 8 character</span>`;
      } else if (!pwdRegex.test(signUpRePassword.value)) {
        signUpError.innerHTML = "";
        signUpError.innerHTML = `<span class ="text-sm">most conatain <br/> small capital sybmol number</span>`;
      } else if (signUpRePassword.value.trim() != signUpPassword.value.trim()) {
        signUpError.innerHTML = "";
        signUpError.innerHTML = `<span>Different Password</span>`;
      } else {
        signUpError.innerHTML = "";

        if (pwd == 1) {
          signupSlideQueue = 4;
        }
      }
      break;
    case 4:
      const file = signUpImage.files[0];
      const ext = getExtension(file.name);
      const validExt = ["jpg", "jpeg", "png"];
      const checkExt = validExt.includes(ext);

      if (file.name == "") {
        signUpError.innerHTML = "";
        signUpError.innerHTML = `<span>Upload Image</span>`;
      } else if (!checkExt) {
        signUpError.innerHTML = "";
        signUpError.innerHTML =
          "<span>" + ext + " is not valid extenson</span>";
      } else if (file.size / 1000 > 600) {
        signUpError.innerHTML = "";
        signUpError.innerHTML =
          "<span>required size < 600 kb <br/>Uploaded file size is " +
          file.size / 1000 +
          " kb </span>";
      } else {
        signUpError.innerHTML = "";
        signupSlideQueue = 5;
      }
      break;
    default:
      break;
  }
};

// signup validation for copy paste user code end

//function for hidding and showing slides
//btn hide show code start
const signUpNextBtnShow = () => {
  signUpNext.classList.remove("hidden");
};
const signUpNextBtnHide = () => {
  signUpNext.classList.add("hidden");
};
const signUpPrevBtnShow = () => {
  signUpPrev.classList.remove("hidden");
};
const signUpPrevBtnHide = () => {
  signUpPrev.classList.add("hidden");
};
//btn hide show code end

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
const signUpPasswordNextSlide = () => {
  signUpPasswordBox.classList.add("hidden");
  signUpImageBox.classList.remove("hidden");
  signUpPrevBtnShow();
};
const signUpImageNextSlide = () => {
  signUpNextBtnHide();
  signUpImageBox.classList.add("hidden");
  signUpDataBox.classList.remove("hidden");
  signUpSubmitBtn.classList.remove("hidden");
  signUpPrevBtnShow();
};

const signUpData = () => {
  var signUpData = `
    <ul class="text-black p-2 m-4 dark:bg-white  dark:text-white">
      <li>Verify Your Data</li>
      <li>email: ${signUpEmail.value}</li>
      <li>Name : ${signUpFullName.value} </li>
      <li>Number : ${signUpNumber.value}</li>
      <li>Address : ${signUpAddress.value}</li>
      <li>logo : ${signUpImage.files[0].name}</li>
    </ul>
  `;
  signUpDataBox.innerHTML = signUpData;
};
// ---------------signup next btn event listener----------------
signUpNext.addEventListener("click", () => {
  console.log("next click");

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
  if (signupSlideQueue == 4) {
    signupSlideQueue = 4;
    signUpPasswordNextSlide();
  }
  if (signupSlideQueue == 5) {
    signupSlideQueue = 5;
    signUpData();
    signUpImageNextSlide();
  }
  signUpValidation(signupSlideQueue);
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
const imagePrevSlide = () => {
  signUpImageBox.classList.add("hidden");
  signUpPasswordBox.classList.remove("hidden");
  signUpPrevBtnShow();
};
const submitPrevSlide = () => {
  signUpDataBox.classList.add("hidden");
  signUpSubmitBtn.classList.add("hidden");
  signUpImageBox.classList.remove("hidden");
  signUpNextBtnShow();
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
    case 4:
      signupSlideQueue -= 1;
      imagePrevSlide();
      break;
    case 5:
      signupSlideQueue -= 1;
      submitPrevSlide();
      break;
    default:
      break;
  }
});
