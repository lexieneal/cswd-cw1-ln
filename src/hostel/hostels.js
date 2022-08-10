import 'bootstrap/dist/css/bootstrap.css';
import './hostels.css';
import HostelsHeader from './hostelsHeader'

import React, {useState} from 'react';
import {Col, Container, ListGroup, Row, InputGroup, FormControl} from 'react-bootstrap';
import HostelListItem from './hostelListItem';

const Hostels = ({hostels}) => {
    const [searchString, setSearchString] = useState('')
    return (
      <div className='d-flex flex-column min-vh-100'>
        <HostelsHeader></HostelsHeader>
        <Container className="py-5">
        <Row>
          <Col className='d-flex align-items-center justify-content-around'>
            <h1 className="pt-5">Hostels</h1>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex align-items-center justify-content-around'>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
              <FormControl
                placeholder="Enter a hostel's address"
                aria-label="Enter a hostel's address"
                aria-describedby="basic-addon1"
                type='text'
                onChange={e => setSearchString(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>
        <ListGroup>
          {hostels.filter(hostel => {
            if (searchString === '') {
              return hostel
            } else if (hostel.address.toLowerCase().includes(searchString.toLowerCase())) {
              return hostel
            } else {
              return null
            }
          }).map(hostel => <HostelListItem className='hostelListItem' key={hostel.id} hostel={hostel}/>)}
        </ListGroup>
        </Container>
      </div>
    )
  }

export default Hostels;