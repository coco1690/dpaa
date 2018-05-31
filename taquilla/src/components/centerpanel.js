import React, { Component } from "react";
import data from '../data';
import Moment from 'react-moment';
import 'moment-timezone';
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


let timestamp = new Date();
//timestamp.getTime()
let tr,tj=[];
const matches = data.database().ref('matchesAll').orderByChild('timestamp').startAt(1527641101);

class Centerpanel extends Component {

    constructor() {
        super()
        this.state = {
            matches: [],
        }
        console.log("trabajando con " + timestamp.getTime() + " = " + timestamp);
    }

    componentDidMount() {
        matches.on('value', snapshot => {
            console.log("events:", snapshot.val());

            var idListaEventos = Object.keys(snapshot.val());
            console.log("mis eventos ID: ", idListaEventos);

            var listaEventos = idListaEventos.map((id) => {
                let events = snapshot.val();
                let time = new Date(events[id].time);
                let odds = events[id].odds;
                
                if (odds != undefined) {
                    console.table({ idm: id, odds: odds });
                    // return events[id];
                    let clave = Object.keys(events[id].odds);
                    console.log("ceys:  ", clave);
                    let jj = clave.map((i) => { return events[id].odds[i] });
                   
                    

                     tr = jj.map((k) => { 
                        let i = Object.keys(k);
                        i = i.map((u) => { 
                            tj.push(k[u].short ? k[u].short : k[u].activeType)
                            return k[u].short ? k[u].short : k[u].activeType})    
                        return i 
                    });
                    console.log(tj);

                   
                    


                    return {

                        id: events[id].idmatch,
                        pais: events[id].countryId,
                        text: "+ 00",
                        name: events[id].hteamName + " vs " + events[id].ateamName,
                        time: time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear() + " - " + time.getHours(),
                        odds: events[id].odds,
                        // demo: JSON.stringify(test["03"].short ? test["03"].short : test["03"].activeType),
                        claves: clave.toString(),
                        
                        //  o1:events[i].odds[clave[0]][0].o1

                    }
                }else return null;
                //
            });
            listaEventos =  listaEventos.filter( (i)=>{ return i!= null })
            console.table(listaEventos);


            this.setState({
                matches: listaEventos,
            })
            console.log(this.state.matches)
        });
        // console.log(this.props.match.params)
        // console.log(this.props.match.data)

    }

    componentWillUnmount() {
        matches.off();
    }


    render() {

// -------------------------------------------------------columna_others--------------------------------------------------------------------------
        let otros = ["Others"]
        let tableo = otros.map((y) => {
            return <TableHeaderColumn key={y} dataFormat={oformat} width='5%' dataField='text' dataAlign="center" tdStyle={{ textAlign: 'left', }}>{y}
            </TableHeaderColumn>
        });
// -------------------------------------------------------columna_OV/UN_GG/NG----------------------------------------------------------------------
        // let j = ["OV / UN", "GG / NG"];
        let j = tj;

        j = j.filter((y,pos) => { return j.indexOf(y) == pos;})


        let tablej = j.map((y) => {
            return <TableHeaderColumn key={y} dataFormat={Formatter} width='70' dataField='text' dataAlign="center" tdStyle={{ textAlign: 'left', }}>{y}</TableHeaderColumn>
        });

        function Formatter(cell, row) {
            return (<div> 
                <div className='botn btn'>{cell}</div>
                <div className='botn btn'>{cell}</div>
                </div>);
        }
// -------------------------------------------------------columna_1_X_2/1X_12_X2-------------------------------------------------------------------

        // let h = ["1 X 2", "1X 12 X2"]
        // let table = h.map((y) => {
        //     return <TableHeaderColumn key={y} dataFormat={priceFormatter} width='105' dataField='index' dataAlign="center" tdStyle={{ textAlign: 'left', }}>{y}</TableHeaderColumn>
        // });
        // function priceFormatter(cell, row) {
        //     return (
        //         <div>
        //             <div className='botn btn'>{cell}</div>
        //             <div className='botn btn'>{cell}</div>
        //             <div className='botn btn'>{cell}</div>
        //         </div>);
        // }

    
// -------------------------------------------------------columna_TIMES_PARTIDOS-------------------------------------------------------------------


        function oformat(cell, row) {
            return (<div> 
                <div className="btn"><img src='/img/icons/11.png' style={{ marginLeft: 10 }} /></div>
                </div>);
        }

// -------------------------------------------------------columna_BANDERAS_PAISES------------------------------------------------------------------

        function bandera(cell, row) {
            return (
                <div>
                    &nbsp;&nbsp;   <i className={"ficon-inline f-" + row.pais}></i>&nbsp;&nbsp;
                {cell}
                </div>);
        }

        return (
// -------------------------------------------------------TABLA_DE_MATCHES----------------------------------------------------------------------

            <div className="panels">
                <div style={{ padding: 20, fontSize: 16, fontWeight: 'bold', background: 'rgba(255,255,255,0.1)', textTransform: 'uppercase' }} className="title-text">Fútbol-Próximos         </div>

                <div className="matches-panel">

                    <BootstrapTable data={this.state.matches} tableStyle={{ fontSize: 12, border: '1px solid rgba(255, 255, 255, 0.1)' }} >


                        <TableHeaderColumn dataField='time' isKey width='10%' dataAlign="center"><img style={{ margin: 9 }} src='/img/icons/10.png' /> </TableHeaderColumn>

                        <TableHeaderColumn dataField='name' dataFormat={bandera} tdStyle={{
                            textAlign: 'left',
                        }} dataAlign="center"></TableHeaderColumn>
                        {/* {table} */}
                        {tablej}
                        {tableo}
                    </BootstrapTable>

                </div>
            </div >

        );
    }
}


export default Centerpanel;