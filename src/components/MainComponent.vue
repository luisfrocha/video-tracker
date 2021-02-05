<template>
  <div class="container">
    <div
      v-show="slideshow"
      class="panel"
    >
      <div class="reveal-viewport theme-font-opensans">
        <div
          ref="revealBox"
          class="reveal"
        >
          <div class="slides">
            <section
              v-for="slide in slides"
              :key="slide.id"
              :data-id="slide.id"
              v-html="slide.content"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="panel">
      <vue-plyr
        v-if="videoUrl"
        ref="plyr"
        :options="options"
      >
        <div class="plyr__video-embed">
          <iframe
            :src="videoUrl"
            allowfullscreen
            allowtransparency
            allow="autoplay"
          />
        </div>
      </vue-plyr>
      <div v-else>
        <input
          type="text"
          v-model="videoUrlTemp"
          placeholder="Please paste a YouTube video URL"
          style="width: 100%;"
        />
        <button @click="setVideoId">Set Video</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { computed, defineComponent, inject, nextTick, reactive, ref, toRefs } from 'vue';

  export default defineComponent( {
    setup () {
      const state = reactive( {
        slides: [
          {
            id: '46c8e2f5bd4165bfd4ad0879750c66e6',
            slide: 0,
            timestamp: 0,
            content: `<div class="sl-block" data-block-type="text" style="width: 806px; left: 237px; top: 248px;  height: auto;" data-block-id="8d4a5ed2fe741941d50ad457bdabc185">
                <div
                  class="sl-block-content"
                  data-placeholder-tag="h1"
                  data-placeholder-text="Title Text"
                  style="z-index: 10;"
                >
                  <h1>Unconventional Vue</h1>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="text"
                data-name="text-1ef11e"
                data-block-id="ebd77c546bbf64b721681e3c4a54df28"
                style="height: auto; width: 600px; left: 340px; top: 360px;"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="p"
                  data-placeholder-text="Text"
                  style="z-index: 11;"
                >
                  <p>Vue as a Backend Framework</p>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="text"
                data-name="text-595e12"
                data-block-id="c6d53bca59b46adbe045cef4e90b5ec7"
                style="height: auto; width: 190px; left: 1040px; top: 638px;"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="p"
                  data-placeholder-text="Text"
                  style="z-index: 13;"
                >
                  <p>@oscar_spen</p>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="image"
                style="width: 40.5932px; height: 33px; left: 993.407px; top: 642px; min-width: 1px; min-height: 1px;"
                data-name="image-8cc7a9"
                data-block-id="32a5dbd2268b88e3db867f0f52ce3d3c"
              >
                <div
                  class="sl-block-content"
                  style="z-index: 14;"
                ><img
                    data-natural-width="1267"
                    data-natural-height="1030"
                    style=""
                    data-lazy-loaded=""
                    data-src="https://s3.amazonaws.com/media-p.slid.es/uploads/1097137/images/7133061/twitter-png-5964.png"
                  ></div>
              </div>`,
          },
          {
            id: 'c0d6c383db9a35dcc66074445236ba9b',
            slide: 1,
            timestamp: 15,
            content: `<div
                class="sl-block"
                data-block-type="text"
                style="width: 718px; left: 64px; top: 75px; height: auto;"
                data-block-id="fe6b0dc9db336a27338d319b966374b8"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="h2"
                  data-placeholder-text="Title Text"
                  style="text-align: left; z-index: 10;"
                >
                  <h2>Observability in Vue 2.x</h2>
                </div>
              </div>

              <div
                class="sl-block"
                data-block-type="code"
                data-name="code-953697"
                data-block-id="6f3368813b20567f8dfedee0e80e9413"
                style="width: 407px; height: 300px; left: 64px; top: 243px;"
              >
                <div
                  class="sl-block-content notranslate"
                  data-highlight-theme="monokai"
                  data-code-frame="none"
                  style="z-index: 11; font-size: 200%;"
                >
                  <pre class="javascript"><code data-line-numbers="">new Vue({
    data() {
      return {
        foo: 'Vue'
      }
    }
  })</code></pre>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="code"
                data-name="code-1fed1a"
                data-block-id="8918345097fae2dc727e28a58584f597"
                style="width: 702px; height: 435px; left: 513px; top: 192px;"
              >
                <div
                  class="sl-block-content notranslate"
                  data-highlight-theme="monokai"
                  data-code-frame="none"
                  style="z-index: 12; font-size: 150%;"
                >
                  <pre class="javascript"><code data-line-numbers="">// internally, something like this happens

  for (let key in Object.keys(data)) {
    Object.defineProperty(this, key, {
      get() {
        addWatcherDependency(key)
        return data[key]
      },
      set(value) {
        markDirty(key)
        data[key] = value
      }
    })
  }</code></pre>
                </div>
              </div>`,
          },
          {
            id: 'a926cd5ae279ed3c7a7d6db5a5e545d3',
            slide: 2,
            timestamp: 110,
            content: `<div
                class="sl-block"
                data-block-type="text"
                style="width: 718px; left: 64px; top: 30px; height: auto;"
                data-block-id="03ede54688f80151dfa6cabb12548310"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="h2"
                  data-placeholder-text="Title Text"
                  style="text-align: left; z-index: 10;"
                >
                  <h2>Observability in Vue 2.x</h2>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="image"
                data-name="image-fef6ba"
                style="width: 743.2px; height: 464.5px; left: 268.4px; top: 144px; min-width: 1px; min-height: 1px;"
                data-block-id="20d3dfd673bd5bf5b2dd32cf7e52d1c7"
              >
                <div
                  class="sl-block-content"
                  style="z-index: 11;"
                ><img
                    data-natural-width="1200"
                    data-natural-height="750"
                    style=""
                    data-lazy-loaded=""
                    data-src="https://s3.amazonaws.com/media-p.slid.es/uploads/1097137/images/7128940/pasted-from-clipboard.png"
                  ></div>
              </div>
              <div
                class="sl-block"
                data-block-type="text"
                data-name="text-5d25e4"
                style="height: auto; width: 600px; left: 660px; top: 657.5px;"
                data-block-id="97d83f6799d1fd5c3e956b50f7295dfb"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="p"
                  data-placeholder-text="Text"
                  style="z-index: 12;"
                >
                  <p><a
                      href="https://vuejs.org/v2/guide/reactivity.html"
                      target="_blank"
                    >https://vuejs.org/v2/guide/reactivity.html</a></p>
                </div>
              </div>`,
          },
          {
            id: '53cd361011ed502c4f8b4bf60b62b734',
            slide: 3,
            timestamp: 138,
            content: `<div
                class="sl-block"
                data-block-type="text"
                style="width: 718px; left: 64px; top: 72px; height: auto;"
                data-block-id="f53e253dbef4f564c7285c5451d82c63"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="h2"
                  data-placeholder-text="Title Text"
                  style="text-align: left; z-index: 10;"
                >
                  <h2>A Simple Example</h2>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="iframe"
                data-name="iframe-66acf2"
                style="width: 1152px; height: 474px; left: 64px; top: 194px;"
                data-block-id="656a855573d380e245b2bf36b82ccb32"
              >
                <div
                  class="sl-block-content"
                  style="z-index: 11;"
                ><iframe
                    webkitallowfullscreen=""
                    mozallowfullscreen=""
                    allowfullscreen=""
                    sandbox="allow-forms allow-scripts allow-popups allow-same-origin allow-pointer-lock allow-presentation"
                    data-src="https://codepen.io/ospencer/embed/WNvpaJN?height=265&amp;theme-id=dark&amp;default-tab=html,result"
                  ></iframe></div>
              </div>`,
          },
          {
            id: '07790aee292a7e09aba6d72f02f82836',
            slide: 4,
            timestamp: 203,
            content: `<div
                class="sl-block"
                data-block-type="text"
                style="width: 953px; left: 64px; top: 108px; height: auto;"
                data-block-id="d2d27b61db8c25ce7ca04655b51cf3d4"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="h2"
                  data-placeholder-text="Title Text"
                  style="text-align: left; z-index: 10;"
                >
                  <h2>It's a bit limited.</h2>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="text"
                style="width: 710px; left: 64px; top: 235.5px; height: auto;"
                data-block-id="4c3877634e861dac5054cee50285c32e"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="p"
                  data-placeholder-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna odio, aliquam vulputate faucibus id, elementum lobortis felis. Mauris urna dolor, placerat ac sagittis quis."
                  style="text-align: left; z-index: 11;"
                >
                  <p>All values must be registered ahead of time.</p>

                  <p>(But more on that later.)</p>

                  <p> </p>

                  <p>We can use to add new nested properties, but not at the root level.</p>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="text"
                data-name="text-650c02"
                data-block-id="fdf3474ef3d6dee142c075e21e97e66a"
                style="height: auto; width: 600px; left: 236px; top: 372.5px;"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="p"
                  data-placeholder-text="Text"
                  style="z-index: 12;"
                >
                  <pre><span style="font-size:1.2em">Vue.set</span></pre>
                </div>
              </div>`,
          },
          {
            id: '460061efe841f87f6f2c6ee2070c89ba',
            slide: 5,
            timestamp: 248,
            content: `<div
                class="sl-block"
                data-block-type="text"
                style="width: 954px; left: 64px; top: 92px; height: auto;"
                data-block-id="3f8022d84178d2def9b23dc31c518b2f"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="h2"
                  data-placeholder-text="Title Text"
                  style="text-align: left; z-index: 10;"
                >
                  <h2>Vue 2.6's</h2>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="text"
                style="width: 1154px; left: 64px; top: 216px; height: auto;"
                data-block-id="19d28fbe17440b3be93e67ebdccb3bc8"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="p"
                  data-placeholder-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna odio, aliquam vulputate faucibus id, elementum lobortis felis. Mauris urna dolor, placerat ac sagittis quis."
                  style="text-align: left; z-index: 11;"
                >
                  <p>Vue's internal observability module was exposed in Vue 2.6.</p>

                  <p> </p>

                  <p>Essentially, is called on the result of the component's</p>

                  <p> function.</p>

                  <p> </p>

                  <p>This can be helpful for some applications within various Vue apps and enables some new opportunities.</p>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="text"
                data-name="text-75a02a"
                data-block-id="68079fdde6527e5898bb21145f9738ef"
                style="height: auto; width: 651px; left: 339px; top: 81px;"
              >
                <div
                  class="sl-block-style"
                  style="z-index: 12; transform: rotate(0deg);"
                >
                  <div
                    class="sl-block-content"
                    data-placeholder-tag="p"
                    data-placeholder-text="Text"
                    style="z-index: 12;"
                  >
                    <pre><span style="font-size:2.5em">Vue.observable</span></pre>
                  </div>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="text"
                data-name="text-0f465d"
                data-block-id="6cb89bf35e98a94ed0876213e085ec4c"
                style="height: auto; width: 600px; left: 229px; top: 307px;"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="p"
                  data-placeholder-text="Text"
                  style="z-index: 13;"
                >
                  <pre><span style="font-size:1.2em">Vue.observable</span></pre>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="text"
                data-name="text-9fd50d"
                data-block-id="76685f59e8bbeaf33ea0d6d3a06313f6"
                style="height: auto; width: 600px; left: 64px; top: 354px;"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="p"
                  data-placeholder-text="Text"
                  style="z-index: 14;"
                >
                  <pre><span style="font-size:1.2em">data</span></pre>
                </div>
              </div>`,
          },
          {
            id: 'aa097dd983c7f9a3ef27a256e83e6422',
            slide: 6,
            timestamp: 279,
            content: `<div
                class="sl-block"
                data-block-type="text"
                style="width: 954px; left: 64px; top: 36px; height: auto;"
                data-block-id="b86d807d414dac7e17ab66c49a569175"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="h2"
                  data-placeholder-text="Title Text"
                  style="text-align: left; z-index: 10;"
                >
                  <h2>A Vuex-like State Store</h2>
                </div>
              </div>

              <div
                class="sl-block"
                data-block-type="code"
                data-name="code-ad2c17"
                data-block-id="db67c90a2bb92fcf676c7a3c4ebf4006"
                style="width: 431px; height: 532px; left: 142px; top: 144px;"
              >
                <div
                  class="sl-block-content notranslate"
                  data-highlight-theme="monokai"
                  data-code-frame="none"
                  style="z-index: 11; font-size: 120%;"
                >
                  <pre class="javascript"><code data-line-numbers="">// store.js

  const state = Vue.observable({
    foo: 'Vue'
  })

  const getters = {
    theFoo() {
      return state.foo
    }
  }

  const actions = {
    setFoo(value) {
      state.foo = value
    }
  }

  export {
    getters,
    actions
  }</code></pre>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="code"
                data-name="code-454153"
                data-block-id="7ff72f52bb4052938e3a53bc8b02609f"
                style="width: 500px; height: 370px; left: 640px; top: 230px;"
              >
                <div
                  class="sl-block-content notranslate"
                  data-highlight-theme="monokai"
                  data-code-frame="none"
                  style="z-index: 12; font-size: 120%;"
                >
                  <pre class="javascript"><code data-line-numbers="">// VueComponent.js

  import store from './store.js'

  export default {
    computed: {
      ...store.getters
    },
    methods: {
      ...store.actions,
      doSomethingWithFoo() {
        return this.theFoo
      }
    }
  }</code></pre>
                </div>
              </div>`,
          },
          {
            id: '1df7db12709160e62949370aee950476',
            slide: 7,
            timestamp: 347,
            content: `<div
                class="sl-block"
                data-block-type="text"
                style="width: 512px; left: 64px; top: 27px; height: auto;"
                data-block-id="383fbd9c2e5a1a9a29f88b0d6b8ecaf7"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="h2"
                  data-placeholder-text="Title Text"
                  style="text-align: left; z-index: 10;"
                >
                  <pre><span style="font-size:2.0em">Vue.observable</span></pre>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="iframe"
                data-name="iframe-29aafa"
                data-block-id="bbf2b4b347e622c363923cec88b7f59b"
                style="width: 1178px; height: 537px; left: 51px; top: 132px;"
              >
                <div
                  class="sl-block-content"
                  style="z-index: 11;"
                ><iframe
                    webkitallowfullscreen=""
                    mozallowfullscreen=""
                    allowfullscreen=""
                    sandbox="allow-forms allow-scripts allow-popups allow-same-origin allow-pointer-lock allow-presentation"
                    data-src="https://codepen.io/ospencer/embed/abOJXeq?height=265&amp;theme-id=dark&amp;default-tab=js,result"
                  ></iframe></div>
              </div>`,
          },
          {
            id: '353dceff30b4696cb2dee3391ced961c',
            slide: 8,
            timestamp: 482,
            content: `<div
                class="sl-block"
                data-block-type="text"
                style="width: 1123px; left: 64px; top: 108px; height: auto;"
                data-block-id="566b5d614fd0f30dd7fa932d70a15631"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="h2"
                  data-placeholder-text="Title Text"
                  style="text-align: left; z-index: 10;"
                >
                  <h2>Reactivity in Vue 3</h2>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="text"
                style="width: 1151px; left: 64px; top: 216px; height: auto;"
                data-block-id="7caec3b4808f3f46b256a7af465304b5"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="p"
                  data-placeholder-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna odio, aliquam vulputate faucibus id, elementum lobortis felis. Mauris urna dolor, placerat ac sagittis quis."
                  style="text-align: left; z-index: 11;"
                >
                  <p>Vue 3 will ship with a completely standalone reactivity module that can be used anywhere.</p>

                  <p> </p>

                  <p>Made possible by ES6's object.</p>

                  <p> </p>

                  <p>Can detect any change to an object and react accordingly.</p>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="text"
                data-name="text-44b33a"
                data-block-id="9fafe7b38dd7217c0840c90deaa4e393"
                style="height: auto; width: 600px; left: 395px; top: 345.5px;"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="p"
                  data-placeholder-text="Text"
                  style="z-index: 12;"
                >
                  <pre><span style="font-size:1.2em">Proxy</span></pre>
                </div>
              </div>`,
          },
          {
            id: '086da5b1c394efea6b3685901e48365b',
            slide: 9,
            timestamp: 523,
            content: `<div
                class="sl-block"
                data-block-type="text"
                style="width: 922px; left: 64px; top: 70px; height: auto;"
                data-block-id="54ce1d762e586c976706d848bf530290"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="h2"
                  data-placeholder-text="Title Text"
                  style="text-align: left; z-index: 10;"
                >
                  <h2>Vue 3 Reactivity Under the Hood</h2>
                </div>
              </div>

              <div
                class="sl-block"
                data-block-type="code"
                data-name="code-953697"
                style="width: 407px; height: 300px; left: 64px; top: 243px;"
                data-block-id="8b0a9797fce0408721199c335ecb5c84"
              >
                <div
                  class="sl-block-content notranslate"
                  data-highlight-theme="monokai"
                  data-code-frame="none"
                  style="z-index: 11; font-size: 200%;"
                >
                  <pre class="javascript"><code data-line-numbers="">new Vue({
    data() {
      return {
        foo: 'Vue'
      }
    }
  })</code></pre>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="code"
                data-name="code-1fed1a"
                style="width: 702px; height: 390px; left: 513px; top: 192px;"
                data-block-id="a77512c9e1a4e7e8e3a767677ce45603"
              >
                <div
                  class="sl-block-content notranslate"
                  data-highlight-theme="monokai"
                  data-code-frame="none"
                  style="z-index: 12; font-size: 150%;"
                >
                  <pre class="javascript"><code data-line-numbers="">// internally, something like this happens

  new Proxy(data, {
    get(obj, prop) {
      createWatcherDependency(prop)
      return obj[prop]
    },
    set(obj, prop, value) {
      markDirty(prop)
      obj[prop] = value
    }
  })</code></pre>
                </div>
              </div>`,
          },
          {
            id: '33aff213c6404ab066f441e3e644b12f',
            slide: 10,
            timestamp: 574,
            content: `<div
                class="sl-block"
                data-block-type="text"
                style="width: 1123px; left: 64px; top: 108px; height: auto;"
                data-block-id="c416718cdf11eac31c86d18d988d5e15"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="h2"
                  data-placeholder-text="Title Text"
                  style="text-align: left; z-index: 10;"
                >
                  <pre><span style="font-size:2.0em">reactive/effect</span></pre>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="code"
                data-name="code-6d495c"
                data-block-id="07d6785012212745b0469e7843c2c816"
                style="width: 721px; height: 395px; left: 64px; top: 210px;"
              >
                <div
                  class="sl-block-content notranslate"
                  data-highlight-theme="monokai"
                  data-code-frame="none"
                  style="z-index: 11; font-size: 130%;"
                >
                  <pre class="javascript"><code data-line-numbers="">import { reactive, effect } from '@vue/reactivity'

  const counter = reactive({ num: 0 })

  let currentNumber

  effect(() =&gt; {
    currentNumber = counter.num
  })

  console.log(currentNumber) // 0

  counter.num++

  console.log(currentNumber) // 1</code></pre>
                </div>
              </div>`,
          },
          {
            id: '430b36354494a4c7cd3109c882c27172',
            slide: 11,
            timestamp: 651,
            content: `<div
                class="sl-block"
                data-block-type="text"
                style="width: 1123px; left: 64px; top: 108px; height: auto;"
                data-block-id="432746d7c6fc857025f0b58d181c3067"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="h2"
                  data-placeholder-text="Title Text"
                  style="text-align: left; z-index: 10;"
                >
                  <pre><span style="font-size:2.0em">reactive/effect, cont.</span></pre>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="code"
                data-name="code-6d495c"
                style="width: 708px; height: 395px; left: 64px; top: 210px;"
                data-block-id="80733f73ee671004e807d90529cb7739"
              >
                <div
                  class="sl-block-content notranslate"
                  data-highlight-theme="monokai"
                  data-code-frame="none"
                  style="z-index: 11; font-size: 130%;"
                >
                  <pre class="javascript"><code data-line-numbers="">import { reactive, effect } from '@vue/reactivity'

  const myMap = reactive({ foo: 1 })

  let keys

  effect(() =&gt; {
    keys = Object.keys(myMap)
  })

  console.log(keys) // [ 'foo' ]

  myMap.bar = 2

  console.log(keys) // [ 'foo', 'bar' ]</code></pre>
                </div>
              </div>`,
          },
          {
            id: 'a1bdebbf3fe81a3662eeaca44151d3ed',
            slide: 12,
            timestamp: 708,
            content: `<div
                class="sl-block"
                data-block-type="text"
                style="width: 1095px; left: 64px; top: 108px; height: auto;"
                data-block-id="1e085815d6bf650a3531af64faf09797"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="h2"
                  data-placeholder-text="Title Text"
                  style="text-align: left; z-index: 10;"
                >
                  <h2>Possible uses of Vue's new Reactivity module</h2>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="text"
                style="width: 512px; left: 64px; top: 288px; height: auto;"
                data-block-id="28082575016e89e03f3331887aed83b1"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="p"
                  data-placeholder-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna odio, aliquam vulputate faucibus id, elementum lobortis felis. Mauris urna dolor, placerat ac sagittis quis."
                  style="text-align: left; z-index: 11;"
                >
                  <ul>
                    <li>Other frontend frameworks</li>
                    <li>Interactive animations</li>
                    <li>Notifications</li>
                    <li>Chat clients</li>
                    <li>Backends?</li>
                  </ul>
                </div>
              </div>`,
          },
          {
            id: '635107a2d493985474c5c9e789e1947e',
            slide: 13,
            timestamp: 744,
            content: `<div
                class="sl-block"
                data-block-type="text"
                style="width: 1076px; left: 102px; top: 73px; height: auto;"
                data-block-id="f409b530f8fb5b4bd4cd2d2a753983bf"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="h1"
                  data-placeholder-text="Title Text"
                  style="z-index: 10;"
                >
                  <h1>What if we used Vue's reactivity module to build a backend?</h1>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="text"
                data-name="text-ae769a"
                data-block-id="127abadc252671d5ab90b0fb780992ff"
                style="height: auto; width: 600px; left: 340px; top: 415.5px;"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="p"
                  data-placeholder-text="Text"
                  style="z-index: 11;"
                >
                  <p><span style="font-size:5.0em"><span style="color:rgb(255, 255, 255)">🤔🤔🤔</span></span></p>
                </div>
              </div>`,
          },
          {
            id: '431679212efa06727a7cf2810659cd0f',
            slide: 14,
            timestamp: 750,
            content: `<div
                class="sl-block"
                data-block-type="text"
                style="width: 512px; left: 384px; top: 340.5px; height: auto;"
                data-block-id="c6a86722f42705f62e87351f1e87ae06"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="p"
                  data-placeholder-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna odio, aliquam vulputate faucibus id, elementum lobortis felis. Mauris urna dolor, placerat ac sagittis quis."
                  style="text-align: center; z-index: 11;"
                >
                  <p>(show everyone your bad code)</p>
                </div>
              </div>`,
          },
          {
            id: 'db59377d2cf626f242dafaba92567249',
            slide: 15,
            timestamp: 1191,
            content: `<div
                class="sl-block"
                data-block-type="text"
                style="width: 680px; left: 540px; top: 83.5px; height: auto;"
                data-block-id="6b99e8a7df4556eab53ca142ab1b0b32"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="h1"
                  data-placeholder-text="Title Text"
                  style="z-index: 10; font-size: 125%;"
                >
                  <h1 style="text-align: left;">Oscar Spencer</h1>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="image"
                style="width: 356.6px; height: 335.539px; left: 80px; top: 189.481px; min-width: 1px; min-height: 1px;"
                data-name="image-567244"
                data-block-id="2609cb473603d0bb0d54b9b5613d2060"
              >
                <div
                  class="sl-block-content"
                  style="z-index: 11;"
                ><img
                    data-natural-width="1236"
                    data-natural-height="1163"
                    style=""
                    data-lazy-loaded=""
                    data-src="https://s3.amazonaws.com/media-p.slid.es/uploads/1097137/images/7116025/oscar-headshot-square.jpg"
                  ></div>
              </div>
              <div
                class="sl-block"
                data-block-type="text"
                data-name="text-b23f90"
                data-block-id="99efd9dc60e9f0868344c69df16b9e29"
                style="height: auto; width: 600px; left: 564px; top: 232.5px;"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="p"
                  data-placeholder-text="Text"
                  style="z-index: 12;"
                >
                  <p style="text-align: left;">Software Engineer @</p>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="image"
                style="width: 319.5px; height: 106.5px; left: 853.5px; top: 204.5px; min-width: 1px; min-height: 1px;"
                data-name="image-e2fe0d"
                data-block-id="a767ad182d91e62b84e9339bfc545b15"
              >
                <div
                  class="sl-block-content"
                  style="z-index: 13;"
                ><img
                    data-natural-width="432"
                    data-natural-height="144"
                    style=""
                    data-lazy-loaded=""
                    data-src="https://s3.amazonaws.com/media-p.slid.es/uploads/1097137/images/7116054/Tidelift-logo_white.svg"
                  ></div>
              </div>
              <div
                class="sl-block"
                data-block-type="text"
                data-name="text-f498e5"
                data-block-id="3bb7717ed1fba838d38a0681df6910ca"
                style="height: auto; width: 600px; left: 564px; top: 332.5px;"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="p"
                  data-placeholder-text="Text"
                  style="z-index: 14;"
                >
                  <p>Twitter: @oscar_spen</p>

                  <p>GitHub: ospencer</p>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="text"
                data-name="text-27a24f"
                data-block-id="97399724830d4ab1f2b9a5e1fd353960"
                style="height: auto; width: 600px; left: 626px; top: 498.02px;"
              >
                <div
                  class="sl-block-content"
                  data-placeholder-tag="p"
                  data-placeholder-text="Text"
                  style="z-index: 15;"
                >
                  <p style="text-align:left">grain-lang.org</p>
                </div>
              </div>
              <div
                class="sl-block"
                data-block-type="image"
                style="width: 355.024px; height: 165px; left: 809.976px; top: 435.02px; min-width: 1px; min-height: 1px;"
                data-name="image-e8fa91"
                data-block-id="2a3e609390ca1a8046d6d291263a76b4"
              >
                <div
                  class="sl-block-content"
                  style="z-index: 16;"
                ><img
                    data-natural-width="454"
                    data-natural-height="211"
                    style=""
                    data-lazy-loaded=""
                    data-src="https://s3.amazonaws.com/media-p.slid.es/uploads/1097137/images/7116100/Grain_White_Logo_Color.svg"
                  ></div>
              </div>`,
          }
        ],
        videoUrlTemp: 'https://www.youtube.com/embed/pDxiBourHFY',
        videoUrl: null,
        slideshow: null,
        plyr: null,
        options: { quality: { default: '1080p' } },
      } );

      const revealBox = ref( null );

      const Reveal = inject( 'Reveal', null );
      const RevealPlugins = inject( 'RevealPlugins', null );

      const sortedSlides = computed(
        () => {
          return [ ...state.slides ].sort( ( m1, m2 ) => m2.timestamp - m1.timestamp );
        }
      );
      const changingFromPlayer = ref( false );
      const changingFromSlideshow = ref( false );
      const setVideoId = () => {
        if ( state.videoUrlTemp.includes( 'https://www.youtube.com/embed/' ) ) {
          state.videoUrl = state.videoUrlTemp;
          nextTick( () => {
            state.plyr.player.on( 'ready', event => {
              nextTick( () => {
                state.slideshow = new Reveal(
                  revealBox.value,
                  {
                    plugins: [
                      RevealPlugins.Markdown,
                      RevealPlugins.RevealMath
                    ]
                  }
                );
                state.slideshow.on( 'slidechanged', selSlide => {
                  const slide = state.slides.find( marker => marker.slide === selSlide.indexh );
                  if ( slide.timestamp !== Math.floor( state.plyr.player.currentTime ) && !changingFromPlayer.value ) {
                    changingFromSlideshow.value = true;
                    state.plyr.player.currentTime = slide.timestamp;
                  } else if ( changingFromPlayer.value ) {
                    changingFromPlayer.value = false;
                  }
                } );
                nextTick( () => {
                  state.slideshow.initialize( {
                    embedded: true,
                    slideNumber: true,
                    disableLayout: false,
                    height: '100%'
                  } );
                } );
              } );

              state.plyr.player.on( 'timeupdate', event => {
                const currentSecond = Math.floor( event.detail.plyr.currentTime );
                const slide = sortedSlides.value
                  .find( marker => {
                    return currentSecond >= marker.timestamp;
                  } );
                if ( !!slide && slide.slide !== state.slideshow.getIndices().h && !changingFromSlideshow.value ) {
                  changingFromPlayer.value = true;
                  state.slideshow.slide( slide.slide );
                } else if ( changingFromSlideshow.value ) {
                  changingFromSlideshow.value = false;
                }
              } );
            } );
          } );
        }
      };
      return { ...toRefs( state ), setVideoId, revealBox };

    }
  } )
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: stretch;
    justify-content: center;
    .panel {
      border: 1px solid #aeaeae;
      width: 50%;
      padding: 10px;
      margin: 5px;
      .reveal {
        max-height: 720px;
      }
    }
  }
</style>
