document.addEventListener("DOMContentLoaded", function() {

    loadGrid(16);

    function editGrid() {

        let newValue = prompt('Enter number of squares per side: ');

        if (parseInt(newValue) < 1 || parseInt(newValue) > 100) {

            alert('Only number between 1 to 100');

        }

        let myRegex = /^[0-9]+$/;

        if (newValue != null && myRegex.test(newValue)) {

            loadGrid(parseInt(newValue));

        }

    }

    const edit_grid = document.querySelector('#edit_grid');

    edit_grid.addEventListener('click', editGrid);
});

function loadGrid(side) {

    let total = side * side;

    const container = document.querySelector('#container');

    while (container.firstChild) {

        container.removeChild(container.firstChild);
        
    }

    container.style.setProperty('grid-template-columns', 'repeat(' + side + ', 1fr)');
    
    container.style.setProperty('grid-template-rows', 'repeat(' + side + ', 1fr)');
    
    for (let i = 0; i < total; i++) {

        const unit = document.createElement('div');

        unit.style.backgroundColor = "grey";

        unit.setAttribute('id', '' + i);

        container.appendChild(unit);
    }

    const units = document.querySelectorAll('#container div');

    function paint(e) {
        this.style.backgroundColor = "black";
    }

    units.forEach(
        unit => unit.addEventListener('mouseover', paint)
    );
}
