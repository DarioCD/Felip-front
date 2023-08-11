import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card';
import { Modal } from 'react-bootstrap';

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

    const toggleModal = (image) => {
        setSelectedImage(image);
        setShowModal(!showModal);
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
                        <h4 class="letter-animation">
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
                        <Card style={ window.innerWidth >= 767 ? {width : '25 rem', margin: '0 1rem'} : {width : '20rem'}}>
                            <Card.Img variant="top" src={techo} onClick={() => toggleModal(techo)} style={{ width: '100%', height: '250px' }} />
                            <Card.Body>
                                <Card.Title>Techo</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={ window.innerWidth >= 767 ? {width : '25 rem', margin: '0 1rem'} : {width : '20rem'}}>
                            <Card.Body>
                                <Card.Title>Piscina</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={piscina} onClick={() => toggleModal(piscina)} style={{ width: '100%', height: '250px' }} />
                        </Card>
                        <Card style={ window.innerWidth >= 767 ? {width : '25 rem', margin: '0 1rem'} : {width : '20rem'}}>
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
                </div>
                {/* <div className='homeDatos'>
                <Link to={"/login"} className='btn'> IR AL LOGIN AQUI</Link>
                <Link to={"/register"}> IR AL REGISTER AQUI</Link>
            </div> */}
            </div>
        </>
    )
}

export default Home