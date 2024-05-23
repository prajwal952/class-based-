import React, { Component } from 'react'

 class Counter extends Component {
constructor(props){
    super(props)

}

state = {
        counter:0
    }

  cntIncrement=()=>{
    // console.log('hi')
    if(this.state.counter>=0 && this.state.counter<5)
    this.setState({
        counter:this.state.counter+1
    })
    else(
       
        this.setState({
            counter:'not possible as value of counter exceeds limit plz reset'
        })
       
       
    )

  }



  cntDecrement=()=>{

    if(this.state.counter>0){
        this.setState({
            counter:this.state.counter-1
             })
    }
    else(
       
        this.setState({
            counter:'not possible as value of counter is below limit plz reset'
        })
    
    )
}

cntReset=()=>{
    this.setState({
        counter:0
    })
}

darkTheme=()=>{
    let theme=document.getElementById('dark')
    console.log(`inside function and theme is   ${theme.innerHTML}`)

if(theme.innerHTML==="Dark Mode"){
    console.log('inside the if for darl mode') 
    document.body.style.background="black"
    document.body.style.color="white"
    theme.innerHTML="Light Mode"
console.log(typeof(theme.innerHTML))
}else if(theme.innerHTML==="Light Mode"){
    console.log(theme.innerHTML)
     document.body.style.background="white" 
     document.body.style.color="black"
     theme.innerHTML="Dark Mode"
}

}




  render() {
    return (
      <div>
        <>
        <h1>counter:{this.state.counter}</h1>
        <button className='btn btn-primary ms-2' onClick={this.cntIncrement} >+</button>
        <button className='btn btn-danger ms-2' onClick={this.cntDecrement}  >-</button>
        <button className='btn btn-info ms-2' onClick={this.cntReset}  >Reset</button>
        <button className='btn btn-secondary ms-2' id='dark' onClick={this.darkTheme} >Dark Mode</button>
        </>
      </div>
    )
  }
}


export default Counter;
