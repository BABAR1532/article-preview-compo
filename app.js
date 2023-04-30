 const shareButton = document.querySelector('button');
 const clickedTray = document.querySelector('.info__default--state');
 const shareIconPath =  document.querySelector('.icon-path');

 shareButton.addEventListener('click', (event) => {

     // Toggling the info__clicked-tray
     clickedTray.classList.toggle('info__clicked-tray');
     // Toggling share button background
     shareButton.classList.toggle('share__button--clicked');
     // Toggling share icon arrow color
     shareIconPath.classList.toggle('path-new-color');
     // For mobile  design changing position of Share icon
     shareButton.classList.toggle('mobile__share-bottom');
 } )
