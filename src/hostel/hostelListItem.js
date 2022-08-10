import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Routes, Route } from "react-router-dom"
import Button from 'react-bootstrap/Button';

const HostelListItem = ({hostel}) => {
  // const sum = hostel.ratings.reduce((a, b) => a + b, 0)
  // const avg = (sum / hostel.ratings.length) || 0

  return (
    <>
     <ListGroupItem>
     <div className='d-flex justify-content-between'>
            <span>{hostel.name}</span>
            {/* <span>Avg. Rating: {'⭐️ '.repeat(avg)}</span> */}
            <span>Has cafe: {hostel.cafe}</span>
            <Button variant="outline-secondary"><Link to={`/hostels/${hostel.id}`}>View more</Link></Button>
          </div>
      </ListGroupItem> 

      {/* <ListGroupItem>
        <Link to={`/hostels/${hostel.id}`} className="text-decoration-none fs-4">
          <div className='d-flex justify-content-between'>
            <span>{hostel.name}</span>
            <span>Avg. Rating: {'⭐️ '.repeat(avg)}</span>
          </div>
        </Link>
      </ListGroupItem>

      <Routes>
        <Route path='hostel' element={<p>Sorry, we couldn't find that hostel.</p>}/>
      </Routes> */}
    </>
  )
}
export default HostelListItem