document.addEventListener("DOMContentLoaded", function () {
  let memeForm = document.getElementById("memeForm");
  let image = document.getElementById("imageInput");
  let topText = document.getElementById("topTextInput");
  let bottomText = document.getElementById("bottomTextInput");
  let memeContainer = document.getElementById("memeContainer");
  let xBtnImg = document.getElementById('rmvBtnImg');
 

  memeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newDiv = document.createElement("div");
    let newMemeImg = document.createElement("img");
    let newMemeTopText = document.createElement("span");
    let newMemeBottomText = document.createElement("span");
    let rmvBtnImg = document.createElement("img");

    newMemeImg.id = "memeImg";
    newMemeTopText.id = "memeTopText";
    newMemeBottomText.id = "memeBottomText";
    rmvBtnImg.id = 'rmvBtnImg';

    newMemeImg.src = image.value;
    newMemeTopText.innerText = topText.value;
    newMemeBottomText.innerText = bottomText.value;
    rmvBtnImg.src = "https://e7.pngegg.com/pngimages/429/649/png-clipart-button-icon-delete-button-text-sign.png"
    
    newDiv.append(newMemeImg);
    newDiv.append(newMemeTopText);
    newDiv.append(newMemeBottomText);
    newDiv.append(rmvBtnImg);

    newDiv.id = "memeCanvas";
    newDiv.style.display = 'inline-block'
    memeContainer.append(newDiv);

    newDiv.addEventListener('click',function(event){
        if(event.target.tagName === 'IMG'){
            event.target.parentNode.remove();
        }
        console.log(event.target.tagName)
      })


    memeForm.reset();
  });
});
