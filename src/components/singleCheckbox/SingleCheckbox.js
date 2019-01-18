import React from 'react';

import './SingleCheckbox.css';

class SingleCheckbox extends React.Component {

    constructor( props ) {
        super( props );

        this.initState();
    }
    
    initState() {
        this.state = { fieldValue: this.props.isChecked};
    }

    onFieldChange = evt => {
        this.setState( { fieldValue: evt.target.checked } );
    }

    render() {
        return (
            <form className="checkbox-container" onSubmit={evt => evt.preventDefault()}>
                <div>
                    <input
                    type =  "checkbox"
                    onChange =  {this.onFieldChange} 
                    value = {this.state.fieldValue}
                    checked={ this.state.fieldValue}></input>
                </div>
                <label className="checkbox-label">{this.props.label}</label>
            </form>
        );
    }
}

export default SingleCheckbox;