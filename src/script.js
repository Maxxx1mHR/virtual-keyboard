import { data } from './modules/data';
import { setDefaultLanguage, changeLanguage } from './modules/language';
import {
  pressBackspace,
  pressSpace,
  pressTab,
  pressDelete,
  pressEnter,
  pressShiftRu,
  pressShiftEn,
  pressCapsRu,
  pressCapsEn,
} from './modules/keydown';
import { upShiftRu, upShiftEn } from './modules/keyup';

window.addEventListener('DOMContentLoaded', function () {
  const { keyCode } = data;

  // Function createa new Node
  const createNode = (element, ...classes) => {
    const node = document.createElement(element);
    node.classList.add(classes);
    return node;
  };

  // Function apppend Node to Dom
  const appendNodeToDom = (domNode, ...newNode) => {
    newNode.forEach((node) => {
      domNode.append(node);
    });
  };

  // Create elements
  const createContainer = createNode('div', 'container');
  const createTitle = createNode('h1', 'title');
  createTitle.textContent = 'RSS Виртуальная клавиатура';
  const createTextarea = createNode('textarea', 'input');
  const createKeyboard = createNode('div', 'keyboard');
  const createDescription = createNode('div', 'description');
  const createOperatingSystem = createNode('div', 'oparating-system');
  createOperatingSystem.textContent = 'Клавиатура создана в операционной системе Windows';
  const createLanguage = createNode('div', 'language');
  createLanguage.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';

  // Append elements to Dom
  appendNodeToDom(this.document.body, createContainer);
  appendNodeToDom(createContainer, createTitle, createTextarea, createKeyboard, createDescription);
  appendNodeToDom(createDescription, createOperatingSystem, createLanguage);

  setDefaultLanguage();

  const keyboard = document.querySelector('.keyboard');
  const textarea = document.querySelector('.input');

  // //Press on key
  document.addEventListener('keydown', (event) => {
    changeLanguage(event);
    // If key does not exsist in array. nothing to do
    if (keyCode.indexOf(event.code) === -1) {
      event.preventDefault();
      return;
    }

    // If key exsist add in textarea
    if (document.querySelector(`[data='${event.code}']`)) {
      event.preventDefault();
      const pressedKey = document.querySelector(`[data='${event.code}']`);
      pressedKey.classList.add('keyboard__key_active');

      if (event.key === 'Control' || event.key === 'Alt' || event.key === 'Meta') {
        return;
      }

      const currentPointer = textarea.selectionStart;

      if (event.code === 'Backspace') {
        if (currentPointer === 0) {
          return;
        }
        pressBackspace(currentPointer);
        return;
      }

      if (event.code === 'Space') {
        pressSpace(currentPointer);
        return;
      }

      if (event.code === 'Tab') {
        pressTab(currentPointer);
        return;
      }

      if (event.code === 'Delete') {
        pressDelete(currentPointer);
        return;
      }

      if (event.code === 'Enter') {
        pressEnter(currentPointer);
        return;
      }

      if (event.key === 'Shift') {
        if (localStorage.getItem('language') === 'Ru') {
          pressShiftRu(event.code);
          return;
        }
        if (localStorage.getItem('language') === 'En') {
          pressShiftEn(event.code);
          return;
        }
      }

      if (event.code === 'CapsLock') {
        if (localStorage.getItem('language') === 'Ru') {
          pressCapsRu();
          return;
        }
        if (localStorage.getItem('language') === 'En') {
          pressCapsEn();
          return;
        }
      }

      textarea.value = textarea.value.slice(0, currentPointer)
        + pressedKey.textContent + textarea.value.slice(currentPointer);
      textarea.setSelectionRange(currentPointer + 1, currentPointer + 1);
    }
  });

  document.addEventListener('keyup', (event) => {
    if (document.querySelector(`[data='${event.code}']`)) {
      setTimeout(() => {
        document.querySelector(`[data='${event.code}']`).classList.remove('keyboard__key_active');
      }, 200);
    }

    if (localStorage.getItem('language') === 'Ru' && event.key === 'Shift') {
      upShiftRu();
    }

    if (localStorage.getItem('language') === 'En' && event.key === 'Shift') {
      upShiftEn();
    }
  });

  // Click by mouse
  keyboard.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('keyboard__key')) {
      event.preventDefault();
      event.target.classList.add('keyboard__key_active');
      event.target.classList.remove('keyboard__key_hover');

      if (event.target.textContent === 'Ctrl' || event.target.textContent === 'Alt' || event.target.textContent === 'Win') {
        return;
      }

      const currentPointer = textarea.selectionStart;

      if (event.target.getAttribute('data') === 'Backspace') {
        if (currentPointer === 0) {
          return;
        }
        pressBackspace(currentPointer);
        return;
      }

      if (event.target.getAttribute('data') === 'Space') {
        pressSpace(currentPointer);
        return;
      }

      if (event.target.getAttribute('data') === 'Tab') {
        pressTab(currentPointer);
        return;
      }

      if (event.target.getAttribute('data') === 'Delete') {
        pressDelete(currentPointer);
        return;
      }

      if (event.target.getAttribute('data') === 'Enter') {
        pressEnter(currentPointer);
        return;
      }

      if (event.target.textContent === 'Shift') {
        if (localStorage.getItem('language') === 'Ru') {
          pressShiftRu(event.target.getAttribute('data'));
          return;
        }
        if (localStorage.getItem('language') === 'En') {
          pressShiftEn(event.target.getAttribute('data'));
          return;
        }
      }

      if (event.target.getAttribute('data') === 'CapsLock') {
        if (localStorage.getItem('language') === 'Ru') {
          pressCapsRu();
          return;
        }
        if (localStorage.getItem('language') === 'En') {
          pressCapsEn();
          return;
        }
      }

      textarea.value = textarea.value.slice(0, currentPointer)
        + event.target.textContent + textarea.value.slice(currentPointer);
      textarea.setSelectionRange(currentPointer + 1, currentPointer + 1);
    }
  });

  document.addEventListener('mouseup', (event) => {
    document.querySelectorAll('.keyboard__key').forEach((item) => {
      setTimeout(() => {
        item.classList.remove('keyboard__key_active');
      }, 200);
    });

    if (localStorage.getItem('language') === 'Ru' && event.target.textContent === 'Shift') {
      upShiftRu();
    }

    if (localStorage.getItem('language') === 'En' && event.target.textContent === 'Shift') {
      upShiftEn();
    }
  });

  keyboard.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('keyboard__key')) {
      event.target.classList.add('keyboard__key_hover');
    }
  });

  keyboard.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('keyboard__key')) {
      event.target.classList.remove('keyboard__key_hover');
    }
  });
});
