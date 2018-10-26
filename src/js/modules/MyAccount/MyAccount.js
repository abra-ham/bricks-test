import React, { Component } from 'react';
import axios from 'axios';

import endpoints from '../../api';
import config from '../../config';
import { Title, Button } from '../../components';

import { AccountValue, ProfitsPanel, BricksPanel, MyRentsPanel, TransactionsPanel } from './components';
import './style.scss';



class MyAccount extends Component {
  state = {
    myProfits: {},
  }

  async componentDidMount() {
    const { userId } = this.props;
    const url = `${config.BASE_URL}/users/${userId}`;
  
    try {
      const myProfits = await axios.get(`${url}${endpoints['myProfits']}`);
      const myRents = await axios.get(`${url}${endpoints['myRents']}`);
      const myBricks = await axios.get(`${url}${endpoints['myBricks']}`);
      const mySales = await axios.get(`${url}${endpoints['mySales']}`);

      this.setState ({
        myProfits: myProfits.data,
        myRents: myRents.data,
        myBricks: myBricks.data,
        mySales: mySales.data,
      });
    } catch (error) {
      
    }
  }

  render() {
    const { accountValue } = this.props;
    const { myProfits, myRents, myBricks, mySales } = this.state;

    return (
      <section id="my-account" styleName="my-account">
        <Title text="Mi cuenta">
          <Button type="button" style="primary">
            Ver flujo de efectivo
          </Button>
        </Title>
        <AccountValue data={accountValue} />
        <ProfitsPanel data={myProfits} />
        <BricksPanel data={myBricks} />
        <div styleName="panels">
          <MyRentsPanel styleName="my-rents" data={myRents} />
          <TransactionsPanel styleName="transactions" data={mySales} />
        </div>
      </section>
    );
  }
}

export default MyAccount;
