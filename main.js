/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


const UI = (() => {
    // cache DOM
    const openAddTodoFormBtn = document.querySelector("#openAddTodoFormBtn")
    const addTodoForm = document.querySelector("#addTodoForm")
    const addTodoBtn = document.querySelector("#addTodoBtn")
    const todoContainer = document.querySelector("#todoContainer")
    const inbox = document.querySelector("#inbox")
    const today = document.querySelector("#today")
    const week = document.querySelector("#week")
    const header = document.querySelector("#header")

    // bind events
    openAddTodoFormBtn.addEventListener("click", openAddTodoForm)
    addTodoBtn.addEventListener("click", () => { 
        addTodo()
        closeAddTodoForm()
        showTodos() })

    function openAddTodoForm() {
        addTodoForm.classList.add("active");
    }

    function todoEvent() {
        const deleteBtns = document.querySelectorAll(".deleteBtn");
        deleteBtns.forEach(deleteBtn => {
            deleteBtn.addEventListener("click", (e) => { deleteTodo(e) });
        });
    }

    function deleteTodo(e) {
        _todo__WEBPACK_IMPORTED_MODULE_0__.todo.deleteTodo(+e.target.parentNode.dataset.index);
        showTodos()
    }

    function closeAddTodoForm() {
        addTodoForm.classList.remove("active");
    }

    function addTodo() {
        const titleInput = document.querySelector("#titleInput").value;
        const descriptionInput = document.querySelector("#descriptionInput").value;
        const dueDateInput = document.querySelector("#dueDateInput").value;
        const priorityInput = document.querySelector("#priorityInput").value;
        const projectInput = document.querySelector("#projectInput").value;

        _todo__WEBPACK_IMPORTED_MODULE_0__.todo.addTodo(titleInput, descriptionInput, dueDateInput, priorityInput, projectInput, _todo__WEBPACK_IMPORTED_MODULE_0__.todo.getId())
    }

    function showTodos() {
        todoContainer.innerHTML = "";

        let todos = _todo__WEBPACK_IMPORTED_MODULE_0__.todo.getTodos();
        todos.forEach((element) => {
            const todo = document.createElement("div");
            todo.dataset.index = element.id;
            todo.classList.add("todo")

            const todoText = document.createElement("p");
            todoText.textContent = `Title: ${element.title} - Due: ${element.dueDate}`
            todoText.classList.add("todoText")

            const deleteBtn = document.createElement("input")
            deleteBtn.setAttribute("type", "button")
            deleteBtn.value = "Delete"
            deleteBtn.classList.add("deleteBtn")

            const editBtn = document.createElement("input")
            editBtn.setAttribute("type", "button");
            editBtn.value = "Edit"
            editBtn.classList.add("editBtn")

            todo.appendChild(todoText)
            todo.appendChild(deleteBtn)
            todo.appendChild(editBtn)
            todoContainer.appendChild(todo)
        })

        // cache DOM
        todoEvent();
    }

    _todo__WEBPACK_IMPORTED_MODULE_0__.todo.addTodo("Title1", "Desc1", "DUedAte1", "medium", "project1", _todo__WEBPACK_IMPORTED_MODULE_0__.todo.getId())
    showTodos()
})();



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todo": () => (/* binding */ todo)
/* harmony export */ });
const todo = (() => {

    let id = 0;

    let todos = [];

    function Todo(title, description, dueDate, priority, project, id) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.id = id;
    }

    function addTodo(title, description, dueDate, priority, project, id) {
        const todo = new Todo(title, description, dueDate, priority, project, id);
        todos.push(todo);
    }

    function getTodos() {
        return todos;
    }

    function getId() {
        return id++;
    }

    function getTodo(index) {
        let todoIds = todos.map((todo) => { return todo.id });
        let pos = todoIds.indexOf(index);
        return todos[pos];
    }

    function deleteTodo(index){
        let todoIds = todos.map((todo) => { return todo.id });
        let pos = todoIds.indexOf(index);
        console.log(todoIds, pos, index)
        todos.splice(pos, 1);
    }
    return { getId, getTodos, addTodo, getTodo, deleteTodo }
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
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsZUFBZTtBQUN4RSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxRQUFRLGtEQUFlO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLCtDQUFZLDBFQUEwRSw2Q0FBVTtBQUN4Rzs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixnREFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxlQUFlLFNBQVMsZ0JBQWdCO0FBQ3JGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsSUFBSSwrQ0FBWSxzREFBc0QsNkNBQVU7QUFDaEY7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDckZEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxnQkFBZ0I7QUFDNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLGdCQUFnQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDOzs7Ozs7OztVQ3pDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vdG9kb1wiXG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgICAvLyBjYWNoZSBET01cbiAgICBjb25zdCBvcGVuQWRkVG9kb0Zvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW5BZGRUb2RvRm9ybUJ0blwiKVxuICAgIGNvbnN0IGFkZFRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRUb2RvRm9ybVwiKVxuICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFRvZG9CdG5cIilcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvQ29udGFpbmVyXCIpXG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luYm94XCIpXG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZGF5XCIpXG4gICAgY29uc3Qgd2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2Vla1wiKVxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpXG5cbiAgICAvLyBiaW5kIGV2ZW50c1xuICAgIG9wZW5BZGRUb2RvRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkFkZFRvZG9Gb3JtKVxuICAgIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXG4gICAgICAgIGFkZFRvZG8oKVxuICAgICAgICBjbG9zZUFkZFRvZG9Gb3JtKClcbiAgICAgICAgc2hvd1RvZG9zKCkgfSlcblxuICAgIGZ1bmN0aW9uIG9wZW5BZGRUb2RvRm9ybSgpIHtcbiAgICAgICAgYWRkVG9kb0Zvcm0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2RvRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZUJ0blwiKTtcbiAgICAgICAgZGVsZXRlQnRucy5mb3JFYWNoKGRlbGV0ZUJ0biA9PiB7XG4gICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IGRlbGV0ZVRvZG8oZSkgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG8oZSkge1xuICAgICAgICB0b2RvLmRlbGV0ZVRvZG8oK2UudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIHNob3dUb2RvcygpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VBZGRUb2RvRm9ybSgpIHtcbiAgICAgICAgYWRkVG9kb0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUb2RvKCkge1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZUlucHV0XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbklucHV0XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0SW5wdXRcIikudmFsdWU7XG5cbiAgICAgICAgdG9kby5hZGRUb2RvKHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXQsIGR1ZURhdGVJbnB1dCwgcHJpb3JpdHlJbnB1dCwgcHJvamVjdElucHV0LCB0b2RvLmdldElkKCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1RvZG9zKCkge1xuICAgICAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgbGV0IHRvZG9zID0gdG9kby5nZXRUb2RvcygpO1xuICAgICAgICB0b2Rvcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvZG8uZGF0YXNldC5pbmRleCA9IGVsZW1lbnQuaWQ7XG4gICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICB0b2RvVGV4dC50ZXh0Q29udGVudCA9IGBUaXRsZTogJHtlbGVtZW50LnRpdGxlfSAtIER1ZTogJHtlbGVtZW50LmR1ZURhdGV9YFxuICAgICAgICAgICAgdG9kb1RleHQuY2xhc3NMaXN0LmFkZChcInRvZG9UZXh0XCIpXG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIilcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi52YWx1ZSA9IFwiRGVsZXRlXCJcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlQnRuXCIpXG5cbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICAgICAgICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGVkaXRCdG4udmFsdWUgPSBcIkVkaXRcIlxuICAgICAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdEJ0blwiKVxuXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9UZXh0KVxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGVkaXRCdG4pXG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gY2FjaGUgRE9NXG4gICAgICAgIHRvZG9FdmVudCgpO1xuICAgIH1cblxuICAgIHRvZG8uYWRkVG9kbyhcIlRpdGxlMVwiLCBcIkRlc2MxXCIsIFwiRFVlZEF0ZTFcIiwgXCJtZWRpdW1cIiwgXCJwcm9qZWN0MVwiLCB0b2RvLmdldElkKCkpXG4gICAgc2hvd1RvZG9zKClcbn0pKCk7XG5cbmV4cG9ydCB7IFVJIH0iLCJjb25zdCB0b2RvID0gKCgpID0+IHtcblxuICAgIGxldCBpZCA9IDA7XG5cbiAgICBsZXQgdG9kb3MgPSBbXTtcblxuICAgIGZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgaWQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgaWQpIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGlkKTtcbiAgICAgICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUb2RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRvZG9zO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldElkKCkge1xuICAgICAgICByZXR1cm4gaWQrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUb2RvKGluZGV4KSB7XG4gICAgICAgIGxldCB0b2RvSWRzID0gdG9kb3MubWFwKCh0b2RvKSA9PiB7IHJldHVybiB0b2RvLmlkIH0pO1xuICAgICAgICBsZXQgcG9zID0gdG9kb0lkcy5pbmRleE9mKGluZGV4KTtcbiAgICAgICAgcmV0dXJuIHRvZG9zW3Bvc107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVG9kbyhpbmRleCl7XG4gICAgICAgIGxldCB0b2RvSWRzID0gdG9kb3MubWFwKCh0b2RvKSA9PiB7IHJldHVybiB0b2RvLmlkIH0pO1xuICAgICAgICBsZXQgcG9zID0gdG9kb0lkcy5pbmRleE9mKGluZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2codG9kb0lkcywgcG9zLCBpbmRleClcbiAgICAgICAgdG9kb3Muc3BsaWNlKHBvcywgMSk7XG4gICAgfVxuICAgIHJldHVybiB7IGdldElkLCBnZXRUb2RvcywgYWRkVG9kbywgZ2V0VG9kbywgZGVsZXRlVG9kbyB9XG59KSgpO1xuXG5leHBvcnQgeyB0b2RvIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==