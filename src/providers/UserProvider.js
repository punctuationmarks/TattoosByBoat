import React from "react";

// Set Up The Initial Context
const UserContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const UserConsumer = UserContext.Consumer;

// Create the provider using a traditional React.Component class
class UserProvider extends React.Component {
  state = {
    username: "Boat",
    lastLogin: "12/18/09",
    gender: "Female",
    email: "tattoosbyboat@email.com",
    city: "Indianapolis",
    stateU: "IN",
    country: "United States",
    bio: "Thoughtful artist, who tattoos, paints, draws, and makes music. \nIf you're interested in getting a tattoo or having some art commissioned, send me an email.",
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