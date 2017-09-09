import axios from 'axios'
import {AsyncStorage} from 'react-native'


export function fetchJWT(userData){
  //returns promise which is passed into payload
  var FormData = require('form-data');
  var form = new FormData();
  form.append('username', userData.username)
  form.append('password', userData.password)
  let request = axios({
  	method: 'post',
  	url: 'http://localhost:3000/api/v1/login',
  	data: form
  })
  return {
    type: 'INITIAL_API_HIT',
    payload: request
  }
}

export function editUser(userData){
  var FormData = require('form-data');
  var form = new FormData();
  form.append('user[username]', userData.username)
  form.append('user[password]', userData.password)
  form.append('user[email]', userData.email)
  form.append('user[profile_image_url]', userData.profileImage)
  form.append('user[app_goal]', userData.dailyGoal)
  let request = axios({
    method: 'put',
    url: `https://seeker-api.herokuapp.com/api/v1/users/${userData.id}`,
    data: form
  })
  return {
    type: 'EDIT_USER',
    payload: request
  }
}


export function createNewUser(userData){
  var FormData = require('form-data');
  var form = new FormData();
  form.append('user[username]', userData.username)
  form.append('user[password]', userData.password)
  form.append('user[email]', userData.email)
  form.append('user[profile_image_url]', userData.profileImage)
  form.append('user[sapp_goal]', userData.dailyGoal)
  let request = axios({
    method: 'post',
    url: 'https://seeker-api.herokuapp.com/api/v1/users',
    data: form
  })
  return {
    type: 'CREATE_NEW_USER',
    payload: request
  }
}

export function fetchUserData(jwt){
  console.log('Hit fetchUserData')
  let url = 'https://seeker-api.herokuapp.com/api/v1/users/1234567'

  let request = axios({
  	method: 'get',
  	url: url,
  	headers: {'id': jwt}
  })
  return {
    type: 'GET_USER_DATA',
    payload: request
  }
}
