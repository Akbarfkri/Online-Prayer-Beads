
const tasbihCountElement = document.getElementById('tasbih-count');
const countButton = document.getElementById('count-button');
let count = 0;

countButton.addEventListener('click', () => {
  count++;
  tasbihCountElement.textContent = count;
});
