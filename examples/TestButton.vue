<template>
    <div>
        <div class="row">
        <llj-button @click="fn">按钮</llj-button>
        <llj-button disabled @click="fn" type="primary">按钮</llj-button>
        <llj-button type="success">按钮</llj-button>
        <llj-button type="info">按钮</llj-button>
        <llj-button type="warning">按钮</llj-button>
        <llj-button type="danger">按钮</llj-button>
        </div>
        <div class="row">
        <llj-button plain>按钮</llj-button>
        <llj-button plain type="primary">按钮</llj-button>
        <llj-button plain type="success">按钮</llj-button>
        <llj-button plain type="info">按钮</llj-button>
        <llj-button plain type="warning">按钮</llj-button>
        <llj-button plain type="danger">按钮</llj-button>
        </div>
        <div class="row">
        <llj-button round plain>按钮</llj-button>
        <llj-button round plain type="primary">按钮</llj-button>
        <llj-button round plain type="success">按钮</llj-button>
        <llj-button round plain type="info">按钮</llj-button>
        <llj-button round plain type="warning">按钮</llj-button>
        <llj-button round plain type="danger">按钮</llj-button>
        </div>
        <div class="row">
        <llj-button icon="el-icon-check" circle plain>按钮</llj-button>
        <llj-button icon="el-icon-check" circle plain type="primary">按钮</llj-button>
        <llj-button icon="el-icon-check" circle plain type="success">按钮</llj-button>
        <llj-button icon="el-icon-check" circle plain type="info">按钮</llj-button>
        <llj-button icon="el-icon-check" circle plain type="warning">按钮</llj-button>
        <llj-button icon="el-icon-check" circle plain type="danger">按钮</llj-button>
        </div>
        <div class="row">
        <llj-button icon="el-icon-delete" circle plain></llj-button>
        <llj-button icon="el-icon-delete" circle plain type="primary"></llj-button>
        <llj-button icon="el-icon-delete" circle plain type="success"></llj-button>
        <llj-button icon="el-icon-delete" circle plain type="info"></llj-button>
        <llj-button icon="el-icon-delete" circle plain type="warning"></llj-button>
        <llj-button icon="el-icon-delete" circle plain type="danger"></llj-button>

        <hr>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    fn (val) {
      console.log(123)
    }
  }
}
</script>

<style scoped lang='scss'>
.row {
  margin-bottom: 10px;
  .llj-button {
  margin-right: 10px!important;
}
}
</style>
