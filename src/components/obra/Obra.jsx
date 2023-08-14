import React, { useState } from 'react'
import { Card, Carousel, Modal } from 'react-bootstrap';
import ImageGallery from "react-image-gallery";

export const Obra = () => {

    const techo = require("../../assets/techo.jpg")
    const piscina = require("../../assets/piscina.jpg")
    const azotea = require("../../assets/azotea.jpg")

    const obraAzotea1 = require("../../assets/obra_en_azotea_1.jpg")
    const obraAzotea2 = require("../../assets/obra_en_azotea_2.jpg")

    const obraTerraza1 = require("../../assets/obra_en_terraza_3.jpg")
    const obraTerraza2 = require("../../assets/obra_en_terraza_1.jpg")
    const obraTerraza3 = require("../../assets/obra_en_terraza_2.jpg")

    const obraAzotea2_1 = require("../../assets/obra_en_azotea_2.1.jpg")
    const obraAzotea2_2 = require("../../assets/obra_en_azotea_2.2.jpg")
    const obraAzotea2_3 = require("../../assets/obra_en_azotea_2.3.jpg")

    const reformaTejado1 = require("../../assets/reforma_tejado_1.jpg")
    const reformaTejado2 = require("../../assets/reforma_tejado_2.jpg")
    const reformaTejado3 = require("../../assets/reforma_tejado_3.jpg")
    const reformaTejado4 = require("../../assets/reforma_tejado_4.jpg")
    const reformaTejado5 = require("../../assets/reforma_tejado_5.jpg")

    const obraAzotea3_1 = require("../../assets/obra_en_azotea_3.1.jpg")
    const obraAzotea3_2 = require("../../assets/obra_en_azotea_3.2.jpg")

    const obraPiscina1 = require("../../assets/obra_piscina_1.jpg")
    const obraPiscina2 = require("../../assets/obra_piscina_2.jpg")
    const obraPiscina3 = require("../../assets/obra_piscina_3.jpg")
    const obraPiscina4 = require("../../assets/obra_piscina_4.jpg")
    const obraPiscina5 = require("../../assets/obra_piscina_5.jpg")
    const obraPiscina6 = require("../../assets/obra_piscina_6.jpg")
    const obraPiscina7 = require("../../assets/obra_piscina_7.jpg")
    const obraPiscina8 = require("../../assets/obra_piscina_8.jpg")
    const obraPiscina9 = require("../../assets/obra_piscina_9.jpg")
    const obraPiscina10 = require("../../assets/obra_piscina_10.jpg")

    const obraAzotea4_1 = require("../../assets/obra_en_azotea_4.1.jpg")
    const obraAzotea4_2 = require("../../assets/obra_en_azotea_4.2.jpg")
    const obraAzotea4_3 = require("../../assets/obra_en_azotea_4.3.jpg")
    const obraAzotea4_4 = require("../../assets/obra_en_azotea_4.4.jpg")

    const obraPiscina2_1 = require("../../assets/obra_piscina_2.1.jpg")
    const obraPiscina2_2 = require("../../assets/obra_piscina_2.2.jpg")
    const obraPiscina2_3 = require("../../assets/obra_piscina_2.3.jpg")

    const obraTecho1 = require("../../assets/obra_en_techo1.jpg")
    const obraTecho2 = require("../../assets/obra_en_techo2.jpg")
    const obraTecho3 = require("../../assets/obra_en_techo3.jpg")
    const obraTecho4 = require("../../assets/obra_en_techo4.jpg")
    const obraTecho5 = require("../../assets/obra_en_techo5.jpg")

    const obraPiscina3_1 = require("../../assets/obra_piscina_3.1.jpg")
    const obraPiscina3_2 = require("../../assets/obra_piscina_3.2.jpg")
    const obraPiscina3_3 = require("../../assets/obra_piscina_3.3.jpg")

    const obraDeposito1 = require("../../assets/obra_deposito1.jpg")
    const obraDeposito2 = require("../../assets/obra_deposito2.jpg")
    const obraDeposito3 = require("../../assets/obra_deposito3.jpg")
    const obraDeposito4 = require("../../assets/obra_deposito4.jpg")
    const obraDeposito5 = require("../../assets/obra_deposito5.jpg")
    const obraDeposito6 = require("../../assets/obra_deposito6.jpg")

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

    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const toggleModal = (image) => {
        setSelectedImage(image);
        setShowModal(!showModal);
    };

    return (
        <>
            {/* <ImageGallery items={images} /> */}
            <div className='obraContainer'>
                <Card style={window.innerWidth >= 767 ? { width: '25 rem' } : { width: '20rem' }}>
                    <Card.Body>
                        <Card.Title><b>OBRA EN AZOTEA</b></Card.Title>
                        <Card.Text>
                            Impermeabilización de azoteas con lámina asfáltica autoprotegida fibra poliéster 5 kilos.
                        </Card.Text>
                    </Card.Body>
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraAzotea1} alt="carousel1" onClick={() => toggleModal(obraAzotea1)} />
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraAzotea2} alt="carousel2" onClick={() => toggleModal(obraAzotea2)} />
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Card>
                <Card style={window.innerWidth >= 767 ? { width: '25 rem' } : { width: '20rem' }}>
                    <Card.Body>
                        <Card.Title><b>OBRA EN TERRAZA</b></Card.Title>
                        <Card.Text>
                            Impermeabilización de terraza con lámina asfáltica autoprotegida fibra poliéster 5 kilos.
                        </Card.Text>
                    </Card.Body>
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraTerraza1} alt="carousel1" onClick={() => toggleModal(obraTerraza1)} />
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraTerraza2} alt="carousel2" onClick={() => toggleModal(obraTerraza2)} />
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraTerraza3} alt="carousel2" onClick={() => toggleModal(obraTerraza3)} />
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Card>
                <Card style={window.innerWidth >= 767 ? { width: '25 rem' } : { width: '20rem' }}>
                    <Card.Body>
                        <Card.Title><b>OBRA EN AZOTEA</b></Card.Title>
                        <Card.Text>
                            impermeabilización de azoteas de colegio con lámina asfáltica autoprotegida roja fibra poliéster 5 kilos
                        </Card.Text>
                    </Card.Body>
                    <Carousel>
                        <Carousel>
                            <Carousel.Item interval={5000}>
                                <img className="d-block carouselImgObra" src={obraAzotea2_1} alt="carousel1" onClick={() => toggleModal(obraAzotea2_1)}/>
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img className="d-block carouselImgObra" src={obraAzotea2_2} alt="carousel2" onClick={() => toggleModal(obraAzotea2_2)}/>
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img className="d-block carouselImgObra" src={obraAzotea2_3} alt="carousel2" onClick={() => toggleModal(obraAzotea2_3)}/>
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Carousel>
                </Card>
                <Card style={window.innerWidth >= 767 ? { width: '25 rem' } : { width: '20rem' }}>
                    <Card.Body>
                        <Card.Title><b>REFORMA DE TEJADO</b></Card.Title>
                        <Card.Text>
                            Reforma completa de tejado en Icod de los vinos
                        </Card.Text>
                    </Card.Body>
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={reformaTejado1} alt="carousel1" onClick={() => toggleModal(reformaTejado1)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={reformaTejado2} alt="carousel2" onClick={() => toggleModal(reformaTejado2)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={reformaTejado3} alt="carousel2" onClick={() => toggleModal(reformaTejado3)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={reformaTejado4} alt="carousel2" onClick={() => toggleModal(reformaTejado4)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={reformaTejado5} alt="carousel2" onClick={() => toggleModal(reformaTejado5)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Card>
                <Card style={window.innerWidth >= 767 ? { width: '25 rem' } : { width: '20rem' }}>
                    <Card.Body>
                        <Card.Title><b>OBRA DE AZOTEA</b></Card.Title>
                        <Card.Text>
                            impermeabilización de azotea con lamina asfaltica Danosa fibra poliéster 4 kilos
                        </Card.Text>
                    </Card.Body>
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraAzotea3_1} alt="carousel1" onClick={() => toggleModal(obraAzotea3_1)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraAzotea3_2} alt="carousel2" onClick={() => toggleModal(obraAzotea3_2)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Card>
                <Card style={window.innerWidth >= 767 ? { width: '25 rem' } : { width: '20rem' }}>
                    <Card.Body>
                        <Card.Title><b>REFORMA PISCINA</b></Card.Title>
                        <Card.Text>
                            Reforma completa de terraza y piscina en Los Realejos
                        </Card.Text>
                    </Card.Body>
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina1} alt="carousel1" onClick={() => toggleModal(obraPiscina1)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina2} alt="carousel2" onClick={() => toggleModal(obraPiscina2)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina3} alt="carousel1" onClick={() => toggleModal(obraPiscina3)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina4} alt="carousel2" onClick={() => toggleModal(obraPiscina4)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina5} alt="carousel1" onClick={() => toggleModal(obraPiscina5)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina6} alt="carousel2" onClick={() => toggleModal(obraPiscina6)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina7} alt="carousel1" onClick={() => toggleModal(obraPiscina7)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina8} alt="carousel2" onClick={() => toggleModal(obraPiscina8)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina9} alt="carousel1" onClick={() => toggleModal(obraPiscina9)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina10} alt="carousel2" onClick={() => toggleModal(obraPiscina10)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </Card>
                <Card style={window.innerWidth >= 767 ? { width: '25 rem' } : { width: '20rem' }}>
                    <Card.Body>
                        <Card.Title><b>OBRA AZOTEA</b></Card.Title>
                        <Card.Text>
                            Impermeabilización de azoteas con lámina asfáltica autoprotegida fibra poliéster 5 kilos y posterior tapado con 2 centímetros de atezado
                        </Card.Text>
                    </Card.Body>
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraAzotea4_1} alt="carousel1" onClick={() => toggleModal(obraAzotea4_1)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraAzotea4_2} alt="carousel2" onClick={() => toggleModal(obraAzotea4_2)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraAzotea4_3} alt="carousel2" onClick={() => toggleModal(obraAzotea4_3)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraAzotea4_4} alt="carousel2" onClick={() => toggleModal(obraAzotea4_4)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Card>
                <Card style={window.innerWidth >= 767 ? { width: '25 rem' } : { width: '20rem' }}>
                    <Card.Body>
                        <Card.Title><b>OBRA PISCINA</b></Card.Title>
                        <Card.Text>
                            Impermeabilización de piscina con lámina de PVC para piscinas azul cielo
                        </Card.Text>
                    </Card.Body>
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina2_1} alt="carousel1" onClick={() => toggleModal(obraPiscina2_1)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina2_2} alt="carousel2" onClick={() => toggleModal(obraPiscina2_2)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina2_3} alt="carousel2" onClick={() => toggleModal(obraPiscina2_3)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Card>
                <Card style={window.innerWidth >= 767 ? { width: '25 rem' } : { width: '20rem' }}>
                    <Card.Body>
                        <Card.Title><b>OBRA TECHO</b></Card.Title>
                        <Card.Text>
                            Impermeabilización de techo matadero insular de Tenerife con lámina asfáltica autoprotegida fibra poliéster 5 kilos
                        </Card.Text>
                    </Card.Body>
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraTecho1} alt="carousel1" onClick={() => toggleModal(obraTecho1)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraTecho2} alt="carousel2" onClick={() => toggleModal(obraTecho2)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraTecho3} alt="carousel2" onClick={() => toggleModal(obraTecho3)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraTecho4} alt="carousel2" onClick={() => toggleModal(obraTecho4)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraTecho5} alt="carousel2" onClick={() => toggleModal(obraTecho5)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Card>
                <Card style={window.innerWidth >= 767 ? { width: '25 rem' } : { width: '20rem' }}>
                    <Card.Body>
                        <Card.Title><b>OBRA PISCINA</b></Card.Title>
                        <Card.Text>
                            Impermeabilización de piscina con lámina PVC imitación acabado gresite.
                        </Card.Text>
                    </Card.Body>
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina3_1} alt="carousel1" onClick={() => toggleModal(obraPiscina3_1)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina3_2} alt="carousel2" onClick={() => toggleModal(obraPiscina3_2)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina3_3} alt="carousel2" onClick={() => toggleModal(obraPiscina3_3)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Card>
                <Card style={window.innerWidth >= 767 ? { width: '25 rem' } : { width: '20rem' }}>
                    <Card.Body>
                        <Card.Title><b>OBRA DEPÓSITO DE AGUA</b></Card.Title>
                        <Card.Text>
                            Impermeabilización de depósito de agua para regadío con capa de geotextil y lámina pvc sin armar 1,2 en la Orotava el Rincón
                        </Card.Text>
                    </Card.Body>
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraDeposito1} alt="carousel1" onClick={() => toggleModal(obraDeposito1)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraDeposito2} alt="carousel2" onClick={() => toggleModal(obraDeposito2)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraDeposito3} alt="carousel2" onClick={() => toggleModal(obraDeposito3)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraDeposito4} alt="carousel1" onClick={() => toggleModal(obraDeposito4)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraDeposito5} alt="carousel2" onClick={() => toggleModal(obraDeposito5)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraDeposito6} alt="carousel2" onClick={() => toggleModal(obraDeposito6)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Card>
                <Card style={window.innerWidth >= 767 ? { width: '25 rem' } : { width: '20rem' }}>
                    <Card.Body>
                        <Card.Title><b>OBRA PISCINA</b></Card.Title>
                        <Card.Text>
                            Impermeabilización de piscina con lámina de PVC para piscinas azul cielo
                        </Card.Text>
                    </Card.Body>
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina2_1} alt="carousel1" onClick={() => toggleModal(obraPiscina2_1)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina2_2} alt="carousel2" onClick={() => toggleModal(obraPiscina2_2)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img className="d-block carouselImgObra" src={obraPiscina2_3} alt="carousel2" onClick={() => toggleModal(obraPiscina2_3)}/>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
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

        </>
    )
}
