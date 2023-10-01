import { data, toUpperKeys } from './data';
import createKeyBoard from './createKeyboard';

const { keyLayoutRu, keyLayoutEn } = data;

const upShiftRu = () => {
  if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
    createKeyBoard(toUpperKeys(keyLayoutRu));
    document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
  } else {
    createKeyBoard(keyLayoutRu);
  }
};

const upShiftEn = () => {
  if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
    createKeyBoard(toUpperKeys(keyLayoutEn));
    document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
  } else {
    createKeyBoard(keyLayoutEn);
  }
};

export { upShiftRu, upShiftEn };
