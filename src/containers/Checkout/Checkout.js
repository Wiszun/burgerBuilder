import React, { Component } from 'react';
import ContactData from './ContactData/ContactData';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

    render () {
      let summary = <Redirect to="/"/>

      if (this.props.ings) {

        summary = (
          <React.Fragment>
            <CheckoutSummary
              checkoutCancelled={this.checkoutCancelledHandler}
              checkoutContinued={this.checkoutContinuedHandler}
              ingredients={this.props.ings}/>
              <Route
                path={this.props.match.url + '/contact-data'}
                component={ContactData} />
          </React.Fragment>

        )
      }
      return (
          <div>
            { summary }
          </div>
      );
    }

};

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  }
}


export default connect(mapStateToProps)(Checkout);
