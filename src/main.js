import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@popperjs/core';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { Popover, Tooltip, Dropdown, Collapse } from 'bootstrap';
import 'bootstrap/js/src/collapse';

const app = createApp(App)

app.use(router)

app.mount('#app')

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
popoverTriggerList.map(function (popoverTriggerEl) {
    return new Popover(popoverTriggerEl)
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
tooltipTriggerList.map(function (tooltipTriggerEl) {
    var placement = tooltipTriggerEl.getAttribute('data-placement')
    return new Tooltip(tooltipTriggerEl, {'placement': placement})
})

var dropdownElementList = [].slice.call(document.querySelectorAll('[data-toggle="dropdown-toggle"]'))
dropdownElementList.map(function (dropdownToggleEl) {
    return new Dropdown(dropdownToggleEl)
})

var collapseTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]'))
collapseTriggerList.map(function (collapseTriggerEl) {
    return new Collapse(collapseTriggerEl)
})
