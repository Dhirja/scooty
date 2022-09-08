import React from 'react'
import { Navbar } from './Navbar'
import data from "./db.json"
import "./home.css"
import { Link, useNavigate, useParams } from 'react-router-dom'

export const Home = () => {
  const {id} = useParams()
  const navigate = useNavigate()
    // console.log(data);
    

  return (
    <>
    <Navbar />
    <div>
      <div className="container">
        {data.map((ele) => {
          console.log(ele);
          return (
            <>
            
              <div className="inner_box">
                <h3>Name: {ele.name}</h3>
               <img style={{width:"100%"}} src={ele.image} alt="" />
                <p>Capacity: {ele.capacity}</p>
                <p>rent: {ele.rentPerHour}</p>
                <Link to={`dis/${ele.id}`}>
                <button style={{width:"50%",backgroundColor:"#b5bfbf",borderRadius:"10px",height:"40px", color:"#fe0000"}}
                  onClick={() => navigate(`/dis/${id}`)}
                    >
                    Book Now
                    </button>
                    </Link>
                
                
              </div>
            
            </>
          );
        })}
      </div>
    </div>
  </>
  )
}
