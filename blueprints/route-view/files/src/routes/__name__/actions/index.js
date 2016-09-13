import * as ViewActions from './view'
import * as EditActions from './edit'
import constants from '../constants'

export function failed(payload) {
  return {
    type: constants.<%= pascalEntityName.toUpperCase() %>__FAILED,
    payload: payload
  }
}

export function inProgress() {
  return {
    type: constants.<%= pascalEntityName.toUpperCase() %>__IN_PROGRESS,
  }
}

export default {
  failed,
  inProgress,
  ...ViewActions,
  ...EditActions
}
