import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card';
import { Modal } from 'react-bootstrap';
import ImageGallery from "react-image-gallery";
import { Register } from '../register/Register';
import { Form } from '../form/Form';
import { Obra } from '../obra/Obra';

const Home = ({ userData, setUserData }) => {
    useEffect(() => {
        console.log(userData);
    }, [userData])
    const techo = require("../../assets/techo.jpg")
    const piscina = require("../../assets/piscina.jpg")
    const azotea = require("../../assets/azotea.jpg")

    const carousel1 = require("../../assets/techo_2.jpg")
    const carousel2 = require("../../assets/azotea.jpg")
    const carousel3 = require("../../assets/azotea.jpg")

    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const images = [
        {
            original: techo,
            thumbnail: techo,
        },
        {
            original: piscina,
            thumbnail: piscina,
        },
        {
            original: azotea,
            thumbnail: azotea,
        },
    ];

    const toggleModal = (image) => {
        setSelectedImage(image);
        setShowModal(!showModal);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='containerGeneral'>
                <div className='homeContainer'>
                    <Carousel className="carouselContainer">
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImg" src={carousel1} alt="carousel1" />
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImg" src={carousel2} alt="carousel2" />
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImg" src={carousel3} alt="carousel3" />
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <div className='carouselBottom'>
                        {
                            window.innerWidth >= 767 ? <h4>Somos expertos en impermeabilización</h4> : <></>
                        }
                        <h4 class="letter-animation" onClick={() => scrollToSection('contacto')}>
                            <span>C</span><span>O</span><span>N</span><span>O</span><span>C</span><span>E</span><span>N</span><span>O</span><span>S</span>
                        </h4>
                    </div>
                </div>
                <div className='containerObrasServicios' id="servicios">
                    <h1>SERVICIOS QUE OFRECEMOS</h1>
                    <p>
                        Nuestro equipo altamente capacitado está a su disposición para brindarle asesoría personalizada,
                        asegurando que obtenga la solución óptima adecuada para sus requerimientos.
                    </p>
                    <div className='containerCards'>
                        <Card style={window.innerWidth >= 767 ? { width: '25 rem', margin: '0 1rem' } : { width: '20rem' }}>
                            <Card.Img variant="top" src={techo} onClick={() => toggleModal(techo)} style={{ width: '100%', height: '250px' }} />
                            <Card.Body>
                                <Card.Title>Techo</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {
                            window.innerWidth >= 767 ?
                                <Card style={window.innerWidth >= 767 ? { width: '25 rem', margin: '0 1rem' } : { width: '20rem' }}>
                                    <Card.Body>
                                        <Card.Title>Piscina</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Img variant="bottom" src={piscina} onClick={() => toggleModal(piscina)} style={{ width: '100%', height: '250px' }} />
                                </Card>
                                :
                                <Card style={window.innerWidth >= 767 ? { width: '25 rem', margin: '0 1rem' } : { width: '20rem' }}>
                                    <Card.Img variant="bottom" src={piscina} onClick={() => toggleModal(piscina)} style={{ width: '100%', height: '250px' }} />
                                    <Card.Body>
                                        <Card.Title>Piscina</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                        }
                        <Card style={window.innerWidth >= 767 ? { width: '25 rem', margin: '0 1rem' } : { width: '20rem' }}>
                            <Card.Img variant="top" src={azotea} onClick={() => toggleModal(azotea)} style={{ width: '100%', height: '250px' }} />
                            <Card.Body>
                                <Card.Title>Azotea</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Modal show={showModal} onHide={toggleModal} centered>
                            <Modal.Body>
                                <img
                                    src={selectedImage}
                                    alt="Imagen completa"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            </Modal.Body>
                        </Modal>
                    </div>
                    <div className='containerSoluciones'>
                        <h2>Soulciones a medida</h2>
                        <div className='listaSoluciones'>
                            <p className='textoSoluciones'>Proporcionamos una amplia gama de opciones para proteger su estructuras de la humedad. Ya sea en edificios o
                                proyectos de construcción civil,
                                estamos aquí para ayudarte. Nuestra experiencia en el manejo de problemas de humedad y niveles de agua subterránea
                                nos permite analizar detenidamente cada situación y ofrecer la solución más eficiente y adaptada a sus requerimientos
                                específicos.
                            </p>
                            <div>
                                <ul>
                                    <li>Impermeabilización Lámina PVC</li>
                                    <li>Impermeabilización Lámina bituminosa</li>
                                    <li>Impermeabilización Depósitos</li>
                                    <li>Impermeabilización de obras civiles</li>
                                    <li>Impermeabilización Jardineras</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='containerObrasServicios' id="obras">
                    <h1>OBRAS</h1>
                    <p>
                        Poseemos una amplia trayectoria de más de tres décadas en el sector, lo que nos ha permitido consolidarnos como una empresa
                        cuyo trabajo habla por sí mismo. Nuestros clientes incluyen algunas de las constructoras más destacadas del archipiélago.
                        Nos enorgullecemos de llevar a cabo proyectos de diversos tamaños, desde obras particulares de menor escala hasta
                        impresionantes edificaciones y obras civiles de gran envergadura.
                    </p>
                    <Obra/>
                </div>
                <div className='containerObrasServicios' id="nosotros">
                    <h1>SOBRE NOSOTROS</h1>
                    <p>
                        Somos una empresa familiar con más de 30 años de experiencia en la industria de la construcción y la impermeabilización.
                        Nuestro fundador, Felipe Díaz Pacheco, ha dedicado la mayor parte de su vida a perfeccionar las técnicas y soluciones
                        para la impermeabilización, convirtiéndonos en un referente confiable y profesional en el campo.
                    </p>
                    <p>
                        Nuestra historia comenzó hace mas de tres décadas con una visión clara: proporcionar soluciones de alta calidad para la
                        impermeabilización y el aislamiento, tanto en proyectos de edificación como en obras civiles. A lo largo de los años,
                        hemos acumulado un profundo conocimiento y experiencia en el control de humedades y niveles freáticos, lo que nos ha
                        permitido abordar desafíos diversos y ofrecer soluciones eficaces y duraderas.
                    </p>
                    <p>
                        Cada proyecto que abordamos es un testimonio de nuestra dedicación y compromiso con la excelencia. Nuestro equipo de
                        profesionales altamente capacitados y apasionados comparte la visión de proporcionar resultados excepcionales a nuestros
                        clientes. Trabajamos de la mano con arquitectos, ingenieros y contratistas para garantizar que cada aspecto de la
                        impermeabilización y el aislamiento cumpla con los más altos estándares de calidad.
                    </p>
                    <p>
                        En ImpermeabilizacionesFP, no solo ofrecemos servicios y productos de vanguardia, sino que también brindamos
                        asesoramiento experto y personalizado. Entendemos que cada proyecto es único y merece soluciones adaptadas a
                        sus necesidades específicas. Ya sea una pequeña reforma o un gran proyecto de construcción, estamos comprometidos a
                        brindar resultados sobresalientes y a construir relaciones duraderas con nuestros clientes.
                    </p>
                    <p>
                        Nuestros valores fundamentales de integridad, innovación y excelencia guían cada paso que damos.
                        Nos enorgullece ser una parte integral de la industria y contribuir al desarrollo de proyectos exitosos y sostenibles.
                        Miramos hacia el futuro con entusiasmo, listos para enfrentar nuevos desafíos y seguir siendo líderes en el campo de la
                        impermeabilización y el aislamiento.
                    </p>
                </div>
                <div className='containerObrasServicios' id='contacto'>
                    <h1>CONTACTA CON NOSOTROS</h1>
                    <p>Rellene este formulario y nos pondremos en contacto con usted lo antes posible</p>
                    <Form/>
                </div>
            </div>
        </>
    )
}

export default Home