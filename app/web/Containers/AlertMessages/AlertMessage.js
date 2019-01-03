import { connect } from 'react-redux';
import AlertMessageComponent from '../../Components/AlertMessages/AlertMessage';
import {  deleteAlertMessage } from '../../../actions/AlertMessages'

const mapStateToProps = (state) => {
    return {
        messages: state.AlertMessages
    }
}

const AlertMessage = connect(
    mapStateToProps,
     {deleteAlertMessage}
)(AlertMessageComponent)

export default AlertMessage;