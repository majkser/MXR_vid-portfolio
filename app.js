const ytFrameElement = document.getElementById("ytFrame");

const ytLinks = document.querySelectorAll(".yt-link");

//YT LINKS
const links = [
  "https://www.youtube.com/embed/AdJH8bMYa0A?si=3ptjQx0YqZxFVh1i",
  "https://www.youtube.com/embed/fGD3M8FsuOw?si=bZSw30fk9SMrjpNS",
  "https://www.youtube.com/embed/tfXVENBMYIg?si=c3LiCgO62-6qUELl",
  "https://www.youtube.com/embed/Gu0pw0sGc58?si=ktcpFRcT9JnoeFDg",
  "https://www.youtube.com/embed/24T23LulWeA?si=GJPUfcV0KoQezEz6",
  "https://www.youtube.com/embed/HQuSY1cSmro?si=Dxvm0bTufUl-hfOu",
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

  elementsToAnimate.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < (window.innerHeight - 100) && rect.bottom >= 0) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
};

window.addEventListener("scroll", chceckVisibility);
window.addEventListener("load", chceckVisibility);
window.addEventListener("resize", chceckVisibility);
