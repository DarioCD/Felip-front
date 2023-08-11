import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ userData, setUserData }) => {
    useEffect(() => {
        console.log(userData);
    }, [userData])

    return (
        <>
            <div className='homeDatos'>
                <Link to={"/login"} className='btn'> IR AL LOGIN AQUI</Link>
                <Link to={"/register"}> IR AL REGISTER AQUI</Link>
            </div>
        </>
    )
}

export default Home