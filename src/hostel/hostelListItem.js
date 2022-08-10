import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const HostelListItem = ({hostel}) => {

  return (
    <>
     <ListGroupItem>
     <div className='d-flex justify-content-between'>
            <span>{hostel.name}</span>
            {/* <span>Avg. Rating: {'⭐️ '.repeat(avg)}</span> */}
            <span>{ hostel.cafe ? 'Has a cafe' : ' '}</span>
            <Link to={`/hostels/${hostel.id}`}>View more</Link>
          </div>
      </ListGroupItem> 
    </>
  )
}
export default HostelListItem