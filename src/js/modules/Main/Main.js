import React from 'react';
import axios from 'axios';

import endpoints from '../../api';
import { Footer } from '../../components';
import { Header, SideNav } from './components';
import PrivateRoutes from './PrivateRoutes';
import './style.scss';

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null
    }
  }
  
  componentDidMount() {
    // this.getUser();
  }

  getUser = async () => {
    const endpoint = endpoints()['users'];
    const users = await axios(endpoint);

    this.setSate({ user });
  }

  render() {
    const { location: { pathname } } = this.props;

    return (
      <React.Fragment>
      <section id="main-container" styleName="main">
        <Header />
        <SideNav pathname={pathname} scrollHeight={this.state.scrollHeight} />
        <section id="inner-content" styleName="inner-content">
          <PrivateRoutes  />
        </section>
        
      </section>
      <Footer />
      </React.Fragment>
    )
  }
}

export default Main;
