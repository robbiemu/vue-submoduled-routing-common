import HelloWorld from '@common/components/HelloWorld'

Vue.use(Router)

export default const common = {
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
}
