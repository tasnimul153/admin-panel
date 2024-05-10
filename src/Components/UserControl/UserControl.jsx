import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './UserControl.css';

const UserControl = () => {
    const [users, setUsers] = useState([]);

    // UseEffect to fetch user data
    useEffect(() => {
        fetch('http://localhost:8080/api/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                console.log(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className='app-main'>
            <Sidebar />
            <div className='userTable'>
                <div className='tableHeader'>
                    <div>First Name</div>
                    <div>Last Name</div>
                    <div>Email</div>
                    <div>Password</div>
                    <div>Country</div>
                    <div>Mobile</div>
                    <div>Operation</div>
                </div>
                {users.map((user, index) => (
                    <div key={index} className='tableRow'>
                        <div>{user.fname}</div>
                        <div>{user.lname}</div>
                        <div>{user.email}</div>
                        <div>{user.password}</div>
                        <div>{user.country}</div>
                        <div>{user.mobile}</div>
                        <div className='delete'>Delete</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserControl;