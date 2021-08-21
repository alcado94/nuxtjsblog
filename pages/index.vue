<template>
  <div class="slide" id="1">
    <div class="content first-content">
      <div class="container-fluid">
          <div class="col-md-3">
              <div class="author-image"><img src="img/author_image.png" alt="Author Image"></div>
          </div>
          <div class="col-md-9">
              <h2>Mingalar par</h2>
              <p>Please take a look at <strong><a rel="nofollow" href="https://www.toocss.com">Too CSS</a></strong> to see free template collections for you. Lorem ipsum <em>dolor sit amet</em>, consectetur adipiscing elit. <em>Sed vehicula blandit augue,</em> eu maximus odio tempus vitae.</p>
              <div class="main-btn"><a href="#2">Read More</a></div>
              <div class="fb-btn"><a rel="nofollow" href="https://fb.com/templatemo">Our FB Page</a></div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostItem from '../components/PostItem';

export default {
  components: {
    PostItem
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Post 1'
        },
        {
          id: 2,
          title: 'Post 12'
        },
        {
          id: 3,
          title: 'Post 1'
        },
        {
          id: 4,
          title: 'Post 12'
        }
      ]
    }
  }
}
</script>
