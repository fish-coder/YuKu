<style lang="less" scoped>
.toolbar {
  .form-toolbar {
    position: relative;
    .input-form {
      width: 300px;
    }
    .add-form {
      position: absolute;
      right: 0;
    }
    .el-form-item {
      margin: 0;
    }
  }
}
</style>

<template>
  <section>
    <el-col
      :span="24"
      class="toolbar"
    >
      <el-form
        :inline="true"
        class="form-toolbar"
      >
        <el-form-item>
          <el-input
            v-model="searchInfo.name"
            placeholder="用户昵称"
            class="input-form"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="getUsersData"
          >查询</el-button>
        </el-form-item>
        <el-form-item class="add-form">
          <el-button
            type="primary"
            @click="handleAdd"
          >新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <el-table
      :data="usersData"
      highlight-current-row
      v-loading="isTableLoading"
      @selection-change="handleSelsChange"
    >
      <el-table-column
        type="selection"
        width="80"
      >
      </el-table-column>
      <el-table-column
        type="index"
        width="80"
      >
      </el-table-column>
      <el-table-column
        prop="id"
        label="用户账号"
        width="180"
        sortable
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户昵称"
        width="180"
        sortable
      >
      </el-table-column>
      <el-table-column
        prop="identity"
        label="用户身份"
        width="180"
        sortable
      >
      </el-table-column>
      <el-table-column
        prop="regDate"
        label="注册日期"
        min-width="180"
        sortable
      >
      </el-table-column>
      <el-table-column
        label="操作"
        width="180"
      >
        <template slot-scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            type="danger"
            size="small"
            @click="handleDel(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-col
      :span="24"
      class="toolbar"
    >
      <el-button
        type="danger"
        @click="batchRemove"
        :disabled="this.sels.length === 0"
      >批量删除</el-button>
      <el-pagination
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :page-size="20"
        :total="total"
        style="float:right;"
      ></el-pagination>
    </el-col>

    <el-dialog
      title="编辑"
      :visible.sync="editVisiable"
      :close-on-click-modal="false"
    >
      <el-form
        :model="editForm"
        label-width="80px"
        :rules="editFormRules"
        ref="editForm"
      >
        <el-form-item
          label="用户账号"
          prop="id"
        >
          <el-input v-model="editForm.id" disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="用户身份">
          <el-input
            v-model="editForm.identity"
            disabled="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="注册日期">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="editForm.regDate"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click.native="editVisiable = false">取 消</el-button>
        <el-button
          type="primary"
          @click.native="editSubmit"
          :loading="isEditLoading"
        >提 交</el-button>
      </div>
    </el-dialog>

    <el-dialog
      title="新增"
      :visible.sync="addVisiable"
      :close-on-click-modal="false"
    >
      <el-form
        :model="addForm"
        label-width="80px"
        :rules="addFormRules"
        ref="addForm"
      >
        <el-form-item
          label="用户账号"
          prop="id"
        >
          <el-input v-model="addForm.id"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="用户身份">
          <el-radio-group
            v-model="addIdentity"
            @change="handleRadioChange"
          >
            <el-radio :label="0">客服人员</el-radio>
            <el-radio :label="1">管理者</el-radio>
            <el-radio :label="2">数据购买方</el-radio>
            <el-radio :label="3">数据提供方</el-radio>
            <el-radio :label="4">游客</el-radio>
            <el-radio :label="5">其他人员</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="注册日期">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="addForm.regDate"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click.native="addVisiable = false">取 消</el-button>
        <el-button
          type="primary"
          @click.native="addSubmit"
          :loading="isAddLoading"
        >提 交</el-button>
      </div>
    </el-dialog>
  </section>
</template>

<script>
import {
  getUserListPage,
  editUserBase,
  removeUser,
  batchRemoveUser,
  addUser
} from '@/api/api'
export default {
  data () {
    return {
      searchInfo: {
        name: ''
      },
      usersData: [],
      isTableLoading: false,
      page: 1,
      total: 0,
      sels: [],
      editVisiable: false,
      editForm: {
        id: 0,
        name: '',
        identity: '',
        regDate: ''
      },
      editFormRules: {},
      isEditLoading: false,
      addVisiable: false,
      addForm: {
        id: '',
        name: '',
        identity: '',
        regDate: ''
      },
      addIdentity: 5,
      addFormRules: {},
      isAddLoading: false
    }
  },
  methods: {
    handleCurrentChange (page) {
      this.page = page
      this.getUsersData()
    },
    handleSelsChange (sels) {
      this.sels = sels
    },
    getUsersData () {
      let params = {
        page: this.page,
        name: this.searchInfo.name
      }
      this.isTableLoading = true
      getUserListPage(params).then(res => {
        this.total = res.data.total
        this.usersData = res.data.users
        this.isTableLoading = false
      })
    },
    handleDel (index, row) {
      this.$confirm('确定删除该用户吗？', '提示', {
        type: 'warning'
      }).then(() => {
        this.isTableLoading = true
        let params = { id: row.id }
        removeUser(params).then(res => {
          this.isTableLoading = false
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.getUsersData()
        })
      })
    },
    handleEdit (index, row) {
      this.editVisiable = true
      this.editForm = Object.assign({}, row)
    },
    handleAdd () {
      this.addVisiable = true
      this.addForm = {
        id: '',
        name: '',
        identity: '',
        regDate: ''
      }
    },
    handleRadioChange (value) {
      switch (value) {
        case 0:
          this.addForm.identity = '客服人员'
          break
        case 1:
          this.addForm.identity = '管理者'
          break
        case 2:
          this.addForm.identity = '数据购买方'
          break
        case 3:
          this.addForm.identity = '数据提供方'
          break
        case 4:
          this.addForm.identity = '游客'
          break
        case 5:
          this.addForm.identity = '其他人员'
          break
      }
    },
    editSubmit () {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.$confirm('确定提交吗', '提示', {}).then(() => {
            this.isEditLoading = true
            let params = Object.assign({}, this.editForm)
            editUserBase(params).then(res => {
              this.isEditLoading = false
              this.$message({
                message: '提交成功',
                type: 'success'
              })
              this.$refs['editForm'].resetFields()
              this.editVisiable = false
              this.getUsersData()
            })
          })
        }
      })
    },
    addSubmit () {
      this.$refs.addForm.validate(valid => {
        if (valid) {
          this.$confirm('确定提交吗', '提示', {}).then(() => {
            this.isAddLoading = true
            let params = Object.assign({}, this.addForm)
            addUser(params).then(res => {
              this.isAddLoading = false
              this.$message({
                message: '提交成功',
                type: 'success'
              })
              this.$refs['addForm'].resetFields()
              this.addVisiable = false
              this.getUsersData()
            })
          })
        }
      })
    },
    batchRemove () {
      let ids = this.sels.map(item => item.id).toString()
      this.$confirm('确定删除选中的用户吗？', '提示', {
        type: 'warning'
      }).then(() => {
        this.isTableLoading = true
        let params = { ids }
        batchRemoveUser(params).then(res => {
          this.isTableLoading = false
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.getUsersData()
        })
      })
    }
  },
  mounted () {
    this.getUsersData()
  }
}
</script>
