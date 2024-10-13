document.getElementsByClassName('Blackhover')[0].style.height = window.innerHeight+'px'
document.getElementsByTagName('body')[0].style.overflow = 'hidden'
const imgurl = [
  './images/m/m_left.png',
  './images/m/m_right.png',
  './images/m/m_up.png',
  './images/m/m_down.png',
  './images/m/f_left.png',
  './images/m/f_right.png',
  './images/m/f_up.png',
  './images/m/f_down.png',
  './images/m/bg_p.png',
]
var totalImages = imgurl.length;
    var loadedImages = 0;
    document.getElementsByClassName('Blackhover')[0].style.transition = '.6s'
    function loadImage(path) {
      var img = new Image();
      img.src = path;
      img.onload = function() {
        loadedImages++;
        updateProgressBar();

        if (loadedImages === totalImages) {
          // All images are loaded
          // Proceed to your web page
        //   console.log("All images loaded");
            document.getElementsByClassName('Blackhover')[0].style.opacity = '0'
            document.getElementsByTagName('body')[0].style.overflow = 'auto'
            setTimeout(function(){
                document.getElementsByClassName('Blackhover')[0].style.display = 'none'
            },600)
        }
      };
    }

    function updateProgressBar() {
      var progress = (loadedImages / totalImages) * 100;
      document.getElementById("progress").style.width = progress + "%";
      document.getElementById('progress').getElementsByTagName('p')[0].innerHTML = Math.floor(progress) + '%'
    }

    // Load images
    for (var i = 0; i < totalImages; i++) {
      loadImage(imgurl[i]);
    }
