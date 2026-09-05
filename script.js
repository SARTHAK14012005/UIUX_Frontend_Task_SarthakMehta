/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageId) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const selectedPage = document.getElementById(pageId);

  if (selectedPage) {
    selectedPage.classList.add("active");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");

  menu.classList.toggle("show");
}


/* =====================================================
   SCROLL
===================================================== */

function scrollToSection(sectionId) {

  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}


/* =====================================================
   COURSE FILTER
===================================================== */

function filterCourses(category, button) {

  const buttons = document.querySelectorAll(".filter");

  buttons.forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  const courses = document.querySelectorAll(".course-item");

  courses.forEach(course => {

    const courseCategory = course.dataset.category;

    if (category === "all" || courseCategory === category) {
      course.classList.remove("hidden");
    } else {
      course.classList.add("hidden");
    }

  });
}


/* =====================================================
   LOGIN
===================================================== */

function loginUser(event) {

  event.preventDefault();

  const email = document.getElementById("email").value;

  if (email.trim() !== "") {

    alert("Login successful! Welcome to DroneTV.");

    showPage("dashboard");

  }

}


/* =====================================================
   PASSWORD VISIBILITY
===================================================== */

function togglePassword() {

  const password = document.getElementById("password");

  const button = password.parentElement.querySelector("button");

  if (password.type === "password") {

    password.type = "text";
    button.textContent = "Hide";

  } else {

    password.type = "password";
    button.textContent = "Show";

  }

}


/* =====================================================
   CLOSE MOBILE MENU ON RESIZE
===================================================== */

window.addEventListener("resize", function () {

  if (window.innerWidth > 1000) {

    document.getElementById("mobileMenu")
      .classList.remove("show");

  }

});