import React from 'react';
import Alert from './Alert';

class AlertMessage extends React.Component {
    render() {
        const messages = this.props.messages.map(message =>
            <Alert key={message.id} message={message} deleteAlertMessage={this.props.deleteAlertMessage} />
        );
        //console.log(this.props.messages)
        return (
            <div>{messages}</div>
        );
    }
}

export default AlertMessage;