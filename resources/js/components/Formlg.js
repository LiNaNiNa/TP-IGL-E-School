
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import AdminPage from './AdminPage';
import StudentPage from './StudentPage';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      pass: '',
      token:'',
      msg: ''
    }
  }


  changeuser(e) {
    this.setState({
      name: e.target.value
    })
  }

  changepass(e) {
    this.setState({
      pass: e.target.value
    })
  }

  handlesub(e) {
    e.preventDefault();
   
    axios.post('/api/setlogin', this.state).then(response => {
      console.log(response.data);
      if (response.data == 0) {  
        this.setState({
          msg: 
            <div dusk="WarningMsg" className="alert alert-danger ">
              <strong>Warning !</strong> username OR password is Incorrect .
           </div>
        })
      }else{
        var token = Math.random().toString(36).substr(2, 8)+"@"+response.data[0].Matricule;
        this.setState({
          token:token
        })
        console.log(token);
   
        
        axios.post('/api/insertToken',this.state ).then(response => {

          console.log(response.data)
         });
        
    
        Cookies.set("UserID",response.data[0].Matricule,{ expires: 1 });
        Cookies.set("Token",token,{ expires: 365 });
        Cookies.set("Username",response.data[0].username,{ expires: 1 });
        Cookies.set("Profile",response.data[0].Profil,{ expires: 1 });
       
         
       if (response.data[0].Profil == "Etudiant") {
        if (document.getElementById('pageprin')) {
          ReactDOM.render(
          <StudentPage UserID={response.data[0].Matricule} name={response.data[0].username} Token={token}  />, document.getElementById('pageprin'));
          };
       }else{
        if (document.getElementById('pageprin')) {
          ReactDOM.render(
          <AdminPage UserID={response.data[0].Matricule} name={response.data[0].username}  Token={this.state.token}  />, document.getElementById('pageprin'));
          };
       }
        
      }
    }).then(error => {
      console.log(error);
    })
  }
  render() {
    return (

      <form dusk="FORM1" onSubmit={this.handlesub.bind(this)}  >
  
     {this.state.msg}
      
       
      

        <div className="input-group mb-3 mt-4">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-user p-2"></i></span>
          </div>
          <input name="username" type="name" className="form-control p-4 " aria-describedby="emailHelp" placeholder="username" onChange={this.changeuser.bind(this)} />
        </div>


        <div className="input-group mb-3 mt-4 ">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-key  p-2"></i></span>
          </div>
          <input name="password" type="password" className="form-control p-4 " placeholder="password" onChange={this.changepass.bind(this)} />
        </div>


        <button dusk="LoginForm" className="p-2 btn2 btn-block p-2 mb-4">Login</button>
      </form>
    );
  }
}






