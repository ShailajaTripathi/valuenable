import React from 'react'


function Registration() {
  return (
    <div>
        <h4>Registration</h4>
        <label htmlFor="">Email</label> 
        <input placeholder="Enter email"></input><br/>

        <label htmlFor="">Password</label> 
        <input placeholder="Type password" type="password"></input>

        <h4>Login</h4>
        <label htmlFor="">Email</label> 
        <input placeholder="Enter email"></input><br/>

        <label htmlFor="">Password</label> 
        <input placeholder="Type password" type="password"></input>
    </div>
  )
}

export default Registration