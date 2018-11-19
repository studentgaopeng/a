import Vue from 'vue'
import Router from 'vue-router'

import VueResource from 'vue-resource'

import IndexPage from '@/views/index'
import DetailPage from '@/views/detail'
import OrderListPage from '@/views/orderList'
import DetailAnaPage from '@/views/detail/analysis'
import DetailCouPage from '@/views/detail/count'
import DetailForPage from '@/views/detail/forecast'
import DetailPubPage from '@/views/detail/publish'

Vue.use(VueResource)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    }
  ]
})
