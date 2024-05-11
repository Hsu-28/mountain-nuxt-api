<script setup lang="ts">
const route = useRoute();
const id = route.params.id;

console.log(id)
</script>

<template>

<!-- {{ id }} -->
  <section class="main-intro">
    <h3>玉山主峰</h3>
    <div class="content">
        <div class="content-img"><img src="/assets/images/img0.jpg" alt=""></div>
        <div class="content-p">
            <div class="titles">
                <div class="title">別名</div>
                <div>新高山∕摩里遜山</div>
            </div>
            <div class="titles">
                <div class="title">標高</div>
                <div>3952公尺</div>
            </div>
            <div class="titles">
                <div class="title">所在縣市</div>
                <div>南投縣信義鄉,嘉義縣阿里山鄉,高雄市桃源區</div>
            </div>
            <div class="titles">
                <div class="title">申請入山</div>
                <div> 要 </div>
            </div>
        </div>
    </div>
    <div class="info">
        <p>玉山主峰位於台灣的中心位置，海拔3952公尺，為台灣群山之首，百岳排名第一，也是東北亞的最高峰。主峰四周有東、南、西、北峰環繞，外圍還有前峰、小南山、南玉山、東小南山、鹿山與北北峰遙相呼應，宛如眾星拱月般，襯托出主峰的王者之尊，壯偉雄奇的山容、絕佳的展望和絢麗的日出景觀，吸引了無數的中外登山客前來攀登，近年來更成為台灣人一生必須完成的三件事之一。</p>
    </div>
  </section>


  <h2 class="weather-map-h">  天氣與地圖 </h2>
  <div class="item-container">
      <div class="weather-item">天氣 &nbsp;&nbsp; <font-awesome-icon icon="cloud" style="color: #eee;" /> </div>
      <div class="map-item">地圖 &nbsp;&nbsp; <font-awesome-icon icon="map" style="color: #eee;" /></div>
  </div>
  <section class="weather-map-container">

    <div class="weather-map">
        <!-- <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14638.942302882313!2d120.94695816208493!3d23.470000744358188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346f210e420ba6d1%3A0x83cb1aa521840d7e!2z546J5bGx!5e0!3m2!1szh-TW!2stw!4v1714925890518!5m2!1szh-TW!2stw" width="100%" height="400px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> -->
        <div class="weather">
            <div class="today-weather">
                <div>
                    <h5>今日</h5>
                    <img src="C:\Users\svm3g\Documents\mountain-nuxt-api\mountain\assets\images\cloud.svg" alt="">
                    <p>多雲</p>
                </div>
                <div>
                    <h5><b>11</b> °C </h5>
                    <p>溫度區間: 23至32度</p>
                    <p>天氣狀態: 舒適至悶熱</p>
                    
                    <p>紫外線指數: 9 過量</p>
                </div>

            </div>
            <div class="other-weather">
                <div>05/07</div>
                <div>舒適至悶熱</div>
                <div>
                    <img src="C:\Users\svm3g\Documents\mountain-nuxt-api\mountain\assets\images\cloud.svg" alt="">
                </div>
                <div>23至32度</div>

            </div>
            <div class="other-weather">
                <div>05/07</div>
                <div>舒適至悶熱</div>
                <div>
                    <img src="C:\Users\svm3g\Documents\mountain-nuxt-api\mountain\assets\images\cloud.svg" alt="">
                </div>
                <div>23至32度</div>

            </div>
            <div class="other-weather">
                <div>05/07</div>
                <div>舒適至悶熱</div>
                <div>
                    <img src="C:\Users\svm3g\Documents\mountain-nuxt-api\mountain\assets\images\cloud.svg" alt="">
                </div>
                <div>23至32度</div>

            </div>
            <div class="other-weather">
                <div>05/07</div>
                <div>舒適至悶熱</div>
                <div>
                    <img src="C:\Users\svm3g\Documents\mountain-nuxt-api\mountain\assets\images\cloud.svg" alt="">
                </div>
                <div>23至32度</div>

            </div>
            <div class="other-weather">
                <div>05/07</div>
                <div>舒適至悶熱</div>
                <div>
                    <img src="C:\Users\svm3g\Documents\mountain-nuxt-api\mountain\assets\images\cloud.svg" alt="">
                </div>
                <div>23至32度</div>

            </div>
            
        </div>
    </div>

  </section>



  <h2 class="weather-map-h">  山點推薦 </h2>

</template>

<style>
@import url('assets/css/mountains.css');
</style>
