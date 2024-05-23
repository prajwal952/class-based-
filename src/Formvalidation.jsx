import React, { Component } from 'react'

 class Formvalidation extends Component {

state={
  firstName:"",
  lastName:"",
  email:"",
  mobile:"",
  password:"",
  firstNameErr:"",
  lastNameErr:"",
  emailErr:"",
  mobileErr:"",
  passwordErr:"",
  typePass:"password"
}

validation =()=>{
  let firstNameErr=""
  let lastNameErr=""
  let emailErr=""
  let mobileErr=""
  let passwordErr=""

  if(this.state.firstName.length<=4){
    firstNameErr=`Too short`
  }

  if(this.state.lastName.length<=1){
    lastNameErr=`Too short`
  }

  if(!this.state.email.includes('@')){
    emailErr=`email is not correct`
  }

  if(this.state.mobile.length !==10){
    mobileErr=`Mobile is not correct`
  }

  //if(this.passValidation(this.state.password)==='false'){

  if(!this.passValidation(this.state.password)){
    console.log('got return call')
    passwordErr=`password is not correct`
  }


  if(firstNameErr||lastNameErr||emailErr||mobileErr||passwordErr){
    this.setState({firstNameErr,lastNameErr,emailErr,mobileErr,passwordErr})
  }
  else{
    this.setState({firstNameErr,lastNameErr,emailErr,mobileErr,passwordErr})
  }

}


passValidation=(password) => {
  console.log(password)
  console.log('inside validate password')
  var pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  console.log('checked the regex exp');
  console.log(pattern.test(password));
  return pattern.test(password);
}


handleSubmit=(e)=>{
  e.preventDefault();
  console.log('form submitted successfully...!')
 this.validation();
}

handleChange=(e)=>{
const {name,value}=e.target;
this.setState(
 {[name]:value}
);
console.log(this.state);
}


passShow=()=>{
  this.setState({
    typePass: "text"
});
}

  render() {
    return (
      <div>
       
        <center>
          <h2>Form Validation...!</h2>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                <input type="text" placeholder='First Name' name='firstName' className='form-control mt-2' onChange={this.handleChange} value={this.state.firstName}/>
                    <p className='text-danger'>{this.state.firstNameErr}</p>

                  <input type="text" placeholder='Last Name' name='lastName' className='form-control mt-2'  onChange={this.handleChange} value={this.state.lastName}/>
                    <p className='text-danger'>{this.state.lastNameErr}</p>


                  <input type="email" placeholder='email' name='email' className='form-control mt-2'  onChange={this.handleChange} value={this.state.email}/>
                  <p className='text-danger'>{this.state.emailErr}</p>

                  <input type="text" placeholder='mobile' name='mobile' className='form-control mt-2'  onChange={this.handleChange} value={this.state.mobile}/>
                  <p className='text-danger'>{this.state.mobileErr}</p>
                   {console.log('type is',this.state.typePass)}
                  <input type={this.state.typePass} placeholder='Password' name='password' className='form-control mt-2 password-toggle-icon'  onChange={this.handleChange} value={this.state.password}/>
                  <button onClick={this.passShow}>show password</button>
                 
                  <p className='text-danger'>{this.state.passwordErr}</p>



                  <button className='btn btn-primary'>Submit</button>

                

                </form>
              </div>
            <div className="col-md-4"></div>
          </div>
        </center>


      </div>
    )
  }
}


export default  Formvalidation;