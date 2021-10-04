export function createDiv(text) {
    const newDiv = document.createElement('div');
    newDiv.textContent = text;
    return newDiv;
};

export function selectDiv(div) {
    document.getElementById(div).addEventListener("click", (e) => {
        return e.currentTarget;
    })
}

