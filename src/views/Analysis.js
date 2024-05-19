import React from 'react';
import DataTable from '../pages/analysis_data.js';
import { FullLayout } from "../layouts/FullLayout";

class AnalysisPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          isLoading: false,
          data: null,
          users: [ // Example users data, you can replace this with your actual data
            { location: 'Location 1', area: 'Area 1', water_level: '15', rainfall_level: '18', status: 'steady' },
            { location: 'Location 2', area: 'Area 2', water_level: '15', rainfall_level: '18', status: 'steady' },
            // Add more users as needed
          ]
        };
    }

    fetchData = () => {
      this.setState({ isLoading: true });
      // Simulating a delay of 2.33 minutes
      setTimeout(() => {
        // Assuming your API call here
        // Replace 'example.com/api/data' with your actual API endpoint
        fetch('example.com/api/data')
          .then(response => response.json())
          .then(data => {
            this.setState({ data, isLoading: false });
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            this.setState({ isLoading: false });
          });
      }, 140000); // 2.33 minutes in milliseconds
    };

    render(){
        const { users } = this.state;

        return (
            <>
              <FullLayout>
          {/* Content of the dashboard page */}
          {/* You can place your TopCards, SalesChart, Feeds, ProjectTables, and Blog components here */}
        </FullLayout>
        <div className="content" style={{ marginTop: "50px" }}>
          {/***Top Cards***/}
          <div className="containerRow1">
            <h3>Historical Data</h3>
          </div>
          <DataTable users={users} />
        
        </div>
       
                
            </>
        );
    }
}

export default AnalysisPage;