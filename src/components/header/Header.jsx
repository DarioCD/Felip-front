import React from 'react'

export const Header = () => {
    const phone = require("../../assets/ring-phone.png")
    const mail = require("../../assets/email.png")
    const logo = require("../../assets/logo.png")
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <div className='header' id='inicio'>
                <div className='headerTop'>
                    <div>
                        <img src={phone} alt='phone' className='headerImg' />
                        <span>+34 630 563 416 / +34 677 244 041</span>
                    </div>
                    <div>
                        <img src={mail} alt='mail' className='headerImg' />
                        <span>impermeabilizacionesfelipe@gmail.com</span>
                    </div>
                </div>
                <div className='headerBottom'>
                    <img src={logo} alt='logo' className='headerLogo' />
                    <h4 onClick={() => scrollToSection('servicios')} className="hover-border">Servicios</h4>
                    <h4 onClick={() => scrollToSection('obras')} className="hover-border">Trabajos realizados</h4>
                    <h4 onClick={() => scrollToSection('nosotros')} className="hover-border">Sobre nosotros</h4>
                    <h4 onClick={() => scrollToSection('contacto')} className="hover-border">Contacto</h4>
                </div>
            </div>
        </>
    )
}
