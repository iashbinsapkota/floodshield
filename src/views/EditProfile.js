import React from "react";
import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
  } from "reactstrap";
  import { FullLayout } from "../layouts/FullLayout";


class ProfilePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
             <FullLayout>
                {/* Content of the dashboard page */}
                {/* You can place your TopCards, SalesChart, Feeds, ProjectTables, and Blog components here */}
            </FullLayout>
      
      <div className='edit-profile'>
          <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <div className='edit-profile-header'><h1>Edit your Details</h1></div>
            <CardBody>
              <Form>
              <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Full name"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="abc@gmail.com"
                    type="email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="password1234"
                    type="password"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+61102365478"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="locationSelect">Select Your Location</Label>
                  <Input id="locationSelect" name="select-location" type="select">
                    <option>Thiruvottiyur</option>
                    <option>Manali</option>
                    <option>Madhavaram</option>
                    <option>Tondiarpet</option>
                    <option>Royapuram</option>
                    <option>Thiru-Vi-Ka-Nagar</option>
                    <option>Ambattur</option>
                    <option>Anna Nagar</option>
                    <option>Teynampet</option>
                    <option>Kodambakkan</option>
                    <option>Valasaravakkam</option>
                    <option>Alandur</option>
                    <option>Adyar</option>
                    <option>Perungudi</option>
                    <option>Sholinganallur</option>
                  </Input>
                </FormGroup>
                
                <FormGroup>
                  <Label for="exampleText">Tell us about yourself:</Label>
                  <Input id="exampleText" name="text" type="textarea" placeholder="I like to watch movies and spend time with friends"/>
                </FormGroup>
              
              
                <Button className="mt-2">Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    
      </div>
      </>
      }
  }

export default ProfilePage;
