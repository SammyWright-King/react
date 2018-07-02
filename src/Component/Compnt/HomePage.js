import React,{Component} from 'react';
import style from "./styles/home.css";
class HomePage extends Component{
    render(){
        return(
            <div className="HomePage">
                <div className="content">
                    <h1>Welcome to Hobbies and send</h1>
                  
                    <h4>This is a website designed to serve<br/>it purpose by adding hobbies and updating it as a message.
                </h4>
                </div>
            </div>
        )
    }
}

export default HomePage;