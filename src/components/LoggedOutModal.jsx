import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

class LoggedOutModal extends React.Component {

    render() {
        return (
            <Modal open={this.props.logOut}>
                <Header icon='check' content='Nice!' />
                <Modal.Content>
                    <p>You've successfully logged out.</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' href="/" inverted><Icon name='checkmark' /> Exit application</Button>
                </Modal.Actions>
            </Modal>
        );
    };
};

export default LoggedOutModal;