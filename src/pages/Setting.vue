<script setup lang="ts">
import { ElButton, ElForm, ElFormItem, ElMessage, ElPopconfirm, ElRadioButton, ElRadioGroup } from 'element-plus';

const saveSetting = () => {
  ElMessage.success("保存成功");
}

</script>

<template>
  <ElForm label-width="120px">
    <ElFormItem label="设置项">
      <el-input placeholder="请输入内容" />
    </ElFormItem>
    <ElFormItem label="设置项">
      <ElRadioGroup>
        <ElRadioButton label="选项一">选项一</ElRadioButton>
        <ElRadioButton label="选项二">选项二</ElRadioButton>
        <ElRadioButton label="选项三">选项三</ElRadioButton>
      </ElRadioGroup>
    </ElFormItem>
    <ElFormItem>
      <ElPopconfirm title="确认应用吗?" confirm-button-text="确定" cancel-button-text="取消" @confirm="saveSetting">
        <template #reference>
          <ElButton type="primary">
            应用
          </ElButton>
        </template>
      </ElPopconfirm>
    </ElFormItem>
  </ElForm>
</template>