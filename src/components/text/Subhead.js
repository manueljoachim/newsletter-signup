import React from 'react';

import './Subhead.css';

class Subhead extends React.Component {
    render() {
        return (
            <div className="subhead">
                {this.props.label}
            </div>);
    }
}

export default Subhead;