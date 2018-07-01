const table = document.getElementById('pixel_canvas');//<table></table>
const form = document.querySelector('form');// get the submitted form

// Select color input
table.addEventListener('click', function (e) {
  const color = document.getElementById('colorPicker').value;//get the picked color
  e.target.style.backgroundColor = color;
});


// Select size input
function makeGrid() {
// Your code goes here!
  table.innerHTML = '';//remove previous grid

  const n = document.getElementById('input_height').value;//get height value input by user
  const m = document.getElementById('input_width').value;//get width value input by user

  for (let x = 1; x <= n; x++) {//loop for height
    const row = document.createElement('tr');//create row
    table.appendChild(row);//insert <tr></tr> as last child of <table></table>
    for (let y = 1; y <= m; y++) {//loop for width
      const cell = document.createElement('td');//create row
      row.appendChild(cell);//insert <td></td> as last child of <tr></tr>
    }
  }
};

form.addEventListener('submit', makeGrid);// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function (e){
  e.preventDefault();//prevent refreshing the page
});

//clear color when right clicked
table.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  e.target.style.backgroundColor = 'transparent';
});
