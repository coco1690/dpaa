import React from "react";
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';

// import { Components } from 'react-bootstrap-navbar';

let canvas;
class Login extends React.Component  {
    constructor() {
        super()
        this.state = { login: true }
         
    }
 
   
    render(){
        
        
       
        if (!this.state.login) {
           canvas = <div className="headcont" style={{ height: 35, position: 'absolute', top: 23, right: 0, width: 'auto' }}>
                <button className="btn" id="btnLogin" style={{ float: 'right', boxSizing: 'borderBox', width: 100, height: 30, textAlign: 'center', color: '#333', background: '#FEE064', fontSize: 14, border: 'hidden' }}>Ingresar </button>
                <input id="pass" placeholder="Contraseña" style={{ float: 'right', boxSizing: 'borderBox', padding: 5, height: 30, width: 150, border: 'hidden', outline: 'none', marginRight: 5 }} type="password" />
                <input id="email" placeholder="Usuario" style={{ float: 'right', boxSizing: 'borderBox', padding: 5, height: 30, width: 150, border: 'hidden', outline: 'none', marginRight: 5 }} type="text" />
            </div>

        }else {
            return(
            canvas = <div className='navbar'> 
                <ul>
                    <li><a href="#news" style={{background:'orange'}}>Deposito</a></li>
                    <li><a href="#home" style={{ backgroundImage:'url(img/icons/setting.png)',textAlign:'center',marginTop:6, marginRight:5 }}></a></li>
                        <li><Link to="/">Historial</Link> 0</li>
                    <li><Link to="/">Cupones</Link></li>
                    <li class="dropdown">
                            <a href="javascript:void(0)" class="dropbtn">Saldo</a> 
                        <div class="dropdown-content">
                            <Link to="/">Historial</Link>
                            <Link to="/">Deposito</Link>
                            <Link to="/">Retiros</Link>
                            
                        </div>   
                    </li>
                    <li class="dropdown">
                            <Link to='/' href=""class="dropbtn" style={{ background: 'rgba(227, 231, 6, 0.411)' }} >USUARIO </Link>
                        <div class="dropdown-content">
                            <Link to="/perfil">Perfil</Link>
                            <Link to="/">Balance</Link>
                            <Link to="/">Apuestas</Link>
                            <Link to="/">salir</Link>
                        </div>
                    </li>
                </ul>
                
            </div>
            ); 
        }
        return(
            canvas

        )
  
    }
}
export default Login;

