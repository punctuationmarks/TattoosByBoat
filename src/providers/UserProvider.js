import React from "react";
import profile_image from "../static/images/profile_pic_0.jpg";

// Set Up The Initial Context
const UserContext = React.createContext();
// Create an exportable consumer that can be injected into components
export const UserConsumer = UserContext.Consumer;

// Create the provider using a traditional React.Component class
class UserProvider extends React.Component {
  state = {
    username: "Boat",
    email: "tattoosbyboat@gmail.com",
    city: "Indianapolis",
    state: "IN",
    country: "United States",
    bio:
      "Thoughtful artist, who tattoos, paints, draws, and makes music. \nIf you're interested in getting a tattoo or having some art commissioned, send me an email.",
    status: "Tattooing",
    here_for: "Community support",
    favorite_snack: "elote",
    general_info:
      "If you're looking for a new tattoo artist who has their own style hit me up!",
    about:
      "I'm an independent tattoo and oil painting artist who also plays music. I aim to make an inclusive environment for all my patrons and for people in general.",
    who_id_like_to_meet:
      "People who are actively aiming to make the world a better place",
    profile_image: profile_image,
    // links for navbar
    home_link: "/",
    mail_link: "https://protonmail.com/",
    profile_link: "/",
    flash_art_link: "https://www.instagram.com/boatsdesigns/",
    friends_link: "https://github.com/punctuationmarks",
    music_link: "https://www.youtube.com/watch?v=2MHhLDCJ57E",
    events_link: "https://mythicalwizardtattoo.com/",
    more_link: "/",
    // links on bio
    instagram: "https://www.instagram.com/tattoosbyboat/",
    shop_website: "https://mythicalwizardtattoo.com/",
    shop_instagram: "https://www.instagram.com/mythicalwizardtattoo/",

    updateUser: (user) => this.updateUser(user),
  };

  updateUser = (user) => {
    this.setState({ ...user });
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
