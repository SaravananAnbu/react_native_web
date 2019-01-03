import React from 'react';
import AlertMessage from '../Containers/AlertMessages/AlertMessage';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="">
                    <AlertMessage/>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;