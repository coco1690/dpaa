import React from "react";
import Sticky from 'react-sticky-el';
// import { Link } from 'react-router-dom';


// import { Components } from 'react-bootstrap-navbar';


class Rightpanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stake: this.props.stake,
            items: this.props.items,
            total: this.props.total
        };

    }

    render() {
        console.log("mis selecciones");
        console.table(this.state.items);
        
        return (

            <Sticky>
                <div className="right-panel">
                    <div style={{ background: 'rgba(255,255,255,0.1)' }}>
                        <div style={{ padding: 10, fontWeight: 'bold', color: '#FEE064' }}>
                            <i className="ion ion-clipboard" style={{ marginRight: 10, fontSize: 14 }}></i>
                            <span className="ticket-title">Cupón</span>
                        </div>
                        <div className="bets">
                            <div style={{ textAlign: 'center', padding: 10 }}>Seleccione una cuota para insertarla al cupón.</div>
                        </div>
                        <div style={{ padding: 10, height: 'auto', position: 'relative' }}>
                            <div style={{ paddingTop: 10 }}>
                                Cantidad:
                                <div style={{ position: 'absolute', textAlign: 'right', right: 10, top: 10, width: '50%' }}>
                                    <input id="amount" placeholder="Ej: 2000" style={{ boxSizing: 'border-box', height: 30, width: 120, border: 'hidden', outline: 'none', padding: 5, textAlign: 'right' }} defaultValue={this.state.stake} type="text" /></div>
                            </div>
                            <div style={{ marginTop: 20 }}>Cuota:
                                <span style={{ float: 'right', fontWeight: 'bold' }} className="totalodd">1</span>
                            </div>
                            <div style={{ marginTop: 10 }}>Pago Total:
                                <span style={{ float: 'right', fontWeight: 'bold' }}><span className="currency-symbol">$</span> <span className="totalwin">0</span></span>
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <button className="btn confirm" onClick={this.props.save} style={{ boxSizing: 'borderBox', width: '100%', height: 40, color: '#333', background: '#FEE064', fontSize: 14, border: 'hidden' }}>Confirmar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Sticky>
        );
    }
}

export default Rightpanel;