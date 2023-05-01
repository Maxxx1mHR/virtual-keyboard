import { data, toLowerKeys, toUpperKeys } from './data';
import createKeyBoard from './createKeyboard';

const {
  keyLayoutRu, keyLayoutEn, keyLayoutEnShift, keyLayoutRuShift,
} = data;

const pressBackspace = (pointer) => {
  const textarea = document.querySelector('.input');
  textarea.value = textarea.value.slice(0, pointer - 1)
    + textarea.value.slice(pointer);
  textarea.setSelectionRange(pointer - 1, pointer - 1);
};

const pressSpace = (pointer) => {
  const textarea = document.querySelector('.input');
  textarea.value = `${textarea.value.slice(0, pointer)} ${textarea.value.slice(pointer)}`;
  textarea.setSelectionRange(pointer + 1, pointer + 1);
};

const pressTab = (pointer) => {
  const textarea = document.querySelector('.input');
  textarea.value = `${textarea.value.slice(0, pointer)}    ${textarea.value.slice(pointer)}`;
  textarea.setSelectionRange(pointer + 4, pointer + 4);
};

const pressDelete = (pointer) => {
  const textarea = document.querySelector('.input');
  textarea.value = textarea.value.slice(0, pointer)
    + textarea.value.slice(pointer + 1);
  textarea.setSelectionRange(pointer, pointer);
};

const pressEnter = (pointer) => {
  const textarea = document.querySelector('.input');
  textarea.value = `${textarea.value.slice(0, pointer)}\n${textarea.value.slice(pointer)}`;
  textarea.setSelectionRange(pointer + 1, pointer + 1);
};

const pressShiftRu = (shift) => {
  if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
    createKeyBoard(toLowerKeys(keyLayoutRuShift));
    document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
    document.querySelector(`[data = '${shift}'`).classList.add('keyboard__key_active');
  } else {
    createKeyBoard(keyLayoutRuShift);
    document.querySelector(`[data = '${shift}'`).classList.add('keyboard__key_active');
  }
};

const pressShiftEn = (shift) => {
  if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
    createKeyBoard(toLowerKeys(keyLayoutEnShift));
    document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
    document.querySelector(`[data = '${shift}'`).classList.add('keyboard__key_active');
  } else {
    createKeyBoard(keyLayoutEnShift);
    document.querySelector(`[data = '${shift}'`).classList.add('keyboard__key_active');
  }
};

const pressCapsRu = () => {
  if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
    createKeyBoard(toLowerKeys(keyLayoutRu));
    document.querySelector('[data = "CapsLock"]').classList.remove('caps_active');
  } else {
    createKeyBoard(toUpperKeys(keyLayoutRu));
    document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
  }
};

const pressCapsEn = () => {
  if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
    createKeyBoard(toLowerKeys(keyLayoutEn));
    document.querySelector('[data = "CapsLock"]').classList.remove('caps_active');
  } else {
    createKeyBoard(toUpperKeys(keyLayoutEn));
    document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
  }
};

export {
  pressBackspace,
  pressSpace,
  pressTab,
  pressDelete,
  pressEnter,
  pressShiftRu,
  pressShiftEn,
  pressCapsRu,
  pressCapsEn,
};
