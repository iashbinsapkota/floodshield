// DataTable.js
import React from 'react';

class DataTable extends React.Component {
  render() {
    const { users } = this.props;

    return (
      <div className="data-table">
        <h2>Historical Data Information:</h2>
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Area</th>
              <th>Water Level</th>
              <th>Rainfall Level</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.location}</td>
                <td>{user.area}</td>
                <td>{user.water_level}</td>
                <td>{user.rainfall_level}</td>
                <td>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataTable;
