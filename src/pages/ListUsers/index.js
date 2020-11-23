import React, {Component} from 'react';
import apiMock from '../../services/MockAPIs/ListUsers';
import User from '../../assets/components/user'

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
    console.log(localStorage.getItem("token"));
    /*await api.get('posts',
    {headers: {'Authorization': `${localStorage.getItem("token")}`}})
      .then(response=>{
        this.setState({posts: response.data.results})
      }).catch(error=>{
        console.log(error.message);
        alert(error.message);
      })*/
    await apiMock.get()
      .then(response=>{
        this.setState({users: response.data.results})
      }).catch(error=>{
        console.log(error.message);
        alert(error.message);
      });
  }
  render(){  
    return (
      <div>
        {this.state.users.map(user=>{
          return(
            <User id={user.id} name={user.username} email={user.email}/>
          )
          })
        }
      </div>
    )
  }
}

export default ListUsers;