import React, { Component } from 'react';
import { SafeAreaView, TextInput, Button, View, Text, DevSettings,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import * as Actions from '../reduxStore/actions'
import {StyleSheet} from 'react-native'
class TodoList extends Component {
    constructor(props)
    {
        super(props)
        
        
    }

    handelDelete(id)
    {
        this.props.deleteTodo(id);
                      
    }
    render() { 
        return ( 
            <SafeAreaView style={styles.MainBody}>
                {
                    this.props.todos.map((todo)=>(<View key={todo.id} style={styles.todoMain}>
                        
                          <View style={{flex:8}}>
                              <Text style={styles.title}>{todo.title}</Text>
                              <Text style={styles.desp}>{todo.description}</Text>
                        </View>
                        <View style={{flex:2}}>
                        <TouchableOpacity style={styles.button} onPress={()=>this.handelDelete(todo.id)} title={'Delete'} >
                        <Text style={styles.buttonText}>Delete</Text>
                         </TouchableOpacity>
                            
                        </View >
                        
                        </View>



                    )

    
                )}
                </SafeAreaView>
         );
    }
}

const mapStateToProps=(state)=>({
    todos:state,

})
const mapDispatchToProps=(dispatch)=>({

    deleteTodo:(id)=>dispatch(Actions.deleteAction(id))
})

const styles=StyleSheet.create({
    MainBody:{
       flex:1,
       
    },
    todoMain:{
      
        flexDirection:'row',
        justifyContent: 'space-around',
        height:70,
        borderBottomColor:'black',
        borderBottomWidth:1,

    },
    title:
    {
        fontSize:25,
        fontFamily:'bold',


    },
    desp:{
  fontSize:15,
    },
    button:{
        backgroundColor:'red',
        color:'white',
        justifyContent:'center',
        alignItems:'center',
        height:70,
    },
    buttonText:{
fontSize:20,
color:'white',
    }
})
 
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);