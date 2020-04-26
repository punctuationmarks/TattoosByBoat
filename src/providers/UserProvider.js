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
    updateUser: (user) => this.updateUser(user),
    status: "Write whatever you want in these!",
    here_for: "lorem ipsum.",
    body_type: "lorem ipsum",
    ethnicity: "lorem ipsum",
    general_info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim dolor possimus maiores harum iusto, expedita distinctio ex nesciunt saepe fugiat aliquid perspiciatis dolores atque, nihil nam officia veniam o dit esse architecto. Quas consequatur commodi ratione neque reprehenderit perferendis mollitia repudiandae at accusantium ut ipsa, cum quia numquam esse delectus suscipit nulla nisi possimus eum, exercitationem fuga dolore. Odit rerum provident ex eveniet exercitationem alias consequatur excepturi. Soluta, consequatur dolor quia fugiat adipisci nihil recusandae distinctio dolorum libero cupiditate corrupti eveniet aut ut atque a. Sapiente ratione aliquid provident at corrupti, praesentium dicta architecto quas vero placeat doloremque eligendi accusantium.",
    zodiac: "lorem ipsum",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos alias a velit voluptas harum? Commodi dolores consequatur quaerat iste delectus.",
    who_id_like_to_meet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos alias a velit voluptas harum? Commodi dolores consequatur quaerat iste delectus.",

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