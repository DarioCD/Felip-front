import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <div className='header'>
                <div>
                    <Link to={"/"}>
                        LOGO
                    </Link>
                </div>
                <div>
                    MUCHO TEXTO
                </div>
                <div>
                    <Link to={"/presupuesto"}>
                        PIDE PRESUPUESTO
                    </Link>
                </div>
            </div>
        </>
    )
}
