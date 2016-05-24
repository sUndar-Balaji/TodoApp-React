import React from 'react';

export default class User extends React.Component{

    constructor () {
        super();
    }

    render () {
    
        return (<div className="header">user <br/> { this.props.children } </div>);
    
    }

}





