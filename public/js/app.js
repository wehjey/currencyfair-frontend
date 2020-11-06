const modal = document.getElementById("modal");

const btn = document.getElementById("next-btn");

const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$('.otc-text-input').attr('max', 1)

$('.otc-text-input').on('input', function () {
    // do something
    max(this)
});

// Limit code text box to 1
function max(object) {
    if (object.value.length > object.max.length)
        object.value = object.value.slice(0, object.max.length)
}