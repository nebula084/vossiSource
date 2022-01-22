function myFunction(link, wide, high) {
    var y = document.getElementById("gameFrame");
    y.remove();

    var x = document.createElement("iframe");
    x.setAttribute("src", link);
    x.setAttribute("width", wide);
    x.setAttribute("height", high);
    x.setAttribute("id", "gameFrame");
    x.setAttribute("fullscreen", "true");
    x.setAttribute("scrolling", "no");
    document.getElementById('gameWindow').appendChild(x);
  }
