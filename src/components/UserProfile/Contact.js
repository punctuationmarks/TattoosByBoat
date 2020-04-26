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
                <Table style={{ border: "1px solid black" }} hover size="sm">
                    <thead style={{ backgroundColor: "#56AFEC", color: "white", }}>
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
                                    <span>📩</span> Message Me
</a>
                            </td>

                            <td>
                                <a href="/">
                                    📤 Forward to Friend
</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="/">
                                    👥 Add to Friends
</a>
                            </td>

                            <td>
                                <a href="/">
                                    ⭐️ Add to Favorites
</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="/">
                                    📲 Instant Message
</a>
                            </td>
                            <td>
                                <a href="/">
                                    🚫 Block User
</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="/">
                                    👨‍👩‍👧‍👦 Add to Group
</a>
                            </td>
                            <td>
                                <a href="/">
                                    📈 Rank User
</a>
                            </td>

                        </tr>
                    </tbody>
                </Table>
            </div>


        )}

    </UserConsumer>
)

export default Contact;
