
// All of the cards for tattoos

import React from "react";
import { UserConsumer } from '../../providers/UserProvider'
import { Table, Image } from "react-bootstrap";

const Tattoos = () => (
    <UserConsumer>
        {value => (
            <Table variant="sm">
                <thead style={{ backgroundColor: "#FFDF9E", color: "#FF971A", }}>
                    <tr>
                        <th>
                            {value.username}'s Friend Space
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
                            <Image thumbnail="true"  src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/flash_0.jpg?raw=true" />
                        </td>
                        <td>
                            <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/cowgirl_classic.jpg?raw=true" />
                        </td>
                        <td>

                            <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/Older/images/a_star_is_born.jpg?raw=true" />
                        </td>
                        <td>

                            <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/Older/images/bondage_woman.jpg?raw=true" />
                        </td>
                    </tr>
                    <tr>
                        <td>

                            <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/sad_happy_puppy.jpg?raw=true" />
                        </td>
                        <td>
                            <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/Older/portfolio_pics/chicana240c.jpg?raw=true" />
                        </td>
                        <td>

                            <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/flowers_0.jpg?raw=true" />
                        </td>
                        <td>

                            <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/Older/images/zodiac_killer.jpg?raw=true" />
                        </td>
                    </tr>
                    <tr>
                        <td>

                            <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/Older/home_photos/peacock_featherb9b9.jpg?raw=true" />
                        </td>
                        <td>
                            <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/rib_cage_fair_classic.jpg?raw=true" />
                        </td>
                        <td>

                            <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/gray_wash_bird_0.jpg?raw=true" />
                        </td>
                        <td>

                            <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/trippy_af_0.jpg?raw=true" />
                        </td>
                    </tr>
                    <tr>
                        <td>

                            <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/Older/images/meat_is_murder.jpg?raw=true" />
                        </td>
                        <td>
                            <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/Older/images/sun_in_my_hand.jpg?raw=true" />
                        </td>
                        <td>

                            <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/tiger_classic_0.jpg?raw=true" />
                        </td>
                        <td>

                            <Image thumbnail="true" src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/skull_0.jpg?raw=true" />
                        </td>
                    </tr>
                </tbody>
            </Table>





        )}
    </UserConsumer>
)

export default Tattoos;

