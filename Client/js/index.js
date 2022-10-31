// import axios from "axios";
const task = function (title) {
    return `<li>
                <div class="form-check"> 
                    <label class="form-check-label"> 
                    <input class="checkbox" type="checkbox"> ${title} 
                    <i class="input-helper"></i>
                    </label> 
                </div> 
                <i class="remove mdi mdi-close-circle-outline"></i>
            </li>`
}


const userExist = async (user) => {
    const response = await axios (`/api/get-task/${user}`);
    if (response.status === "present") return response.data.tasks;
}

const loginBtn = document.querySelector (".login");
const todoList = document.querySelector (".todo_list");
const card_title = document.querySelector (".card-title");

if( loginBtn ) {
    loginBtn.addEventListener ("click",async event => {
        event.preventDefault ();
        const user = document.querySelector (".todo-list-input").value;
        const data = await userExist (user);
        card_title.textContent = user;
        data.forEach ((el) => {
           todoList.insertAdjacentHTML ("afterbegin",task (el.title));
        });

    })
}



