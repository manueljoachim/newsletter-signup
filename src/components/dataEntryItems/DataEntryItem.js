import React from 'react';

import './DataEntryItem.css';

class DataEntryItem extends React.Component {

    constructor( props ) {
        super( props );

        this.initState();
    }
    
    initState() {
        this.state = { fieldValue: ''};
    }

    onFieldChange = evt => {
        this.setState( { fieldValue: evt.target.value } );
    }

    validate = () => {
        if( !this.hasRequired() || !this.hasValidFormat() ) {
            this.displayErrorMessage();
            return false;
        }
        return this.state;
    }

    hasRequired = () => {
        if( !this.state.fieldValue ) {
            return false;
        } else {
            return true;
        }
    }

    hasValidFormat = () => {
        return true;
    }

    displayErrorMessage() {
        window.alert("Please enter a valid value!")
    }

    render() {
        return (
            <form onSubmit={evt => evt.preventDefault()}>
                <input 
                    type =  "text"
                    onChange =  { this.onFieldChange } 
                    value = {this.state.fieldValue}
                    placeholder={ this.props.placeholder}></input>
            </form>
        );
    }
}

export default DataEntryItem;