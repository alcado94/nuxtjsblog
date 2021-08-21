<template>
    <div :class="sideLeftPost ? 'first-section' : 'second-section'">
        <div class="container-fluid">
            <div class="row" v-if="sideLeftPost">
                <div class="col-md-6">
                    <div class="left-content">
                        <h2>{{post.title}}</h2>
                        <p>{{post.description}}</p>
                        <div class="main-btn">
                            <nuxt-link :to="`/posts/${post.slug}`">
                                Continue Reading
                            </nuxt-link>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="right-image">
                        <img src="img/first_service.jpg" alt="first service">
                    </div>
                </div>
            </div>

            <div class="row" v-if="!sideLeftPost">
                <div class="col-md-6">
                    <div class="left-image">
                        <img src="img/second_service.jpg" alt="second service">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="right-content">
                        <h2>{{post.title}}</h2>
                        <p>{{post.description}}</p>
                        <div class="main-btn">
                            <nuxt-link :to="`/posts/${post.slug}`">
                                Continue Reading
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        index: Number,
        post: Object,
    },
    computed: {
        sideLeftPost() {
            return this.index%2==0;
        }
    }
}
</script>

<style>

</style>