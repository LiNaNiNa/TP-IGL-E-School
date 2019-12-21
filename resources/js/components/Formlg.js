
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';



export default class Form extends Component {
  constructor(){
    super();
    this.state ={
      name: '',
      pass: '',
      msg :''
  }
  }
  

  changeuser(e){
    this.setState({
      name:e.target.value
    })
 }

 changepass(e){
  this.setState({
    pass:e.target.value
  })
}

  handlesub(e){
    e.preventDefault();
    
    axios.post('/api/setlogin',this.state).then(response =>{
          if(response.data == 0){
          this.setState({
            msg:'check ur password or usename'
          })
          }
    }).then(error =>{
      console.log(error);
    })
  }
    render() {
        return (





         <form  onSubmit={this.handlesub.bind(this)} >  
          
             <center><h6 className="lierror">{this.state.msg}</h6></center> 
        
       
                 <div className="form-group">

            <label htmlFor="exampleInputEmail1">UserName</label>
            <input name="username" type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={this.changeuser.bind(this)} />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input name="password" type="password" className="form-control" id="exampleInputPassword1" onChange={this.changepass.bind(this)} />
          </div>

          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Remembre Me </label>
          </div>

          <button className="p-2 btn2 btn-block">Login</button>
         
        </form>
        );
    }
}

if (document.getElementById('form')){
    ReactDOM.render(<Form />,document.getElementById('form'));
}




