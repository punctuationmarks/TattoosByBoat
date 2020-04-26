import React from "react";
import { UserConsumer } from '../../providers/UserProvider';
import { Table } from "react-bootstrap";

const InterestDetailCards = () => (
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
              <td style={{ padding: "10px", backgroundColor: "#9BD4F5", color: "#2E77BB" }}>
                <strong>General </strong>
              </td>
              <td style={{ backgroundColor: "#D1E9FF", fontSize: "12px" }}>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim dolor possimus maiores harum iusto, 
                expedita distinctio ex nesciunt saepe fugiat aliquid perspiciatis dolores atque, nihil nam officia veniam o
                dit esse architecto. Quas consequatur commodi ratione neque reprehenderit perferendis mollitia repudiandae at accusantium ut ipsa, 
                cum quia numquam esse delectus suscipit nulla nisi possimus eum, exercitationem fuga dolore. Odit rerum provident ex eveniet exercitationem alias consequatur excepturi. Soluta, consequatur dolor quia fugiat adipisci nihil recusandae distinctio dolorum libero cupiditate corrupti eveniet aut ut atque a. 
                Sapiente ratione aliquid provident at corrupti, praesentium dicta architecto quas vero placeat doloremque eligendi accusantium.
                </td>

            </tr>
          </tbody>
        </Table>
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
              <td style={{ padding: "10px", backgroundColor: "#9BD4F5", color: "#2E77BB", fontSize: "14px" }}>
                <strong>Status: </strong>
              </td>
              <td style={{ padding: "10px", backgroundColor: "#D1E9FF", fontSize: "12px" }}>
                Write whatever you want in these!
                </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", backgroundColor: "#9BD4F5", color: "#2E77BB", fontSize: "14px" }}>
                <strong>Here For: </strong>
              </td>
              <td style={{ padding: "10px", backgroundColor: "#D1E9FF", fontSize: "12px" }}>
                Lorem ipsum dolor sit amet.

                </td>

            </tr>
            <tr>
              <td style={{ padding: "10px", backgroundColor: "#9BD4F5", color: "#2E77BB", fontSize: "14px" }}>
                <strong>Body Type: </strong>
              </td>
              <td style={{ padding: "10px", backgroundColor: "#D1E9FF", fontSize: "12px" }}>
                Lorem ipsum dolor sit amet.

                </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", backgroundColor: "#9BD4F5", color: "#2E77BB", fontSize: "14px" }}>
                <strong>Ethnicity: </strong>
              </td>
              <td style={{ padding: "10px", backgroundColor: "#D1E9FF", fontSize: "12px" }}>
                Lorem ipsum dolor sit amet.

                </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", backgroundColor: "#9BD4F5", color: "#2E77BB", fontSize: "14px" }}>
                <strong>Zodiac Sign: </strong>
              </td>
              <td style={{ padding: "10px", backgroundColor: "#D1E9FF", fontSize: "12px" }}>
                Lorem ipsum dolor sit amet.

                </td>
            </tr>
          </tbody>
        </Table>
      </div>

    )}
  </UserConsumer>
)

export default InterestDetailCards;