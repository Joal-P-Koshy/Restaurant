import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'

function RestReview({selectedRestaurant}) {
    const [open, setOpen] = useState(false);
  return (
    <>
    <button className='btn btn-warning ms-3' 
        onClick={() => setOpen(!open)}
        >Click here to see reviews</button>
    <Collapse in={open}>
    <div className="">
        <hr />
        {
          selectedRestaurant[0]?.reviews.length>0?
          selectedRestaurant[0]?.reviews.map(item=>(
            <div className="">
            <h6 className='text-warning'>Name : <p style={{color:'black'}}>{item.name}</p> </h6>
            <h6 className='text-warning'>Rating : <p style={{color:'black'}}>{item.rating}</p> </h6>
            <h6 className='text-warning'>Comments : <p style={{color:'black'}}>{item.comments}</p> </h6>
            <hr />
        </div>
          )):
          <p>No reviews found</p>
        }
        
    </div>
    </Collapse>
    </>
  )
}

export default RestReview