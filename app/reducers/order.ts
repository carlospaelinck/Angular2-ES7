import { ActionReducer, Action } from '@ngrx/store'
import { OrderActions } from '../actions/order'

const defaultState = {
  pizzas: [],
  customerName: '',
  status: 'NEW'
}

export const orderReducer: ActionReducer<Object> = (state = defaultState, action: Action) => {

  switch (action.type) {
    case OrderActions.CREATE_NEW_ORDER: {
      return Object.assign({}, defaultState)
    }

    case OrderActions.ADD_TO_ORDER: {
      const pizzas = [ ...state.pizzas, action.payload ]
      return Object.assign({}, state, { pizzas })
    }

    case OrderActions.REMOVE_FROM_ORDER: {
      const pizzas = state.pizzas.filter(pizza => pizza.id !== action.payload.id)
      return Object.assign({}, state, { pizzas })
    }

    case OrderActions.SET_CUSTOMER_NAME: {
      return Object.assign({}, state, { customerName: action.payload })
    }

    case OrderActions.PLACE_ORDER: {
      return Object.assign({}, state, action.payload)
    }

    case OrderActions.PLACE_ORDER_SUCCESS: {
      return Object.assign({}, state, action.payload)
    }

    default: return state
  }
}
