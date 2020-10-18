// More Info
import React from "react";
import { UserConsumer } from "../../providers/UserProvider";
import { Table } from "react-bootstrap";

const About = () => (
  <UserConsumer>
    {(value) => (
      <Table variant="sm">
        <thead className="yellowTable">
          <tr>
            <td>About {value.username}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="infoPrompt">
              <strong>About Me:</strong>
            </td>
          </tr>
          <tr>
            <td>{value.about}</td>
          </tr>
          <tr>
            <td className="infoPrompt">
              <strong>Who I'd Like to Meet:</strong>
            </td>
          </tr>
          <tr>
            <td>{value.who_id_like_to_meet}</td>
          </tr>
        </tbody>
      </Table>
    )}
  </UserConsumer>
);

export default About;
