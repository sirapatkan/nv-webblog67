import Vue from 'vue'
import Router from 'vue-router'

import UserIndex from '@/components/User/index'
import UserEdit from '@/components/User/EditUser'
import UserCreate from '@/components/User/CreateUser'
import UserShow from '@/components/User/ShowUser'
import Login from '@/components/Login'

import CommentIndex from '@/components/Comments/index' 

import KeyboardIndex from '@/components/keyboards/index'
import KeyboardCreate from '@/components/Keyboards/CreateKeyboard'
import KeyboardShow from '@/components/Keyboards/ShowKeyboard'
import KeyboardEdit from '@/components/Keyboards/EditKeyboard'

import Upload from '@/components/Util/Upload'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/keyboards',
      name: 'keyboards',
      component: KeyboardIndex
    },
    {
      path: '/keyboard/create',
      name: 'keyboard-create',
      component: KeyboardCreate
    },
    {
      path: '/keyboard/edit/:keyboardId',
      name: 'keyboard-edit',
      component: KeyboardEdit
    },
    {
      path: '/keyboard/:keyboardId',
      name: 'keyboard',
      component: KeyboardShow
    },
    {
      path: '/comments',
      name: 'comments',
      component: CommentIndex
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
  ]
})
