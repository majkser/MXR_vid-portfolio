const ytFrameElement = document.getElementById("ytFrame");

const ytLinks = document.querySelectorAll(".yt-link");

//YT LINKS
const links = [
  "https://www.youtube.com/embed/QzIVKJBwLfA?si=5qdMiAlic2bD5jLE",
  "https://www.youtube.com/embed/nz3di1xA6FM?si=h_etIRyj4IPOm0GY",
  "https://www.youtube.com/embed/tfXVENBMYIg?si=c3LiCgO62-6qUELl",
  "https://www.youtube.com/embed/6cT0TqF-1w0?si=Sck8nic56IyO5iRs",
  "https://www.youtube.com/embed/24T23LulWeA?si=GJPUfcV0KoQezEz6",
  "https://www.youtube.com/embed/84l8fGwjOMs?si=OzgSUYPw4WfmcJ7U",
];

function changeSrc(link, event) {
  ytFrameElement.src = link;
  event.preventDefault();
}

function addYtLinks(elements, links) {
  if (elements.length !== links.length) {
    console.log("Error with setting yt links!");
  } else {
    elements.forEach((element, index) => {
      element.addEventListener("click", (event) =>
        changeSrc(links[index], event)
      );
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Query all carousel elements
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach(function (carousel) {
    // Initialize each carousel with the 'pause' option set to false
    new bootstrap.Carousel(carousel, {
      pause: false,
    });
  });
});

//START
addYtLinks(ytLinks, links);

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scorll !== 0) {
    header.classList.add("transparent");
  } else {
    header.classList.remove("transparent");
  }
});

window.addEventListener("load", function () {
  const iframe = document.getElementById("ytFrame");
  iframe.style.opacity = 1;

  const div = document.getElementsByClassName("col-4");
  div.style.opacity = 1;
});

const chceckVisibility = () => {
  const elementsToAnimate = document.querySelectorAll(".opacityResize");
  const elementsToAnimate2 = document.querySelectorAll(".slideIn");
  const elementsToAnimate3 = document.querySelectorAll(".slideIn2");
  const elementsToAnimate4 = document.querySelectorAll(".opacityResizePhone");

  elementsToAnimate.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && rect.bottom >= 0) {
      element.classList.add("visible");
    } else {
      return;
    }
  });

  elementsToAnimate2.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && rect.bottom >= 0) {
      element.classList.add("visible");
    } else {
      return;
    }
  });

  elementsToAnimate3.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && rect.bottom >= 0) {
      element.classList.add("visible");
    } else {
      return;
    }
  });

  elementsToAnimate4.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && rect.bottom >= 0) {
      element.classList.add("visible");
    } else {
      return;
    }
  });
};

document.addEventListener("visibilitychange", function () {
  const title = document.querySelector("title");

  if (document.visibilityState === "hidden") {
    setTimeout(() => {
      title.innerHTML = "🎥 Wróć po najlepsze klipy!";
    }, 3000);
  } else {
    title.innerHTML = "MXR VIDEO";
  }
});

window.addEventListener("scroll", chceckVisibility);
window.addEventListener("load", chceckVisibility);
window.addEventListener("resize", chceckVisibility);

// Mobile menu
const toggleBtn = document.querySelector("#hamburger");

const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuClose = document.querySelector(".mobile-menu-close");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu li");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show-mobile");
});

document.addEventListener("DOMContentLoaded", () => {
  const updateHeaderHeight = () => {
    const headerHeight = document.querySelector("header").offsetHeight;
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerHeight}px`
    );
  };

  // Update on load and resize
  updateHeaderHeight();
  window.addEventListener("resize", updateHeaderHeight);
});
