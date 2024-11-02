import React from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}

const UserPage = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error(`Failed to fetch users, status: ${res.status}`);
    }

    const users: User[] = await res.json();

    return (
      <>
        <h1>Users</h1>
        {/* <p>{new Date().toLocaleString()}</p> */}
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </>
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return <p>Failed to load users. Please try again later.</p>;
  }
};

export default UserPage;
