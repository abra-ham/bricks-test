import React from 'react';
import axios from 'axios';

import endpoints from '../../api';
import config from '../../config';
import { Header, SideNav } from './components';
import PrivateRoutes from './PrivateRoutes';
import './style.scss';

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        name: '',
        id: 0
      },
      accountValue: {
        value: 0,
        available: 0
      }
    }

    this.axiosInstance = undefined;
  }
  
  componentDidMount() {
    this.getUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user.id !== this.state.user.id) {
      this.getSideNavInfo();
    }
  }

  getUser = async () => {
    try {
      const response = await axios(`${config.BASE_URL}/users`);
      const [ user ] = response.data;

      this.setState({ user });
    } catch (error) {
      console.log(error)
    } 
  }

  getSideNavInfo = async () => {
    const { user } = this.state;
    const url = `${config.BASE_URL}/users/${user.id}${endpoints['myAccount']}`;

    try {
      const response = await axios.get(url);
      const { data } = response;

      this.setState({ accountValue: data });
    } catch (error) {
      console.log(error)
    } 
  }

  render() {
    const { location: { pathname } } = this.props;
    const { user, accountValue } = this.state;

    return (
      <React.Fragment>
        <section id="main-container" styleName="main">
          <Header userName={user.name} />
          <SideNav pathname={pathname} {...accountValue} />
          <section id="inner-content" styleName="inner-content">
            <PrivateRoutes accountValue={accountValue} userId={user.id} />
          </section>
        </section>
      </React.Fragment>
    )
  }
}

export default Main;
