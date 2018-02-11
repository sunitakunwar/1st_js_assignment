var displayedImage = document.querySelector('.displayed-img');
var newImage = document.getElementsByClassName('im');
console.log(newImage);
var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
for (var i = newImage.length - 1; i >= 0; i--) {
  newImage[i].onclick = function(e) {
    var imgSrc = e.target.getAttribute('src');
    displayImage(imgSrc);
  }
}



function displayImage(imgSrc) {
  displayedImage.setAttribute('src', imgSrc);
}

btn.onclick = function() {
  var btnClass = btn.getAttribute('class'); 
  if(btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}

