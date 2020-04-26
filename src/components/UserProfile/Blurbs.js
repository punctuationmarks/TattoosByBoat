// More Info
import React from "react";
import { UserConsumer } from "../../providers/UserProvider";
import { Table } from "react-bootstrap";


const Blurbs = () => (
    <UserConsumer>
        {value => (

            <Table variant="sm">
                <thead style={{ backgroundColor: "#FFDF9E", color: "#FF971A", }}>
                    <tr>
                        <th>
                            {value.username}'s Blurbs
                  </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ color: "#FF971A", }}>
                            <strong>About Me:</strong>
                        </td>
                    </tr>
                    <tr>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos alias a velit voluptas harum? Commodi dolores consequatur quaerat iste delectus.
                     </tr>

                    <tr>
                        <td style={{ color: "#FF971A", }}>
                            <strong>Who I'd Like to Meet:</strong>
                        </td>
                    </tr>
                    <tr>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos alias a velit voluptas harum? Commodi dolores consequatur quaerat iste delectus.
                   </tr>
                </tbody>
            </Table>



        )}
    </UserConsumer>
)


export default Blurbs;