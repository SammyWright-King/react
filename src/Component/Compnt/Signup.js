import React,{Component} from 'react';
import style from './styles/signup.css';
import {Redirect} from 'react-router-dom';
import Result  from './Result';


class Signup extends Component{
    state={
        Log: false,
        mov: false
      }
      handleSubmit(e){
        e.preventDefault();
        let name = this.refs.name.value;
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        let email = this.refs.email.value;
        let phone = this.refs.phone.value;
        const self = this;
        fetch('/client/Signup',{
            method : "POST",
            headers : new Headers(),
            body: JSON.stringify ({
                name: name,
                username: username,
                password : password,
                phone: phone,
                email: email
                
            }),
        })
        .then((res)=>(res.json()))
        .then (function(data){
            if(data.signedUp==true){
              sessionStorage.setItem('user',data.user);
              sessionStorage.setItem('email',data.Email);
              self.setState({mov:!self.state.mov})
            }
        }) 
      }
    render(){
        if(this.state.mov === true){
            return (<Redirect to="Result" component={Result} />);
         }
        return(
            <div className="Signup">
                <h1>Signup Here!</h1>
               <form>
                   <fieldset>
                        <legend><h1></h1></legend>
                        <input type="text" placeholder="Name" className="" ref="name"/>
                        <br/>
                        <input type="text" placeholder="username" className="" ref="username"/>
                        <br/>
                        <input type="text" placeholder="password" className="" ref="password1"/>
                        <br/>
                        <input type="text" placeholder="enter password again" className="" ref="password2"/>
                        <br/>
                        <input type="text" placeholder="email" className="" ref="email"/>
                        <br/>
                        <input type="text" placeholder="phone" className="" ref="phone"/>
                        <br/>
                        <input type="button" value="Login" className="butt"/>
                    </fieldset>
                </form>
                
            
            </div>
        )
    }
}

export default Signup;