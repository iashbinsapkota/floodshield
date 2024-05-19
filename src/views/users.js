import React from "react";
import { Col, Row } from "reactstrap";
import { FullLayout } from "../layouts/FullLayout";
import ProjectTables from "../components/ProjectTable";


class UsersPage extends React.Component {
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
      
          <div>
 
  
      
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>
      
    </div>
    </>
    }
}

export default UsersPage;
