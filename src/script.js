'use strict';

window.addEventListener('DOMContentLoaded', function () {

  //Create container element
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.append(container);

  //Create textarea
  const textarea = document.createElement('textarea');
  textarea.classList.add('input');
  container.append(textarea);

  //Create keyboard element
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  container.append(keyboard);



  const keyLayoutRu = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑',  'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'
  ];


  // keyLayoutRu.forEach((key) => {
  //   if(key.length === 1) {
  //     console.log(key.toUpperCase());
  //   }
  // });
  const keyLayoutRuCaps = [
    'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'Э', 'Х', 'Ъ', '\\', 'Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑',  'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'
  ];

  const keyLayoutRuShift = [
    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'Э', 'Х', 'Ъ', '/', 'Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑',  'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'
  ];



  const keyCode = [
    'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp',  'ShiftRight',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
  ];

  const keyLayoutEn = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑',  'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'
  ];

  const keyLayoutEnCaps = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑',  'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'
  ];

  const keyLayoutEnShift = [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑',  'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'
  ];


  showKeyBoard(keyLayoutRu);






  //Create KeyBoard
  function showKeyBoard(keysData) {

    keyboard.innerHTML = '';

    keysData.forEach((key, index) => {

      if (index === 14 || index === 29 || index === 42 || index === 55) {
        keyboard.innerHTML += '<br>';
      }

      const keyElement = document.createElement('button');
      keyElement.classList.add('keyboard__key');
      keyElement.setAttribute('data', `${keyCode[index]}`);

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
  }













});

