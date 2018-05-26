import React, { Component } from "react";


class Perfil extends Component {

    render() {

        return (
            <div>
            <div className="panels">
                <div style={{ padding: 20, fontSize: 16, fontWeight: 'bold', background: 'rgba(255,255,255,0.1)', textTransform: 'uppercase' }} className="title-text"> Perfil del usuario      </div>
                   <div>
                        <div className="perfil" style={{ padding: 20, fontSize: 16, fontWeight: 'bold', background: 'rgba(255,255,255,0.1)'}}>
                            <div className="foto">
                                <div className="iconuser"><img style={{ height: '75%', marginTop:17 }} src="img/icons/user.png" /></div>
                            </div>                      
                        </div>
                </div >
            </div>
            </div>
            

        );
        
            
       
    }
}

export default Perfil;