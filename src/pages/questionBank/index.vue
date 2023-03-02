<template>
  <div>
    <div class="searchForm">
      <el-form
        :inline="true"
        label-width="45px"
        :model="queryForm"
        class="demo-form-inline"
      >
        <el-form-item label="标题">
          <el-input
            v-model="queryForm.title"
            placeholder="请输入题目标题"
          ></el-input>
        </el-form-item>
        <el-form-item label="难度">
          <!-- 这里先写死,后面再改 -->
          <el-select
            v-model="queryForm.difficulty"
            placeholder="请选择难度"
          >
            <el-option
              label="一星"
              :value="1"
            ></el-option>
            <el-option
              label="二星"
              :value="2"
            ></el-option>
            <el-option
              label="三星"
              :value="3"
            ></el-option
            ><el-option
              label="四星"
              :value="4"
            ></el-option
            ><el-option
              label="五星"
              :value="5"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <el-row style="margin-bottom: 10px">
      <el-button
        type="primary"
        size="small"
        @click="add"
        >新增</el-button
      >
      <el-button
        type="success"
        size="small"
        @click="emit"
        >修改</el-button
      >
      <el-button
        type="danger"
        size="small"
        @click="remove"
        >删除</el-button
      >
    </el-row>

    <el-table
      row-key="id"
      :data="tableData"
      stripe
      style="width: 100%"
    >
      <el-table-column
        type="selection"
        width="70"
      >
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
      >
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容"
      >
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
      >
      </el-table-column>
      <el-table-column label="操作">
        <el-button size="small">修改</el-button>
        <el-button
          size="small"
          type="danger"
          >删除</el-button
        >
      </el-table-column>
    </el-table>

    <el-row
      type="flex"
      justify="end"
      style="margin-top: 10px"
    >
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </el-row>

    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="题目名称">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="难度">
          <el-input v-model="form.difficulty"></el-input>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { getQuestList } from "@/api/question";
import { ref, reactive, onMounted } from "vue";
// 弹框
const dialogVisible = ref(false);
// 弹框的标题
const title = ref("");
// 总条数
const total = ref(0);
// 表格数据
const tableData = ref([]);
const queryForm = reactive({
  title: null,
  difficulty: null,
});
const form = reactive({
  title: null,
  difficulty: null,
});

const onSubmit = () => {
  getList(queryForm);
};
const add = () => {
  title.value = "新增菜单";
  dialogVisible.value = true;
};
const emit = () => {
  alert("点了修改按钮");
};
const remove = () => {
  alert("点了删除按钮");
};

const getList = (params?: any) => {
  getQuestList(params).then((res) => {
    total.value = res.data.total;
    tableData.value = res.data.list;
  });
};
const handleEdit = () => {};

onMounted(() => {
  getList();
});
</script>

<style lang="scss" scoped></style>
