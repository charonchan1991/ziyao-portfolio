<template>
  <v-container>
    <v-layout row wrap align-start>
      <v-flex d-flex xs12 mt-2>
        <h1 class="display-1">Photo2Punch<span class="project-time hidden-sm-and-down">February 2014</span></h1>
      </v-flex>
      <v-flex xs12 my-0>
        <h2 class="headline mb-1">An image-to-perforation software that can easily create AutoCAD files for punching.</h2>
      </v-flex>
      <v-flex xs12 my-2 text-xs-center text-sm-left>
        <template v-for="(tag, idx) in tags">
          <tag-list :tag="tag" :key="idx"></tag-list>
        </template>
      </v-flex>
      <v-flex xs12 mt-2>
        <img
          src="/static/photo2punch_demo.png"
          width="100%"
          class="mb-3"
        />
        <p>This project was created at the request of a startup perforation artwork company in Dongguan, China.</p>
        <p><strong>Photo2Punch</strong> is a CAD software used to generate custom perforated patterns based on virtually any digital image document. It allows users to change parameters such as hole number, size, shape, and clusters to create fully custom hole patterns. The perforated pattern can then be converted into an AutoCAD DWG file format for the manufacturing process.</p>
        <img
          src="/static/photo2punch.jpg"
          width="100%"
          class="elevation-2 mb-2"
        />
        <img
          src="/static/photo2punch_ss_2.jpg"
          width="100%"
          class="elevation-2 mb-3"
        />
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
          name: 'CAD',
          fullName: 'Computer-Aided Design',
          color: 'teal'
        },
        {
          name: 'AutoCAD',
          color: 'teal'
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
