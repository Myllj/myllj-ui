<template>
  <div>
    <llj-button @click="dialogVisible = true">显示对话框</llj-button>
    <llj-dialog
      width="30%"
      top="200px"
      title="提示"
      :visible.sync="dialogVisible"
      @opened="open"
      @closed="close"
    >
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <llj-button @click="dialogVisible = false">取 消</llj-button>
        <llj-button type="primary" @click="dialogVisible = false"
          >确 定</llj-button
        >
      </template>
    </llj-dialog>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      dialogVisible: false
    }
  },
  components: {},
  methods: {
    open () {
      console.log('对话框显示了')
    },
    close () {
      console.log('对话框关闭了')
    }
  }
}
</script>

<style scoped></style>
