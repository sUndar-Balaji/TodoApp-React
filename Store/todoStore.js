import { Dispatcher } from 'flux';
import TodoStoreDispatcher from '../Actions/actions';
import eventEmitter from 'event-emitter';

var emitter = new eventEmitter();

class todoStore {

    constructor () {
    
        this.todos = [ "get milk", "transfer money", "attend meeting" ];
    
    }
    
    update (action) {
    
        switch ( action.action ) {
        
            case "updateTodos": this.todos.push (action.todo);
                                emitter.emit("change");
                                break;
        
        }
    
    }

}

var TodoStore =  new todoStore ();

module.exports.TodoStore = TodoStore;

TodoStoreDispatcher.register ( function (action) {

    TodoStore.update (action);

    console.log (action);

} );

module.exports.emitter = emitter;