import React from 'react';
import { FullLayout } from "../layouts/FullLayout";
import Image from "../assets/images/users/user1.jpg";

class AccountPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          user: {
            id: 1,
            name: "Avon Wagle",
            email: "avonwagle@70011.com",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            location: "Location 1",
            image: Image,
            contact: "123456789",
          }
        };
      }

    render(){
        const { user } = this.state;
        return <>
             <FullLayout>
                {/* Content of the dashboard page */}
                {/* You can place your TopCards, SalesChart, Feeds, ProjectTables, and Blog components here */}
            </FullLayout>
            <div className="account-content">
                <h1>User Profile</h1>
                <div className="user-info">
                    <div>
                        <label>ID:</label>
                        <span>{user.id}</span>
                    </div>
                    <div>
                        <label>Name:</label>
                        <span>{user.name}</span>
                    </div>
                    <div>
                        <label>Email:</label>
                        <span>{user.email}</span>
                    </div>
                    <div>
                        <label>Bio:</label>
                        <span>{user.bio}</span>
                    </div>
                    <div>
                        <label>Location:</label>
                        <span>{user.location}</span>
                    </div>
                    <div>
                        <label>Contact:</label>
                        <span>{user.contact}</span>
                    </div>
                </div>
                
                <div className="image-container-profile">
                        <img className="profile-image" src={user.image} alt="User Image" />
                </div>
            </div>
        </>
    }
}

export default AccountPage;
