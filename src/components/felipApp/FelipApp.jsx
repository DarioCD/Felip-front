import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../home/Home"
import { Login } from '../login/Login'
import { Register } from '../register/Register'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import { Presupuesto } from '../presupuesto/Presupuesto'

const FelipApp = () => {
    const [userData, setUserData] = useState();

    return (
        <div>
            <Header />
            <Routes>
                <>
                    <Route path="/" element={<Home userData={userData} setUserData={setUserData} />}></Route>
                    <Route path="/login" element={<Login userData={userData} setUserData={setUserData} />}></Route>
                    <Route path="/register" element={<Register userData={userData} setUserData={setUserData} />}></Route>
                    <Route path="/presupuesto" element={<Presupuesto userData={userData} setUserData={setUserData} />}></Route>
                </>
            </Routes>
            <Footer />
        </div>
    )
}

export default FelipApp