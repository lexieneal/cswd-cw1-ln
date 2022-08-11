import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import './hostels.css';

const ListItem = ({hostel}) => {

  const sum = hostel?.ratings.reduce((a, b) => a + b, 0)
  const avg = (sum / hostel?.ratings.length) || 0

  return (
    <>
     <ListGroupItem>
      <div className='d-flex justify-content-between'>
        {hostel.name}
        <Link to={`/hostels/${hostel.id}`}>more info</Link>
      </div>

      <div className="nestedGroupItem">
        Avg. Rating:<span className='staricon'>{'★ '.repeat(avg)}</span>
      </div>
     </ListGroupItem>
    </>
  )
}
export default ListItem