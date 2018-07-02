import React, { Component } from 'react';

import {Redirect} from 'react-router-dom';



class About extends Component {

        state= {
            hobby:[],
            id:sessionStorage.getItem('user')
        }

    about(){
        const self = this;
        let User =this.state.id;
        fetch('/hobby/check',{
             method:"POST",
             headers : new Headers(),
            body:JSON.stringify ({
                User: User
            }),
            })
            .then((res)=>(res.json()))
            .then(function(data){
                if(data.checked==true){
                    var hobb =data.hobb;

                    const mappingFunction = p => p.hobby;
                    const names= hobb.map(mappingFunction);

                    self.setState({hobby:names});
                }
               
            })
        }


  render() {
      this.about();
    var display=this.state.hobby.map(function(things,index){
        return(
            <tr><td>{things}</td></tr>
        );
    });
    return (
        <center>
          <div >
          <h1>Hobbies</h1>
            <table>
                {display}
                
            </table>
        </div>
        </center>
    );
  }
}

export default About;
