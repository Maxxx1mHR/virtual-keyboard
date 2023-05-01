import createKeyBoard from './createKeyboard';
import { data, toUpperKeys } from './data';

const { keyLayoutRu, keyLayoutEn } = data;

const setDefaultLanguage = () => {
  if (localStorage.getItem('language') === null || localStorage.getItem('language') === 'Ru') {
    localStorage.setItem('language', 'Ru');
    createKeyBoard(keyLayoutRu);
  } else {
    createKeyBoard(keyLayoutEn);
  }
};

const changeLanguage = (event) => {
  if ((event.code === 'ControlLeft' && event.altKey) || (event.code === 'AltLeft' && event.ctrlKey)) {
    if (localStorage.getItem('language') === 'Ru') {
      localStorage.setItem('language', 'En');
      if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
        createKeyBoard(toUpperKeys(keyLayoutEn));
        document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
        document.querySelector('[data = "ControlLeft"]').classList.add('keyboard__key_active');
        document.querySelector('[data = "AltLeft"]').classList.add('keyboard__key_active');
      } else {
        createKeyBoard(keyLayoutEn);
        document.querySelector('[data = "ControlLeft"]').classList.add('keyboard__key_active');
        document.querySelector('[data = "AltLeft"]').classList.add('keyboard__key_active');
      }
    } else {
      localStorage.setItem('language', 'Ru');
      if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
        createKeyBoard(toUpperKeys(keyLayoutRu));
        document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
        document.querySelector('[data = "ControlLeft"]').classList.add('keyboard__key_active');
        document.querySelector('[data = "AltLeft"]').classList.add('keyboard__key_active');
      } else {
        createKeyBoard(keyLayoutRu);
        document.querySelector('[data = "ControlLeft"]').classList.add('keyboard__key_active');
        document.querySelector('[data = "AltLeft"]').classList.add('keyboard__key_active');
      }
    }
  }
};

export { setDefaultLanguage, changeLanguage };
