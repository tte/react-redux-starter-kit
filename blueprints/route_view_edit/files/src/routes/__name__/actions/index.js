import * as ViewActions from './view'
import * as EditActions from './edit'
import {
  <%= pascalEntityName.toUpperCase() %>__FAILED,
  <%= pascalEntityName.toUpperCase() %>__IN_PROGRESS } from '../constants'

export function failed(payload) {
  return {
    type: <%= pascalEntityName.toUpperCase() %>__FAILED,
    payload: payload
  }
}

export function inProgress() {
  return {
    type: <%= pascalEntityName.toUpperCase() %>__IN_PROGRESS,
  }
}

export default {
  failed,
  inProgress,
  ...ViewActions,
  ...EditActions
}
