const shareButton = document.querySelector('.share-btn');
const shareBox = document.querySelector('.share-box');
const mobileShare = document.querySelector('.mobile-share');

shareButton.addEventListener('mouseover', function () {
  shareBox.style.visibility = 'visible';
  shareBox.style.opacity = '1';
});
shareButton.addEventListener('mouseleave', function () {
  shareBox.style.visibility = 'hidden';
  shareBox.style.opacity = '0';
});

if (screen.width <= 768) {
  shareButton.addEventListener('click', function () {
    if (mobileShare.style.visibility === 'hidden') {
      shareButton.style.zIndex = 2;
      mobileShare.style.visibility = 'visible';
    } else {
      shareButton.style.zIndex = 1;
      mobileShare.style.visibility = 'hidden';
    }
  });
}
