import Button from './button/index'
import Dialog from './dialog/index'
import './fonts/font.scss'

const components = [
  Button,
  Dialog
]

const install = function (Vue, options) {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}

export {
  Button,
  Dialog
}

/* export default {
  install,
  Button,
  Dialog
} */
