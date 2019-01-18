import React from 'react';
import Head from '../text/Head';
import Subhead from '../text/Subhead';
import Summary from '../text/Summary';

import './Screen.css';


class Screen extends React.Component {

    render() {
        
        return(
            <div id={"screen" + this.props.position} className="screen">
                <Head label={this.props.head} />
                <div className="screen-content">
                    <Subhead label={this.props.subhead} />
                    <Summary label={this.props.summary} />
                </div>
                
            </div>
        );
    }
}

export default Screen;