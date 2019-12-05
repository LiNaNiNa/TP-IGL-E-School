import React,{Component} from 'react'
import ReactDOM from 'react-dom'

export default class Footer extends   Component{
    render(){
        return(
            <footer  className="w-auto  mt-5 " id="Contact">
            <div className="row pt-5 pb-4">
                <div className="col-sm-1"></div>
                <div className="col-sm-3">
                    <h3 className="cw "><b>Contact us</b></h3>
                    <h5 className="cw pl-2">Question ? We’ve got
                        answers<br /> try us.</h5>
                    <br />
                    <button className="btn-block btnf ">Email us</button>
                    <br />
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-3">
                    <h3 className="cw">Who are we ?
                    </h3>
                    <h5 className="cw  pl-2" >Haddad Zineddine<br />
                        Mazdour Lina<br />
                        Zatout Badreddine<br /></h5>
                    <br />
    
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-2">
                    <h3 className="cw">Stay tuned
    
                    </h3>
                    <h5 className="cw  pl-2" >Connect with us an stay
                        in the loop</h5>

                      
                    <br />
    
                </div>
                <div className="col-sm-1"></div>
            </div>
        </footer>
        );
    };
};

if (document.getElementById('footer')){
    ReactDOM.render(<Footer />,document.getElementById('footer'));
}
