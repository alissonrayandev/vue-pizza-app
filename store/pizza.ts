import axios from 'axios'
import { getCookie, setCookie } from '../helpers/cookies'
import borderData from '../mock/borderData'
import pizzaData from '../mock/pizzaData'
import drinksData from '../mock/drinksData'

// STATE

const state = (): any => ({
  points: 0,
  options: {
    pizza: null,
    border: null,
    drink: null
  },
  data: {
    pizza: null,
    border: null,
    drink: null
  }
})

// GETTERS

const getters = {
  // points
  allPoints(state): any {
    return state.points
  },
  // all values
  allData(state): any {
    return state.data
  },
  allOptions(state): any {
    return state.options
  },
  // options
  bordersOptionsData(state): any {
    return state.options.border
  },
  pizzasOptionsData(state): any {
    return state.options.pizza
  },
  drinksOptionsData(state): any {
    return state.options.drink
  },

  // data
  borderData(state): any {
    return state.data.border
  },
  pizzaData(state): any {
    return state.data.pizza
  },
  drinkData(state): any {
    return state.data.drink
  }
}

// MUTATIONS

const mutations = {
  // options
  GET_BORDER_OPTIONS(state): void {
    state.options.border = borderData
  },
  GET_PIZZA_OPTIONS(state): void {
    state.options.pizza = pizzaData
  },
  GET_DRINKS_OPTIONS(state): void {
    state.options.drink = drinksData
  },

  // UPDATE
  UPDATE_BORDER(state, payload): void {
    state.data.border = payload
  },
  UPDATE_PIZZA(state, payload): void {
    state.data.pizza = payload
  },
  UPDATE_DRINK(state, payload): void {
    state.data.drink = payload
  },

  // POINTS
  ADD_POINTS(state, _): void {
    state.points = state.points + 10
  },
}

// ACTIONS

const actions = {
  // check existent user
  checkPrevious(_: any) {
    const cookie = getCookie('token')

    if(cookie !== '123') {
      ;((this as any).$router as any).push('/login')
    }
  },
  // get border
  getBorderOptions({ commit }: any) {
    commit('GET_BORDER_OPTIONS')
  },
  // get pizza
  getPizzaOptions({ commit }: any) {
    commit('GET_PIZZA_OPTIONS')
  },
  // get drink
  getDrinkOptions({ commit }: any) {
    commit('GET_DRINKS_OPTIONS')
  },

  // update border
  updateBorder({ commit }, payload) {
    commit('UPDATE_BORDER', payload)
  },

  updatePizza({ commit }, payload) {
    commit('UPDATE_PIZZA', payload)
  },

  updateDrink({ commit }, payload) {
    commit('UPDATE_DRINK', payload)
  },

  // add points

  addPoints({ commit }) {
    commit('ADD_POINTS')
  }
}

// export
export default { state, getters, actions, mutations }
