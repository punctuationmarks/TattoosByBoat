// needs to be refactored
// All of the cards for tattoos

import React, { useState } from "react";
import { Table, Image, Button } from "react-bootstrap";
import { UserConsumer } from '../../providers/UserProvider'
import ModalComponent from "./ModalComponent";

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
import woman_face_hearts from '../../static/images/woman_face_hearts.jpg'




function Tattoos() {
    // const [modalShow0, setModalShow0] = useState(false);
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [modalShow4, setModalShow4] = useState(false);
    const [modalShow5, setModalShow5] = useState(false);
    const [modalShow6, setModalShow6] = useState(false);
    const [modalShow7, setModalShow7] = useState(false);
    const [modalShow8, setModalShow8] = useState(false);
    const [modalShow9, setModalShow9] = useState(false);
    const [modalShow10, setModalShow10] = useState(false);
    const [modalShow11, setModalShow11] = useState(false);
    const [modalShow12, setModalShow12] = useState(false);
    const [modalShow14, setModalShow14] = useState(false);
    const [modalShow15, setModalShow15] = useState(false);
    const [modalShow16, setModalShow16] = useState(false);
    const [modalShow17, setModalShow17] = useState(false);
    const [modalShow18, setModalShow18] = useState(false);

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
                                <Button variant="outline-dark" onClick={() => setModalShow1(true)}>
                                    <Image src={flash_0} alt="flash tattoo on hand" fluid className="p-2 " />
                                </Button>
                                <ModalComponent
                                    show={modalShow1}
                                    image={flash_0}
                                    onHide={() => setModalShow1(false)}
                                />
                            </td>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow2(true)}>
                                    <Image src={zodiac_killer} alt="tattoo of the zodiac killer" />
                                </Button>
                                <ModalComponent
                                    show={modalShow2}
                                    image={zodiac_killer}
                                    onHide={() => setModalShow2(false)}
                                />
                            </td>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow3(true)}>
                                    <Image src={gray_wash_bird_0} alt="tattoo of detailed gray wash bird" />
                                </Button>
                                <ModalComponent
                                    show={modalShow3}
                                    image={gray_wash_bird_0}
                                    onHide={() => setModalShow3(false)}
                                />
                            </td>


                        </tr>

                        <tr>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow4(true)}>
                                    <Image src={skull_0} alt="tattoo of skull" />
                                </Button>
                                <ModalComponent
                                    show={modalShow4}
                                    image={skull_0}
                                    onHide={() => setModalShow4(false)}
                                />
                            </td>

                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow5(true)}>
                                    <Image src={sun_in_my_hand} alt="tattoo of hand holding sun" />
                                </Button>
                                <ModalComponent
                                    show={modalShow5}
                                    image={sun_in_my_hand}
                                    onHide={() => setModalShow5(false)}
                                />

                            </td>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow6(true)}>
                                    <Image src={woman_face_hearts} alt="the smiths meat is murder" />
                                </Button>
                                <ModalComponent
                                    show={modalShow6}
                                    image={woman_face_hearts}
                                    onHide={() => setModalShow6(false)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow7(true)}>
                                    <Image src={flowers_0} alt="tattoo of flowers" />
                                </Button>
                                <ModalComponent
                                    show={modalShow7}
                                    image={flowers_0}
                                    onHide={() => setModalShow7(false)}
                                />

                            </td>

                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow8(true)}>
                                    <Image src={face_tat} alt="tattoo on a face" />
                                </Button>
                                <ModalComponent
                                    show={modalShow8}
                                    image={face_tat}
                                    onHide={() => setModalShow8(false)}
                                />
                            </td>

                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow9(true)}>
                                    <Image src={cowgirl_classic} alt="tattoo of a cowgirl" />
                                </Button>
                                <ModalComponent
                                    show={modalShow9}
                                    image={cowgirl_classic}
                                    onHide={() => setModalShow9(false)}
                                />
                            </td>

                        </tr>
                        <tr>

                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow10(true)}>
                                    <Image src={chicana} alt="tattoo of the word chicana" />
                                </Button>
                                <ModalComponent
                                    show={modalShow10}
                                    image={chicana}
                                    onHide={() => setModalShow10(false)}
                                />

                            </td>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow11(true)}>
                                    <Image src={bondage_woman} alt="tattoo tattoo of a woman in bondage" />
                                </Button>
                                <ModalComponent
                                    show={modalShow11}
                                    image={bondage_woman}
                                    onHide={() => setModalShow11(false)}
                                />

                            </td>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow12(true)}>
                                    <Image src={a_star_is_born} alt="tattoo of a realistic looking galaxy" />
                                </Button>
                                <ModalComponent
                                    show={modalShow12}
                                    image={a_star_is_born}
                                    onHide={() => setModalShow12(false)}
                                />

                            </td>
                        </tr>
                        <tr>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow14(true)}>
                                    <Image src={dad} alt="tattoo of a bunch of name tags" />
                                </Button>
                                <ModalComponent
                                    show={modalShow14}
                                    image={dad}
                                    onHide={() => setModalShow14(false)}
                                />
                            </td>

                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow15(true)}>
                                    <Image src={peacock_feather} alt="tattoo of a bright peakcock feather" />
                                </Button>
                                <ModalComponent
                                    show={modalShow15}
                                    image={peacock_feather}
                                    onHide={() => setModalShow15(false)}
                                />
                            </td>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow16(true)}>
                                    <Image src={trippy_af_0} alt="tattoo of a centipede opening up to reveal women's faces" />
                                </Button>
                                <ModalComponent
                                    show={modalShow16}
                                    image={trippy_af_0}
                                    onHide={() => setModalShow16(false)}
                                />

                            </td>
                        </tr>
                        <tr>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow17(true)}>
                                    <Image src={tiger_classic_0} alt="tattoo of a tiger" />
                                </Button>
                                <ModalComponent
                                    show={modalShow17}
                                    image={tiger_classic_0}
                                    onHide={() => setModalShow17(false)}
                                />

                            </td>
                            <td>

                                <Button variant="outline-dark" onClick={() => setModalShow18(true)}>
                                    <Image src={skull_1} alt="tattoo of skull" />
                                </Button>
                                <ModalComponent
                                    show={modalShow18}
                                    image={skull_1}
                                    onHide={() => setModalShow18(false)}
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

