"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL
  let currentUrl = window.location.href;

  // Check if the current URL matches the Dogs page
  if (currentUrl.includes("index.html")) {
    // Add active class to the Dogs link
    document.getElementById("home-btn").classList.add("active-link");

    console.log("index page");
  } else if (currentUrl.includes("form.html")) {
    // Add active class to the Dogs link
    document.getElementById("form-btn").classList.add("active-link");

    console.log("FormPage");
  } else {
    // Add active class to the Dogs link
    document.getElementById("pet-btn").classList.add("active-link");
  }
});
