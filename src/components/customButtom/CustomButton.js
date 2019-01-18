import React from 'react';

import './CustomButton.css';

class CustomButton extends React.Component {
    render() {
        return (
            <button className="custom-button" onClick={this.props.onButtonClick}>
                {this.props.actionLabel}
            </button>
            );
    }
}

export default CustomButton;