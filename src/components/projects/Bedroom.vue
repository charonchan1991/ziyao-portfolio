<template>
  <v-container>
    <v-layout row wrap align-start>
      <v-flex d-flex xs12 mt-2>
        <h1 class="display-1">Bedroom Renderings + VR<span class="project-time hidden-sm-and-down">May 2016</span></h1>
      </v-flex>
      <v-flex xs12 my-0>
        <h2 class="headline mb-1">Photorealistic renderings and VR for a small bedroom.</h2>
      </v-flex>
      <v-flex xs12 my-2 text-xs-center text-sm-left>
        <template v-for="(tag, idx) in tags">
          <tag-list :tag="tag" :key="idx"></tag-list>
        </template>
      </v-flex>
      <v-flex xs12 mt-2>
        <p>This bedroom project was intended to be created for practice purpose. It has been a benchmark project on Sketchfab now. Simple animations and VR experience is also included in this project. Source files of this project is available on Sketchfab.</p>
        <img
          src="/static/bedroom.jpg"
          width="100%"
          class="elevation-2 mb-2"
        />
        <iframe
          src="https://sketchfab.com/models/3f8d37058c894ae49e292809fe2e5c3a/embed?camera=0&amp;preload=1"
          class="video-responsive mb-3"
          frameborder="0"
          allowvr
          allowfullscreen
          mozallowfullscreen
          webkitallowfullscreen
          onmousewheel=""
        ></iframe>
        <div class="mt-2 text-xs-center">
          <a
            class="btn btn--flat grey lighten-2 grey--text text--darken-2"
            href="https://sketchfab.com/models/3f8d37058c894ae49e292809fe2e5c3a"
            target="_blank"
          >
            <div class="btn__content">
              <v-icon left>fa-cube</v-icon>
              View on Sketchfab
            </div>
          </a>
        </div>
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
          name: '3D',
          color: 'teal'
        },
        {
          name: 'VR/AR',
          fullName: 'Virtual Reality / Augmented Reality',
          color: 'teal'
        },
        {
          name: 'Image Processing',
          color: 'teal'
        },
        {
          name: 'Blender',
          color: 'blue'
        },
        {
          name: 'Cycles',
          fullName: 'Cycles Renderer',
          color: 'blue'
        },
        {
          name: 'Sketchfab',
          color: 'blue'
        }
      ]
    }
  }
}
</script>

