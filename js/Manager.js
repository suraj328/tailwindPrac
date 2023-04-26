// drop down for department
const departmentDropDownBtn = document.getElementById("departmentDropDownBtn");
const departmentDropDownList = document.getElementById("departmentDropDownList");

const departmentListShowHide = ()=>{
    departmentDropDownList.classList.toggle("hidden");
}

departmentDropDownBtn.addEventListener('click',departmentListShowHide,false)

// drop down for user setting
const profileDropDownBtn = document.getElementById("profileDropDownBtn");
const profileDropDownList = document.getElementById("profileDropDownList");

const profileListShowHide = ()=>{
    profileDropDownList.classList.toggle("hidden");
}

profileDropDownBtn.addEventListener('click',profileListShowHide,false);

// for sidebar
const logoSidebarBtn = document.getElementById("logoSidebarBtn");
const logoSidebar = document.getElementById("logoSidebar");
const logoSidebarShowHide = ()=>{
    logoSidebar.classList.toggle("-translate-x-full");
};

logoSidebarBtn.addEventListener('click',logoSidebarShowHide,false);



// add departemnt
const addDepartment =  document.getElementById("addDepartment");
const addDepartmentShowHide = ()=>{
    alert("you have click on add btn")
};
addDepartment.addEventListener('click',addDepartmentShowHide,false);

// for active link
const hoverLink =  document.querySelectorAll(".hover-link");

hoverLink.forEach(hoverLinkElement => {
    hoverLinkElement.addEventListener('click', () => {
      hoverLink.forEach(element => {
        if (element !== hoverLinkElement) {
          element.classList.remove('active');
        } 
      });
      hoverLinkElement.classList.add('active');
    });
  });


