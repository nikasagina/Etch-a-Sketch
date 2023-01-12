function addCellListeners() { 
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', (eve) => {
            eve.target.style.backgroundColor = "black";
        });
    });
}

function addClearListener(){
    const cells = document.querySelectorAll('.cell');
    const clearButton = document.querySelector('#clear');

    clearButton.addEventListener('click', ()=>{
        cells.forEach((cell)=>{
            cell.style.backgroundColor = 'white';
        })
    });
}

function addResizeListener(){
    const resizeButton = document.querySelector('#resize');

    resizeButton.addEventListener('click', ()=>{
        let dim = prompt("Enter number of rows and columns (1 number only)");
        dim = parseInt(dim);

        if(!Number.isInteger(dim)) return;
        
        const gridContainer = document.querySelector('#grid-container');
        const oldRows = document.querySelectorAll('.grid-row');
        oldRows.forEach((row)=>{
            gridContainer.removeChild(row);
        });

        for(let i = 0; i < dim; i++){
            const newRow = document.createElement('div');
            newRow.classList.add('grid-row');
            for(let j = 0; j < dim; j++){
                const newCell = document.createElement('div');
                const len = (672 - 2 * dim) / dim;
                newCell.style.width = `${len}px`;
                newCell.style.height = `${len}px`;
                newCell.classList.add('cell');
                
                newRow.appendChild(newCell);
            }
            gridContainer.appendChild(newRow);
        }

        addCellListeners();
        addClearListener();
    });
}

addCellListeners();
addClearListener();
addResizeListener();
