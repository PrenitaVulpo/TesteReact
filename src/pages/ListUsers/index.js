import React, {Component} from 'react';
import api from '../../services/MockAPIs/ListUsers';

class ListUsers extends Component{
  constructor(props){
    super(props)
    this.state ={
      users: [
        {"username": "Loading",
        "email": "Loading"}
      ]
    }
  }

  async componentDidMount(){
    await api.get()
      .then(response=>{
        this.setState({users: response.data.results})
      })
  }
  render(){  
    return (
      <div>
        {this.state.users.map(user=>{
          return(
            <a id="user">
              <h1>{user.username}</h1>
              <p>{user.email}</p>
            </a>
          )
          })
        }
      </div>
    )
  }
}

export default ListUsers;