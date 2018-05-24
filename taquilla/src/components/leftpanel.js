import React, { Component } from 'react';
import firebase from '../fire';
const menu = firebase.database().ref().child('menu');

class Leftpanel extends Component{

		constructor(){
			super()
			this.openCity=this.openCity.bind(this)
			this.state={

				menu:[],
			}
		}

		componentWillUnmount(){
			menu.off();


	}


		componentDidMount(){
				menu.on('value',snapshot =>{
					// console.log (snapshot.val());

					this.setState({
						menu: snapshot.val()
					})
				});

		}

		openCity(event, y){
             var i, tabcontent, tablinks;
//		    console.log(event.target);
//			console.log(y);
			event.currentTarget.className += " active";
            // Get all elements with class="tabcontent" and hide them
             tabcontent = document.getElementsByClassName("tabcontent");
            for ( i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("sportbutton");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            document.getElementById(y).style.display = "table";
            event.currentTarget.className += " active";



		}
	render(){
//        let i,countriesfav,sportbutton;
        let paises=[],aux;
		let b = this.state.menu;
        let deportesId = Object.keys(b);

        let deportes = deportesId.map(index => {
        let  paisId = Object.keys(b[index].groups)
//        let c = b[index].groups;
//            console.log(c)
        aux = paisId.map(index2 =>{

        	return(

                <div key={index2} style={{display:'table',width:'100%',maxHeight:600, overflow: 'auto'}} className="countriesfav">
        		      <div  style={{display:'table-row'}}>
                        <div className="country btn" style={{display:'table-cell'}}> {index2} </div>
                        </div>
                </div>
        		)
        })

        aux =  <div key={index} className="tabcontent" id={index} style={{display:'none',verticalAlign:'top', width:150}}>
                {aux}
                </div>
          paises.push(aux);

            return (
                <div key={index} className="sportbutton btn" onClick={(event)=>this.openCity(event,index)} style={{ backgroundImage: "url(img/icons/"+index+".png)" }}>
                    <div style={{ position: "absolute", bottom: "7px", fontSize: 12, width: "100%", left: 0, textAlign: "center" }}> {b[index].name}
                    </div>

                </div>

)

        })

		return(

			<div>
				<div style={{background:'rgba(255,255,255,0.1)',padding:5,marginBottom:10}}>
                <input placeholder="Buscar" style={{width:'100%'}} type="text"/>
              </div>

              <div style={{background:'rgba(255,255,255,0.1)'}}>
                <div className="x" style={{display:'table',width:'100%',}}>
                  <div style={{display:'tableCell',width:60}}>
                    {deportes}
                  </div>


                  <div style={{display:'table-cell',verticalAlign:'top', width:'150%'}}>
                    {paises}
                  </div>
                </div>
              </div>
            </div>




			);

	}

}
export default Leftpanel;
