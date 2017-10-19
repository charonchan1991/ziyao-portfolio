<template>
  <v-container>
    <v-layout row wrap align-start>
      <v-flex xs12 mt-2 order-xs2 order-md1>
        <h1 class="display-1">About Me</h1>
      </v-flex>
      <v-flex xs12 md8 mt-3 order-xs3 order-md2>
        <p>Hi there! Welcome to my portfolio!</p>
        <p>My name is <em>Ziyao</em> <sup class="grey--text"><i>['zi:'yao]</i></sup>, a recent graduate from the <em>Master's of Library and Information Studies</em> program at UBC, with a specialization in <em>Human-computer Interaction</em> (HCI).</p>
        <p>I am interested in many different areas including but not limited to <em>web &amp; desktop application development, front-end &amp; interaction design, data analysis &amp; visualization, machine learning, 3D modeling &amp; rendering</em>. I have done quite a few successful projects for the past several years, some of which are production works while others are courseworks. I hope you find them interesting through this portfolio.</p>
        <p>I'm currently looking for full-time opportunities in <em>web development</em>, <em>system testing</em> and <em>data mining</em>. I'm generally not very active on social media, but you can always reach me by email.</p>
      </v-flex>
      <v-flex xs12 md4 mt-2 order-xs1 order-md3 text-xs-center>
        <img
          alt="Ziyao"
          class="img-rounded"
          :src="avatar"
          width="180px"
          @click="photoID = Math.abs(photoID - 1)"
        >
        <div class="contact mt-2">
          <v-icon>mail</v-icon>{{email}}
        </div>
        <div class="contact my-1">
          <v-icon>place</v-icon>Vancouver, BC
        </div>
        <div class="contact mt-2 mb-4">
          <v-tooltip bottom>
            <v-btn flat icon color="light-blue darken-1" slot="activator" href="www.linkedin.com/in/ziyao-chen/" target="_blank">
              <v-icon>fa-linkedin</v-icon>
            </v-btn>
            <span>Linkedin</span>
          </v-tooltip>
          <v-tooltip bottom>
            <v-btn flat icon color="grey darken-1" slot="activator" href="https://github.com/charonchan1991" target="_blank">
              <v-icon>fa-github</v-icon>
            </v-btn>
            <span>Github</span>
          </v-tooltip>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      photoID: 0,
      clickCount: 0
    }
  },
  created () {
    this.photoID = (Math.random() < 0.5 ? 0 : 1)
  },
  computed: {
    email () {
      const uid = 'zychen1991'
      const host = 'gmail.com'
      return uid + '@' + host
    },
    avatar () {
      return '/static/avatar_sm_' + this.photoID + '.jpg'
    }
  }
}
</script>

<style lang="stylus" scoped>

  p 
    font-size: 15px
    > em
      font-weight: 500
      font-style: normal

  .img-rounded
    border-radius: 20px

  .contact
    > i
      font-size: 20px
      padding-right: 5px

    & a
      margin: 0

</style>
