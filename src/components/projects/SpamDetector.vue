<template>
  <v-container>
    <v-layout row wrap align-start>
      <v-flex d-flex xs12 mt-2>
        <h1 class="display-1">Emotion Spam Detector<span class="project-time hidden-sm-and-down">November 2016</span></h1>
      </v-flex>
      <v-flex xs12 my-0>
        <h2 class="headline mb-1">Harvest Twitter open data and detect emotion spams by analyzing tweet features.</h2>
      </v-flex>
      <v-flex xs12 my-2 text-xs-center text-sm-left>
        <template v-for="(tag, idx) in tags">
          <tag-list :tag="tag" :key="idx"></tag-list>
        </template>
      </v-flex>
      <v-flex xs12 mt-2>
        <p>This is a group project for the course <em>LIBR 559N - Text Analytics</em>. This project would not have been possible without the excellent teamwork among my fellow colleagues Qian Yang <small>(UBC)</small>, Lyla Zhao <small>(UBC)</small>, Alex Hur <small>(UBC)</small>, and of couser, the support from our instructor Prof. Muhammad Abdul-Mageed <small>(UBC)</small>.</p>
        <p>We noticed that a lot of text data harvested from Twitter contained a considerable amount of spams which not only enlarged the dataset but also reduced its practicalness. In the scenario of studying emotion with Twitter data, we have successfully trained a machine to detect <strong>emotion spams</strong> <small>(tweets assigned with an emotion hashtag but don't actually express the emotion)</small> with an overall accuracy 88.13%. </p>
        <div class="my-4 text-xs-center">
          <div style="max-width: 480px; margin: 0 auto;">
          <img
            src="/static/spam_ss.png"
            width="100%"
            class="elevation-2"
          />
          <p class="caption mt-2" style="max-width: 550px;">This example shows when using the keyword <em>#anger</em> to search for public tweets, Twitter returns a lot of emotionless content, which is what we defined as <b>emotion spams</b> here.</p>
          </div>
        </div>
        <p>My main role in the team was to: 1) harvest Twitter open data given a specific period of time using emotion keywords from the NRC Hashtag Emotion Lexicon <small>(Mohammad and Turney, 2010)</small>; 2) clean and normalize the collected data; 3) analyze the data statistically and help to train a SVM <small>[Support Vector Machine]</small> model to predict emotion spams with NLTK+Scikit-learn packages; 4) participate in the manual labelling process and the final <a href="/static/pdf/spam_detector_report.pdf" target="_blank">term paper</a>. </p>
        <p>This Python-based project has been later adapted to a webapp by one of our team members, Qian Yang, and through which I hope you will have a more intuitive understanding toward the project.</p>
        <div class="my-3 text-xs-center">
          <v-btn dark color="primary" to="/projects/spam_detector/demo">
            <v-icon left>pageview</v-icon>
            View Live Demo
          </v-btn>
          <a
            class="btn btn--flat grey lighten-2 grey--text text--darken-2"
            href="https://github.com/charonchan1991/tweet-emotion-spam-detection"
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
          name: 'ML',
          fullName: 'Machine Learning',
          color: 'orange'
        },
        {
          name: 'NLP',
          fullName: 'Natural Language Processing',
          color: 'orange'
        },
        {
          name: 'Text Analytics',
          color: 'orange'
        },
        {
          name: 'Data Mining',
          color: 'orange'
        },
        {
          name: 'Python',
          color: 'blue'
        },
        {
          name: 'NLTK',
          color: 'blue'
        },
        {
          name: 'Scikit-learn',
          color: 'blue'
        }
      ]
    }
  }
}
</script>
