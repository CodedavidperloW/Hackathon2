// // <div class="container-two">
// <div class="header-container">Israeli ID, Army Service, National Service</div>
// <div class="files-to-drop">
//     <div class="small-images">
//         <img src="/images/Teudat-zehut.jpg">
//         <img src="/images/idf-logo-post.jpg">
//         <img src="/images/nationalService.png">
//     </div>
//     <div class="text-drag-drop"> Drag Files Here</div>
// </div>
// </div>

let images = document.querySelector('.small-images')
let placeToDrop = document.querySelector('.text-drag-drop')

images.querySelectorAll('img').forEach(img=>{
    img.addEventListener('dragstart', dragStart);})


placeToDrop.addEventListener('drop', dropImage)
placeToDrop.addEventListener('dragover', dragOver)


function dragStart(event){
event.dataTransfer.setData('text/plain', event.target.src);
}

function dragOver(event){
    event.preventDefault();
}

function dropImage(event){
event.preventDefault();

const dataOfImage = event.dataTransfer.getData('text/plain');

const droppedImage = document.createElement('img')

droppedImage.src = dataOfImage;
droppedImage.style.width = '10vw';
droppedImage.style.height = '10vh';
droppedImage.style.padding = '1rem';
droppedImage.style.border = '1px solid black';

placeToDrop.appendChild(droppedImage)


}
