<template>

    <div class="slide" id="3">
        <div class="content third-content">
            <div class="container-fluid">
                <div class="col-md-12">
                    <div class="row">
                        <PostItem :index="index" :post="post" v-for="(post, index) in posts" :key="post.id" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostItem from '../../components/PostItem';

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

<style>

</style>