const ytFrameElement = document.getElementById("ytFrame");
const firstLink = document.getElementById("firstLink");
const secondLink = document.getElementById("secondLink");
const thirdLink = document.getElementById("thirdLink");
const fourthLink = document.getElementById("fourthLink");
const fifthLink = document.getElementById("fifthLink");
const sixthLink = document.getElementById("sixthLink");

function changeSrc1() {
   ytFrameElement.src = "https://www.youtube.com/embed/VU1SX5FuG5U?si=2uNT1Jp00Sh7grc0" 
}

function changeSrc2() {
   ytFrameElement.src = "https://www.youtube.com/embed/fGD3M8FsuOw?si=bZSw30fk9SMrjpNS" 
}

function changeSrc3() {
   ytFrameElement.src = "https://www.youtube.com/embed/tfXVENBMYIg?si=c3LiCgO62-6qUELl"
}

function changeSrc4() {
   ytFrameElement.src = "https://www.youtube.com/embed/Gu0pw0sGc58?si=ktcpFRcT9JnoeFDg" 
}

function changeSrc5() {
   ytFrameElement.src = "https://www.youtube.com/embed/24T23LulWeA?si=GJPUfcV0KoQezEz6" 
}

function changeSrc6() {
   ytFrameElement.src = "https://www.youtube.com/embed/HQuSY1cSmro?si=Dxvm0bTufUl-hfOu"
}


firstLink.addEventListener("click", changeSrc1);
secondLink.addEventListener("click", changeSrc2);
thirdLink.addEventListener("click", changeSrc3);
fourthLink.addEventListener("click", changeSrc4);
fifthLink.addEventListener("click", changeSrc5);
sixthLink.addEventListener("click", changeSrc6);



