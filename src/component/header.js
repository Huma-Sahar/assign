
import React,{Component} from 'react';


class Student extends Component{

    state = {
        name : 'Huma',
        Qulifi : 'B.sc',
    }
    render(){
        return ( 
        <h1>Hello {this.state.name}
          My qualification is  {this.state.Qulifi}</h1>


        )
    }

}

export default Student
