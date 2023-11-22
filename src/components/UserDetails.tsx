import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PostContext } from '../context/PostContext';

const UserDetails: React.FC = () => {
    const { state } = useContext(PostContext);
    const { userId } = useParams();
    const user = state.userDataMap.get(userId ? Number(userId) : null);
    const navigate = useNavigate();
   
    return (
        <div className="container">
            <button onClick={() => navigate("/")} type="button" className="btn btn-secondary">Home</button>
            <div className="row d-flex justify-content-center">
                <div className="userItem-container">
                    <h1 className='userItem-name'>{user?.name}</h1>
                    <p className='userItem-email'>{user?.email}</p>
                    <p className='userItem-address'>{`${user?.address?.street} ${user?.address?.suite}, ${user?.address?.city}, ${user?.address?.zipcode}`}</p> 
                </div>
            </div>
        </div>
    );
   };

export default UserDetails;
