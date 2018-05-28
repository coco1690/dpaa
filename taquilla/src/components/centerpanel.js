import React, { Component } from "react";
// import firebase from '../fire';
// import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import InsertButton from "react-bootstrap-table/lib/toolbar/InsertButton";
// import Const from "react-bootstrap-table/lib/Const";


// const affils = firebase.database().ref().child('affil');
class Centerpanel extends Component {



    constructor() {
        super()
        
        this.state = { affil: [] }
    }
    componentDidMount() {


        //        affils.on("value", snapshot => {
        //            this.setState({
        //                affil: []
        //            });
        //            this.state.affil.push(snapshot.val())
        //            this.setState({
        //                affil: snapshot.val()
        //            });
        //
        //            // console.log(this.state.affil);
        //        });
        
        

    }
    render() {
       
        // var match = [
        //     {
        //         567: {
        //             id: "barcelona vs Venezuela",
        //             name: 567,
        //             price: 120
                       
        //         },
        //         6543: {
        //             id: "juventus vs amsterdam",
        //             name: 500000,
        //             price: 80000
        //         }
        //     }];
        //     console.log(match);
        const products = [];

        function addProducts(quantity) {
            const startId = products.length;
            for (let i = 0; i < quantity; i++) {
                const id = startId + i;
                products.push({
                    events: {
                        onmouseout: () => alert('Click on name field')
                    },

                    id: id,
                    name: 'Item' + id,
                    price: 2100 + i
                });
            }
        }
        console.log(products);
        addProducts(5);  
        // var equipos = [{
        //     id: "barcelona vs Venezuela",
           
        // }, {
        //     id: "juventus vs amsterdam",
         
        // }];

        // var cuotas = [{
        //     name: 540,

        // },{
        //     name:675
        // }]
        // const cellEdit = {
        // mode: 'click',
        // blurToSave: true
        //  };
        // const selectRow = {
        //  mode: 'click',
        // clickToSelect: true
        //   };
        // const keyBoardNav = {
           
        // enterToEdit: true
        // };  
      
        // const products = [{
        //     dataField: 'id',
        //     text: 'Product ID',
        //     events: {
        //         onClick: () => alert('Click on Product ID field')
        //     }
        // }, {
        //     dataField: 'name',
        //     text: 'Product Name'
        // }, {
        //     dataField: 'price',
        //     text: 'Product Price'
        // }];
        
        return (
            
            <div className="panels">
                <div style={{ padding: 20, fontSize: 16, fontWeight: 'bold', background: 'rgba(255,255,255,0.1)', textTransform: 'uppercase' }} className="title-text">Fútbol-Próximos         </div>

               <div className="matches-panel">
                   
                    <BootstrapTable  data={products}  cellEdit  selectRow  keyBoardNav tableStyle={{  border: '1px solid rgba(255, 255, 255, 0.1)'}} >
 

               <TableHeaderColumn width='170' dataField='id' isKey dataAlign="center">PROXIMOS EVENTOS</TableHeaderColumn>

                        <TableHeaderColumn dataField='price' dataAlign="center">1 </TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataAlign="center">X</TableHeaderColumn>
                        <TableHeaderColumn dataField='price' dataAlign="center">2</TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataAlign="center">1X</TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataAlign="center">12</TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataAlign="center">X2</TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataAlign="center">OV</TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataAlign="center">UN</TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataAlign="center">GG</TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataAlign="center">NG</TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataAlign="center">OTROS</TableHeaderColumn>
                    </BootstrapTable>
                    
                </div>
            </div >

        );
    }
}

export default Centerpanel;