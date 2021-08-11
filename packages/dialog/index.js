// 导入组件，组件必须声明 name
import Dialog from './src/dialog.vue'
// 为组件提供 install 安装方法，供按需引入

Dialog.install = function (Vue) {
  console.log('sss')
  Vue.component(Dialog.name, Dialog)
}

// 默认导出组件
export default Dialog
