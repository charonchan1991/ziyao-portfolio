<template>
  <v-layout class="project-list">
    <v-flex xs12>
      <v-card height="100%">
        <v-list three-line class="transparent py-0">
          <template v-for="(item, idx) in items">
            <project-list :item="item" :key="idx" @openDialog="openDialog"></project-list>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import ProjectList from './tab/TabList'
export default {
  components: {
    'project-list': ProjectList
  },
  data () {
    return {
      items: [
        { header: 'Machine Learning', icon: 'adb' },
        {
          preview: '/static/spam.jpg',
          title: 'Twitter Emotion Spam Detector',
          stacks: ['Python', 'NLTK'],
          subtitle: 'Harvest Twitter open data and analyze tweet features to detect emotion spams with machine learning techniques.',
          route: '/projects/spam_detector'
        },
        {
          preview: '/static/aljazeera_2.jpg',
          title: 'Harvesting Al Jazeera News',
          stacks: ['Excel', 'VBA'],
          subtitle: 'Harvest news data (e.g. body text, user-generated comments) from the Al Jazeera English news network.',
          route: '/projects/aljazeera'
        }
      ]
    }
  },
  methods: {
    openDialog () {
      this.$emit('openDialog')
    }
  }
}
</script>
