$(document).ready(function() {
    
    function loadCookies() {
        const cookies = document.cookie;
        if (cookies) {
            const cookieArray = cookies.split(';');
            let todoString = "";
            for (let i = 0; i < cookieArray.length; i++) {
                let c = $.trim(cookieArray[i]);
                if (c.indexOf("todo=") === 0) {
                    todoString = c.substring(5);
                    break;
                }
            }
            if (todoString) {
                const todos = JSON.parse(decodeURIComponent(todoString));
                $.each(todos, function(index, task) {
                    createTodoElement(task, false);
                });
            }
        }
    }

    function saveCookies() {
        const todos = [];

        $('#ft_list div').each(function() {
            todos.push($(this).text());
        });
        const encodedData = encodeURIComponent(JSON.stringify(todos));
        document.cookie = `todo=${encodedData}; max-age=86400; path=/`;
    }

    function createTodoElement(text, isNewItem) {
        if (!text || $.trim(text) === "") return;
        const $div = $('<div></div>').text(text);

        $div.click(function() {
            if (confirm('Do you want to remove this TO DO?')) {
                $(this).remove();
                saveCookies();
            }
        });

        if (isNewItem) {
            $('#ft_list').prepend($div);
        } else {
            $('#ft_list').append($div);
        }
    }

    $('#newBtn').click(function() {
        const task = prompt("Enter a new TO DO:");
        if (task && $.trim(task) !== "") {
            createTodoElement(task, true);
            saveCookies();
        }
    });
    loadCookies();
});