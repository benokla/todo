/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayController": () => (/* binding */ displayController)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


const displayController = (() => {
    const main = document.querySelector(".main");

    const addTodoBtn = document.querySelector("#addTodoBtn");

    // TODO
    const todoContainer = document.querySelector("#todoContainer");
    const enterAddTodoBtn = document.querySelector("#enterAddTodoBtn");
    const addTodoForm = document.querySelector(".addTodoForm");

    enterAddTodoBtn.addEventListener("click", enterAddTodo);
    addTodoBtn.addEventListener("click", openAddTodoForm);

    function enterAddTodo() {
        const titleInput = document.querySelector("#titleInput")
        const descriptionInput = document.querySelector("#descriptionInput")
        const duedateInput = document.querySelector("#duedateInput")
        const projectInput = document.querySelector("#projectInput");
        const priorityInput = document.querySelector("#priorityInput");

        addTodoForm.classList.remove("active");
        _todo__WEBPACK_IMPORTED_MODULE_0__.todoModule.addTodo(titleInput.value, descriptionInput.value, duedateInput.value, projectInput.value, priorityInput.value);
        loadInbox(_todo__WEBPACK_IMPORTED_MODULE_0__.todoModule.todos);
    }

    function openAddTodoForm() {
        addTodoForm.classList.add("active")
    }

    const loadInbox = (todos) => {

        todoContainer.innerHTML = "";

        todos.forEach(element => {
            const todo = document.createElement("div");
            todo.classList.add("todo");

            const todoText = document.createElement("p");
            todoText.setAttribute("id", "todoText");
            todoText.textContent = element.title + ": " + element.description;

            const deleteLogo = document.createElement("span");
            deleteLogo.setAttribute("id", "deleteLogo");
            deleteLogo.classList.add("material-icons-outlined");
            deleteLogo.textContent="remove_circle_outline";

            todo.appendChild(todoText);
            todo.appendChild(deleteLogo);
            todoContainer.appendChild(todo);
        });
    }

    return { loadInbox }

})();



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoModule": () => (/* binding */ todoModule)
/* harmony export */ });
const todoModule = (() => {

    let todos = [];

    function Todo(title, description, duedate, priority, project) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.project = project;
    }
    
    Todo.prototype.pushToArray = function(array) {
        array.push(this);
    }

    let todo1 = new Todo("Todo1Title", "Descrpi1", "20-09-2022", "high", "project11");
    todo1.pushToArray(todos)

    function addTodo(title, description, duedate, priority, project) {
        let newTodo = new Todo(title, description, duedate, priority, project);
        newTodo.pushToArray(todos)
        console.log(todos)
    }

    return {todos, addTodo}
})();



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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



_dom__WEBPACK_IMPORTED_MODULE_1__.displayController.loadInbox(_todo__WEBPACK_IMPORTED_MODULE_0__.todoModule.todos)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHFEQUFrQjtBQUMxQixrQkFBa0IsbURBQWdCO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxhQUFhOztBQUViLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7O1VDMUJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ007O0FBRTFDLDZEQUEyQixDQUFDLG1EQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b2RvTW9kdWxlIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcblxuICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFRvZG9CdG5cIik7XG5cbiAgICAvLyBUT0RPXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0NvbnRhaW5lclwiKTtcbiAgICBjb25zdCBlbnRlckFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudGVyQWRkVG9kb0J0blwiKTtcbiAgICBjb25zdCBhZGRUb2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVG9kb0Zvcm1cIik7XG5cbiAgICBlbnRlckFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVudGVyQWRkVG9kbyk7XG4gICAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkFkZFRvZG9Gb3JtKTtcblxuICAgIGZ1bmN0aW9uIGVudGVyQWRkVG9kbygpIHtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVJbnB1dFwiKVxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbklucHV0XCIpXG4gICAgICAgIGNvbnN0IGR1ZWRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlZGF0ZUlucHV0XCIpXG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdElucHV0XCIpO1xuICAgICAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eUlucHV0XCIpO1xuXG4gICAgICAgIGFkZFRvZG9Gb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRvZG9Nb2R1bGUuYWRkVG9kbyh0aXRsZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBkdWVkYXRlSW5wdXQudmFsdWUsIHByb2plY3RJbnB1dC52YWx1ZSwgcHJpb3JpdHlJbnB1dC52YWx1ZSk7XG4gICAgICAgIGxvYWRJbmJveCh0b2RvTW9kdWxlLnRvZG9zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuQWRkVG9kb0Zvcm0oKSB7XG4gICAgICAgIGFkZFRvZG9Gb3JtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkSW5ib3ggPSAodG9kb3MpID0+IHtcblxuICAgICAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgdG9kb3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIHRvZG9UZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb1RleHRcIik7XG4gICAgICAgICAgICB0b2RvVGV4dC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGUgKyBcIjogXCIgKyBlbGVtZW50LmRlc2NyaXB0aW9uO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBkZWxldGVMb2dvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlTG9nb1wiKTtcbiAgICAgICAgICAgIGRlbGV0ZUxvZ28uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgICAgICAgICAgZGVsZXRlTG9nby50ZXh0Q29udGVudD1cInJlbW92ZV9jaXJjbGVfb3V0bGluZVwiO1xuXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9UZXh0KTtcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoZGVsZXRlTG9nbyk7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBsb2FkSW5ib3ggfVxuXG59KSgpO1xuXG5leHBvcnQge2Rpc3BsYXlDb250cm9sbGVyfSIsImNvbnN0IHRvZG9Nb2R1bGUgPSAoKCkgPT4ge1xuXG4gICAgbGV0IHRvZG9zID0gW107XG5cbiAgICBmdW5jdGlvbiBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG4gICAgXG4gICAgVG9kby5wcm90b3R5cGUucHVzaFRvQXJyYXkgPSBmdW5jdGlvbihhcnJheSkge1xuICAgICAgICBhcnJheS5wdXNoKHRoaXMpO1xuICAgIH1cblxuICAgIGxldCB0b2RvMSA9IG5ldyBUb2RvKFwiVG9kbzFUaXRsZVwiLCBcIkRlc2NycGkxXCIsIFwiMjAtMDktMjAyMlwiLCBcImhpZ2hcIiwgXCJwcm9qZWN0MTFcIik7XG4gICAgdG9kbzEucHVzaFRvQXJyYXkodG9kb3MpXG5cbiAgICBmdW5jdGlvbiBhZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICAgICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICAgICAgbmV3VG9kby5wdXNoVG9BcnJheSh0b2RvcylcbiAgICAgICAgY29uc29sZS5sb2codG9kb3MpXG4gICAgfVxuXG4gICAgcmV0dXJuIHt0b2RvcywgYWRkVG9kb31cbn0pKCk7XG5cbmV4cG9ydHt0b2RvTW9kdWxlfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdG9kb01vZHVsZSB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4vZG9tXCI7XG5cbmRpc3BsYXlDb250cm9sbGVyLmxvYWRJbmJveCh0b2RvTW9kdWxlLnRvZG9zKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9