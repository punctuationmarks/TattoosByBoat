import React from "react";
import { UserConsumer } from '../../providers/UserProvider';
import { Col } from "react-bootstrap";

const BlogPreview = () => (
    <UserConsumer>
        {value => (
            <Col>
                <br />
                <div style={{ fontSize: "28px", border: "2px solid black", padding: "20px", width: "520px", height: "70px", textAlign: "center" }}>
                    {value.username} is in your extended network</div>
                <br />
                
                <strong><p style={{ fontSize: "14px", marginBottom: "10px" }}>Lorem ipsum sit amet, adipiscing. [<a style={{ fontSize: "14px", }} href="/">View More</a>]</p></strong>
                <p style={{ fontSize: "14px", marginBottom: "10px" }}>Etiam dui dui, eleifend.(<strong><a style={{ fontSize: "14px", }} href="/">View More</a></strong>)</p>
                <p style={{ fontSize: "14px", marginBottom: "10px" }}>Praesent at lobortis ipsum. Maecenas. (<strong><a style={{ fontSize: "14px", }} href="/">View More</a></strong>)</p>
                <p style={{ fontSize: "14px", marginBottom: "10px" }}>Suspendisse quis magna at ipsum. (<strong><a style={{ fontSize: "14px", }} href="/">View More</a></strong>)</p>
                <p style={{ fontSize: "14px", marginBottom: "10px" }}>Donec placerat nisi risus, id pretium. (<strong><a style={{ fontSize: "14px", }} href="/">View More</a></strong>)</p>
            [<strong><a style={{ fontSize: "14px", }} href="/">View All Blog Entries</a></strong>]
                <br />
                <br />
            </Col>
        )}
    </UserConsumer>
)

export default BlogPreview;