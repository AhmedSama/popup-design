let show = document.getElementById("show");

let popup =document.getElementById("popup");

let closePopup = document.getElementById("popup-close");

show.addEventListener("click", () => {
    popup.classList.add("active");
    const popupLifeTime = 4000;
    let popupTimeout;
    popupTimeout = setTimeout(() => {
      popup.classList.remove("active");
    }, popupLifeTime);

    popup.addEventListener("mouseover", () => {
      clearTimeout(popupTimeout);
    });

    popup.addEventListener("mouseout", () => {

      popupTimeout = setTimeout(() => {
        popup.classList.remove("active");
      }, popupLifeTime);

    });
});





closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
});













