import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import './hostels.css';

const HostelListItem = ({hostel}) => {

  const sum = hostel?.ratings.reduce((a, b) => a + b, 0)
  const avg = (sum / hostel?.ratings.length) || 0

  return (
    <>
     <ListGroupItem>
      <div className='d-flex justify-content-between'>
        {hostel.name}
        <Link to={`/hostels/${hostel.id}`}>Click here for more info</Link>
      </div>

      <div className="nestedGroupItem">
        <span>Avg. Rating: {'⭐️ '.repeat(avg)}</span>
      </div>
     </ListGroupItem>
    </>
  )
}
export default HostelListItem