import React,{Component} from 'react';
import style from "./styles/result.css";
import {
    Link,
    Redirect
} from 'react-router-dom';

class Result extends Component{
    state={
        Log: false,
        mov: false
    }
    handleSubmit(e){
        e.preventDefault();
        let email =sessionStorage.getItem('email');
        let User =sessionStorage.getItem('user');
        let hobby = this.refs.Hobby.value;
        const self = this;
        fetch('/hobby/save',{
            method : "POST",
            headers : new Headers(),
            body: JSON.stringify ({
                User: User,
                hobby: hobby,
                email:email
            }),
        })
        .then((res)=>(res.json()))
        .then (function(data){
            if(data.added==true){
                self.setState({mov:!self.state.mov})
            }
        }) 
    }
   
    render(){
        if(this.state.mov === true){ 
            return (<Redirect to="About" component={About} />);
       }
        return(
            <div className="Result">
                <input type="button" value="logout" onClick={this.Navigate} className="but"/><br/>
                <h3 style={{font:"palatino"}}>Please add hobbies in the Entry point below</h3>
                <div>
                    <input type="text" placeholder="enter hobby here" ref="Hobby"/>
                    <input type="button" value="Enter" className="butt"/>
                </div>
            </div>
        )
    }
}

export default Result;