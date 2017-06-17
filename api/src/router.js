import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import LoginComponent from './modules/login/LoginComponent'
import indexComponent from './modules/index/indexComponent'
import AddComponent from './modules/picture/AddComponent'
import welcomeComponent from './modules/index/welcomeComponent'
import productComponent from './modules/index/productComponent'
// <Route path="index" component={indexComponent} />
export default (
    <Route path="/" component={AppComponent}>
        <Route path="login" component={LoginComponent} />
        <Route path="index" component={indexComponent} >
            <Route path="welcome" component={welcomeComponent} />
            <Route path="product" component={productComponent} />
        </Route>
        <Route path="add" component={AddComponent} />
    </Route>
)