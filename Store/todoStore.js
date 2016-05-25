import { Dispatcher } from 'flux';

export default class todoStore {

    constructor () {
    
        this.todos = [ "get milk", "transfer money", "attend meeting" ];
    
    }

}

var dispatcherTodo = new Dispatcher();

dispatcherTodo.register ( function (action) {

    console.log (action);

} );