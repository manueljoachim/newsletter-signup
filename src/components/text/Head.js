import React from 'react';

import './Head.css';

class Head extends React.Component {
    render() {
        return (
            <div className="head">
                {this.props.label}
            </div>);
    }
}

export default Head;