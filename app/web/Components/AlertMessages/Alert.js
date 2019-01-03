import React from 'react';
import classnames from 'classnames';

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.deleteAlertMessage(this.props.message.id);
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.deleteAlertMessage(this.props.message.id)
        },3000)
    }

    render() {
        const { id, type, text } = this.props.message;
        return (
            <div className="container mt-5">
                <div 
                    className={classnames('alert', {
                    'alert-success': type === 'success',
                    'alert-danger': type === 'error'
                })}>
                    <button onClick={this.handleClick} className="close"><span>&times;</span></button>
                    {text}
                </div>
            </div>
        
        );
    }
}

export default Alert;