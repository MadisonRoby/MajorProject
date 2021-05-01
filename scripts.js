// generic AJAX function to load fromFile into object with ID whereTo, sourced from Prof. Tor De Vries
function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // prepares code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {

    if ((this.readyState == 4) && (this.status == 200)) {
      document.getElementById(whereTo).innerHTML = this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);

    }

  } // end ajax.onreadystatechange

  // now that everything is set, initiate request
  ajax.send();
}

//loads in all the files to where they need to be upon opening the page
window.onload = function() {

  loadFileInto("content1.html", "event1");
  loadFileInto("content2.html", "event2");
  loadFileInto("content3.html", "event3");
  loadFileInto("content4.html", "event4");
  loadFileInto("content5.html", "event5");
  loadFileInto("content6.html", "event6");
  loadFileInto("content7.html", "event7");
  loadFileInto("content8.html", "event8");
  loadFileInto("content9.html", "event9");
  loadFileInto("content10.html", "event10");
  loadFileInto("content11.html", "event11");
}


//allows the "onClick" event to show the content, sourced from Madison Roby's TP6
function showContent1() {
  document.getElementById("content1").style.visibility = "visible";
  document.getElementById("image1").style.visibility = "visible";
}

function showContent2() {
  document.getElementById("content2").style.visibility = "visible";
  document.getElementById("image2").style.visibility = "visible";

}

function showContent3() {
  document.getElementById("content3").style.visibility = "visible";
}

function showContent4() {
  document.getElementById("content4").style.visibility = "visible";
  document.getElementById("image4").style.visibility = "visible";
}

function showContent5() {
  document.getElementById("content5").style.visibility = "visible";
  document.getElementById("image5").style.visibility = "visible";
}

function showContent6() {
  document.getElementById("content6").style.visibility = "visible";
  document.getElementById("image6").style.visibility = "visible";
}

function showContent7() {
  document.getElementById("content7").style.visibility = "visible";
}

function showContent8() {
  document.getElementById("content8").style.visibility = "visible";
  document.getElementById("video8").style.visibility = "visible";
}

function showContent9() {
  document.getElementById("content9").style.visibility = "visible";
}

function showContent10() {
  document.getElementById("content10").style.visibility = "visible";
  document.getElementById("image10").style.visibility = "visible";
}

function showContent11() {
  document.getElementById("content11").style.visibility = "visible";
  document.getElementById("video11").style.visibility = "visible";
}