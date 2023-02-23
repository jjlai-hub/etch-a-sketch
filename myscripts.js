document.addEventListener("DOMContentLoaded", function() {

    let grid_side = 20;

    let grid_total = grid_side * grid_side;

    const container = document.querySelector('#container');

    container.style.setProperty('grid-template-columns', 'repeat(' + grid_side + ', 1fr)');
    
    container.style.setProperty('grid-template-rows', 'repeat(' + grid_side + ', 1fr)');
    
    for (let i = 0; i < grid_total; i++) {

        const div = document.createElement('div');

        div.style.backgroundColor = "grey";

        div.setAttribute('id', '' + i);

        container.appendChild(div);
    }

    const allDivs = document.querySelectorAll('#container div');

    function paint(e) {
        this.style.backgroundColor = "black";
    }

    allDivs.forEach(
        pixel => pixel.addEventListener('mouseover', paint)
    );
   
});
