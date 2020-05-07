// Contact Component 
import React from "react";
import { UserConsumer } from "../../providers/UserProvider";
import { Table } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard"


const Contact = () => {

    return (
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
                                    <a href="https://www.instagram.com/tattoosbyboat/" target="_blank" rel="noopener noreferrer">
                                        <span role="img" aria-labelledby="message">📩</span> Message Me</a>
                                </td>

                                <td>
                                    <CopyToClipboard text={"https://tattoosbyboat.com"}>
                                        <button role="img" aria-labelledby="forward"><span role="img" aria-labelledby="copy site url">📤</span> Copy site link for a Friend</button>
                                    </CopyToClipboard>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/">
                                        <span role="img" aria-labelledby="people">👥</span> Add to Friends</a>
                                </td>
                                <td>
                                    <a href="https://www.wikihow.com/Bookmark-a-Website">
                                        <span role="img" aria-labelledby="star">⭐️</span> Add to Favorites</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href={value.instagram}>
                                        <span role="img" aria-labelledby="insta message">📲</span> Insta Message</a>
                                </td>
                                <td>
                                    <a href="https://www.wikihow.com/Block-a-Website-in-All-Web-Browsers" target="_blank" rel="noopener noreferrer">
                                        <span role="img" aria-labelledby="no sign">🚫</span> Block User</a>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>


            )}

        </UserConsumer>
    )
}
export default Contact;
