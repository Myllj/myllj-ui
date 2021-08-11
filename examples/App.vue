<template>
  <div id="app">
    <!-- <test-button></test-button><hr>
    <test-dialog></test-dialog><hr> -->

    <llj-button type="primary">按钮</llj-button><br />
    <llj-button type="success">按钮</llj-button><br>
    <button  @click="fn">dialog</button>

    <llj-dialog title="提示" :visible.sync="dialogVisible">
      <h1>xxx</h1>
    </llj-dialog>
  </div>
</template>

<script>
// import TestButton from './TestButton.vue'
// import TestDialog from './TestDialog.vue'
export default {
  name: 'App',
  components: {
    // TestButton,
    // TestDialog
  },
  data: function () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    fn () {
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="scss"></style>
