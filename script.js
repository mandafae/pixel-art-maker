paintColor = '#001F3F';

window.onload = function(){

  let container = document.getElementsByClassName('container')[0]
  let paletteContainer = document.createElement('div');


  // Draw the grid
  function drawGrid(paintColor){
    for (let i = 0; i < 1008; i++) {
      let square = document.createElement('div');
      square.className = 'square';
      square.id = i+1;
      container.append(square);
      // Add event listener for each square so they can be painted
      square.addEventListener('click', function() {
        let clickedSquare = document.getElementById(i+1);
        clickedSquare.style.backgroundColor = window.paintColor;
      })
    }
  }

  // Create the palette
  function drawPalette(paintColor){
    paletteContainer.className = 'paletteContainer';
    container.append(paletteContainer);
    let colors = ['#F80C12', '#EE1100', '#FF3311', '#FF4422', '#FF6644', '#FF9933', '#FEAE2D', '#CCBB33', '#D0C310', '#AACC22', '#69D025', '#22CCAA', '#12BDB9', '#11AABB', '#4444DD', '#3311BB', '#3B0CBD', '#442299', '#111111', '#555555', '#AAAAAA', '#DDDDDD', '#FFFFFF', '#816C5B', '#613318', '#855723', '#B99C6B']
    for (let i = 0; i < colors.length; i++) {
      let paletteContainer = document.getElementsByClassName('paletteContainer')[0];
      let circle = document.createElement('div');
      circle.className = 'palette';
      circle.style.backgroundColor = colors[i];
      circle.id = colors[i];
      paletteContainer.append(circle);
      // Add event listener so palette circles can select paint color
      circle.addEventListener('click', function(){
      window.paintColor = this.id;
      return paintColor;
      })
    }
  }


  drawGrid(paintColor);
  drawPalette();

}
