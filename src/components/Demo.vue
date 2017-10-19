<template>
  <div>
    <v-slide-y-reverse-transition>
      <div
        v-show="showDemo&&hasTips"
        class="bottom-tips white--text"
        v-html="instruction"
      >
      </div>
    </v-slide-y-reverse-transition>
    <v-tooltip top v-show="showDemo" class="btn--float">
      <v-btn
        fab
        flat
        :color="hasTips ? 'grey lighten-3' : 'primary'"
        @click="onBack"
        slot="activator"
      >
        <v-icon>arrow_forward</v-icon>
      </v-btn>
      <span>Back</span>
    </v-tooltip>
    <iframe
      id="demo"
      :src="url + queryString"
      frameborder="0"
      :width="width"
      :height="height"
      v-show="showDemo"
      v-resize="onResize"
      @load="onDemoLoaded"
    >
    </iframe> 
    <v-progress-circular
      indeterminate
      :size="70"
      :width="5"
      color="grey"
      v-if="!demoLoaded&&showDemo"
      id="demo-loading"
    >
    </v-progress-circular>
    <v-container v-show="!showDemo">
      <v-flex xs12 mt-5 mb-2 text-xs-center class="subheading">
        <v-icon x-large>fa-exclamation-triangle</v-icon>
      </v-flex>
      <v-flex xs12 mt-2 text-xs-center class="subheading">
        I'm really sorry but this demo is only available on large-screen devices.
      </v-flex>
      <v-flex xs12 mb-5 text-xs-center>
        <v-btn flat color="primary" @click="onBack" class="mt-2">Go Back</v-btn>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ['url', 'name', 'instruction', 'width', 'height', 'lgOnly'],
  data () {
    return {
      parentWdith: 0,
      demoLoaded: false,
      queryString: ''
    }
  },
  created () {
    if (this.$route.query) {
      this.queryString = this.toQueryString(this.$route.query)
    }
  },
  mounted () {
    this.$emit('onDemoMounted', this.name)
    this.onResize()
  },
  computed: {
    showDemo () {
      return !(this.parentWdith < 768 && this.lgOnly)
    },
    hasTips () {
      return (this.instruction.length > 0)
    }
  },
  methods: {
    onDemoLoaded () {
      this.demoLoaded = true
    },
    onResize () {
      this.parentWdith = this.$el.parentElement.offsetWidth
    },
    onBack () {
      this.$router.go(-1)
    },
    toQueryString (paramsObject) {
      return Object
        .keys(paramsObject)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramsObject[key])}`)
        .join('&')
    }
  }
}
</script>

<style lang="stylus" >

  .btn--float
    position: absolute
    bottom: 2px
    right: 5px

  .bottom-tips
    padding: 25px
    padding-right: 75px
    position: absolute
    bottom: 0
    width: 100%
    background: rgba(150,150,150,0.9)

    a
      color: #fff !important

  #demo-loading
    position: absolute
    top: 45%
    left: 45%

</style>
