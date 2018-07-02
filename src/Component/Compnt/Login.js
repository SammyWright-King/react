import React,{Component} from 'react';
import style from "./styles/login.css";
import {Redirect} from 'react-router-dom';
import Result  from './Result';


class Login extends Component{
    state={
        Log: false,
        mov: false
    }

    handleSubmit(e){
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        const self = this;
        fetch('/client/Login',{
            method : "POST",
            headers : new Headers(),
            body: JSON.stringify ({
                username: username,
                password : password
            }),
        }).then((res)=>(res.json())).then (function(data){
            if(data.loggedIn==true){
                sessionStorage.setItem('user',data.user);
                sessionStorage.setItem('email',data.Email);
                self.setState({mov:!self.state.mov})
            }

        });
        
    }
    render(){
        if(this.state.mov=== true){
            return (<Redirect to="Result" component={Result} />);
        }
        return(
            <div className="Login">
               <form onSubmit ={this.handleSubmit.bind(this)}>
                   <fieldset>
                        <legend><h1>User Login</h1></legend>
                        <input type="text" placeholder="username" className="" ref="username"/>
                        <br/>
                        <input type="text" placeholder="password" className="" ref="password"/>
                        <br/>
                        <input type="button" value="Login" className="butt" ref="login"/> 
                    </fieldset>
                </form>
                
            </div>
        )
    }
}

export default Login;

