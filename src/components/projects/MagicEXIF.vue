<template>
  <v-container>
    <v-layout row wrap align-start>
      <v-flex d-flex xs12 mt-2>
        <h1 class="display-1">MagicEXIF Editor<span class="project-time hidden-sm-and-down">Since 2014</span></h1>
      </v-flex>
      <v-flex xs12 my-0>
        <h2 class="headline mb-1">A powerful toolkit to update EXIF, GPS and other metadata in digital photos.</h2>
      </v-flex>
      <v-flex xs12 my-2 text-xs-center text-sm-left>
        <template v-for="(tag, idx) in tags">
          <tag-list :tag="tag" :key="idx"></tag-list>
        </template>
      </v-flex>
      <v-flex xs12 mt-2>
        <img
          src="/static/magicexif_ss.png"
          width="100%"
          class="elevation-2"
        />
        <p class="caption mb-3">MagicEXIF allows users to view and edit the GPS data in a photo via a map.</p>
        <p><strong>MagicEXIF Metadata Editor</strong> is my on-going independent project which now has 1,500+ registered premium users (including 10+ commercial licenses issued for companies) and 50k+ free users. It is a powerful tool to read and update all metadata including EXIF/GPS/XMP/MakerNote inside a digital photo such as a JPEG or TIFF. With a state-of-the-art independently developed JPEG codec, MagicEXIF is even able to completely recompress a JPEG image given a specific compression signature. It has been widely used in both traditional and aerial photography, file management, tilt photography and mapping, drone tool development, etc.</p>
        <p>I started this project in 2014. After three years of continuous development and testing, major bugs have all been fixed and many more new features have been added into the toolkit based on user feedback. It is now the ONLY tool with GUI to manipulate a JPEG file in the market. MagicEXIF is only available in Chinese for now, but an English version has been planned.</p>
        <img
          src="/static/magicexif_ss_2.png"
          width="100%"
          class="elevation-2 mt-2"
        />
        <p class="caption mb-4">MagicEXIF is able to decode MakerNote data from 17 distinct manufacturers, in this example, Nikon Type-3 MakerNote.</p>
        <img
          src="/static/magicexif_ss_3.png"
          width="100%"
          class="elevation-2"
        />
        <p class="caption mb-3">Emerging metadata standards are also supported in the latest version of MagicEXIF. This screenshot shows an embedded XMP editor with full syntax highlight support.</p>
        <h3 class="title mt-4">Related Projects</h3>
        <ul class="related-projects">
          <li><router-link to="/projects/magicexif_web">MagicEXIF website (not yet published)</router-link></li>
          <li><router-link to="/projects/mgexf_vldt">MagicEXIF Photo Validator</router-link></li>
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
          name: 'EXIF',
          color: 'orange'
        },
        {
          name: 'GPS',
          color: 'orange'
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
