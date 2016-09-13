import * as ViewActions from './view'
import * as EditActions from './edit'
import constants from '../constants'

export function failed(payload) {
  return {
    type: constants.POSTS__FAILED,
    payload: payload
  }
}

export function inProgress() {
  return {
    type: constants.POSTS__IN_PROGRESS,
  }
}

export default {
  failed,
  inProgress,
  ...ViewActions,
  ...EditActions
}
