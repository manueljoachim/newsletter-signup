import React from 'react';
import Screen from './Screen';
import Head from '../text/Head';
import Subhead from '../text/Subhead';
import CustomButton from '../customButtom/CustomButton';

import './ActionScreen.css';

class ActionScreen extends Screen {

    constructor( props ) {
        super( props );
        
        //create a ref so we can later invoke validate on the data entry item
        this.dataEntryItemRef = React.createRef();
        
    }

    onButtonClick = evt => {
        let nextPosition = parseInt(this.props.position, 10) + 1;
        const validData = this.dataEntryItemRef.current.validate();
        if( validData ) {
            this.props.onButtonAction( { nextPosition: nextPosition, data: validData } );
        }
    };

    render() {
        let dataEntryItemFound = false;
        this.dataEntryItem = React.Children.map(this.props.children, child => {
            //TODO: this needs to be cleaned up + add a ref for other items (e.g. checkbox in screen 1)
            if( !dataEntryItemFound ) {
                dataEntryItemFound = true;
                return React.cloneElement(child, {
                    ref: this.dataEntryItemRef
                });
            } else {
                return child;
            }
            
            
          });

        const actionButton = this.props.actionLabel ? 
                                <CustomButton onButtonClick={this.onButtonClick} actionLabel={this.props.actionLabel} />
                                : '';

        return(
            <div id={"screen" + this.props.position} className="screen action-screen">
                <Head label={this.props.head} />
                <div className="screen-content">
                    <Subhead label={this.props.subhead} />
                    {this.dataEntryItem}
                    {actionButton}
                </div>
                
                
            </div>
        );
    }
}

export default ActionScreen;