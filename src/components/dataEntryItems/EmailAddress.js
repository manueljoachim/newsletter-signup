import DataEntryItem from './DataEntryItem';

class EmailAdress extends DataEntryItem {
    
    hasValidFormat = () => {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(this.state.fieldValue).toLowerCase());
    }

    displayErrorMessage() {
        window.alert("Please enter a valid email address!")
    }
}

export default EmailAdress;