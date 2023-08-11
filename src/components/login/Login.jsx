import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserServices from '../../services/user.service';

export const Login = ({ userData, setUserData }) => {

    const navigate = useNavigate();

    const initialInputsData = {
        email: "",
        password: "",
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
        async function checkUsuario() {
            try {
                const response = await UserServices.loginUser(inputsData)
                console.log(response);
                if (response.status === 200) {
                    window.alert("Inicio de sesión realizado correctamente");
                    setUserData(response.data);
                    navigate("/");
                } else {
                    window.alert("Error");
                }
            } catch (error) {
                window.alert("Error");
                console.log(error);
            }
        }
        checkUsuario();
    };

    return (
        <>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <label htmlFor="email" className="text-secondary">
                            EMAIL
                        </label>
                        <div>
                            <input id="email" name="email" type="email" placeholder="" required="" className="formularioLoginInput" onChange={handleOnChange} />
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
                                required=""
                                className="formularioLoginInput"
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary mt-4 w-100">
                            <b style={{ color: "white" }}>INICIAR SESIÓN</b>
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}
