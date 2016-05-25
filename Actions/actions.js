import { Dispatcher } from 'flux';

var dispatcherActions = new Dispatcher();

export function updateTodos (todo) {
    dispatcherActions.dispatch ( { 'action': 'updateTodos', 'todo': todo } );
}