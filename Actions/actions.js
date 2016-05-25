import { Dispatcher } from 'flux';

var dispatcherActions = new Dispatcher();

dispatcherActions.updateTodos = function (todo) {
    dispatcherActions.dispatch ( { 'action': 'updateTodos', 'todo': todo } );
}

dispatcherActions.deleteTodo = function (id) {
    dispatcherActions.dispatch ( { 'action': 'deleteTodo', 'id': id } );
}

module.exports = dispatcherActions;