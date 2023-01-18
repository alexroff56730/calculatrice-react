import { View, StyleSheet } from "react-native";
import React from "react";
import Title from "./Title";
import Bouton from "./Bouton";
import Zone from "./Zone";

export default class Calc extends React.Component {

    constructor(props){
        super(props);
        this.state = ({
          saisiInput : '',
          sortieReponse : '',
          actionBtn : ''
        })
        
        this.gestionClique = this.gestionClique.bind(this);
        this.setValueBtn = this.setValueBtn.bind(this);
    }

    setValueBtn(val) {
        this.setState({
            actionBtn: val
        })
            
        this.gestionClique(val)
    }

    gestionClique(event){

        const valeur = event;
        switch(valeur){
          case '=':{
            if (this.state.saisiInput !==''){
              var reponse = '';
              try{
                  reponse = eval(this.state.saisiInput)
                  //alert(this.state.saisiInput + " = " + reponse)
              }
              catch(err){
                  this.setState({sortieReponse: "Math Error"});
              }
    
              if(reponse === undefined){
                  this.setState({sortieReponse: "Math Error"})
              } else if (reponse !== undefined) { 
                  this.setState({sortieReponse: reponse, saisiInput: ''})
                  //alert(reponse)
                  alert(this.state.sortieReponse)
              }
            }
        }
            
            break;
    
    
          case 'C': {
              this.setState ({sortieReponse : '', saisiInput: ''});
          }
          break;
    
          case 'DEL': {
            var str = this.state.saisiInput;
            str = str.substring(0, str.length-1);
            this.setState({saisiInput : str}) 
          }
          break;
    
          default : {
            this.setState ({saisiInput : this.state.saisiInput += valeur})
          }
          break;
        }
      }
    
    render(){
        return(
            <View style={{width: '80%', height: '100%'}}>
                <View>
                    <Title />
                    <Zone saisiInput = {this.state.saisiInput} sortieReponse = {this.state.sortieReponse} />
                </View>
                
                <View style={styles.containerBtn}>
                    <Bouton Label={'C'} setValueBtn={this.setValueBtn} />
                    <Bouton Label={'DEL'} setValueBtn={this.setValueBtn} />
                    <Bouton Label={'.'} setValueBtn={this.setValueBtn} />
                    <Bouton Label={'/'} setValueBtn={this.setValueBtn} />
                </View>
                <View style={styles.containerBtn}>
                    <Bouton Label={'1'} setValueBtn={this.setValueBtn} />
                    <Bouton Label={'2'} setValueBtn={this.setValueBtn} />
                    <Bouton Label={'3'} setValueBtn={this.setValueBtn} />
                    <Bouton Label={'*'} setValueBtn={this.setValueBtn} />
                </View>
                <View style={styles.containerBtn}>
                    <Bouton Label={'4'} setValueBtn={this.setValueBtn} />
                    <Bouton Label={'5'} setValueBtn={this.setValueBtn} />
                    <Bouton Label={'6'} setValueBtn={this.setValueBtn} />
                    <Bouton Label={'+'} setValueBtn={this.setValueBtn} />
                </View>
                <View style={styles.containerBtn}>
                    <Bouton Label={'7'} setValueBtn={this.setValueBtn} />
                    <Bouton Label={'8'} setValueBtn={this.setValueBtn} />
                    <Bouton Label={'9'} setValueBtn={this.setValueBtn} />
                    <Bouton Label={'-'} setValueBtn={this.setValueBtn} />
                </View>
                <View style={styles.containerBtn}>
                    <Bouton Label={'0'} setValueBtn={this.setValueBtn} />
                    <Bouton Label={'='} setValueBtn={this.setValueBtn} />
                </View>            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerBtn: {
        width: '100%', 
        justifyContent: 'center', 
        alignItem: 'center', 
        flexDirection: 'row'
    }
})