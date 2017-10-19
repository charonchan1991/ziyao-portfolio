<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6>
        <v-card dark hover to="/projects/magicexif" @click.native.stop="openDialog">
          <v-card-media height="100%" src="/static/camera.png">
            <v-container fill-height fluid class="display-box hover--blue">
              <v-layout row wrap align-content-space-between>
                <v-flex xs12 mb-2>
                  <span class="title">MagicEXIF Editor</span>
                </v-flex>
                <v-flex xs12 align-end>
                  A powerful toolkit to update EXIF, GPS and other metadata in digital photos.
                </v-flex> 
              </v-layout>
            </v-container>
          </v-card-media>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card dark hover to="/projects/shareader" @click.native.stop="openDialog">
              <v-card-media height="100%" src="/static/shareader.png">
                <v-container fill-height fluid class="display-box hover--green">
                  <v-layout row wrap align-content-space-between>
                    <v-flex xs12 mb-2>
                      <span class="title">ShaReader</span>
                    </v-flex>
                    <v-flex xs12 align-end>
                      An interactive interface for social e-book applications.
                    </v-flex> 
                  </v-layout>
                </v-container>
              </v-card-media>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card dark hover to="/projects/portfolio" @click.native.stop="openDialog">
                  <v-card-media height="100%" src="/static/wps.png">
                    <v-container fill-height fluid class="display-box hover--blue">
                      <v-layout row wrap align-content-space-between>
                        <v-flex xs12 mb-2>
                          <span class="title">My Portfolio</span>
                        </v-flex>
                        <v-flex xs12 align-end>
                          A web-based portfolio that demonstrates some of my projects.
                        </v-flex> 
                      </v-layout>
                    </v-container>
                  </v-card-media>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm12>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card dark hover to="/projects/spam_detector" @click.native.stop="openDialog">
              <v-card-media height="100%" src="/static/spam.jpg">
                <v-container fill-height fluid class="display-box hover--orange">
                  <v-layout row wrap align-content-space-between>
                    <v-flex xs12 mb-2>
                      <span class="title">Twitter Emotion Spam Detector</span>
                    </v-flex>
                    <v-flex xs12 align-end>
                      Harvest Twitter open data and analyze tweet features to detect emotion spams with machine learning techniques.
                    </v-flex> 
                  </v-layout>
                </v-container>
              </v-card-media>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card dark hover to="/projects/aljazeera_v" @click.native.stop="openDialog">
                  <v-card-media height="100%" src="/static/aljazeera.jpg">
                    <v-container fill-height fluid class="display-box hover--orange">
                      <v-layout row wrap align-content-space-between>
                        <v-flex xs12 mb-2>
                          <span class="title">Al Jazeera Data Visualization</span>
                        </v-flex>
                        <v-flex xs12 align-end>
                          Visualize and perform visual analytics (VA) on data collected from the Al Jazeera English news network with d3.js and Tableau.
                        </v-flex> 
                      </v-layout>
                    </v-container>
                  </v-card-media>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <!-- <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card dark hover to="/projects/mazdome" @click.native.stop="openDialog">
                  <v-card-media height="100%" src="/static/mazdis.png">
                    <v-container fill-height fluid class="display-box hover--teal">
                      <v-layout row wrap align-content-space-between>
                        <v-flex xs12 mb-2>
                          <span class="title">MazDome Renderings</span>
                        </v-flex>
                        <v-flex xs12 align-end>
                          3D models and photorealistic renderings for the conceptual design of automatic bicycle parking products of Mazdis Inc.
                        </v-flex> 
                      </v-layout>
                    </v-container>
                  </v-card-media>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex> -->
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    openDialog () {
      this.$emit('openDialog')
    }
  },
  mounted () {
    // emit only after the entire view has been rendered
    this.$nextTick(() => {
      this.$emit('tabMounted')
    })
  }
}
</script>
