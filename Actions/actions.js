import { Dispatcher } from 'flux';

var dispatcherActions = new Dispatcher();

dispatcherActions.updateTodos = function (todo) {
    dispatcherActions.dispatch ( { 'action': 'updateTodos', 'todo': todo } );
}

module.exports = dispatcherActions;