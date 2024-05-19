import React from "react";
import { FullLayout } from "../layouts/FullLayout";
import FloatingChatBot from "../pages/chatbot";
import WeatherDisplay from "../layouts/WeatherPage";
import PredictionTable from "../pages/PredictionTable";
import Map from "../pages/Map";

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      data: null,
    };
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <FullLayout>
          {/* Content of the dashboard page */}
          {/* You can place your TopCards, SalesChart, Feeds, ProjectTables, and Blog components here */}
        </FullLayout>
        <div className="content" style={{ marginTop: "50px" }}>
          {/***Top Cards***/}
          <div className="containerRow1">
            <h1>Dashboard</h1>
          </div>
          {/* Weather Display */}
          <div className="containerRow2">
            <div className="weather-container">
              <WeatherDisplay />
            </div>
            <div className="weather-map-container">
              <Map />
            </div>
          </div>
          {/* Prediction Table */}
          <div className="containerRow4">
            <PredictionTable />
          </div>
        </div>
        {/* Floating Chatbot */}
        <FloatingChatBot />
      </>
    );
  }
}

export default DashboardPage;