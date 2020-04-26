// More Info
import React from "react";
import { UserConsumer } from "../../providers/UserProvider";
import { Table } from "react-bootstrap";


const Blurbs = () => (
    <UserConsumer>
        {value => (

            <Table variant="sm">
                <thead className="yellowTable">
                    <tr>
                        <th>
                            {value.username}'s Blurbs
                  </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="blurbPrompt">
                            <strong>About Me:</strong>
                        </td>
                    </tr>
                    <tr>
                        {value.about}
                    </tr>

                    <tr>
                        <td className="blurbPrompt">
                            <strong>Who I'd Like to Meet:</strong>
                        </td>
                    </tr>
                    <tr>
                        {value.who_id_like_to_meet}
                    </tr>
                </tbody>
            </Table>



        )}
    </UserConsumer>
)


export default Blurbs;