const ytFrameElement = document.getElementById("ytFrame");

const ytLinks = document.querySelectorAll(".yt-link");

//YT LINKS
const links = [
  "https://www.youtube.com/embed/VU1SX5FuG5U?si=2uNT1Jp00Sh7grc0",
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
