import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


function UserList() {
    const [user, setuser] = useState([]);
    useEffect(() => {
        gettingdata()
    }, [])
    async function gettingdata() {
        try {
            var data = await axios.get(`http://localhost:3000/user`);
            setuser(data.data);
        } catch (error) {
            console.log(error);
        }
    }
    let handleDelete = async (_id) => {
        try {
            let result = window.confirm("Are you sure want to delete?")
            if (result) {
                console.log(_id)
                await axios.delete(`http://localhost:3000/user/${_id}`)
                alert("User account deleted")
                gettingdata();
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className="col-lg-6">
                    <h5 >User List</h5>
                </div>
                <div className="col-lg-6 text-end">
                    <Link to="/create">
                        <button className="btn btn-secondary ">Create User</button>
                    </Link>
                </div>

                <table classname="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Number</th>
                            <th scope="col">Age</th>
                            <th scope="col">Email</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((user) => {
                            var url = `/update/${user._id}`;
                            return <tr>
                                <td scope="row">{user.name}</td>
                                <td>{user.number}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                <td><Link to={url} className='btn btn-primary btn-md'>Edit</Link></td>
                                <td><button onClick={() => handleDelete(user._id)} className='btn btn-danger btn-md'>Delete</button></td>
                            </tr>

                        }

                        )}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default UserList