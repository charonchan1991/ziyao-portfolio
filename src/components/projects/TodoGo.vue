<template>
  <v-container>
    <v-layout row wrap align-start>
      <v-flex d-flex xs12 mt-2>
        <h1 class="display-1">TodoGo<span class="project-time hidden-sm-and-down">December 2016</span></h1>
      </v-flex>
      <v-flex xs12 my-0>
        <h2 class="headline mb-1">A simple todo list webapp developed with React.js + Firebase for practice purpose.</h2>
      </v-flex>
      <v-flex xs12 my-2 text-xs-center text-sm-left>
        <template v-for="(tag, idx) in tags">
          <tag-list :tag="tag" :key="idx"></tag-list>
        </template>
      </v-flex>
      <v-flex xs12 mt-2>
        <p>This is a very simple todo list webapp developed for practice purpose. You can easily add, edit, check, and delete a todo in this webapp. The frontend is built with React.js while the backend is Firebase. Bootstrap is also used for the responsive layout. Full source code of this project is available on Github if you are interested.</p>
        <img
          src="/static/todogo_ss.jpg"
          width="100%"
          class="elevation-2"
        />
        <div class="my-3 text-xs-center">
          <v-btn dark color="primary" to="/projects/todogo/demo">
            <v-icon left>pageview</v-icon>
            View Live Demo
          </v-btn>
          <a
            class="btn btn--flat grey lighten-2 grey--text text--darken-2"
            href="https://github.com/charonchan1991/react-todogo"
            target="_blank"
          >
            <div class="btn__content">
              <v-icon left>fa-github</v-icon>
              Source Code
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
          name: 'Web Dev',
          fullName: 'Web Development',
          color: 'blue'
        },
        {
          name: 'Web App',
          color: 'blue'
        },
        {
          name: 'Frontend',
          color: 'blue'
        },
        {
          name: 'React.js',
          color: 'blue'
        },
        {
          name: 'Firebase',
          color: 'blue'
        },
        {
          name: 'JS (ES6)',
          fullName: 'JavaScript ES6',
          color: 'blue'
        },
        {
          name: 'Flux',
          color: 'blue'
        },
        {
          name: 'Bootstrap',
          color: 'blue'
        },
        {
          name: 'Webpack',
          color: 'blue'
        },
        {
          name: 'UX/UI',
          color: 'green'
        }
      ]
    }
  }
}
</script>
