(function () {
    //localStroage保存数据
    var STORAGE_KEY = 'todos'
    window.todoStorage = {
        fetch () {
            var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            todos.forEach(function (todo, index) {
                todo.id = index
            });
            todoStorage.uid = todos.length;
            return todos
        },
        save (todos) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
        }
    }
})();
