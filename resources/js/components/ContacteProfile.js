import React,{Component} from 'react'
import ReactDOM from 'react-dom'

export default class Contact extends   Component{
    render(){
        return(
            <footer  className="w-auto  mt-5 contact " id="Contact">
            <div className="row pt-4 pb-1">
                <div className="col-sm-1"></div>
                <div className="col-sm-3">
                    <h4 className="cw  "><b>Contact us</b></h4>
                    <h6 className="cw  pl-2">Question ? We’ve got
                        answers<br /> try us.</h6>
                    <br />
                    <button className="btn-block btns p-2 ">Email us</button>
                    <br />
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-3">
                    <h4 className="cw ">Who are we ?
                    </h4>
                    <h6 className="cw  pl-2" >Haddad Zineddine<br />
                        Mazdour Lina<br />
                        Zatout Badreddine<br /></h6>
                    <br />
    
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-2">
                    <h4 className="cw ">Stay tuned
    
                    </h4>
                    <h6 className="cw  pl-2" >Connect with us an stay
                        in the loop</h6>

                      
                    <br />
    
                </div>
                <div className="col-sm-1"></div>
            </div>
        </footer>
        );
    };
};

if (document.getElementById('footerprofile')){
    ReactDOM.render(<Contact />,document.getElementById('footerprofile'));
}


