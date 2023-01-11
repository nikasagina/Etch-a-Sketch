const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseenter', (eve) => {
        eve.target.style.backgroundColor = "black";
    });
});