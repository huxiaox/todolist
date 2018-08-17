var app = new Vue({
    el: '.todoApp',
    data: {
        items: todoStorage.fetch(),  //直接从localstroage拿数据
        inputValue: '',
        editedTodo: null,
        beforeEditCache: '',
    },
    methods: {
        addTodo (){
            this.items.push({text: this.inputValue, completed: false});
            this.inputValue = '';
        },
        removeTodo (todo) {
            this.items.splice(this.items.indexOf(todo), 1);
        },
        editTodo (todo){
            this.editedTodo = todo;
            this.beforeEditCache = todo.text;
        },
        doneEdit (todo) {
            this.editedTodo = null;
            if (!todo.text) {
                this.removeTodo(todo);
            }
        },
        cancelEdit (todo) {
            if (this.editedTodo) {
                todo.text = this.beforeEditCache;
                this.editedTodo = null;
            }
        }
    },
    watch: {
        items: {
            handler (items) {
                todoStorage.save(items)
            },
            deep: true
        }
    },
    directives: {
        focus: {
            update(el) {
                el.focus()
            }
        }
    },
});