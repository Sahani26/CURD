import React, { useEffect, useState } from 'react'
// import axios from 'axios';
export default function Homepage() {

  const [users, setUser] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/posts").then((result) => {
      result.json().then((resp) => {
        // console.warn("result",resp)
        setUser(resp)
      })
    })
  }, [])
  
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
                  <td></td>
                </tr>
              )
            }
          </thead>


        </table>
      </div>

    </>
  )
}
