
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute, IndexLink } from 'react-router';
import TodoStore from './Store/todoStore';
import * as Actions from './Actions/actions';
import InnerComps from './public/js/innerComps';
import User from './public/js/user';
import NewUser from './public/js/newUser';


class App extends React.Component {


    render () {
    
        return (
        
            <div>
                <nav>
                    <IndexLink to="/" activeStyle={ { color: 'green' } }>Home</IndexLink>
                    <Link to="/addTodos" activeStyle={ { color: 'green' } }>Add Todo</Link>
                    <Link to="/AboutUs" activeStyle={ { color: 'green' } }>Todo List</Link>                 
                </nav>
                
                <div className = "content">
                    { this.props.children } 
                </div>
            
            </div>
        
        )
    
    
    }

}


class TodoSection extends React.Component {

    constructor () {
    
        super();
    
        this.state = { todos: new TodoStore().todos };
        
    }
    
    updateTodoList = (newTodo) => {
    
        this.state.todos.push(newTodo);
        this.setState ( { todos: this.state.todos } );
    
    }

    render () {
    
        return ( 
        
                <section>
                    {this.state.todos}
                    <NewTodos update = { this.updateTodoList }/>
                    <TodoLists todos = { this.state.todos }/>
                    <Link to="/users" activeStyle={{ color: 'red' }}>User</Link>
                    <br/>
                    <Link to="/users/user" activeStyle={{ color: 'green' }}>User</Link>
                    {this.props.children}
                </section>
                
        );
    
    }

}

class NewTodos extends React.Component {

    constructor () {
        super();
    }

    addNewTodo = () => {
        
        Actions.updateTodos(document.getElementById ("newTodo").value);
    
    }

    render () {
    
        return (
            <div>
                <input type="text" id="newTodo"/>
                <input type="button" onClick={ this.addNewTodo }/>
            </div>
        );
    
    }



}

class TodoLists extends React.Component {

    constructor () {
    
        super();
        
    }

    render () {
    
        return ( 
        
                <ul>
                    { this.props.todos.map (( v, i ) => <Todo todo={v} key={i}/>) }
                </ul>
        );
    
    }

}

class Todo extends React.Component {

    constructor () {
    
        super();
        
    }

    render () {
    
        return ( 
        
                <li>{ this.props.todo }</li>
        );
    
    }

}


class Home extends React.Component {

    constructor () {
    
        super();
        
    }

    render () {
    
        return ( 
        
                <h4>Welcome</h4>
                
        );
    
    }

}

class AboutUs extends React.Component {

    constructor () {
    
        super();
        
    }

    render () {
    
        return ( 
                
                <div>
                    <h4>About Us</h4>
                
                    <Link to="/aboutUs/evenMore" activeStyle={{color: 'red'}}>Details</Link>
                
                    { this.props.children }
                </div>
        );
    
    }

}

class Details extends React.Component {

    render () {
        return (
            
            <div>
            
                <p>Address1</p>
                
                <p>Address1</p>
                
                {  this.props.children } 
            
            </div>
        
        );
    }

}

class Detail extends React.Component {

    render () {
        return (
            
            <div>
            
                <p>Address1</p>
                
                { this.props.params.id }
            
            </div>
        
        );
    }

}


ReactDom.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component = {Home}>
            </IndexRoute>
            <Route path="/addTodos" component = {TodoSection} />
            <Route path="/aboutUs" component = {AboutUs} >
                <Route path="/aboutUs/evenMore" component={Details}>
                    <Route path="/aboutUs/evenMore/:id" component={Detail}/>
                </Route>
            </Route>
        </Route>
        <Route path="/home" component={Home}/>
    </Router>, document.getElementById("comps"));