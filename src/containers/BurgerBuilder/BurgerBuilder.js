import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Auxi/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';

class BurgerBuilder extends Component {

  state = {
    purchasing: false,
  }

  componentDidMount () {
    this.props.onInitIngredients();
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
        .map(igKey => {
          return ingredients[igKey]
        })
        .reduce((sum, el) => {
          return sum + el;
        }, 0);
    return  sum > 0;
  }

  purchaseHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({purchasing: true});
    } else {
      this.props.onSetAuthRedirectPath('/checkout');
      this.props.history.push('/auth');
    }
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
  }

    render () {
      const disabledInfo = {
        ...this.props.ings
      };
      for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
      }
      let orderSummary = null;

      let burger = this.props.error ? <p>Ingredients cannot be loaded</p> : <Spinner />;

      if(this.props.ings) {
        burger = (
          <React.Fragment>
            <Burger
              removed={this.removeIngredientHandler}
              ingredients={this.props.ings} />
            <BuildControls
              ordered={this.purchaseHandler}
              price={this.props.price}
              disabled={disabledInfo}
              purchasable={this.updatePurchaseState(this.props.ings)}
              ingredientRemoved={this.props.onIngredientRemoved}
              ingredientAdded={this.props.onIngredientAdded}
              isAuth={this.props.isAuthenticated}
              />
          </React.Fragment>
        );
        orderSummary = <OrderSummary
                    price={this.props.price}
                    purchaseContinued={this.purchaseContinueHandler}
                    purchaseCanceled={this.purchaseCancelHandler}
                    ingredients={this.props.ings}/>;
      }

      return (
          <Aux>
            <Modal
              modalClosed={this.purchaseCancelHandler}
              show={this.state.purchasing}>
              {orderSummary}
            </Modal>
              {burger}
          </Aux>
      );
    }
};

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token !== null,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
