<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  toPage: {
    type: String
  }
})

const toRoute = () => {
  const page = props.toPage;
  if (page == undefined) {
    return;
  }
  router.push(page).then(() => {
    console.log('跳转成功[' + page + ']')
  }).catch((err) => {
    console.error('跳转失败[' + page + '],err:[' + err + ']')
  })
}

</script>

<template>
  <div class="menu-button">
    <div class="context" @click="toRoute">
      <ElButton link class="butt">
        <ElIcon color="#fff" size="20px">
          <slot>
            <i-ep-menu />
          </slot>
        </ElIcon>
      </ElButton>
      <ElRow justify="center">
        <ElText size="small" class="txt">
          {{ text }}
        </ElText>
      </ElRow>
    </div>
  </div>
</template>

<style scoped>
.menu-button {
  margin: 0 auto;
  padding: 5px 0;
  display: flex;
  justify-content: space-around;
}

.menu-button .context {
  height: 49px;
  width: 49px;
  padding: 5px;
}

.menu-button .context:hover {
  background-color: #6a6a6a70 !important;
  border-radius: 10px;
}

.txt {
  margin-top: 3px;
  height: 20px;
  --el-text-color-regular: #fff;
}
</style>