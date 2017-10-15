<template>
  <v-container>
    <v-layout row wrap align-start>
      <v-flex d-flex xs12 mt-2>
        <h1 class="display-1">MazDome Renderings<span class="project-time hidden-sm-and-down">August 2016</span></h1>
      </v-flex>
      <v-flex xs12 my-0>
        <h2 class="headline mb-1">Photorealistic renderings for the automatic bike-parking products of Mazdis Inc.</h2>
      </v-flex>
      <v-flex xs12 my-2 text-xs-center text-sm-left>
        <v-chip label small class="grey white--text hover--teal"><v-icon left>label</v-icon>3D</v-chip>
        <v-tooltip top>
          <v-chip label small class="grey white--text hover--teal" slot="activator"><v-icon left>label</v-icon>VR/AR</v-chip>
          <span>Virtual Reality / Augmented Reality</span>
        </v-tooltip>
        <v-chip label small class="grey white--text hover--teal"><v-icon left>label</v-icon>Image Processing</v-chip>
        <v-chip label small class="grey white--text hover--blue"><v-icon left>label</v-icon>Blender</v-chip>
        <v-chip label small class="grey white--text hover--blue"><v-icon left>label</v-icon>Cycles</v-chip>
        <v-chip label small class="grey white--text hover--blue"><v-icon left>label</v-icon>Sketchfab</v-chip>
      </v-flex>
      <v-flex xs12 mt-2>
        <p>These are some of renderings that I created for Mazdis Inc. during my co-op period. Mazdis Inc. is a Vancouver-based startup company that designs and engineers innovative automatic bicycle parking systems.</p>
        <p>3D models for these conceptual products were created with Blender. The photorealistic images were rendered with the Cycles renderer and enhanced with Adobe Photoshop. Animations were also created for use in the Sketchfab VR experience. However, due to commercial reasons, these VR animations are not available in this portfollio.</p>
        <img
          src="/static/mazdis_sabps_2_0.jpg"
          width="100%"
          class="elevation-2 mb-2"
        />
        <img
          src="/static/mazdis_sabps_2_1.jpg"
          width="100%"
          class="elevation-2 mb-2"
        />
        <img
          src="/static/mazdis_sabps_1_0.jpg"
          width="100%"
          class="elevation-2 mb-2"
        />
        <img
          src="/static/mazdis_sabps_1_1.jpg"
          width="100%"
          class="elevation-2 mb-2"
        />
        <img
          src="/static/mazdis_rack_0.jpg"
          width="100%"
          class="elevation-2"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
  ul.related-projects
    li
      padding-bottom: 5px
</style>
