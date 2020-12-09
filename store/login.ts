import axios from 'axios'
import { getCookie, setCookie } from '../helpers/cookies'

// STATE

const state = (): any => ({
  userFound: null
})

// GETTERS

const getters = {
  getUserFound(state): any {
    return state.userFound
  }
}

// MUTATIONS

const mutations = {
  CHANGE_USER_FOUND(state, payload): void {
    state.userFound = payload
  }
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
  // login
  auth({ commit }: any, payload) {
    if (payload.user === 'harryPotter' && payload.password === 'marotos') {
      setCookie('token', '123', 1)
      ;((this as any).$router as any).push('/')
    } else {
      commit('CHANGE_USER_FOUND', true)
    }
  }
}

// export
export default { state, getters, actions, mutations }
