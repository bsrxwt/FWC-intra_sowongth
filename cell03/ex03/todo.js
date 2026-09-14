const ft_list = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

window.onload = function() {
    const cookies = document.cookie;
    if (cookies) {

        const cookieArray = cookies.split(';');
        let todoString = "";
        
        for (let i = 0; i < cookieArray.length; i++) {
            let c = cookieArray[i].trim();
            if (c.indexOf("todo=") === 0) {
                todoString = c.substring(5); 
                break;
            }
        }

        if (todoString) {

            const todos = JSON.parse(decodeURIComponent(todoString));

            todos.forEach(task => {
                createTodoElement(task, false);
            });
        }
    }
};

function saveCookies() {
    const todos = [];
    const listItems = document.querySelectorAll('#ft_list div');
    
    listItems.forEach(item => {
        todos.push(item.textContent);
    });

    const encodedData = encodeURIComponent(JSON.stringify(todos));
    document.cookie = `todo=${encodedData}; max-age=86400; path=/`;
}

function createTodoElement(text, isNewItem) {
    if (!text || text.trim() === "") return;

    const div = document.createElement('div');
    div.textContent = text;

    div.addEventListener('click', function() {
        const confirmDelete = confirm('Do you want to remove this TO DO?');
        if (confirmDelete) {
            div.remove();
            saveCookies();
        }
    });

    if (isNewItem) {
        ft_list.insertBefore(div, ft_list.firstChild);
    } else {
        ft_list.appendChild(div);
    }
}

newBtn.addEventListener('click', function() {
    const task = prompt("Enter a new TO DO:");
    if (task && task.trim() !== "") {
        createTodoElement(task, true);
        saveCookies();
    }
});