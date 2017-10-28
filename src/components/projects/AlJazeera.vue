<template>
  <v-container>
    <v-layout row wrap align-start>
      <v-flex d-flex xs12 mt-2>
        <h1 class="display-1">Harvesting Al Jazeera<span class="project-time hidden-sm-and-down">October 2016</span></h1>
      </v-flex>
      <v-flex xs12 my-0>
        <h2 class="headline mb-1">Harvest news data from the Al Jazeera English news network.</h2>
      </v-flex>
      <v-flex xs12 my-2 text-xs-center text-sm-left>
        <template v-for="(tag, idx) in tags">
          <tag-list :tag="tag" :key="idx"></tag-list>
        </template>
      </v-flex>
      <v-flex xs12 mt-2>
        <p>This project was part of an unpublished research led by Prof. Maite Taboada <small>(SFU)</small> at the request of Prof. Muhammad Abdul-Mageed <small>(UBC)</small>.</p>
        <p>The Al Jazeera News dataset contains information of over 42,000 articles crawled from the Al Jazeera English website <small>(http://www.aljazeera.com/)</small> since 2006 when the website initially went online. The Al Jazeera is a Qatar-based bilingua network Al Jazeera that provides news coverage both in Arabic and in English. It is the most influential news media in the middle east and has emerged as one of the main sources of global news in the last few years.</p>
        <p>The data was collected automatically into an Excel spreadsheet using a VBA script written by myself. Due to language barrier, only the English version of the Al Jazeera site has been crawled. Each record has nine primary attributes <small>(<i>article unique ID, url, collected time, section, crawl depth, publication time, article title, article subheading, topic tags</i>)</small>, two data files <small>(<i>article full text in TXT format, user-generated comments in JSON format</i>)</small>, and three derived attributes <small>(<i>number of words in the article, number of comment threads, total number of comments made to the article</i>)</small>. These data will be further analyzed with machine learning and NPL techniques.</p>
        <p>A snapshot of the dataset has also been used for a <router-link to="/projects/aljazeera_va">data visualization project</router-link>.</p>
        <img
          src="/static/aljazeera_ss.png"
          width="100%"
          class="elevation-2 mb-1"
        />
        <p class="caption mb-4">A snapshot of the collected data.</p>
        <img
          src="/static/vba.jpg"
          width="100%"
          class="elevation-2 mb-1"
        />
        <p class="caption mb-2">Part of the core crawler code.</p>
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
          name: 'Text Analytics',
          color: 'orange'
        },
        {
          name: 'Data Mining',
          color: 'orange'
        },
        {
          name: 'VBA',
          color: 'blue'
        },
        {
          name: 'JSON',
          color: 'blue'
        },
        {
          name: 'RegEx',
          fullName: 'Regular Expression',
          color: 'blue'
        }
      ]
    }
  }
}
</script>
