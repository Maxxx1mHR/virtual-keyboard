import { data } from './data';

const createKeyBoard = (keyData) => {
  const keyboard = document.querySelector('.keyboard');
  keyboard.innerHTML = '';

  keyData.forEach((key, index) => {
    if (index === 14 || index === 29 || index === 42 || index === 55) {
      keyboard.innerHTML += '<br>';
    }

    const keyElement = document.createElement('button');
    keyElement.classList.add('keyboard__key');
    keyElement.setAttribute('data', `${data.keyCode[index]}`);

    if (index === 14) {
      keyElement.classList.add('keyboard__key_wide-s');
    }

    if (index === 41 || index === 54) {
      keyElement.classList.add('keyboard__key_wide-m');
    }

    if (index === 13 || index === 29 || index === 42) {
      keyElement.classList.add('keyboard__key_wide-x');
    }

    if (index === 58) {
      keyElement.classList.add('space_key');
    }

    keyElement.textContent = key;
    keyboard.append(keyElement);
  });
};

export default createKeyBoard;
