function initQS() {
    let sheet = document.getElementById("quartersheet"),
        full_sheet = document.getElementById("fullsheet");

    for (let i = 0; i < 3; i++) {
        let clonedSheet = sheet.cloneNode(true);
        clonedSheet.id = clonedSheet.id + (i + 1);
        clonedSheet.innerHTML = clonedSheet.innerHTML.trim();
        fullsheet.appendChild(clonedSheet);
    }
}

window.onload = function() {
    initQS();
    let fullsheet = document.getElementById("fullsheet");
    for (q in fullsheet.children) {
        let qsheet = fullsheet.children[q];
        if (!qsheet.classList || !qsheet.classList.contains("qs-sheet")) {
            qsheet.parentElement.removeChild(qsheet);
        }
    }
};
