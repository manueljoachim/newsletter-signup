import React, { Component } from 'react';
import Screen from './screens/Screen';
import ActionScreen from './screens/ActionScreen';
import EmailAddress from './dataEntryItems/EmailAddress';
import Name from './dataEntryItems/Name';
import SingleCheckbox from './singleCheckbox/SingleCheckbox';

import './Footer.css';

class Footer extends Component {

  state = { selectedScreen: 1};
  userData = { email: null, firstName: null, lastName: null }

  onNextScreenRequest = ({ nextPosition, data} ) => {

    //TODO: make this more dynamic;
    if( nextPosition === 2) {
      this.userData.email = data.fieldValue;
    } else if ( nextPosition === 3 ) {
      this.userData.firstName = data.firstName;
      this.userData.lastName = data.lastName;
      console.log( "user data: ", this.userData );
    }
    this.setState( { selectedScreen: nextPosition }  );
  }

  render() {
    const selectedScreenName = this.state.selectedScreen;
    let selectedScreen;

    switch( selectedScreenName ) {
      case 1:
        selectedScreen =  <ActionScreen 
                            position="1"
                            actionLabel="Next"
                            onButtonAction={this.onNextScreenRequest}
                            head =  "Join the list"
                            subhead = "Sign&nbsp;up&nbsp;for the&nbsp;TLC&nbsp;Newsletter.">
                            <EmailAddress placeholder="enter email address" />
                            <SingleCheckbox
                              isChecked = {true}
                              label="I agree to receive information from Discovery Communications in accordance with the following Privacy Policy" />
                          </ActionScreen>; 
        break;
      case 2:
        selectedScreen = <ActionScreen
                            position="2"
                            actionLabel="Sign Up"
                            onButtonAction={this.onNextScreenRequest}
                            head =  "Join the list"
                            subhead = "Almost Done! Please enter your first and last name.">
                            <Name />
                          </ActionScreen>;
        break;
      case 3:
        selectedScreen = <Screen 
                            position="3" 
                            head =  "Congratulations!"
                            subhead = "Thank You For Signing Up."
                            summary = "Look out for the latest news on your favorite shows." />; 
        break;
      default: selectedScreen = <Screen 
                          position="0" 
                          head =  ""
                          subhead = "This show will be right back." />; 
    }

    return (
      <div className="Footer">
        {selectedScreen}
      </div>
    );
  }
}

export default Footer;
