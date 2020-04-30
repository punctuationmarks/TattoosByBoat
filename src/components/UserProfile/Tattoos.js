
// All of the cards for tattoos

import React from "react";
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


const Tattoos = () => (
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
                            <Image src={flash_0} alt="flash tattoo on hand" />
                            {/* <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/flash_0.jpg?raw=true" /> */}
                        </td>
                        <td>
                            <Image src={zodiac_killer} alt="tattoo of the zodiac killer"/>

                            {/* <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/cowgirl_classic.jpg?raw=true" /> */}
                        </td>
                        <td>
                            <Image src={gray_wash_bird_0} alt="tattoo of detailed gray wash bird" />

                            {/* <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/Older/images/zodiac_killer.jpg?raw=true" /> */}
                        </td>


                    </tr>

                    <tr>
                        <td>
                            <Image src={skull_0} alt="tattoo of skull"/>

                            {/* <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/Older/images/bondage_woman.jpg?raw=true" /> */}
                        </td>

                        <td>
                            <Image src={sun_in_my_hand} alt="tattoo of hand holding sun" />

                            {/* <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/sad_happy_puppy.jpg?raw=true" /> */}
                        </td>
                        <td>
                            <Image src={hand_tattoo_0} alt="tattoo of strawberries on hand" />

                            {/* <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/Older/portfolio_pics/chicana240c.jpg?raw=true" /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Image src={flowers_0} alt="tattoo of flowers"/>

                            {/* <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/flowers_0.jpg?raw=true" /> */}
                        </td>

                        <td>
                            <Image src={face_tat} alt="tattoo on a face" />

                            {/* <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/Older/images/a_star_is_born.jpg?raw=true" /> */}
                        </td>

                        <td>
                            <Image src={cowgirl_classic} alt="tattoo of a cowgirl" />

                            {/* <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/Older/home_photos/peacock_featherb9b9.jpg?raw=true" /> */}
                        </td>

                    </tr>
                    <tr>

                        <td>
                            <Image src={chicana} alt="tattoo of the word chicana" />

                            {/* <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/rib_cage_fair_classic.jpg?raw=true" /> */}
                        </td>
                        <td>
                            <Image src={bondage_woman} alt="tattoo tattoo of a woman in bondage" />

                            {/* <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/gray_wash_bird_0.jpg?raw=true" /> */}
                        </td>
                        <td>
                            <Image src={a_star_is_born} alt="tattoo of a realistic looking galaxy" />

                            {/* <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/trippy_af_0.jpg?raw=true" /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Image src={dad} alt="tattoo of a bunch of name tags" />

                            {/* <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/Older/images/meat_is_murder.jpg?raw=true" /> */}
                        </td>

                        <td>
                            <Image src={peacock_feather} alt="tattoo of a bright peakcock feather" />

                            {/* <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/Older/images/sun_in_my_hand.jpg?raw=true" /> */}
                        </td>
                        <td>
                            <Image src={trippy_af_0} alt="tattoo of a centipede opening up to reveal women's faces" />

                            {/* <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/tiger_classic_0_0.jpg?raw=true" /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Image src={tiger_classic_0} alt="tattoo of a tiger" />

                            {/* <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/skull_0.jpg?raw=true" /> */}
                        </td>
                        <td>
                            <Image src={skull_1} alt="tattoo of skull" />
                        </td>
                    </tr>
                </tbody>
            </Table>





        )}
    </UserConsumer>
)

export default Tattoos;

