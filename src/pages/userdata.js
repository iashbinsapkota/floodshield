import React from 'react';

class UserTable extends React.Component {
  render() {
    const { users, onEdit, onDelete } = this.props;

    return (
      <div className="user-table">
        <h2>User Information:</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => onEdit(user)}>Edit</button>
                  <button onClick={() => onDelete(user)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserTable;
