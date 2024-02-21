import React, { useEffect, useState } from 'react'

export default function Homepage() {
// when we call api then alwayes use fetch method // and url put into the fetch
//fetch("http://localhost:3000/posts") when we use this code then it alwayes rreturn a promish
//.then((result)use in promish//
//useEffect call should be use alwayes useEffect

  const [users, setUser] = useState([])
  useEffect(() => {
    getlist()
  }, [])
function getlist(){
  fetch("http://localhost:3000/posts").then((result) => {
    result.json().then((resp) => {
      // console.warn("result",resp)
      setUser(resp)
    })
  })
}
  function deleteuser(id){
    fetch(`http://localhost:3000/posts/${id}`,{
      method:'DELETE'
    }).then((resp) => {
      console.warn("result",resp)
      getlist()
      // setUser(resp)
    })
  }

  return (
    <>
      <div className="container my-3">
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <td>ID</td>
              <td>title</td>
              <td>price</td>
              <td>name</td>
              <td>email</td>
              <td>Action</td>

            </tr>
            {
              users.map((item, i) =>
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td><button onClick={()=>deleteuser(item.id)}>delete</button></td>
                </tr>
              )
            }
          </thead>


        </table>
      </div>

    </>
  )
}
