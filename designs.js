// Select color input
const colorInput = document.getElementById("colorPicker");

// Select height input
const inputHeight = document.getElementById('inputHeight');

// Select width input 
const inputWidth = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
const sizePicker = document.getElementById('sizePicker');

// slect pixel canvas
const canvas = document.getElementById(pixelCanvas);

sizePicker.addEventListener('submit',function(evt){
    evt.preventDefault();
    makeGrid();
});

function makeGrid(){
    pixelCanvas.innerHTML = '';
    h = inputHeight.value;
    w = inputWidth.value;
    for (let z = 0; z < h; z+=1){
        let row = pixelCanvas.insertRow(z);
        for (let a = 0; a < w; a +=1){
            let cell = row.insertCell(a);
            cell.addEventListener("click",function(evt){
                cell.style.backgroundColor = colorInput.value;
            });

            cell.addEventListener("dbclick", function(evt){
                cell.style.backgroundColor=""
            })
        }
    }
    }

// Canvas code