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
    stateU: "IN",
    country: "United States",
    bio: "Thoughtful artist, who tattoos, paints, draws, and makes music. \nIf you're interested in getting a tattoo or having some art commissioned, send me an email.",
    updateUser: (user) => this.updateUser(user),
    status: "Write whatever you want in these!",
    here_for: "Kicking ass and taking names.",
    body_type: "Bad Ass",
    ethnicity: "The best one",
    zodiac: "Sorry, not religious"

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