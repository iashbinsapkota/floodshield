import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { FullLayout } from "../layouts/FullLayout";
import FloatingChatBot from '../pages/chatbot';

class FloodPreventionPage extends React.Component {
  render() {
    return (
      <>
        <FullLayout>
          {/* Content of the flood prevention page */}
          {/* You can place your flood prevention information here */}
        </FullLayout>
        <div className="info-content">
          {/* Top Cards */}
          <h1>Flood Prevention Information</h1>
          <div className='abstract'>
            <h2>Understanding Floods</h2>
            <p>
              Floods are natural disasters that can have devastating effects on communities. They occur when water overflows onto land that is normally dry, often due to heavy rainfall, snowmelt, or storm surges.
            </p>
          </div>
          <div className='tips'>
            <h2>Flood Prevention Tips</h2>
            <ul>
              <li>Elevate utilities and appliances above potential flood levels.</li>
              <li>Install flood barriers or flood-resistant materials.</li>
              <li>Seal entry points, such as doors and windows, with waterproofing sealants.</li>
              <li>Keep gutters and drains clear of debris to prevent blockages.</li>
              <li>Develop an emergency plan and evacuation route for your family.</li>
              <li>Assemble a disaster kit with essential supplies, including food, water, medication, and first aid supplies.</li>
              <li>Stay informed about flood risks in your area and heed warnings from local authorities.</li>
              <li>Consider purchasing flood insurance to protect your property.</li>
            </ul>
          </div>
          <div className='info-row'>
            <div className='contact-details'>
              <h2>Contact Details</h2>
              <ul>
                <li>
                  <FaPhone style={{ marginRight: '5px' }} />
                  Emergency Services (Fire Rescue): <a href="tel:911">911</a>
                </li>
                <li>
                  <FaPhone style={{ marginRight: '5px' }} />
                  Police Department: <a href="tel:911">911</a>
                </li>
                <li>
                  <FaPhone style={{ marginRight: '5px' }} />
                  Local Hospital: <a href="tel:911">911</a>
                </li>
              </ul>
            </div>
            <div className='additional-resources'>
              <h2>Additional Resources</h2>
              <ul>
                <li><a href="https://www.ready.gov/floods" target="_blank" rel="noopener noreferrer">Ready.gov - Floods</a>: Comprehensive information on flood preparedness and response.</li>
                <li><a href="https://www.floodsmart.gov/" target="_blank" rel="noopener noreferrer">FloodSmart.gov</a>: National Flood Insurance Program resources and information.</li>
                <li><a href="https://www.fema.gov/" target="_blank" rel="noopener noreferrer">FEMA</a>: Federal Emergency Management Agency website with flood-related resources and assistance programs.</li>
              </ul>
            </div> 
          </div>
        </div>

        <FloatingChatBot />
      </>
    );
  }
}

export default FloodPreventionPage;
