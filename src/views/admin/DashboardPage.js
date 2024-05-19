import React from 'react';

import UserTable from '../../pages/userdata';
import { AdminFullLayout } from '../../layouts/admin_layout';


class AdminDashboardPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          isLoading: false,
          data: null,
          users: [ // Example users data, you can replace this with your actual data
            { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
            { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
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
        fetch('')
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
        const { isLoading, data, users } = this.state;

        return (
            <>
                <AdminFullLayout>
                    {/* Content of the dashboard page */}
                    {/* You can place your TopCards, SalesChart, Feeds, ProjectTables, and Blog components here */}
                   
                </AdminFullLayout>
                <div className="admin-content" style={{ marginTop: "50px" }}>
                    {/***Top Cards***/}
                    <div className='admin-container'>
                        <h1>Admin Dashboard</h1>
                        <h2>Update Database:</h2>
                        <button id='fetch-button' onClick={this.fetchData} disabled={isLoading}>
                          {isLoading ? 'Fetching...' : 'Fetch Data'}
                        </button>
                        {isLoading && <div>Loading...</div>}
                        {data && (
                          <div>
                            {/* Display your fetched data here */}
                            <pre>{JSON.stringify(data, null, 2)}</pre>
                          </div>
                        )}
                        <UserTable users={users} />
                     </div>

                  
                     
                     </div>
                       
                     
            </>
        );
    }
}

export default AdminDashboardPage;
