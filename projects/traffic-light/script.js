const buttons = document.getElementById("container-buttons");
// elements = object; 'red' = key; button/circle = props
const elements = {
  'red': {
    button: document.getElementById('btn-red'),
    circle: document.getElementById('circle-red')
  },
  'yellow': {
    button: document.getElementById('btn-yellow'),
    circle: document.getElementById('circle-yellow')
  },
  'green': {
    button: document.getElementById('btn-green'),
    circle: document.getElementById('circle-green')
  }
};

const changeColor = (color) => {
    // Object.values -> obter tudo de 'elements'. Para cada elemento, acessar 'circle'
  Object.values(elements).forEach(({ circle }) => {
    circle.style.backgroundColor = ''; // removendo background de 'circle' (garantindo que só uma cor mude por vez)
  });
  elements[color].circle.style.backgroundColor = color; // color == background-color
};

const trafficLight = (e) => {
  const color = e.target.id.split('-')[1]; // eg: 'btn-green' -> split('-')[1] = 'green'
  changeColor(color); // eg: 'green' argument to set 'changeColor'  
};

buttons.addEventListener('click', trafficLight);
