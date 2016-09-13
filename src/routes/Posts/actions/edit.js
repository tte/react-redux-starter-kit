import { push } from 'react-router-redux'
import {
  validateResponse,
  handleError,
  isValidateError } from 'helpers/response'
import constants from '../constants'
import BaseActions from 'actions'
import { failed, inProgress } from './index'
import { createRoute } from 'helpers/route'
import { request } from 'helpers/request'


export function initForm(payload) {
  return {
    type: constants.POSTS__INIT_FORM,
    payload: payload
  }
}

export function fetchItem(id, action = fetchItemResponse) {
  return (dispatch, getState) => {
    dispatch(inProgress())
    return request(`${constants.POSTS__FETCH_ITEMS_URL}/${id}`, 'GET')
      .then(validateResponse)
      .then(res => res.json())
      .then(payload => dispatch(action(payload)))
      .catch(handleError)
      .then(json => isValidateError(json) ? dispatch(failed(json)) : false)
  }
}

export function fetchItemResponse(payload) {
  return {
    type: constants.POSTS__FETCH_ITEM_RESPONSE,
    payload
  }
}

export function onTextFieldChange({ name }, value) {
  return BaseActions['onTextFieldChange'](constants.POSTS__FORM_FIELD_CHANGE, name, value)
}

export function onSubmit() {
  return (dispatch, getState) => {
    const { posts: { form } } = getState()
    const { id } = form
    dispatch(inProgress())
    return request(`${constants.POSTS__FETCH_ITEMS_URL}/${id}`, 'PATCH', JSON.stringify(form))
      .then(validateResponse)
      .then(res => res.json())
      .then(payload => dispatch(onSubmitResponse(payload)))
      .catch(handleError)
      .then(json => isValidateError(json) ? dispatch(failed(json)) : false)
  }
}

export function onSubmitResponse(payload) {
  return (dispatch, getState) => {
    dispatch(onUpdateResponse(payload))
    dispatch(push(createRoute('/posts')))
  }
}

export function onUpdateResponse(payload) {
  return {
    type: constants.POSTS__UPDATE_ITEM_RESPONSE,
    payload
  }
}


export default {
  initForm,
  fetchItem,
  fetchItemResponse,
  onTextFieldChange,
  onSubmit,
  onSubmitResponse,
  onUpdateResponse
}
