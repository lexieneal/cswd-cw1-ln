import 'bootstrap/dist/css/bootstrap.css';
import './hostels.css';
import HostelsHeader from './hostelsHeader'
import React, {useState} from 'react';
import {Col, Container, ListGroup, Row, InputGroup, FormControl} from 'react-bootstrap';
import HostelListItem from './hostelListItem';

const Hostels = ({hostels}) => {
    const [searchString, setSearchString] = useState('')
    return (
      <div>
        <HostelsHeader></HostelsHeader>
        <Container>
        <Row> 
          <Col>
            <h1 className="custom">Hostels</h1>
          </Col>
        </Row>

        <Row>
          <Col>
          <p>Sed at diam rutrum, pharetra massa nec, tristique tortor. Curabitur sit amet semper mi. 
        Donec et dolor leo. Maecenas et finibus turpis. Nam id sapien auctor, suscipit magna eget, 
        commodo odio. Fusce venenatis augue at nulla gravida, eu tempus turpis fringilla. Cras posuere 
        ligula neque, at bibendum leo fermentum in. Sed eu nisl ac dui maximus blandit et placerat neque. 
        Integer lobortis nisi sit amet scelerisque laoreet. Donec convallis odio eros, vitae cursus 
        mauris dapibus sed. Etiam ac sapien ut mi blandit cursus.</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
              <FormControl
                // placeholder="Enter a hostel's address"
                // aria-label="Enter a hostel's address"
                // aria-describedby="basic-addon1"
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