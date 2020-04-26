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
                        Vivamus dignissim auctor imperdiet. Nullam feugiat odio arcu, quis imperdiet ipsum iaculis quis. Nam ut lectus sed lacus imperdiet imperdiet bibendum in odio. Pellentesque interdum ligula mauris, ut bibendum purus ultrices.
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
                        Single
                </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "10px", backgroundColor: "#9BD4F5", color: "#2E77BB", fontSize: "14px" }}>
                        <strong>Here For: </strong>
                      </td>
                      <td style={{ padding: "10px", backgroundColor: "#D1E9FF", fontSize: "12px" }}>
                        Dating, Serious Relationships, Friends
                </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "10px", backgroundColor: "#9BD4F5", color: "#2E77BB", fontSize: "14px" }}>
                        <strong>Body Type: </strong>
                      </td>
                      <td style={{ padding: "10px", backgroundColor: "#D1E9FF", fontSize: "12px" }}>
                        6'2 / Athletic
                </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "10px", backgroundColor: "#9BD4F5", color: "#2E77BB", fontSize: "14px" }}>
                        <strong>Ethnicity: </strong>
                      </td>
                      <td style={{ padding: "10px", backgroundColor: "#D1E9FF", fontSize: "12px" }}>
                        Caucasian/White
                </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "10px", backgroundColor: "#9BD4F5", color: "#2E77BB", fontSize: "14px" }}>
                        <strong>Zodiac Sign: </strong>
                      </td>
                      <td style={{ padding: "10px", backgroundColor: "#D1E9FF", fontSize: "12px" }}>
                        Torus
                </td>
                    </tr>
                  </tbody>
                </Table>
              </div>

)}
</UserConsumer>
)

export default InterestDetailCards;