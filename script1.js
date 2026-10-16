const btnClickEv = document.getElementById("btnClickEv");
const clickMsg = document.getElementById("clickMsg");

btnClickEv.addEventListener("click", function () {
    this.textContent = (this.textContent === "Click Me!") ? "Click me again!" : "Click Me!";

    if (clickMsg.textContent === "") {
        clickMsg.textContent = "Button above me is clicked";
    }

    clickMsg.classList.toggle("collapsed");
});

const btnHideShow = document.getElementById("btnHideShow");
const hideShowMsg = document.getElementById("hideShowMsg");

btnHideShow.addEventListener("click", function () {
    hideShowMsg.classList.toggle("hidden");

    if (this.textContent === "Hide") {
        this.textContent = "Show";
    } else {
        this.textContent = "Hide";
    }
});

const btnGetVal = document.getElementById("btnGetVal");
const inputVal = document.getElementById("inputVal");
const showVal = document.getElementById("showVal");

btnGetVal.addEventListener("click", () => {
    showVal.textContent = inputVal.value;
});

const btnMelahirkan = document.getElementById("btnMelahirkan");
const ortu = document.getElementById("ortu");

btnMelahirkan.addEventListener("click", () => {
    const child = document.createElement("div");
    child.style.cssText = "background: deeppink; margin: 2px;";
    child.textContent = "Anak";
    ortu.appendChild(child);
});