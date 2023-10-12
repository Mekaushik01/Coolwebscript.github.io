const spotlightSize = 400;
document.addEventListener('mousemove', function (e) {
  if (window.e) { // IE fix
    e = window.e;
  }
  let titleRect = document.querySelector('.highlight').getBoundingClientRect();

  // Grab the mouse's X-position
  let mouseX = e.clientX;

  // Position spotlight x coordinate based on mouse x, center based on width of spotlight, take into account element x offset
  let spotlightX = mouseX - (spotlightSize / 2) - titleRect.left;

  // Grab the mouse's Y position
  let mouseY = e.clientY;

  // Position spotlight y coordinate based on mouse y, center based on width of spotlight, take into account element y offset
  let spotlightY = mouseY - (spotlightSize / 2) - titleRect.top;

  // Set x and y position of spotlight
  const element = document.querySelector('.highlight');
  element.style.backgroundPosition = spotlightX + 'px ' + spotlightY + 'px';
}, false);

// to show and hide navbar
window.onscroll = function () {
  var elm = Math.round(document.querySelector('.hero').offsetHeight);
  var stat = "";
  var currentScrollPos =Math.round(window.scrollY);
  if (currentScrollPos > elm || currentScrollPos == 0) {
    document.getElementById("header_").style.top = "0";
  } else {
    document.getElementById("header_").style.top = "-10vh";
  }
  }

  // scroolspy
    // Add scroll event listener
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#navbar a");
      let current = "";
      console.log("hi")

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 2) {
          current = section.getAttribute("id");
        }
      });

      // Add the "active" class to the current navigation link
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === current) {
          link.classList.add("active");
        }
      });
    });
