import React, { Fragment } from 'react';
import Media from 'react-media';
import { UserConsumer } from '../providers/UserProvider';
import { Container, Row, Col } from "react-bootstrap";
import UserInfo from "./UserProfile/UserInfo";
import BlogPreview from "./UserProfile/BlogPreview";
import Tattoos from "./UserProfile/Tattoos";
import Contact from "./UserProfile/Contact";
import Blurbs from "./UserProfile/Blurbs";
import InterestCard from "./UserProfile/InterestCard";
import DetailCard from "./UserProfile/DetailCard";

// class UserProfile extends Component {
//     render() {
//         return (
//             <div>
//                 <Media queries={{
//                     small: "(max-width: 599px)",
//                     large: "(min-width: 600px)",
//                     //  and (max-width: 1199px)",
//                     // large: "(min-width: 1200px)"
//                 }}>
//                     {matches => (
//                         <Fragment>
//                             {matches.small &&

//                                 <UserConsumer>

//                                     {value => (
//                                         <Container>
//                                             <Row>
//                                                 <UserInfo></UserInfo>
//                                                 {/* <BlogPreview></BlogPreview> */}
//                                             </Row>

//                                             <Row>
//                                                 <InterestDetailCards></InterestDetailCards>
//                                             </Row>
//                                             <Row>
//                                                 <Blurbs></Blurbs>

//                                             </Row>


//                                             <Row>
//                                                 <Tattoos></Tattoos>

//                                             </Row>

//                                             <Row>
//                                                 <Contact></Contact>

//                                             </Row>



//                                         </Container>
//                                     )}
//                                 </UserConsumer>
//                             }
//                             {matches.large &&
//                                 <UserConsumer>

//                                     {value => (
//                                         <Container>
//                                             <Row>
//                                                 <UserInfo></UserInfo>
//                                                 {/* <BlogPreview></BlogPreview> */}
//                                             </Row>

//                                             <Row>

//                                                 <Col>
//                                                     <InterestDetailCards></InterestDetailCards>
//                                                     <Contact></Contact>
//                                                 </Col>

//                                                 <Col>
//                                                     <Blurbs></Blurbs>
//                                                     <Tattoos></Tattoos>
//                                                 </Col>
//                                             </Row>

//                                         </Container>
//                                     )}
//                                 </UserConsumer>

//                             }
//                         </Fragment>
//                     )}


//                     )}
//                 />
//                 </Media>

//             </div>
//         );
//     }
// }


// export default UserProfile;


class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && <UserConsumer>
                {value => (
                  <>
                    <Container>
                      <Row>
                        <UserInfo></UserInfo>
                        {/* <BlogPreview></BlogPreview> */}
                      </Row>

                      <Row>

                        <Tattoos></Tattoos>
                      </Row>

                      <Row>

                        <Col>
                          <InterestCard></InterestCard>
                        </Col>
                        <Col>
                          <DetailCard></DetailCard>
                        </Col>


                      </Row>
                      <Row>

                        <Col>
                          <Blurbs></Blurbs>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <Contact></Contact>
                        </Col>

                      </Row>

                    </Container>
                  </>
                )}
              </UserConsumer>}
              {matches.medium && <UserConsumer>
                {value => (
                  <>
                    <Container>
                      <Row>
                        <UserInfo></UserInfo>
                        {/* <BlogPreview></BlogPreview> */}
                      </Row>

                      <Row>

                        <Tattoos></Tattoos>
                      </Row>
                      <Row>
                        <Col>
                          <InterestCard></InterestCard>
                        </Col>
                        <Col>
                          <DetailCard></DetailCard>
                        </Col>


                        <Col>
                          <Blurbs></Blurbs>
                        </Col>
                      </Row>
                      <Row>

                        <Col>
                          <Contact></Contact>
                        </Col>
                      </Row>

                    </Container>
                  </>
                )}
              </UserConsumer>}
              {matches.large &&
                <UserConsumer>
                  {value => (
                    <>
                      <Container>
                        <Row>
                          <UserInfo></UserInfo>
                          {/* <BlogPreview></BlogPreview> */}
                        </Row>

                        <Row>

                          <Col>
                            <InterestCard></InterestCard>
                            <DetailCard></DetailCard>

                            <Contact></Contact>
                          </Col>

                          <Col>
                            <Blurbs></Blurbs>
                            <Tattoos></Tattoos>
                          </Col>
                        </Row>

                      </Container>
                    </>
                  )}
                </UserConsumer>
              }
            </Fragment>
          )}
        </Media>
      </div>
    );
  }
}


export default UserProfile;
