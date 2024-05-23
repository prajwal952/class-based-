import React, { Component } from 'react'

 class Lifecyclemethod extends Component {
//in MOUNTING Phase there r 4 subphases/methods
//1)constructor 2)static getDerivedStateFromProps 3)render() 4)componentDidMount

constructor(){
    super()
    console.log("constructor created successfully / class is being initated successfully")
}

state={
    userData:[]

}



componentDidMount(){
    console.log("component did mount ")
    this.getData()
}

 getData = async()=> {
    let data= await fetch('https://jsonplaceholder.typicode.com/users')
     let res= await data.json()
    console.log(res)
    this.setState({userData:res})
}

static getDerivedStateFromProps(){
    console.log("Get derived state from props")
    return null;
}

  render() {
    console.log("Inside Render method")
    console.log("data is ",this.state.userData)

    return (   
      <div>

<h1>Life Cycle Method</h1>
       { this.state.userData.map(
            (currEle)=>(


                <table class="table">
                            <thead>
                        <tr>
                        <th scope="col" >Name</th>
                        <th scope="col">Email</th>   
                        <th scope="col">zipcode</th>
                        <th scope="col">Company Name</th>
                        </tr>
        </thead>

        <tbody>
                <tr>
                    <td>{currEle.name}</td>
                    <td>{currEle.email}</td>
                    <td>{currEle.address.zipcode}</td>
                    <td>{currEle.company.name}</td>
                </tr>


        </tbody>





                    {/* <th>
                        <td>Name</td>
                        <td>Email</td>
                    </th>
                    <tbody>
                        <td>{currEle.name}</td>
                        <td>{currEle.email}</td>
                    </tbody> */}
                </table>


                // <p>{currEle.name}</p>
            )
        )
            }
        

          
      </div>
    )
  }
}


export default  Lifecyclemethod