import React, { Component } from 'react';
import Leftpanel from './components/leftpanel';
import './App.css';
import Centerpanel from "./components/centerpanel";
// import Sport from './components/sport';//*
 import {
     BrowserRouter as Router, Link, Redirect,
     Route, Switch
 } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="header" style={{textAlign:'center'}}>
      <div style={{display:'inline-block', width:1190,height:'100%',position:'relative'}}>
        <img alt="" src="/img/logo.png" style={{height:'50%',position:'absolute',top:32,left:0}}/>
        <div className="headcont" style={{height:35,position:'absolute',top:23,right:0,width:'auto'}}>
          <button className="btn" id="btnLogin" style={{float:'right',boxSizing:'borderBox',width:100,height:30,textAlign:'center', color:'#333',background:'#FEE064',fontSize:14,border:'hidden'}}>Ingresar </button>
          <input id="pass" placeholder="Contraseña" style= {{float:'right',boxSizing:'borderBox',padding:5,height:30,width:150,border:'hidden',outline:'none',marginRight:5 }} type="password"/>
          <input id="email" placeholder="Usuario" style={{float:'right',boxSizing:'borderBox',padding:5,height:30,width:150,border:'hidden',outline:'none',marginRight:5}} type="text"/>
        </div>
     </div>
     </div>

     <div className="header-menu">
      <a className="menu-item btn active" href="index-2.html"><i className="fa fa-futbol" style={{margiRright:10}}></i>Proximos</a>
      <a className="menu-item btn" href="index.html"><i className="fa fa-tv" style={{marginRight:10}}></i>En vivo</a>
      <a className="menu-item btn" href="index.html"><i className="fa fa-tv" style={{marginRight:10}}></i>Resultados</a>
    </div>
<div style={{textAlign:'center',float:'left',height:'auto',width:'100%'}}>
      <div style={{display:'inline-block',width:1190,height:'100%',position:'relative'}}>
        <div style={{textAlign:'left'}}>

        <div className="left-panel">
              <Leftpanel/>
              </div>
        <div className="center-panel">
      <div>
   
    <div style={{padding:20,fontSize:16,fontWeight:'bold',background:'rgba(255,255,255,0.1)',textTransform:'uppercase'}} className="title-text">Fútbol-Próximos
        </div>
        
        <div>
        <Router>
               <Switch>
                    <Route exact path="/" component={Centerpanel} />
                  <Redirect to="/" />
               </Switch>
        </Router>
        </div>
        
        </div>
        </div>
  
            <div className="right-panel">
              <div style={{background:'rgba(255,255,255,0.1)'}}>
                <div style={{padding:10,fontWeight:'bold',color:'#FEE064'}}>
                <i className="ion ion-clipboard" style={{marginRight:10,fontSize:14}}></i>
                  <span className="ticket-title">Cupón</span>
                </div>
                <div className="bets">
                  <div style={{textAlign:'center',padding:10}}>Seleccione una cuota para insertarla al cupón.</div>
                </div>
                <div style={{padding:10,height:'auto',position:'relative'}}>
                  <div style={{paddingTop:10}}>Cantidad:
                    <div style={{position:'absolute',textAlign:'right',right:10,top:10,width:'50%'}}>
                    <input id="amount" placeholder="Ej: 2000" style={{boxSizing:'border-box',height:30,width:120,border:'hidden',outline:'none',padding:5,textAlign:'right'}} defaultValue="5000" type="text"/></div>
                  </div>
                  <div style={{marginTop:20}}>Cuota:
                    <span style={{float:'right',fontWeight:'bold'}} className="totalodd">1</span>
                  </div>
                  <div style={{marginTop:10}}>Pago Total:
                    <span style={{float:'right',fontWeight:'bold'}}><span className="currency-symbol">$</span> <span className="totalwin">0</span></span>
                  </div>
                  <div style={{marginTop:20}}>
                    <button className="btn confirm" style={{boxSizing:'borderBox',width:'100%',height:40,color:'#333',background:'#FEE064',fontSize:14,border:'hidden'}}>Confirmar</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
     </div>


    );

  }
}

export default App;
