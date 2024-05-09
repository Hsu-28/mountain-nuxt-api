<script>
 export default {
    head: {
      script: [
        {
          src: 'https://kit.fontawesome.com/8bfd57d05d.js'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto'
        }
      ]
    }
  }

</script>


<template>


    
  <div>
    <nav>
        <div>
            <a href="/" class="logo">
                <h1>
                    百岳縱走 <font-awesome-icon icon="mountain" />
                </h1>
                <h2>
                    Trekking the Hundred Peaks
                </h2>
            </a>
            <div>
                <span>
                    <a href="">
                        山岳報告亭
                    </a>
                </span>
                <span> 
                    <a href="">
                        <font-awesome-icon :icon="['fas', 'user']" />
                    </a>
                </span>
            </div>

        </div>
    </nav>

   
  </div>

<div id="app">
  <NuxtPage />
</div>


  <footer>
        <div>
            <div>百岳縱走<i class="fa-solid fa-mountain"></i></div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>COPYRIGHT © 2024 百岳縱走</div>
        </div>

    </footer>
</template>

<style>
@import url('assets/css/reset.css');
@import url('assets/css/index.css');
</style>
