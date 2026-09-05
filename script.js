/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageId) {

    // Hide ALL pages
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    // Show ONLY selected page
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Close mobile menu
    const mobileMenu = document.querySelector(".mobile-menu");

    if (mobileMenu) {
        mobileMenu.classList.remove("show");
    }
}


/* =====================================================
   AUTH STATE / NAVBAR
===================================================== */

function updateNavForAuth(loggedIn) {

  const loginLink = document.querySelector(".login-link");
  const joinBtn = document.querySelector(".nav-actions .primary-btn");
  const mobileLoginLink = document.querySelector(
    '.mobile-menu a[onclick*="login"]'
  );

  if (loggedIn) {

    loginLink.textContent = "Dashboard";
    loginLink.onclick = () => showPage("dashboard");

    if (joinBtn) {
      joinBtn.textContent = "Logout";
      joinBtn.onclick = () => logoutUser();
    }

    if (mobileLoginLink) {
      mobileLoginLink.textContent = "Dashboard";
      mobileLoginLink.onclick = () => {
        showPage("dashboard");
        toggleMenu();
      };
    }

  } else {

    loginLink.textContent = "Login";
    loginLink.onclick = () => showPage("login");

    if (joinBtn) {
      joinBtn.textContent = "Join Ecosystem";
      joinBtn.onclick = () => showPage("courses");
    }

    if (mobileLoginLink) {
      mobileLoginLink.textContent = "Login";
      mobileLoginLink.onclick = () => {
        showPage("login");
        toggleMenu();
      };
    }

  }

}

function logoutUser() {
  updateNavForAuth(false);
  showPage("home");
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

    updateNavForAuth(true);

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
