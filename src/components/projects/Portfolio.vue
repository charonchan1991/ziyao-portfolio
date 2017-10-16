<template>
  <v-container>
    <v-layout row wrap align-start>
      <v-flex d-flex xs12 mt-2>
        <h1 class="display-1">Portfolio<span class="project-time hidden-sm-and-down">October 2017</span></h1>
      </v-flex>
      <v-flex xs12 my-0>
        <h2 class="headline mb-1">A portfolio that demonstrates some of my past and present projects.</h2>
      </v-flex>
      <v-flex xs12 my-2 text-xs-center text-sm-left>
        <v-tooltip top>
          <v-chip label small class="grey white--text hover--blue" slot="activator"><v-icon left>label</v-icon>Web Dev</v-chip>
          <span>Web Development</span>
        </v-tooltip>
        <v-chip label small class="grey white--text hover--blue"><v-icon left>label</v-icon>Web App</v-chip>
        <v-chip label small class="grey white--text hover--blue"><v-icon left>label</v-icon>Vue.js</v-chip>
        <v-tooltip top>
          <v-chip label small class="grey white--text hover--blue" slot="activator"><v-icon left>label</v-icon>JS (ES6)</v-chip>
          <span>JavaScript ES6</span>
        </v-tooltip>
        <v-chip label small class="grey white--text hover--blue"><v-icon left>label</v-icon>Vuetify</v-chip>
        <v-chip label small class="grey white--text hover--blue"><v-icon left>label</v-icon>Webpack</v-chip>
        <v-chip label small class="grey white--text hover--blue"><v-icon left>label</v-icon>HTML5</v-chip>
        <v-chip label small class="grey white--text hover--green"><v-icon left>label</v-icon>UX/UI</v-chip>
        <v-chip label small class="grey white--text hover--green"><v-icon left>label</v-icon>Responsive Design</v-chip>
      </v-flex>
      <v-flex xs12 mt-2>
        <img
          src="/static/portfolio_ss.jpg"
          width="100%"
          class="elevation-2"
        />
        <p class="caption mb-3">Yes, which is the portfolio you are looking at right now :D</p>
        <p>This portfolio is specially built to demonstrate some of my past and present projects as well as my web development skills. This fully responsive web-based portfolio is built with Vue.js + Vuetify and bundled with webpack. Please note that Internet Explorer is not supported by this portfolio due to its limited support for flexbox layouts and some JavaScript features.</p>
        <img
          src="/static/portfolio_ss_2.jpg"
          width="100%"
          class="elevation-2"
        />
        <p class="mt-3">I have shared the source code of this project on Github. If you would like to modify the portfolio for your own use, feel free to do so as long as you obey to the terms of the MIT license.</p>
        <div class="my-3 text-xs-center">
          <a
            class="btn btn--flat grey lighten-2 grey--text text--darken-2"
            href="https://github.com/charonchan1991/ziyao-portfolio"
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
export default {
}
</script>

<style lang="stylus">
  ul.related-projects
    li
      padding-bottom: 5px
</style>
