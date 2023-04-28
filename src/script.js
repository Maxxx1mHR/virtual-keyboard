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


  function toUpperKeys(keys) {
    let array = [];
    keys.forEach((key, index) => {
      if (key.length === 1) {
        array[index] = key.toUpperCase();
      } else {
        array[index] = key;
      }
    });
    return array;
  }

  function toLowerKeys(keys) {
    let array = [];
    keys.forEach((key, index) => {
      if (key.length === 1) {
        array[index] = key.toLowerCase();
      } else {
        array[index] = key;
      }
    });
    return array;
  }


  const keyLayoutRu = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'
  ];



  // keyLayoutRu.forEach((key) => {
  //   if(key.length === 1) {
  //     console.log(key.toUpperCase());
  //   }
  // });

  // const keyLayoutRuCaps = [
  //   'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  //   'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'Э', 'Х', 'Ъ', '\\', 'Del',
  //   'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  //   'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑',  'Shift',
  //   'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'
  // ];

  const keyLayoutRuShift = [
    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'Э', 'Х', 'Ъ', '/', 'Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'
  ];


  const keyCode = [
    'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
  ];

  const keyLayoutEn = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'
  ];

  // const keyLayoutEnCaps = [
  //   '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  //   'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
  //   'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
  //   'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑',  'Shift',
  //   'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'
  // ];

  const keyLayoutEnShift = [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'
  ];


  // showKeyBoard(keyLayoutRu);

  //Set language of keyboard by default
  if (localStorage.getItem('language') === null || localStorage.getItem('language') === 'Ru') {
    localStorage.setItem('language', 'Ru');
    showKeyBoard(keyLayoutRu);
  } else {
    showKeyBoard(keyLayoutEn);
  }

  //Change language of keyboard
  document.addEventListener('keydown', (event) => {
    // console.log(event.code);
    if (event.code === 'ControlLeft' && event.altKey || event.code === 'AltLeft' && event.ctrlKey) {

      if (localStorage.getItem('language') === 'Ru') {
        localStorage.setItem('language', 'En');
        if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
          showKeyBoard(toUpperKeys(keyLayoutEn));
          document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
        } else {
          showKeyBoard(keyLayoutEn);
        }

      } else {
        localStorage.setItem('language', 'Ru');
        if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
          showKeyBoard(toUpperKeys(keyLayoutRu));
          document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
        } else {
          showKeyBoard(keyLayoutRu);
        }
      }

    }
  });



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


  const KEYBOARD = document.querySelector('.keyboard');



  //Press on key
  document.addEventListener('keydown', (event) => {

    // If key does not exsist in array. nothing to do
    if (keyCode.indexOf(event.code) === -1) {
      event.preventDefault(); //нужно 100%. Без этого работает numpad
      return;
    }

    //If key exsist add in textarea
    if (document.querySelector(`[data='${event.code}']`)) {
      event.preventDefault();  //Отменяю стандарное поведение, для того чтобы ввод был только с виртаульной клавиатуры.


      const pressedKey = document.querySelector(`[data='${event.code}']`);

      pressedKey.classList.add('keyboard__key_active'); //Добавление анимации при нажатии на клавишу

      // console.log('EVETN', event.target);




      const textarea = document.querySelector('.input');

      //Если нажат контрл, алт или win, ничего не делать
      if (event.key === 'Control' || event.key === 'Alt' || event.key === 'Meta') {
        return;
      }

      // console.log('Позиция курсора', textarea.selectionStart);

      let currentPointer = textarea.selectionStart;

      if (event.code === 'Backspace') {

        if (currentPointer === 0) {
          return;
        }
        textarea.value = textarea.value.slice(0, currentPointer - 1) + textarea.value.slice(currentPointer);
        textarea.setSelectionRange(currentPointer - 1, currentPointer - 1);

        return;
      }

      if (event.code === 'Space') {
        textarea.value = textarea.value.slice(0, currentPointer) + ' ' + textarea.value.slice(currentPointer);
        textarea.setSelectionRange(currentPointer + 1, currentPointer + 1);
        return;
      }


      if (event.code === 'Tab') {
        textarea.value = textarea.value.slice(0, currentPointer) + '    ' + textarea.value.slice(currentPointer);
        textarea.setSelectionRange(currentPointer + 4, currentPointer + 4);
        return;
      }

      if (event.code === 'Delete') {

        textarea.value = textarea.value.slice(0, currentPointer) + textarea.value.slice(currentPointer + 1);
        textarea.setSelectionRange(currentPointer, currentPointer);

        return;
      }


      if (event.code === 'Enter') {
        textarea.value = textarea.value.slice(0, currentPointer) + '\n' + textarea.value.slice(currentPointer);
        textarea.setSelectionRange(currentPointer + 1, currentPointer + 1);
        return;
      }


      // if (event.key === 'Shift') {
      //   if (localStorage.getItem('language') === 'Ru') {
      //     if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
      //       showKeyBoard(toLowerKeys(keyLayoutRuShift));
      //       document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
      //       document.querySelector(`[data = ${event.code}]`).classList.add('keyboard__key_active');
      //       return;
      //     } else {
      //       showKeyBoard(keyLayoutRuShift);
      //       document.querySelector(`[data = ${event.code}]`).classList.add('keyboard__key_active');
      //       return;
      //     }
      //   }
      // }
      // if (event.key === 'Shift') {
      //   if (localStorage.getItem('language') === 'En') {
      //     if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
      //       showKeyBoard(toLowerKeys(keyLayoutEnShift));
      //       document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
      //       document.querySelector(`[data = ${event.code}]`).classList.add('keyboard__key_active');
      //       return;
      //     } else {
      //       showKeyBoard(keyLayoutEnShift);
      //       document.querySelector(`[data = ${event.code}]`).classList.add('keyboard__key_active');
      //       return;
      //     }
      //   }
      // }

      //   else {
      //     if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
      //       showKeyBoard(toLowerKeys(keyLayoutEnShift));
      //       document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
      //       document.querySelector(`[data = ${event.code}]`).classList.add('keyboard__key_active');
      //       return;
      //     } else {
      //       showKeyBoard(keyLayoutEnShift);
      //       document.querySelector(`[data = ${event.code}]`).classList.add('keyboard__key_active');
      //       return;
      //     }
      //   }
      // }



      if (event.key === 'Shift') {
        if (localStorage.getItem('language') === 'Ru') {
          if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
            showKeyBoard(toLowerKeys(keyLayoutRuShift));
            document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
            document.querySelector(`[data = ${event.code}]`).classList.add('keyboard__key_active');
            return;
          } else {
            showKeyBoard(keyLayoutRuShift);
            document.querySelector(`[data = ${event.code}]`).classList.add('keyboard__key_active');
            return;
          }
        } else {
          if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
            showKeyBoard(toLowerKeys(keyLayoutEnShift));
            document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
            document.querySelector(`[data = ${event.code}]`).classList.add('keyboard__key_active');
            return;
          } else {
            showKeyBoard(keyLayoutEnShift);
            document.querySelector(`[data = ${event.code}]`).classList.add('keyboard__key_active');
            return;
          }
        }
      }



      if (event.code === 'CapsLock') {
        if (localStorage.getItem('language') === 'Ru') {
          if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
            showKeyBoard(toLowerKeys(keyLayoutRu));
            document.querySelector(`[data = ${event.code}]`).classList.remove('caps_active');
            return;
          }
          else {
            showKeyBoard(toUpperKeys(keyLayoutRu));
            document.querySelector(`[data = ${event.code}]`).classList.add('caps_active');
            return;
          }
        } else {
          if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
            showKeyBoard(toLowerKeys(keyLayoutEn));
            document.querySelector(`[data = ${event.code}]`).classList.remove('caps_active');
            return;
          }
          else {
            showKeyBoard(toUpperKeys(keyLayoutEn));
            document.querySelector(`[data = ${event.code}]`).classList.add('caps_active');
            return;
          }
        }
      }


      textarea.value = textarea.value.slice(0, currentPointer) + pressedKey.textContent + textarea.value.slice(currentPointer);
      textarea.setSelectionRange(currentPointer + 1, currentPointer + 1);



    }

  });


  document.addEventListener('keyup', (event) => {

    const keys = document.querySelectorAll('.keyboard__key');

    if (document.querySelector(`[data='${event.code}']`)) {
      setTimeout(() => {

        document.querySelector(`[data='${event.code}']`).classList.remove('keyboard__key_active');

      }, 200);
    }

    //Анимация нажатых клавишь
    // for (let i = 0; i < keys.length; i++) {
    //   if (keys[i].classList.contains('keyboard__key_active')) {
    //     setTimeout(() => {
    //       keys[i].classList.remove('keyboard__key_active');
    //     }, 200);
    //   }
    // }

    // console.log(document.querySelector('[data = "CapsLock"]').classList.contains('caps_active'));
    if (localStorage.getItem('language') === 'Ru' && event.key === 'Shift') {
      if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
        console.log('ACTIVE');
        showKeyBoard(toUpperKeys(keyLayoutRu));
        document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
      } else {
        showKeyBoard(keyLayoutRu);
      }
    }

    if (localStorage.getItem('language') === 'En' && event.key === 'Shift') {
      if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
        console.log('ACTIVE');
        showKeyBoard(toUpperKeys(keyLayoutEn));
        document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
      } else {
        showKeyBoard(keyLayoutEn);
      }
    }

    // if (event.key === 'Shift') {
    // document.querySelector(`[data='${event.code}']`).classList.add('keyboard__key_active');
    // document.querySelector(`[data='${event.code}']`).classList.add('keyboard__key_active');
    // showKeyBoard(keyLayoutRu);
    // }


  });





});

