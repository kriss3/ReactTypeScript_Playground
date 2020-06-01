import React, { Component } from 'react';

interface UserMessage {
    name: string;
    message: string;
};

class MyApp extends Component<UserMessage>{

    componentWillMount(){
        console.log('almost there...');
    };

    componentDidMount(){
        console.log('Finally... hello!');
    };

    render(){

        return(
            <>
                <h3>This is my MyApp component</h3>
                <p>This is some text in myApp class component</p>
                <p>The name of passed from the parent is: {this.props.name}</p>
                <p>And the message from other Kris is: {this.props.message}</p>
            
            </>
        );
    }

}

export default MyApp;