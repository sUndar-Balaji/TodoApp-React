import React from 'react';

export default class HeaderComponent extends React.Component{

    constructor () {
        super();
    }

    render () {
    
        return (<div className="header">subHeader { this.props.children }</div>);
        

    
    }

}





