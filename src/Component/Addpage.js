import React, { useState } from 'react'

export default function Addpage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const tit = (event) => {
    setTitle(event.target.value);
  };

  const fullname1 = (event) => {
    setName(event.target.value);
  };

  const pr = (event) => {
    setPrice(event.target.value);
  };

  const email1 = (event) => {
    setEmail(event.target.value);
  };

  function done (){
// console.warn({name,email,price,title});
let data = {name,email,price,title}
fetch("http://localhost:3000/posts",{
  method:'POST',
  headers:{
    'Accept':'application/json',
    'Content-Type': 'application/json'
  },
  
  body:JSON.stringify(data)

}).then((result)=>{

}) 

  }
  return (
    <>

      <div className="container my-3">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">title</label>
            <input type="text" value={title} onChange={tit} name="title" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your full name" />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Full Name</label>
            <input type="text"  onChange={fullname1} value={name} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your full name" />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" value={email}  onChange={email1} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">price</label>
            <input type="text" on value={price}  onChange={pr} name="price" className="form-control" id="exampleInputPassword1" placeholder="price" />
          </div>

          <button type="button" onClick={done} className="btn btn-primary my-3">Submit</button>
        </form>
      </div>
    </>
  )
}
