import React from 'react'

export const Footer = () => {

    const local = require("../../assets/maps-and-location.png")
    const time = require("../../assets/time-and-date.png")
    const phone = require("../../assets/ring-phone.png")
    const mail = require("../../assets/email.png")
    const facebook = require("../../assets/facebook.png")
    const ig = require("../../assets/instagram.png")
    const tiktok = require("../../assets/LOGO-TIKTOK-png-300x300.png")
    const logo = require("../../assets/logo.png")

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <div className='footer'>
                <div className='footerItemContainerGlobal'>
                    <div>
                        <div className='footerItemContainer'>
                            <img
                                src={local}
                                alt="Imagen completa"
                                className='footerImg'
                            />
                            <h4>Direcion</h4>
                        </div>
                        <span>Los Relejos - 38410, Santa Cruz de Tenerife</span>
                    </div>
                    <div>
                        <div className='footerItemContainer'>
                            <img
                                src={time}
                                alt="Imagen completa"
                                className='footerImg'
                            />
                            <h4>Horario</h4>
                        </div>
                        <span>Lunes a viernes: 7:00 a 20:00 h</span>
                    </div>
                    <div>
                        <div className='footerItemContainer'>
                            <img
                                src={mail}
                                alt="Imagen completa"
                                className='footerImg'
                            />
                            <h4>Email</h4>
                        </div>
                        <span>impermeabilizacionesfp@gmail.com</span>
                    </div>
                    <div>
                        <div className='footerItemContainer'>
                            <img
                                src={phone}
                                alt="Imagen completa"
                                className='footerImg'
                            />
                            <h4>Teléfono</h4>
                        </div>
                        <span>+34 630 563 416 / +34 677 244 041</span>
                    </div>
                </div>
                <div>
                    <img
                        src={logo}
                        alt="Imagen completa"
                        className='bigLogo'
                        onClick={() => scrollToSection('inicio')}
                    />
                </div>
                <div>
                    <div className='socialLinks'>
                        <div>
                            <img
                                src={facebook}
                                alt="Imagen completa"
                                className='footerImg'
                            />
                            <a href="https://www.facebook.com/profile.php?id=100095345183762" target="_blank" rel="noopener noreferrer">Visita nuestra página de Facebook</a>
                        </div>
                        <div>
                            <img
                                src={ig}
                                alt="Imagen completa"
                                className='footerImg'
                            />
                            <a href="https://www.instagram.com/impermeabilizacionesfp/" target="_blank" rel="noopener noreferrer">Visita nuestro perfil de Instagram</a>
                        </div>
                        <div>
                            <img
                                src={tiktok}
                                alt="Imagen completa"
                                className='footerImg'
                            />
                            <a href="https://www.tiktok.com/@tu_perfil_de_tiktok" target="_blank" rel="noopener noreferrer">Visita nuestro perfil de TikTok</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
