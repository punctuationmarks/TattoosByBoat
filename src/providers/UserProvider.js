import React from "react";

// Set Up The Initial Context
const UserContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const UserConsumer = UserContext.Consumer;

// Create the provider using a traditional React.Component class
class UserProvider extends React.Component {
  state = {
    username: "Boat",
    email: "tattoosbyboat@email.com",
    city: "Indianapolis",
    state: "IN",
    country: "United States",
    bio: "Thoughtful artist, who tattoos, paints, draws, and makes music. \nIf you're interested in getting a tattoo or having some art commissioned, send me an email.",
    status: "Lorem ipsum dolor",
    here_for: "lorem ipsum dolor.",
    body_type: "lorem ipsum dolor.",
    ethnicity: "lorem ipsum dolor.",
    zodiac: "lorem ipsum dolor, you know how I do",
    general_info: "Dolor possimus maiores harum iusto, expedita distinctio ex nesciunt saepe fugiat aliquid perspiciatis dolores atque,  numquam esse delectus suscipit nulla nisi possimus eum, exercitationem fuga dolore. Odit rerum provident ex eveniet exercitationem alias consequatur excepturi. Sapiente ratione aliquid provident at corrupti.",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos alias a velit voluptas harum? Commodi dolores consequatur quaerat iste delectus.",
    who_id_like_to_meet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos alias a velit voluptas harum? Commodi dolores consequatur quaerat iste delectus.",

    // links for navbar
    home_link: "/",
    mail_link: "https://protonmail.com/",
    profile_link: "/",
    friends_link: "https://github.com/punctuationmarks",
    music_link: "https://www.youtube.com/watch?v=2MHhLDCJ57E",
    video_link: "/",
    game_link: "https://selflessheroes.fr/",
    events_link: "https://www.youtube.com/watch?v=XvB9ftAHpwc",
    more_link: "/",

    // links on bio
    instagram: "https://www.instagram.com/tattoosbyboat/",
    shop_website: "https://mythicalwizardtattoo.com/",
    shop_instagram: "https://www.instagram.com/mythicalwizardtattoo/",

    updateUser: (user) => this.updateUser(user),
  };

  updateUser = (user) => {
    this.setState({ ...user, });
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserProvider;