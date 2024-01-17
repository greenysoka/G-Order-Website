document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');

        } else {
            header.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('media_header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});


function opendesk(){
    help = document.getElementById("helpdesk");
    help.style.display = "block"
    help = document.getElementById("black");
    help.style.display = "block"

}
function closedesk(){
    help = document.getElementById("helpdesk");
    help.style.display = "none"
    help = document.getElementById("black");
    help.style.display = "none"

}

function openimprint(){
    help = document.getElementById("imprintdiv");
    help.style.display = "block"
    help = document.getElementById("black");
    help.style.display = "block"

}
function closeimprint(){
    help = document.getElementById("imprintdiv");
    help.style.display = "none"
    help = document.getElementById("black");
    help.style.display = "none"

}

document.onreadystatechange = function () {
    var loaderContainer = document.getElementById('loader');
    var loader = document.getElementById('loadblack');
  
    // Überwache den Ladezustand der Seite
    if (document.readyState === 'complete') {
      // Die Seite ist vollständig geladen, verstecke den Loader
      loaderContainer.style.display = 'none';
      loader.style.display = 'none';
    }
  };
  

function clearwarning(){
    var warn = document.getElementById("info");
    warn.style.display = "none"
}