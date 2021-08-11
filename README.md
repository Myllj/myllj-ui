# myllj-ui
---...
基于vue-cli3，参考element-ui封装的一个UI组件库


# dialog组件

## 静态结构

```html
<template>
  <div class="llj-dialog__wrapper">
    <div class="llj-dialog">
      <div class="llj-dialog__header">
        <span class="llj-dialog__title">提示</span>
        <button class="llj-dialog__headerbtn">
          <i class="el-icon-close"></i>
        </button>
      </div>
      <div class="llj-dialog__body">
        <span>这是一段信息</span>
      </div>
      <div class="llj-dialog__footer">
        <llj-button>取消</llj-button>
        <llj-button type="primary">确定</llj-button>
      </div>
    </div>
  </div>
</template>

<script>
import lljButton from '../../button/index'
export default {
  name: 'lljDialog',
  components: {
    lljButton
  }
}
</script>

<style lang="scss">
.llj-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);

  .llj-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .llj-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .llj-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .llj-button:first-child {
        margin-right: 20px;
      }
    }
  }
}

</style>

```

## title的处理

```html
<slot name="title">
  <span class="llj-dialog__title">{{title}}</span>
</slot>
```

```js
title: {
  type: String,
  default: ''
}
```

## width属性与top属性

```js
<div class="llj-dialog" :style="{width: width, marginTop: top}">
```

```js
width: {
  type: String,
  default: '50%'
},
top: {
  type: String,
  default: '15vh'
}
```



## 内容插槽的处理

```html
<div class="llj-dialog__body">
  <!-- 默认插槽 -->
  <slot></slot>
</div>
```



## 底部插槽的处理

```html
<div class="llj-dialog__footer" v-if="$slots.footer">
  <slot name="footer"></slot>
</div>
```



## 控制显示和隐藏

```HTML
    <div
      v-show="visible"
      class="el-dialog__wrapper"
      @click.self="handleWrapperClick">
```



点击遮罩层关闭

```js
  <div class="llj-dialog__wrapper" v-show="visible" @click.self="handleClose">
```

点击关闭按钮关闭

```html
 <button class="llj-dialog__headerbtn" @click="handleClose">
```

关闭处理

```html
// 支持sync修饰符
handleClose () {
	this.$emit('update:visible', false)
}
```



## 动画支持

```html
<transition name="dialog-fade" @after-enter="afterEnter" @after-leave="afterLeave"></transition>
```



js

```js
    afterEnter () {
      this.$emit('opened')
    },
    afterLeave () {
      this.$emit('closed')
    }
```



样式

```scss
.dialog-fade-enter-active {
  animation: dialog-fade-in .4s;
}

.dialog-fade-leave-active {
  animation: dialog-fade-out .4s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
```
