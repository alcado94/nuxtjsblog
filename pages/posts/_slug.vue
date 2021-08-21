<template>
    <div class="slides">
        <div class="slide" id="2">
            <div class="content second-content">
                <div class="container-fluid">
                    <div class="col-md-12">
                        <div class="left-content">
                            <h2>{{post.title}}</h2>
                            <p>
                                {{post.description}}
                            </p>
                            <ul>
                                <li
                                v-for="link of post.toc"
                                :key="link.id"
                                :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }"
                                >
                                    <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                                </li>
                            </ul>
                            
                            <nuxt-content :document="post" />
                            
                            <!-- <div class="main-btn"><a href="#3">Read More</a></div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        console.log(params.slug);
        const post = await $content('posts', params.slug).fetch()
        console.log(post);
        return {
            post
        }
    },
    head() {
        return {
            title: this.post.title,
            meta: [
                { hid: 'description', name: 'description', content: this.post.description },
                // Open Graph
                { hid: 'og:title', property: 'og:title', content: this.post.title },
                { hid: 'og:description', property: 'og:description', content: this.post.description },
                // Twitter Card
                { hid: 'twitter:title', name: 'twitter:title', content: this.post.title },
                { hid: 'twitter:description', name: 'twitter:description', content: this.post.description }
            ]
        }
    }
}
</script>

<style>

</style>