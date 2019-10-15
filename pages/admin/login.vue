<template>
  <el-card
    shadow="always"
    :style="{width: '500px'}"
  >
    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <h2>Login to admin panel</h2>

      <el-form-item label="Login" prop="login">
        <el-input v-model.trim="controls.login" />
      </el-form-item>

      <el-form-item label="Password" prop="password" class="mb2">
        <el-input v-model.trim="controls.password" type="password"/>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          round
          :loading="loading"
        >
          Login
        </el-button>
      </el-form-item>

    </el-form>
  </el-card>
</template>

<script>
export default {
  layout: 'empty',
  head: {
    title: `Login to admin page | ${process.env.appName}`
  },

  data() {
    return {
      loading: false,
      controls: {
        login: '',
        password: '',
      },
      rules: {
        login: [
          { required: true, message: 'Please input login', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Please input password', trigger: 'blur' },
          { min: 6, message: 'Password should be more than 6 symbols', trigger: 'blur' }
        ],
      }
    }
  },

  mounted() {
    const { message } = this.$route.query;

    switch (message) {
      case 'login':
        this.$message.info('Log in first');
        break;
      case 'logout':
        this.$message.success('You are logged out');
        break;
      case 'session':
        this.$message.warning('Session timed out, please log in again');
        break;
    }

    if (message === 'login') {

    }
  },

  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;

          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password
            }

            await this.$store.dispatch('auth/login', formData);
            this.$router.push('/admin');
          } catch (e) {
            this.loading = false;
          }
        }
      })
    },
  },
}
</script>
