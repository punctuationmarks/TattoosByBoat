// Contact Component 
import React from "react";
import { UserConsumer } from "../../providers/UserProvider";
import { Table } from "react-bootstrap";

const Contact = () => (
    <UserConsumer>
        {value => (
            <div
                style={{

                }}
            >
                <Table className="contactTable" hover size="sm">
                    <thead className="contactTableHeader">
                        <tr>
                            <th>
                                Contact {value.username}
                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: "12px" }}>
                        <tr>
                            <td>
                                <a href="/">
                                    <span>📩</span> Message Me</a>
                            </td>

                            <td>
                                <a href="/">
                                    <span>📤</span> Forward to Friend</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="/">
                                    <span>👥</span> Add to Friends</a>
                            </td>

                            <td>
                                <a href="/">
                                    <span>⭐️</span> Add to Favorites</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="/">
                                    <span>📲</span> Instant Message</a>
                            </td>
                            <td>
                                <a href="/">
                                    <span>🚫</span> Block User</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="/">
                                    <span>👨‍👩‍👧‍👦</span> Add to Group</a>
                            </td>
                            <td>
                                <a href="/">
                                    <span>📈</span> Rank User</a>
                            </td>

                        </tr>
                    </tbody>
                </Table>
            </div>


        )}

    </UserConsumer>
)

export default Contact;
