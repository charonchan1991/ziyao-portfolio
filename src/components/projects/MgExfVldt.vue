<template>
  <v-container>
    <v-layout row wrap align-start>
      <v-flex d-flex xs12 mt-2>
        <h1 class="display-1">MagicEXIF Photo Validator<span class="project-time hidden-sm-and-down">Since 2016</span></h1>
      </v-flex>
      <v-flex xs12 my-0>
        <h2 class="headline mb-1">Test a digital photo if original or has been modified since taken out from camera.</h2>
      </v-flex>
      <v-flex xs12 my-2 text-xs-center text-sm-left>
        <template v-for="(tag, idx) in tags">
          <tag-list :tag="tag" :key="idx"></tag-list>
        </template>
      </v-flex>
      <v-flex xs12 mt-2>
        <p><strong>MagicEXIF Photo Validator</strong> is a tool used to test if a digital photo (JPEG format) is an orginal from camera or has been modified since taken out from the camera. It draws upon evidence such as metadata integrity, data consistency, histogram data, software compression signature etc. inside a photo to make its conclusion. A short report will be provided for the user as reference.</p>
        <p>It has been adopted by some of the largest Internet companies in China such as Taobao.com as an alternative tool to validate a digital photo.</p>
        <div style="max-width: 480px; margin: 30px auto;">
          <img
            src="/static/mgexf_vldt_ss.png"
            width="100%"
            class="elevation-2 mb-2"
          />
          <p class="caption mb-3">There are five possible results (Class 1-5) as rated by MagicEXIF Photo Validator. The likelihood that an image is orginal from camera drops as the result approches <em>Class 1</em>, which indicates an image is not an orginal photo from any digital camera as compelling evidence has been found.</p>
          <img
            src="/static/mgexf_vldt_ss_3.png"
            width="100%"
            class="elevation-2 mb-2"
          />
           <p class="caption mb-3">A <em>Class 3</em> rating will be given if evidence from file is insufficient to draw a convincing conclusion or conflicting evidences have been found.</p>
          <img
            src="/static/mgexf_vldt_ss_5.png"
            width="100%"
            class="elevation-2 mb-2"
          />
          <p class="caption"><em>Class 5</em> is the highest possible rating that indicates high probability of being origianl.</p>
        </div>
        <h3 class="title mt-4">Related Projects</h3>
        <ul class="related-projects">
          <li><router-link to="/projects/magicexif">MagicEXIF Metadata Editor</router-link></li>
          <li><router-link to="/projects/magicexif_web">MagicEXIF website (not yet published)</router-link></li>
          <li><router-link to="/projects/gps_picker">Online GPS picker</router-link></li>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TagList from './tags/TagList'
export default {
  components: {
    'tag-list': TagList
  },
  data () {
    return {
      tags: [
        {
          name: 'SW Dev',
          fullName: 'Software Development',
          color: 'blue'
        },
        {
          name: 'UX/UI',
          color: 'green'
        },
        {
          name: 'Image Processing',
          color: 'teal'
        },
        {
          name: 'System Testing',
          color: 'red'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
  ul.related-projects
    li
      padding-bottom: 5px
</style>
