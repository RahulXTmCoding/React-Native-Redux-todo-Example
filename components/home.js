import React, { Component } from 'react';
import { SafeAreaView, TextInput, Button, View ,Text} from 'react-native';
import {connect} from 'react-redux'
import * as Actions from '../reduxStore/actions'
import {StyleSheet} from 'react-native'
class Home extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            title:'',
            description:'',
        }
        this.handelAdd=this.handelAdd.bind(this);
    }

    handelAdd()
    {
        if(!this.state.title || !this.state.description)
        {
            alert("both Required")
            return;
        }
      
        this.props.addTodo(this.state.title,this.state.description);
           this.setState({
               title:"",
               description:'',
           })
    }
    render() { 
        return ( 
            <SafeAreaView style={styles.MainBody}>
                <View style={styles.mainView}>
                  <Text>Title:</Text>
                 <TextInput style={styles.inputStyle} value={this.state.title} onChangeText={(text)=>this.setState({title:text})} />
                 <Text>Description:</Text>

                 <TextInput style={styles.inputStyle} value={this.state.description} onChangeText={(text)=>this.setState({description:text})} />
                 <Button title={"Add"} onPress={()=>this.handelAdd()}/>
                 <View style={styles.toList}>
                     <Button title={'See List'} onPress={()=>{this.props.navigation.navigate('List')}} />
                     </View>
                </View>
             </SafeAreaView>
         );
    }
}

const mapStateToProps=(state)=>({
    todos:state,

})
const mapDispatchToProps=(dispatch)=>({

    addTodo:(title,description)=>dispatch(Actions.addAction(description,title))
})

const styles=StyleSheet.create({
    MainBody:{
        flex:1,
        justifyContent:"center",
       
    },
    inputStyle:{
        
        borderColor:'black',
        borderWidth:1,
    },
    mainView:{
        flex:1,
        justifyContent:'center',
        fontSize:25,
        fontFamily:'bold',

       
       
    },
    toList:{
        
        justifyContent: 'space-around',
        paddingTop:20
    }

})
 
export default connect(mapStateToProps,mapDispatchToProps)(Home);