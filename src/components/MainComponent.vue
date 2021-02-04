<template>
  <div class="container">
    <div class="panel">
      <div
        ref="revealBox"
        class="reveal"
      >
        <div class="slides">
          <section>Deck 2, Slide 1</section>
          <section>Deck 2, Slide 2</section>
          <section data-markdown>
            {{ markdown }}
          </section>
          <section>
            <h3>The Lorenz Equations</h3>

            \[\begin{aligned}
            \dot{x} &amp; = \sigma(y-x) \\
            \dot{y} &amp; = \rho x - y - xz \\
            \dot{z} &amp; = -\beta z + xy
            \end{aligned} \]
          </section>
        </div>
      </div>
    </div>
    <div class="panel">
      <vue-plyr
        ref="plyr"
        :options="options"
      >
        <video
          controls
          crossorigin
          playsinline
        >
          <source
            size="576"
            src="/spinning-earth.mp4"
            type="video/mp4"
          />
          <a
            download=""
            href="/spinning-earth.mp4"
          >
            Download
          </a>
        </video>
      </vue-plyr>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, inject, onMounted, reactive, ref } from 'vue';

  export default defineComponent( {
    setup () {
      const markers = ref( [
        {
          slide: 0,
          timestamp: 0,
        },
        {
          slide: 1,
          timestamp: 10,
        },
        {
          slide: 2,
          timestamp: 15,
        },
        {
          slide: 3,
          timestamp: 19,
        },
      ] );
      const revealBox = ref( null );
      const plyr = ref( null );
      const Reveal = inject( 'Reveal', null );
      const RevealPlugins = inject( 'RevealPlugins', null );
      const options = reactive( { quality: { default: '1080p' } } );
      const markdown = `
            ## Markdown plugin

        - 1
        - 2
        - 3`;
      onMounted( () => {
        const box = new Reveal( revealBox.value, { plugins: [ RevealPlugins.Markdown, RevealPlugins.RevealMath ] } );
        box.on( 'slidechanged', selSlide => {
          const slide = markers.value.find( marker => marker.slide === selSlide.indexh );
          if ( slide.timestamp !== Math.floor( plyr.value.player.currentTime ) ) {
            plyr.value.player.currentTime = slide.timestamp;
          }
        } );
        box.initialize( { embedded: true } );
        plyr.value.player.on( 'timeupdate', event => {
          const currentSecond = Math.floor( event.detail.plyr.currentTime );
          const slide = markers.value
            .sort( ( m1, m2 ) => m2.timestamp - m1.timestamp )
            .find( marker => {
              return currentSecond >= marker.timestamp;
            } );
          if ( !!slide && slide.slide !== box.getIndices().h ) {
            box.slide( slide.slide );
          }
        } );
      } );
      return { options, revealBox, markdown, markers, plyr };

    }
  } )
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: stretch;
    justify-content: center;
    border: 1px solid black;
    .panel {
      border: 1px solid blue;
      width: 50%;
      padding: 10px;
    }
  }
</style>
