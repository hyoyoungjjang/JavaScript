
let todoList = localStorage.getItem("todoList") ? 
                JSON.parse(localStorage.getItem("todoList")) : [];

//할 일을 todoList에 넣어주기
function addTodo(){
    //input 요소 가져오기
    const searchInput = document.querySelector("#search-bar input");
    todoList.push({
        title : searchInput.value,
        date : new Date().getTime(),
        isDone : false
    });

    searchInput.value = "";
    localStorage.setItem("todoList", JSON.stringify(todoList));
    drawTodoList();
}

//JSON.stringify(todoList) => todoList 변수에 담긴 배열요소를 Stirng(문자열)로 변환
//localStorage.setItem("todoList", JSON.stringify(todoList))에 저장된 String데이터를 다시 배열요소로 변환

//localStorage.setItem("todoList", JSON.stringify(todoList)); => localStorage영역에 키, 벨류 형태로 저장
//localStorage.getItem("todoList") => localStoryge여역에 데이터를 key로 불러오는 것

window.onload = function(){
    drawTodoList();
}


//할일목록을 ui에 그려주기
function drawTodoList(){
    console.log(todoList)
    const removeTodo = function(removeTodo){
        localStorage.setItem("todoList", JSON.stringify(todoList));
        //todoList에서 removeTodo와 같은 데이터를 삭제
        todoList = todoList.filter(t => (removeTodo.date !== t.date && removeTodo.title !== t.title)) //반환값이 true인 데이터만 남기고 전부 삭제된 배열을 반환
        //todoList에서 todo와 같은 데이터를 삭제
        drawTodoList();
    }
    
    const toggleStatus = function(targetTodo){
        todoList = todoList.map(t => {
            if(t.date === targetTodo.date){
                t.isDone = !t.isDone;
            }
            return t;
        })
        localStorage.setItem("todoList", JSON.stringify(todoList));
        drawTodoList();
    }

    //ul요소 가져오기
     const todoUl = document.querySelector(".todo-list");
     todoUl.innerHTML = "";
    
     for(let todo of todoList){
        //todoUl.innerHTML += `<li>${todo.title}
        //<div class="todo-remove-btn"><i class="fa-solid fa-xmark"></i></div></li>`
        console.log(todo.isDone)
        const todoLi = document.createElement('li');
        todoLi.className = todo.isDone ? "done" : "";
        todoLi.innerHTML = todo.title;
        todoUl.appendChild(todoLi);


        const removeBtn = document.createElement('div');
        removeBtn.className = 'todo-remove-btn';
        removeBtn.innerHTML =  '<i class="fa-solid fa-xmark"></i>'
        todoLi.appendChild(removeBtn);

        todoLi.onclick = function(ev){
            toggleStatus(todo)
        }

        removeBtn.onclick = function(ev){
            //todoList 데이터지우기
            localStorage.setItem("todoList", JSON.stringify(todoList));
            removeTodo(todo)
            
        }
        
     }
}

            