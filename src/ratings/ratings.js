import React from 'react';
import dataSource from '../api/data';
import {Col, Row} from 'react-bootstrap';

import { Dropdown, DropdownButton } from "react-bootstrap"

const AddNewRating = ({ hostel }) => {
const addRating = (rating) => {
    const getHostel = async () => {
      try {
        const response = await fetch(`${dataSource.baseURL}hostels/rate/${parseInt(hostel.hostel?.id)}/${parseInt(rating)}`, {
        method: 'GET',
        headers: dataSource.headers
      })
      const data = await response.json()
      hostel.setHostel(data)
      } catch (error) {
        console.error(error)
        return null
      }
    }
    getHostel()


}

return (
    <Row>
        <Col>
        <DropdownButton id="dropdown-basic-button" title="Add Rating">
      <Dropdown.Item onClick={() => addRating(1)}>1</Dropdown.Item>
      <Dropdown.Item onClick={() => addRating(2)}>2</Dropdown.Item>
      <Dropdown.Item onClick={() => addRating(3)}>3</Dropdown.Item>
      <Dropdown.Item onClick={() => addRating(4)}>4</Dropdown.Item>
      <Dropdown.Item onClick={() => addRating(5)}>5</Dropdown.Item>
    </DropdownButton>
        </Col>
    </Row>
)

}

export default AddNewRating;