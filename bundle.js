/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/createKeyboard.js":
/*!***************************************!*\
  !*** ./src/modules/createKeyboard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/modules/data.js");


const createKeyBoard = (keyData) => {
  const keyboard = document.querySelector('.keyboard');
  keyboard.innerHTML = '';

  keyData.forEach((key, index) => {
    if (index === 14 || index === 29 || index === 42 || index === 55) {
      keyboard.innerHTML += '<br>';
    }

    const keyElement = document.createElement('button');
    keyElement.classList.add('keyboard__key');
    keyElement.setAttribute('data', `${_data__WEBPACK_IMPORTED_MODULE_0__.data.keyCode[index]}`);

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createKeyBoard);


/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data),
/* harmony export */   "toLowerKeys": () => (/* binding */ toLowerKeys),
/* harmony export */   "toUpperKeys": () => (/* binding */ toUpperKeys)
/* harmony export */ });
const data = {
  keyLayoutRu: [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl',
  ],
  keyLayoutRuShift: [
    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'Э', 'Х', 'Ъ', '/', 'Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl',
  ],
  keyLayoutEn: [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl',
  ],
  keyLayoutEnShift: [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl',
  ],
  keyCode: [
    'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight',
  ],
};

const toUpperKeys = (keys) => {
  const array = [];
  keys.forEach((key, index) => {
    if (key.length === 1) {
      array[index] = key.toUpperCase();
    } else {
      array[index] = key;
    }
  });
  return array;
};

const toLowerKeys = (keys) => {
  const array = [];
  keys.forEach((key, index) => {
    if (key.length === 1) {
      array[index] = key.toLowerCase();
    } else {
      array[index] = key;
    }
  });
  return array;
};




/***/ }),

/***/ "./src/modules/keydown.js":
/*!********************************!*\
  !*** ./src/modules/keydown.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pressBackspace": () => (/* binding */ pressBackspace),
/* harmony export */   "pressCapsEn": () => (/* binding */ pressCapsEn),
/* harmony export */   "pressCapsRu": () => (/* binding */ pressCapsRu),
/* harmony export */   "pressDelete": () => (/* binding */ pressDelete),
/* harmony export */   "pressEnter": () => (/* binding */ pressEnter),
/* harmony export */   "pressShiftEn": () => (/* binding */ pressShiftEn),
/* harmony export */   "pressShiftRu": () => (/* binding */ pressShiftRu),
/* harmony export */   "pressSpace": () => (/* binding */ pressSpace),
/* harmony export */   "pressTab": () => (/* binding */ pressTab)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/modules/data.js");
/* harmony import */ var _createKeyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createKeyboard */ "./src/modules/createKeyboard.js");



const {
  keyLayoutRu, keyLayoutEn, keyLayoutEnShift, keyLayoutRuShift,
} = _data__WEBPACK_IMPORTED_MODULE_0__.data;

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
    (0,_createKeyboard__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_data__WEBPACK_IMPORTED_MODULE_0__.toLowerKeys)(keyLayoutRuShift));
    document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
    document.querySelector(`[data = '${shift}'`).classList.add('keyboard__key_active');
  } else {
    (0,_createKeyboard__WEBPACK_IMPORTED_MODULE_1__["default"])(keyLayoutRuShift);
    document.querySelector(`[data = '${shift}'`).classList.add('keyboard__key_active');
  }
};

const pressShiftEn = (shift) => {
  if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
    (0,_createKeyboard__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_data__WEBPACK_IMPORTED_MODULE_0__.toLowerKeys)(keyLayoutEnShift));
    document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
    document.querySelector(`[data = '${shift}'`).classList.add('keyboard__key_active');
  } else {
    (0,_createKeyboard__WEBPACK_IMPORTED_MODULE_1__["default"])(keyLayoutEnShift);
    document.querySelector(`[data = '${shift}'`).classList.add('keyboard__key_active');
  }
};

const pressCapsRu = () => {
  if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
    (0,_createKeyboard__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_data__WEBPACK_IMPORTED_MODULE_0__.toLowerKeys)(keyLayoutRu));
    document.querySelector('[data = "CapsLock"]').classList.remove('caps_active');
  } else {
    (0,_createKeyboard__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_data__WEBPACK_IMPORTED_MODULE_0__.toUpperKeys)(keyLayoutRu));
    document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
  }
};

const pressCapsEn = () => {
  if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
    (0,_createKeyboard__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_data__WEBPACK_IMPORTED_MODULE_0__.toLowerKeys)(keyLayoutEn));
    document.querySelector('[data = "CapsLock"]').classList.remove('caps_active');
  } else {
    (0,_createKeyboard__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_data__WEBPACK_IMPORTED_MODULE_0__.toUpperKeys)(keyLayoutEn));
    document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
  }
};




/***/ }),

/***/ "./src/modules/keyup.js":
/*!******************************!*\
  !*** ./src/modules/keyup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "upShiftEn": () => (/* binding */ upShiftEn),
/* harmony export */   "upShiftRu": () => (/* binding */ upShiftRu)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/modules/data.js");
/* harmony import */ var _createKeyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createKeyboard */ "./src/modules/createKeyboard.js");



const { keyLayoutRu, keyLayoutEn } = _data__WEBPACK_IMPORTED_MODULE_0__.data;

const upShiftRu = () => {
  if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
    (0,_createKeyboard__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_data__WEBPACK_IMPORTED_MODULE_0__.toUpperKeys)(keyLayoutRu));
    document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
  } else {
    (0,_createKeyboard__WEBPACK_IMPORTED_MODULE_1__["default"])(keyLayoutRu);
  }
};

const upShiftEn = () => {
  if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
    (0,_createKeyboard__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_data__WEBPACK_IMPORTED_MODULE_0__.toUpperKeys)(keyLayoutEn));
    document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
  } else {
    (0,_createKeyboard__WEBPACK_IMPORTED_MODULE_1__["default"])(keyLayoutEn);
  }
};




/***/ }),

/***/ "./src/modules/language.js":
/*!*********************************!*\
  !*** ./src/modules/language.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeLanguage": () => (/* binding */ changeLanguage),
/* harmony export */   "setDefaultLanguage": () => (/* binding */ setDefaultLanguage)
/* harmony export */ });
/* harmony import */ var _createKeyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createKeyboard */ "./src/modules/createKeyboard.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/modules/data.js");



const { keyLayoutRu, keyLayoutEn } = _data__WEBPACK_IMPORTED_MODULE_1__.data;

const setDefaultLanguage = () => {
  if (localStorage.getItem('language') === null || localStorage.getItem('language') === 'Ru') {
    localStorage.setItem('language', 'Ru');
    (0,_createKeyboard__WEBPACK_IMPORTED_MODULE_0__["default"])(keyLayoutRu);
  } else {
    (0,_createKeyboard__WEBPACK_IMPORTED_MODULE_0__["default"])(keyLayoutEn);
  }
};

const changeLanguage = (event) => {
  if ((event.code === 'ControlLeft' && event.altKey) || (event.code === 'AltLeft' && event.ctrlKey)) {
    if (localStorage.getItem('language') === 'Ru') {
      localStorage.setItem('language', 'En');
      if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
        (0,_createKeyboard__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_data__WEBPACK_IMPORTED_MODULE_1__.toUpperKeys)(keyLayoutEn));
        document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
        document.querySelector('[data = "ControlLeft"]').classList.add('keyboard__key_active');
        document.querySelector('[data = "AltLeft"]').classList.add('keyboard__key_active');
      } else {
        (0,_createKeyboard__WEBPACK_IMPORTED_MODULE_0__["default"])(keyLayoutEn);
        document.querySelector('[data = "ControlLeft"]').classList.add('keyboard__key_active');
        document.querySelector('[data = "AltLeft"]').classList.add('keyboard__key_active');
      }
    } else {
      localStorage.setItem('language', 'Ru');
      if (document.querySelector('[data = "CapsLock"]').classList.contains('caps_active')) {
        (0,_createKeyboard__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_data__WEBPACK_IMPORTED_MODULE_1__.toUpperKeys)(keyLayoutRu));
        document.querySelector('[data = "CapsLock"]').classList.add('caps_active');
        document.querySelector('[data = "ControlLeft"]').classList.add('keyboard__key_active');
        document.querySelector('[data = "AltLeft"]').classList.add('keyboard__key_active');
      } else {
        (0,_createKeyboard__WEBPACK_IMPORTED_MODULE_0__["default"])(keyLayoutRu);
        document.querySelector('[data = "ControlLeft"]').classList.add('keyboard__key_active');
        document.querySelector('[data = "AltLeft"]').classList.add('keyboard__key_active');
      }
    }
  }
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/data */ "./src/modules/data.js");
/* harmony import */ var _modules_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/language */ "./src/modules/language.js");
/* harmony import */ var _modules_keydown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/keydown */ "./src/modules/keydown.js");
/* harmony import */ var _modules_keyup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/keyup */ "./src/modules/keyup.js");





window.addEventListener('DOMContentLoaded', function () {
  const { keyCode } = _modules_data__WEBPACK_IMPORTED_MODULE_0__.data;

  const createNode = (element, ...classes) => {
    const node = document.createElement(element);
    node.classList.add(classes);
    return node;
  };

  const appendNodeToDom = (domNode, ...newNode) => {
    newNode.forEach((node) => {
      domNode.append(node);
    });
  };

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

  appendNodeToDom(this.document.body, createContainer);
  appendNodeToDom(createContainer, createTitle, createTextarea, createKeyboard, createDescription);
  appendNodeToDom(createDescription, createOperatingSystem, createLanguage);

  (0,_modules_language__WEBPACK_IMPORTED_MODULE_1__.setDefaultLanguage)();

  const keyboard = document.querySelector('.keyboard');
  const textarea = document.querySelector('.input');

  document.addEventListener('keydown', (event) => {
    (0,_modules_language__WEBPACK_IMPORTED_MODULE_1__.changeLanguage)(event);

    if (keyCode.indexOf(event.code) === -1) {
      event.preventDefault();
      return;
    }

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
        (0,_modules_keydown__WEBPACK_IMPORTED_MODULE_2__.pressBackspace)(currentPointer);
        return;
      }

      if (event.code === 'Space') {
        (0,_modules_keydown__WEBPACK_IMPORTED_MODULE_2__.pressSpace)(currentPointer);
        return;
      }

      if (event.code === 'Tab') {
        (0,_modules_keydown__WEBPACK_IMPORTED_MODULE_2__.pressTab)(currentPointer);
        return;
      }

      if (event.code === 'Delete') {
        (0,_modules_keydown__WEBPACK_IMPORTED_MODULE_2__.pressDelete)(currentPointer);
        return;
      }

      if (event.code === 'Enter') {
        (0,_modules_keydown__WEBPACK_IMPORTED_MODULE_2__.pressEnter)(currentPointer);
        return;
      }

      if (event.key === 'Shift') {
        if (localStorage.getItem('language') === 'Ru') {
          (0,_modules_keydown__WEBPACK_IMPORTED_MODULE_2__.pressShiftRu)(event.code);
          return;
        }
        if (localStorage.getItem('language') === 'En') {
          (0,_modules_keydown__WEBPACK_IMPORTED_MODULE_2__.pressShiftEn)(event.code);
          return;
        }
      }

      if (event.code === 'CapsLock') {
        if (localStorage.getItem('language') === 'Ru') {
          (0,_modules_keydown__WEBPACK_IMPORTED_MODULE_2__.pressCapsRu)();
          return;
        }
        if (localStorage.getItem('language') === 'En') {
          (0,_modules_keydown__WEBPACK_IMPORTED_MODULE_2__.pressCapsEn)();
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
      (0,_modules_keyup__WEBPACK_IMPORTED_MODULE_3__.upShiftRu)();
    }

    if (localStorage.getItem('language') === 'En' && event.key === 'Shift') {
      (0,_modules_keyup__WEBPACK_IMPORTED_MODULE_3__.upShiftEn)();
    }
  });

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
        (0,_modules_keydown__WEBPACK_IMPORTED_MODULE_2__.pressBackspace)(currentPointer);
        return;
      }

      if (event.target.getAttribute('data') === 'Space') {
        (0,_modules_keydown__WEBPACK_IMPORTED_MODULE_2__.pressSpace)(currentPointer);
        return;
      }

      if (event.target.getAttribute('data') === 'Tab') {
        (0,_modules_keydown__WEBPACK_IMPORTED_MODULE_2__.pressTab)(currentPointer);
        return;
      }

      if (event.target.getAttribute('data') === 'Delete') {
        (0,_modules_keydown__WEBPACK_IMPORTED_MODULE_2__.pressDelete)(currentPointer);
        return;
      }

      if (event.target.getAttribute('data') === 'Enter') {
        (0,_modules_keydown__WEBPACK_IMPORTED_MODULE_2__.pressEnter)(currentPointer);
        return;
      }

      if (event.target.textContent === 'Shift') {
        if (localStorage.getItem('language') === 'Ru') {
          (0,_modules_keydown__WEBPACK_IMPORTED_MODULE_2__.pressShiftRu)(event.target.getAttribute('data'));
          return;
        }
        if (localStorage.getItem('language') === 'En') {
          (0,_modules_keydown__WEBPACK_IMPORTED_MODULE_2__.pressShiftEn)(event.target.getAttribute('data'));
          return;
        }
      }

      if (event.target.getAttribute('data') === 'CapsLock') {
        if (localStorage.getItem('language') === 'Ru') {
          (0,_modules_keydown__WEBPACK_IMPORTED_MODULE_2__.pressCapsRu)();
          return;
        }
        if (localStorage.getItem('language') === 'En') {
          (0,_modules_keydown__WEBPACK_IMPORTED_MODULE_2__.pressCapsEn)();
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
      (0,_modules_keyup__WEBPACK_IMPORTED_MODULE_3__.upShiftRu)();
    }

    if (localStorage.getItem('language') === 'En' && event.target.textContent === 'Shift') {
      (0,_modules_keyup__WEBPACK_IMPORTED_MODULE_3__.upShiftEn)();
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

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map