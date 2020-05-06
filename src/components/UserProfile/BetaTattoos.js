
// All of the cards for tattoos

import React, { Fragment, useState } from "react";
import { UserConsumer } from '../../providers/UserProvider'
import { Table, Image } from "react-bootstrap";
import flash_0 from '../../static/images/flash_0.jpg'
import a_star_is_born from '../../static/images/a_star_is_born.jpg'
import bondage_woman from '../../static/images/bondage_woman.jpg'
import chicana from '../../static/images/chicana.jpg'
import cowgirl_classic from '../../static/images/cowgirl_classic.jpg'
import gray_wash_bird_0 from '../../static/images/gray_wash_bird_0.jpg'
import hand_tattoo_0 from '../../static/images/hand_tattoo_0.jpg'
import flowers_0 from '../../static/images/flowers_0.jpg'
import sun_in_my_hand from '../../static/images/sun_in_my_hand.jpg'
import skull_0 from '../../static/images/skull_0.jpg'
import zodiac_killer from '../../static/images/zodiac_killer.jpg'
import skull_1 from '../../static/images/skull_1.jpg'
import tiger_classic_0 from '../../static/images/tiger_classic_0.jpg'
import trippy_af_0 from '../../static/images/trippy_af_0.jpg'
import peacock_feather from '../../static/images/peacock_feather.jpg'
import face_tat from '../../static/images/face_tat.jpg'
import dad from '../../static/images/dad.jpg'
import ModalComponent from "./ModalComponent";

import { Button, Container } from 'react-bootstrap';



function Tattoos() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <UserConsumer>
            {value => (
                <Table variant="sm">
                    <thead className="yellowTable">
                        <tr>
                            <th>
                                {value.username}'s Tattoos
                  </th>
                            <th>
                            </th>
                            <th>
                            </th>
                            <th>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                                    <Image src={flash_0} alt="flash tattoo on hand" fluid className="p-2 " />
                                </Button>
                                <ModalComponent
                                    show={modalShow}
                                    image={flash_0}
                                    onHide={() => setModalShow(false)}
                                />
                            </td>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                                    <Image src={zodiac_killer} alt="tattoo of the zodiac killer" />
                                </Button>
                                <ModalComponent
                                    show={modalShow}
                                    image={zodiac_killer}
                                    onHide={() => setModalShow(false)}
                                />
                            </td>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                                    <Image src={gray_wash_bird_0} alt="tattoo of detailed gray wash bird" />
                                </Button>
                                <ModalComponent
                                    show={modalShow}
                                    image={gray_wash_bird_0}
                                    onHide={() => setModalShow(false)}
                                />
                            </td>


                        </tr>

                        <tr>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                                    <Image src={skull_0} alt="tattoo of skull" />
                                </Button>
                                <ModalComponent
                                    show={modalShow}
                                    image={skull_0}
                                    onHide={() => setModalShow(false)}
                                />
                            </td>

                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                                    <Image src={sun_in_my_hand} alt="tattoo of hand holding sun" />
                                </Button>
                                <ModalComponent
                                    show={modalShow}
                                    image={sun_in_my_hand}
                                    onHide={() => setModalShow(false)}
                                />

                            </td>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                                    <Image src={hand_tattoo_0} alt="tattoo of strawberries on hand" />
                                </Button>
                                <ModalComponent
                                    show={modalShow}
                                    image={hand_tattoo_0}
                                    onHide={() => setModalShow(false)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                                    <Image src={flowers_0} alt="tattoo of flowers" />
                                </Button>
                                <ModalComponent
                                    show={modalShow}
                                    image={flowers_0}
                                    onHide={() => setModalShow(false)}
                                />

                            </td>

                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                                    <Image src={face_tat} alt="tattoo on a face" />
                                </Button>
                                <ModalComponent
                                    show={modalShow}
                                    image={face_tat}
                                    onHide={() => setModalShow(false)}
                                />
                            </td>

                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                                    <Image src={cowgirl_classic} alt="tattoo of a cowgirl" />
                                </Button>
                                <ModalComponent
                                    show={modalShow}
                                    image={cowgirl_classic}
                                    onHide={() => setModalShow(false)}
                                />
                            </td>

                        </tr>
                        <tr>

                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                                    <Image src={chicana} alt="tattoo of the word chicana" />
                                </Button>
                                <ModalComponent
                                    show={modalShow}
                                    image={chicana}
                                    onHide={() => setModalShow(false)}
                                />

                            </td>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                                    <Image src={bondage_woman} alt="tattoo tattoo of a woman in bondage" />
                                </Button>
                                <ModalComponent
                                    show={modalShow}
                                    image={bondage_woman}
                                    onHide={() => setModalShow(false)}
                                />

                            </td>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                                    <Image src={a_star_is_born} alt="tattoo of a realistic looking galaxy" />
                                </Button>
                                <ModalComponent
                                    show={modalShow}
                                    image={a_star_is_born}
                                    onHide={() => setModalShow(false)}
                                />

                            </td>
                        </tr>
                        <tr>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                                    <Image src={dad} alt="tattoo of a bunch of name tags" />
                                </Button>
                                <ModalComponent
                                    show={modalShow}
                                    image={dad}
                                    onHide={() => setModalShow(false)}
                                />
                            </td>

                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                                    <Image src={peacock_feather} alt="tattoo of a bright peakcock feather" />
                                </Button>
                                <ModalComponent
                                    show={modalShow}
                                    image={peacock_feather}
                                    onHide={() => setModalShow(false)}
                                />
                            </td>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                                    <Image src={trippy_af_0} alt="tattoo of a centipede opening up to reveal women's faces" />
                                </Button>
                                <ModalComponent
                                    show={modalShow}
                                    image={trippy_af_0}
                                    onHide={() => setModalShow(false)}
                                />

                            </td>
                        </tr>
                        <tr>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                                    <Image src={tiger_classic_0} alt="tattoo of a tiger" />
                                </Button>
                                <ModalComponent
                                    show={modalShow}
                                    image={tiger_classic_0}
                                    onHide={() => setModalShow(false)}
                                />

                            </td>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                                    <Image src={skull_1} alt="tattoo of skull" />
                                </Button>
                                <ModalComponent
                                    show={modalShow}
                                    image={skull_1}
                                    onHide={() => setModalShow(false)}
                                />
                            </td>
                        </tr>
                    </tbody>
                </Table>





            )}
        </UserConsumer>
    )
}

export default Tattoos;

