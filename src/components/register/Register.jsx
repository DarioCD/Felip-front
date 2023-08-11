import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import UserServices from '../../services/user.service';

export const Register = ({ userData, setUserData }) => {

    const navigate = useNavigate();

    const initialInputsData = {
        name: "",
        email: "",
        password: "",
        phone: "",
        verifyPaswword: "",
    };

    const [inputsData, setinputsData] = useState(initialInputsData);

    const handleOnChange = (e) => {
        setinputsData({
            ...inputsData,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        async function insertUsuario() {
            if (inputsData.password === inputsData.verifyPaswword) {
                try {
                    const response = await UserServices.registerUser(inputsData);
                    if (response.status === 201) {
                        console.log("joya");
                        navigate("/");
                    }else{
                        window.alert("Usuario ya existe, dirigase al login")
                        return;
                    }
                } catch (error) {
                    console.log(error);
                }
            } else {
                window.alert("CONTRASEÑAS ERRONEAS")
            }
        }
        insertUsuario();
    };

    useEffect(() => {
        console.log(userData);
    }, [userData])

    return (
        <>
            <div className="loginContainer">
                <form className="formularioLogin" onSubmit={handleOnSubmit}>
                    <div>
                        <label htmlFor="name" className="text-secondary">
                            NOMBRE
                        </label>
                        <div>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder=""
                                required
                                className="formularioLoginInput"
                                onChange={handleOnChange}
                                value={inputsData.name}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-secondary">
                            EMAIL
                        </label>
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder=""
                                required
                                className="formularioLoginInput"
                                onChange={handleOnChange}
                                value={inputsData.email}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="text-secondary">
                            TELÉFONO
                        </label>
                        <div>
                            <input
                                id="phone"
                                name="phone"
                                type="phone"
                                placeholder=""
                                required
                                className="formularioLoginInput"
                                onChange={handleOnChange}
                                value={inputsData.phone}
                            />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="password" className="text-secondary">
                            CONTRASEÑA
                        </label>
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder=""
                                required
                                className="formularioLoginInput"
                                onChange={handleOnChange}
                                value={inputsData.password}
                            />
                        </div>
                    </div>

                    <div className="">
                        <label htmlFor="verifyPaswword" className="text-secondary">
                            VERIFICAR LA CONTRASEÑA
                        </label>
                        <div>
                            <input
                                id="verifyPaswword"
                                name="verifyPaswword"
                                type="password"
                                placeholder=""
                                required
                                className="formularioLoginInput"
                                onChange={handleOnChange}
                                value={inputsData.verifyPaswword}
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary mt-4 w-100">
                            <b style={{ color: "white" }}>REGISTRATE</b>
                        </button>
                    </div>
                    <hr />
                    <div className="text-center">
                        <p className="mb-0">¿Ya tienes cuenta?</p>
                        <Link to={"/login"} className="registerLink">
                            <b>Accede aquí</b>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}
