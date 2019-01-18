import React from 'react';
import DataEntryItem from './DataEntryItem';

import './Name.css';

class Name extends DataEntryItem {
    
    initState() {
        this.state = { firstName: '', lastName: ''};
    }

    onFirstNameChange = evt => {
        this.setState( { firstName: evt.target.value } );
    }

    onLastNameChange = evt => {
        this.setState( { lastName: evt.target.value } );
    }

    hasRequired = () => {
        if( !this.state.firstName || !this.state.lastName ) {
            return false;
        } else {
            return true;
        }
    }

    displayErrorMessage() {
        window.alert("Please enter your first and last names!")
    }

    render() {
        return (
        <div>
            <form>
                <input
                    className = "first-name"
                    type =  "text"
                    onChange =  { this.onFirstNameChange }
                    value = {this.state.firstName}
                    placeholder="First Name"></input>
                <input
                    className = "last-name"
                    type =  "text"
                    onChange =  { this.onLastNameChange } 
                    value = {this.state.lastName}
                    placeholder="Last Name"></input>
            </form>
        </div>);
    }
}

export default Name;