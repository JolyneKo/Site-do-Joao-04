const titles = document.querySelectorAll('.banner_title');

titles.forEach((title) => {
  let text = title.innerText;
  let speed = 200;
  title.innerText = '';

  escreverEfeito(text, speed, title);
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function escreverEfeito(text, speed, element) {
  for (let i = 0; i < text.length; i++) {
    let letter = text.charAt(i);
    element.innerText += letter;
    await sleep(speed); 
  }
}

const aba = document.querySelector('.aba');
const links = document.querySelectorAll('.links li');

links.forEach((link) => {
  link.addEventListener('mouseenter', e => {
    const position = link.getBoundingClientRect();
    aba.style.left = position.left + 'px';
    aba.style.width = position.width + 'px'
    aba.style.animation = 'aba_abrindo 1s forwards';
    aba.style.visibility = 'visible';
  });

  link.addEventListener('mouseleave', e => {
    aba.style.animation = 'aba_fechando 1s forwards'; 
  });
});