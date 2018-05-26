import React from "react";

// import { Components } from 'react-bootstrap-navbar';

let canvas;
class Login extends React.Component  {
    constructor() {
        super()
        this.state = { login: false }
       
    }
 
   
    render(){
        if (!this.state.login) {
           canvas = <div className="headcont" style={{ height: 35, position: 'absolute', top: 23, right: 0, width: 'auto' }}>
                <button className="btn" id="btnLogin" style={{ float: 'right', boxSizing: 'borderBox', width: 100, height: 30, textAlign: 'center', color: '#333', background: '#FEE064', fontSize: 14, border: 'hidden' }}>Ingresar </button>
                <input id="pass" placeholder="Contraseña" style={{ float: 'right', boxSizing: 'borderBox', padding: 5, height: 30, width: 150, border: 'hidden', outline: 'none', marginRight: 5 }} type="password" />
                <input id="email" placeholder="Usuario" style={{ float: 'right', boxSizing: 'borderBox', padding: 5, height: 30, width: 150, border: 'hidden', outline: 'none', marginRight: 5 }} type="text" />
            </div>

        }else {
            canvas = <div className='navbar'> 
                <ul>
                    <li><a href="#news" style={{background:'orange'}}>Deposito</a></li>
                    <li><a href="#home" style={{ backgroundImage:'url(img/icons/setting.png)',textAlign:'center',marginTop:6, marginRight:5 }}></a></li>
                    <li><a href="#news">Hora</a></li>
                    <li><a href="#news">Cupones</a></li>
                    <li class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn">Saldo</a>
                        <div class="dropdown-content">
                            <a href="#">Historial</a>
                            <a href="#">Deposito</a>
                            <a href="#">Retiros</a>
                            
                        </div>   
                    </li>
                    <li class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn" style={{ marginTop:-20 }} ><img src="img/icons/usernav.png"/>dr coco</a>
                        <div class="dropdown-content">
                            <a href="/perfil">Perfil</a>
                            <a href="#">Balance</a>
                            <a href="#">Apuestas</a>
                            <a href="#">salir</a>
                        </div>
                    </li>
                </ul>
                
            </div>
            
        }
        return(
            canvas
        )
  
    }
}
export default Login;

