import React, { Component } from "react";
import data from '../data';
// import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';



const matches = data.database().ref().child('matches');

// const affils = firebase.database().ref().child('affil');
class Centerpanel extends Component {



    constructor() {
        super()

        this.state = { 
            matches: [], 

        }
    }

    componentWillUnmount() {
        matches.off();
       
    }



    componentDidMount() {
        matches.on('value', snapshot => {
            // console.log (snapshot.val())

            var obj = Object.keys(snapshot.val()).map(

                (i) => {
                    let events = snapshot.val();
                    let time = new Date(events[i].time);
                    return {
                        
                        id: events[i].data,
                        text: "+ 00",
                        name: events[i].hteamName + " vs " + events[i].ateamName,
                        time: time.getDate()+"/"+(time.getMonth()+1) +"/"+ time.getFullYear()+"<br/>"+time.getHours()
                    }
                    //
                }
            );
            this.setState({
                matches: obj,
              
            })
            console.log(this.state.matches)
        });
        console.log(this.props.match.params)
        console.log(this.props.match.data)

    }

    render() {

    
        let h = ["1 X 2","1X 12 X2"]
        let table = h.map((y)=>{
            return <TableHeaderColumn key={y} dataFormat={priceFormatter} width='105' dataField='text' dataAlign="center" tdStyle={{ textAlign: 'left',}}>{y}</TableHeaderColumn>
        });
        function priceFormatter(cell, row) {
            return (
            <div> 
                <div className='botn btn'>{cell}</div>
                <div className='botn btn'>{cell}</div>
                <div className='botn btn'>{cell}</div>
            </div>);
        }

        // let vb = [""]
        // let tablem = h.map((y) => {
        //     return <TableHeaderColumn key={y} dataFormat={pric} width='105' dataField='text' dataAlign="center" tdStyle={{ textAlign: 'left', }}>{y}1X 12 X2</TableHeaderColumn>
        // });
        // function pric(cell, row) {
        //     return (<div> <div className='botn'>{cell}</div><div className='botn'>{cell}</div><div className='botn'>{cell}</div></div>);
        // }

        let j = ["OV / UN", "GG / NG"]
        let tablej = j.map((y) => {
            return <TableHeaderColumn key={y} dataFormat={Formatter} width='70' dataField='text' dataAlign="center" tdStyle={{ textAlign: 'left', }}>{y}</TableHeaderColumn>
        });
        function Formatter(cell, row) {
            return (<div> <div className='botn btn'>{cell}</div><div className='botn btn'>{cell}</div></div>);
        }
        let otros = ["Others"]
        let tableo = otros.map((y) => {
            return <TableHeaderColumn key={y} dataFormat={oformat} width='5%' dataField='text' dataAlign="center" tdStyle={{ textAlign: 'left', }}>{y}</TableHeaderColumn>
        });
        function oformat(cell, row) {
            return (<div> <div className="btn"><img src='img/icons/11.png' style={{ marginLeft: 10 }}/></div></div>);
        }
        return (

            <div className="panels">
                <div style={{ padding: 20, fontSize: 16, fontWeight: 'bold', background: 'rgba(255,255,255,0.1)', textTransform: 'uppercase' }} className="title-text">Fútbol-Próximos         </div>

                <div className="matches-panel">

                    <BootstrapTable data={this.state.matches}  tableStyle={{ fontSize:12, border: '1px solid rgba(255, 255, 255, 0.1)' }} >


                        <TableHeaderColumn dataField='time' isKey width='10%' dataAlign="center"><img style={{margin:9}}   src='img/icons/10.png'/> </TableHeaderColumn>
                       
                        <TableHeaderColumn dataField='name' tdStyle={{
                            textAlign: 'left',}}  dataAlign="center">Liga de Campeones AFC, Fase Eliminatorias</TableHeaderColumn>
                        {table}
                        {/* {tablem} */}
                        {tablej}
                        {tableo}     
                    </BootstrapTable>

                </div>
            </div >

        );
    }
}


export default Centerpanel;