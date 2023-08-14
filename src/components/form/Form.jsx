import React, { useState } from 'react'
import Swal from 'sweetalert2';

export const Form = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Correo enviado con éxito',
            showConfirmButton: false,
            timer: 1500
        })
       
    }

    return (
        <>
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
                                // onChange={handleOnChange}
                                // value={inputsData.nombre}
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
                                // onChange={handleOnChange}
                                // value={inputsData.apellidos}
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
                                // onChange={handleOnChange}
                                // value={inputsData.email}
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
        </>
    )
}
