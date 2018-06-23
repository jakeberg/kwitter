import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

class LoggedInModal extends React.Component {

    render() {
        return (

            <Modal open={this.props.loggedIn}>
                <Header icon='check' content='Nice!' />
                <Modal.Content>
                    <p>You've successfully logged in!</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' href="/main" inverted><Icon name='checkmark' /> Go to your page.</Button>
                </Modal.Actions>
            </Modal>

        );
    };
};

export default LoggedInModal;