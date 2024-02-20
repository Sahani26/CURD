import React from 'react'

export default function Addpage() {
  return (
   <>
   
   <div className="container my-3">
   <form>
   <div className="form-group">
    <label htmlFor="exampleInputEmail1">Full Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your full name"/>
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Enter Mobile</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Mobile no."/>
  </div>
 
  <button type="submit" className="btn btn-primary my-3">Submit</button>
</form>
    </div>
   </>
  )
}
