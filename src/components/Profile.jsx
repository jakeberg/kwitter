import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Image, Item } from 'semantic-ui-react';


class Profile extends React.Component {

  render() {
    const items = [
      {
        childKey: 0,
        image: 'http://aspiretechsoft.com/assets/images/testimonials/user-default.png',
        header: 'Header',
        description: 'Description',
        meta: 'Metadata',
        extra: 'Extra',
      },
      {
        childKey: 1,
        image: 'http://aspiretechsoft.com/assets/images/testimonials/user-default.png',
        header: 'Header',
        description: 'Description',
        meta: 'Metadata',
        extra: 'Extra',
      },
    ]
    return (
      <React.Fragment>
        <div className="ui segment">
          <h3>Profile</h3>
          <Item.Group>
            <Item>
              <Item.Image size='large' src='http://aspiretechsoft.com/assets/images/testimonials/user-default.png' />

              <Item.Content>
                <Item.Header as='a'>Header</Item.Header>
                <Item.Meta>Description</Item.Meta>
                <Item.Description>
                  <Image src='/assets/images/wireframe/short-paragraph.png' />
                </Item.Description>
                <Item.Extra>Additional Details</Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </div>

        <div className="ui segment">
          <h3>Friends</h3>
          <Item.Group items={items} />
        </div>
      </React.Fragment>
    );
  };
};

export default Profile;
