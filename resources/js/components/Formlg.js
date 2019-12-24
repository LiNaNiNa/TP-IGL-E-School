
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';



export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      pass: '',
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
            <div className="alert alert-danger ">
              <strong>Warning !</strong> username OR password is Incorrect .
           </div>
        })
      }else{
        this.setState({
          msg: 
          <div class="alert alert-success">
             <strong>Success !</strong> Correct .
           </div>
        })
      }
    }).then(error => {
      console.log(error);
    })
  }
  render() {
    return (

      <form onSubmit={this.handlesub.bind(this)}  >
  
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


        <button className="p-2 btn2 btn-block p-2 mb-4">Login</button>
      </form>
    );
  }
}

if (document.getElementById('form')) {
  ReactDOM.render(<Form />, document.getElementById('form'));
}




