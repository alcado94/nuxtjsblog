<template>
  
    <div>
    
        <div class="sequence">
            <div class="seq-preloader">
                <svg width="39" height="16" viewBox="0 0 39 16" xmlns="http://www.w3.org/2000/svg" class="seq-preload-indicator"><g fill="#F96D38"><path class="seq-preload-circle seq-preload-circle-1" d="M3.999 12.012c2.209 0 3.999-1.791 3.999-3.999s-1.79-3.999-3.999-3.999-3.999 1.791-3.999 3.999 1.79 3.999 3.999 3.999z"/><path class="seq-preload-circle seq-preload-circle-2" d="M15.996 13.468c3.018 0 5.465-2.447 5.465-5.466 0-3.018-2.447-5.465-5.465-5.465-3.019 0-5.466 2.447-5.466 5.465 0 3.019 2.447 5.466 5.466 5.466z"/><path class="seq-preload-circle seq-preload-circle-3" d="M31.322 15.334c4.049 0 7.332-3.282 7.332-7.332 0-4.049-3.282-7.332-7.332-7.332s-7.332 3.283-7.332 7.332c0 4.05 3.283 7.332 7.332 7.332z"/></g></svg>
            </div>
        </div>
    
  
        <nav>
            <NuxtLink to="/">
                <div class="logo">
                    <img src="img/logo.png" alt="">
                </div>
            </NuxtLink>
            <NuxtLink to="/">
                <div class="mini-logo">
                    <img src="img/mini_logo.png" alt="">
                </div>
            </NuxtLink>
            <ul>
                <li>
                    <NuxtLink to="/">
                        <em>Inicio</em>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">
                        <em>Sobre nosotros</em>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/posts">
                        <em>Blog</em>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/work">
                        <em>Nuestros trabajos</em>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact">
                        <em>Contacto</em>
                    </NuxtLink>
                </li>
            </ul>
        </nav>

        <div class="slides wrapper" style="background-color:black">
            <Nuxt />
        </div>

        <div class="footer">
            <div class="content">
                <p>Copyright &copy; 2020 Company Name . Template: <a rel="nofollow" href="https://templatemo.com/tm-512-moonlight">Moonlight</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>