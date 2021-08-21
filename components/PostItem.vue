<template>
    <div :class="sideLeftPost ? 'first-section' : 'second-section'">
        <div class="container-fluid">
            <div class="row" v-if="sideLeftPost">
                <div class="col-md-6">
                    <div class="left-content">
                        <h2>{{post.title}}</h2>
                        <p>Vestibulum augue ex, finibus sit amet nisi id, maximus ultrices ipsum. Maecenas rhoncus nibh in mauris lobortis, a maximus diam faucibus. In et eros urna. Suspendisse potenti. Pellentesque commodo, neque nec molestie tempus, purus ante feugiat augue.</p>
                        <div class="main-btn">
                            <nuxt-link :to="`/posts/${post.id}`">
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
                        <p>Sed vitae felis in lorem mollis mollis eget in leo. Donec commodo, ex nec rutrum venenatis, nisi nisl malesuada magna, sed semper ipsum enim a ipsum. Aenean in ante vel mi molestie bibendum. Quisque sit amet lacus in diam pretium faucibus. Cras vel justo lorem.</p>
                        <div class="main-btn">
                            <nuxt-link :to="`/posts/${post.id}`">
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