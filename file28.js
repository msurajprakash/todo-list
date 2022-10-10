const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();//it stops the page to be refreshed when click on add..
    const newTodoText = todoInput.value;//it gets the value which typed.
    const newLi = document.createElement("li");
    const newLiInnerHTML =
        `<span class="text">${newTodoText}</span>
            <div class="todo-buttons">
                <button class="todo-btn done">Done</button>
                <button class="todo-btn remove">Remove</button>
            </div>`
    newLi.innerHTML = newLiInnerHTML;
    todoList.append(newLi);
    todoInput.value = "";//it blanks the white space after adding todo..
});

todoList.addEventListener("click", (e)=>{
    //check if user clicked on done or remove button
    // console.log(e.target.classList);
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        // console.log(liSpan);
        liSpan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        // console.log(targetedLi);
        targetedLi.remove();
    }
})