<template>
  <v-app light class="transparent">
    <main>
      <v-content class="vert-align">
        <v-container>
          <v-layout row wrap align-center>
            <v-flex xs12 md4 mt-2 text-xs-center>
              <router-link to="/about" @click.native.stop="openDialog">
                <v-avatar size="128px">
                  <img
                    class="img-circle elevation-7 mb-1"
                    src="/static/avatar_sm_a.jpg"
                  >
                </v-avatar>
              </router-link>
              <h4 class="mt-4 mb-1"><span class="my-name">ZIYAO</span> CHEN</h4>
              <h5>陳 子堯</h5>
              <div>
                <v-chip label class="grey white--text hover--blue">
                  <v-icon left>widgets</v-icon>Web Dev
                </v-chip>
                <v-chip label class="grey white--text hover--green">
                  <v-icon left>color_lens</v-icon>UX/UI Designer
                </v-chip>
                <v-chip label class="grey white--text hover--orange">
                  <v-icon left>dns</v-icon>Data Analyst (ML &amp; NLP)
                </v-chip>
                <v-chip label class="grey white--text hover--red">
                  <v-icon left>bug_report</v-icon>Test Engineer
                </v-chip>
                <v-chip label class="grey white--text hover--teal">
                  <v-icon left>image</v-icon>Image &amp; 3D Engineer
                </v-chip>
              </div>
            </v-flex>
            <v-flex xs12 md6 offset-md1 my-5 text-xs-center v-if="loading">
              <v-progress-circular
                indeterminate
                :size="70"
                :width="5"
                color="grey"
              >
              </v-progress-circular>
              <p class="title mt-3 grey--text">PREPARING...</p>
            </v-flex>
            <v-slide-x-transition>
              <v-flex xs12 md6 offset-md1 my-3 v-show="!loading">
                <v-tabs centered>
                  <v-tabs-bar class="transparent" @click.native="updateTabHeight">
                    <v-tabs-item href="#highlights">
                      Highlights
                    </v-tabs-item>
                    <v-tabs-item href="#dev">
                      Dev
                    </v-tabs-item>
                    <v-tabs-item href="#ux">
                      UX/UI
                    </v-tabs-item>
                    <v-tabs-item href="#nlp">
                      ML/NLP
                    </v-tabs-item>
                    <v-tabs-item href="#3d">
                      3D
                    </v-tabs-item>
                    <!-- <v-tabs-slider></v-tabs-slider> -->
                  </v-tabs-bar>
                  <v-tabs-items>
                    <v-tabs-content id="highlights" v-resize="updateTabHeight">
                      <tab-highlights
                        @openDialog="openDialog"
                        @tabMounted="onTabMounted"
                      >
                      </tab-highlights>
                    </v-tabs-content>
                    <v-tabs-content id="dev">
                      <div>DEV</div>
                    </v-tabs-content>
                    <v-tabs-content id="ux">
                      <div>UX/UI</div>
                    </v-tabs-content>
                    <v-tabs-content id="nlp">
                      <div>ML/NLP</div>
                    </v-tabs-content>
                    <v-tabs-content id="3d">
                      <div>3D</div>
                    </v-tabs-content>
                  </v-tabs-items>
                </v-tabs>
                <div id="quick-links" class="text-xs-center mt-3">
                  <router-link to="/about" @click.native.stop="openDialog">About Me</router-link>
                  <router-link to="/resume" @click.native.stop="openDialog">Résumé</router-link>
                  <router-link to="/collections" @click.native.stop="openDialog">Collections</router-link> 
                </div> 
              </v-flex>
            </v-slide-x-transition>
          </v-layout>
        </v-container>
      </v-content>
      <v-dialog v-model="dialog" width="768px" scrollable>
        <v-card class="grey lighten-4 popup">
          <div class="close"><v-icon large @click="dialog = false">close</v-icon></div>
          <v-card-text :class="{'demo-frame': isDemo}" id="content-frame">
            <router-view :avatar-path="avatarPath" @onDemoMounted="onDemoMounted"></router-view>
          </v-card-text>
          <div class="frame-shadow"></div>
        </v-card>
      </v-dialog>
    </main>
  </v-app>
</template>

<script>
  import TabHighlights from './components/tabs/Highlights'
  export default {
    components: {
      'tab-highlights': TabHighlights
    },
    watch: {
      dialog (value) {
        if (!value) {
          // scroll back to top when the dialog is completely closed
          setTimeout(() => {
            document.getElementById('content-frame').scrollTop = 0
          }, 300)
        }
      }
    },
    data () {
      return {
        tabHeight: 0,
        dialog: false,
        avatarPath: '',
        loading: true
      }
    },
    computed: {
      isDemo () {
        return (this.$route.path.slice(-5) === '/demo')
      }
    },
    methods: {
      onTabMounted () {
        setTimeout(() => {
          this.loading = false
          this.updateTabHeight()
        }, 500)
      },
      onDemoMounted (e) {
        const frame = document.getElementById('content-frame')
        frame.scrollTop = 0
        if (e === 'ShaReader') {
          setTimeout(() => {
            frame.scrollLeft = frame.offsetWidth
          }, 500)
        } else if (e === 'SpamDetectorDemo') {
          setTimeout(() => {
            frame.scrollTop = 135
          }, 500)
        }
      },
      openDialog () {
        this.avatarPath = '/static/avatar_sm_' + (Math.random() < 0.5 ? 'a' : 'b') + '.jpg'
        this.dialog = true
      },
      updateTabHeight () {
        // Adjust heights for all tabs on resize to make sure the tab bar stays where it is
        let h = document.querySelector('.tabs__content').offsetHeight
        if (h > 0 && h !== this.tabHeight) {
          this.tabHeight = h
          Array.from(document.querySelectorAll('.tabs__content')).forEach((el, idx) => {
            if (idx > 0) el.style.height = h + 'px'
          })
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>

<style lang="stylus" scoped>

  h4, h5
    font-family: 'Open Sans', sans-serif

  #quick-links
    a
      text-decoration: none
      text-transform: uppercase
      padding: 20px

  #copyright
    font-family: 'Open Sans', sans-serif
    font-size: 12px
    text-transform: uppercase
    color: #999

  .my-name
    font-weight: bold

    &:before
      content: '[\0027zi:\0027yao]'
      position: absolute
      margin-top: -27px
      margin-left: 20px
      padding: 0 2px
      font-size: 15px
      font-weight: 500
      font-style: italic
      color: #999

  .popup
    background: url('/static/bg.png')
  
  .frame-shadow
    pointer-events: none
    position: absolute
    width: 100%
    height: 100%
    box-shadow: inset 0 35px 35px -15px #fcfcfc, inset 0 -35px 35px -15px #fcfcfc 

  .demo-frame
    padding: 0 !important

    &::-webkit-scrollbar
      width: 0
      height: 0

</style>
