import React from 'react';
import dataSource from '../api/data';
import {Col, Row} from 'react-bootstrap';

import { Dropdown, DropdownButton } from "react-bootstrap"

const AddNewRating = ({ hostel }) => {
const addRating = (rating) => {
    const getRating = async () => {
      try {
        const response = await fetch(`${dataSource.baseURL}hostels/rate/${parseInt(hostel.hostel?.id)}/${parseInt(rating)}`, {
        method: 'GET',
        headers: dataSource.headers
      })
      const data = await response.json()
      hostel.setRating(data)
      } catch (error) {
        console.error(error)
        return null
      }
    }
    getRating()
}

return (
    <Row>
        <Col>
          
        </Col>
    </Row>
)

}

export default AddNewRating;