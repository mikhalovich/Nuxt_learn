<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <h1>Add comment</h1>

    <el-form-item label="Name" prop="name">
      <el-input
        v-model.trim="controls.name"
      />
    </el-form-item>

    <el-form-item label="Comment text" prop="text">
      <el-input
        v-model.trim="controls.text"
        type="textarea"
        resize="none"
        :rows="3"
      />
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
        round
      >
        Add comment
      </el-button>
    </el-form-item>

  </el-form>
</template>

<script>
export default {
  data() {
    return {
      controls: {
        name: '',
        text: '',
      },
      rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
        ],
        text: [
          { required: true, message: 'Please input Comment', trigger: 'blur' }
        ],
      }
    };
  },

  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('form is valid');
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
