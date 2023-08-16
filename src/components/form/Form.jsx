import React, { useState } from 'react';
import Swal from 'sweetalert2';
import EmailServices from '../../services/email.service';

export const Form = () => {
    const initialInputsData = {
        nombre: "",
        apellidos: "",
        email: "",
        phone: "",
        description: ""
    };

    const [inputsData, setinputsData] = useState(initialInputsData);
    const [isLoading, setIsLoading] = useState(false);
    const isComponentInoperable = false; //Activar esto si el email no funciona 


    const handleOnChange = (e) => {
        setinputsData({
            ...inputsData,
            [e.target.name]: e.target.value,
        });
    };


    const handleOnSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        async function sendEmail() {
            try {
                await EmailServices.sendEmail(inputsData);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Correo enviado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                setinputsData(initialInputsData);
            } catch (error) {
                console.log(error);
            }
            setIsLoading(false);
        }
        sendEmail();
    }

    return (
        <>
            <div className="form-container">
                {isComponentInoperable && (
                    <div className="inoperable-overlay">
                        <p>Muy pronto estará diponible esta opción, para contactar con nosotros llame al <b>+34 630 563 416</b> o al <b> +34 677 244 041</b>, o si prefiere puede enviar un correo a <b>impermeabilizacionesfelipe@gmail.com</b></p>
                    </div>
                )}
                <form className="formItemsContainer" onSubmit={handleOnSubmit}>
                    <div className='firstItemForm'>
                        <div>
                            <div>
                                <label htmlFor="nombre" className="text-secondary">
                                    NOMBRE
                                </label>
                                <div>
                                    <input
                                        id="nombre"
                                        name="nombre"
                                        type="text"
                                        placeholder=""
                                        required
                                        className="fromImput"
                                        onChange={handleOnChange}
                                        value={inputsData.nombre}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="apellidos" className="text-secondary">
                                    APELLIDOS
                                </label>
                                <div>
                                    <input
                                        id="apellidos"
                                        name="apellidos"
                                        type="text"
                                        placeholder=""
                                        required
                                        className="fromImput"
                                        onChange={handleOnChange}
                                        value={inputsData.apellidos}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
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
                                        className="fromImput"
                                        onChange={handleOnChange}
                                        value={inputsData.email}
                                    />
                                </div>
                            </div>

                            <div className="">
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
                                        className="fromImput"
                                        onChange={handleOnChange}
                                        value={inputsData.phone}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="input-container">
                            <label htmlFor="description" className="text-secondary">
                                DESCRIPCIÓN
                            </label>
                            <div>
                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder=""
                                    required
                                    className="form-input"
                                    wrap="soft"
                                    onChange={handleOnChange}
                                    value={inputsData.description}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <button type="submit" className="btn-color mt-4 w-100">
                            <b style={{ color: "white" }}>ENVIAR</b>
                        </button>
                    </div>
                </form>
                {isLoading && (
                    <div className="loader-container">
                        <div className="loader"></div>
                    </div>
                )}
            </div>
        </>
    )
}
