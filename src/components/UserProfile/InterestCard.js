import React from "react";
import { UserConsumer } from '../../providers/UserProvider';
import { Table } from "react-bootstrap";

const Interests = () => (

  <UserConsumer>
    {value => (

      <div>
        <Table size="sm" style={{ border: "1px solid black" }}>
          <thead style={{ backgroundColor: "#56AFEC", color: "white", }}>
            <tr>
              <th style={{ width: "35%" }}>
                {value.username}'s Interests
                </th>
              <th>

              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tablePromps">
                <strong>General </strong>
              </td>
              <td className="tableValues">
                {value.general_info}
              </td>

            </tr>
          </tbody>
        </Table>


      </div>

    )}
  </UserConsumer>
)

export default Interests;