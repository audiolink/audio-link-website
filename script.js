replaceYear();

function replaceYear() {
  const elements = document.querySelectorAll('.year');

  const year = new Date().getFullYear().toString();

  for(let i = 0; i < elements.length; i += 1) {
    elements[i].innerText = year;
  }
}