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
        v-model="controls.name"
      />
    </el-form-item>

    <el-form-item label="Comment text" prop="text">
      <el-input
        v-model="controls.text"
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
        :loading="loading"
      >
        Add comment
      </el-button>
    </el-form-item>

  </el-form>
</template>

<script>
export default {
  props: {
    postId: {
      type: String,
      reqiured: true,
    },
  },

  data() {
    return {
      loading: false,
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
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;

          const formData = {
            name: this.controls.name,
            text: this.controls.text,
            postId: this.postId,
          }

          try {
            const newComment = await this.$store.dispatch('comment/create', formData);

            this.$message.success('Comment added');
            this.$emit('created', newComment);
          } catch (e) {
            this.loading = false;
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
