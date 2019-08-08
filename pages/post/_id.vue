<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-info">
      <small>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </small>
      <small>
        <i class="el-icon-view"></i>
        42
      </small>
      </div>
      <div class="post-image">
        <img
          src="https://g2.delphi.lv/images/pix/676x385/oGc34ft8X28/minsk-47394187.jpg"
          alt="post image"
        >
      </div>
    </header>
    <main class="post-content">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur corrupti, id eligendi labore necessitatibus neque. Veniam voluptatibus doloremque perspiciatis libero ad officia velit eveniet adipisci omnis hic, nihil quos, accusamus delectus cumque illo veritatis, dolorum dolor saepe alias cupiditate fugit. Molestias accusantium accusamus alias natus id ratione rerum, sit sapiente quidem! Officiis repellat ad corrupti a nobis est numquam cumque veniam commodi voluptate sit illum, beatae aut temporibus quisquam? Provident eum eaque laborum sed, distinctio maiores dolorem error saepe fugiat excepturi nostrum bea</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur corrupti, id eligendi labore necessitatibus neque. Veniam voluptatibus doloremque perspiciatis libero ad officia velit eveniet adipisci omnis hic, nihil quos, accusamus delectus cumque illo veritatis, dolorum dolor saepe alias cupiditate fugit. Molestias accusantium accusamus alias natus id ratione rerum, sit sapiente quidem! Officiis repellat ad corrupti a nobis est numquam cumque veniam commodi voluptate sit illum, beatae aut temporibus quisquam? Provident eum eaque laborum sed, distinctio maiores dolorem error</p>
    </main>
    <footer>
      <app-comment-form
        v-if="canAddComment"
        @created="createCommentHandler"
      />

      <div class="comments" v-if="true">
        <app-comment
          v-for="comment in 4"
          :key="comment"
          :comment="comment"
        />
      </div>
      <div class="text-center" v-else>
        No comments
      </div>
    </footer>
  </article>
</template>

<script>
import AppComment from '@/components/main/Comment';
import AppCommentForm from '@/components/main/CommentForm';

export default {
  validate({ params }) {
    return Boolean(params.id);
  },

  components: {
    AppComment,
    AppCommentForm,
  },

  data() {
    return {
      canAddComment: true,
    };
  },

  methods: {
    createCommentHandler() {
      this.canAddComment = false;
    },
  },
}
</script>

<style lang="scss" scoped>
  .post {
    max-width: 640px;
    margin: 0 auto;
  }

  .post-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .post-image img {
    width: 100%;
    height: auto;
  }

  .post-header {
    margin-bottom: 1.5rem;
  }

  .post-content {
    margin-bottom: 2rem;
  }
</style>

