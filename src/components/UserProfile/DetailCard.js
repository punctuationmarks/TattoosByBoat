import React from "react";
import { UserConsumer } from '../../providers/UserProvider';
import { Table } from "react-bootstrap";

const DetailCard = () => (
    <UserConsumer>
        {value => (

            <div>

                <Table size="sm" style={{ border: "1px solid black" }}>
                    <thead style={{ backgroundColor: "#56AFEC", color: "white", }}>
                        <tr>
                            <th style={{ width: "35%" }}>
                                {value.username}'s Details
                </th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tablePromps">
                                <strong>Status: </strong>
                            </td>
                            <td className="tableValues">
                                {value.status}
                            </td>
                        </tr>
                        <tr>
                            <td className="tablePromps">
                                <strong>Here For: </strong>
                            </td>
                            <td className="tableValues">
                                {value.here_for}

                            </td>

                        </tr>
                        <tr>
                            <td className="tablePromps">
                                <strong>Body Type: </strong>
                            </td>
                            <td className="tableValues">
                                {value.body_type}

                            </td>
                        </tr>
                        <tr>
                            <td className="tablePromps">
                                <strong>Ethnicity: </strong>
                            </td>
                            <td className="tableValues">
                                {value.ethnicity}
                            </td>
                        </tr>
                        <tr>
                            <td className="tablePromps">
                                <strong>Zodiac Sign: </strong>
                            </td>
                            <td className="tableValues">
                                {value.zodiac}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        )}
    </UserConsumer>
)

export default DetailCard;