<template>
  <v-container>
    <v-layout row wrap align-start>
      <v-flex d-flex xs12 mt-2>
        <h1 class="display-1">ShaReader<span class="project-time hidden-sm-and-down">April 2015</span></h1>
      </v-flex>
      <v-flex xs12 my-0>
        <h2 class="headline mb-1">An interactive interface for social e-book applications.</h2>
      </v-flex>
      <v-flex xs12 my-2 text-xs-center text-sm-left>
        <v-chip label small class="grey white--text hover--green"><v-icon left>label</v-icon>UX/UI</v-chip>
        <v-tooltip top>
          <v-chip label small class="grey white--text hover--green" slot="activator"><v-icon left>label</v-icon>HCI</v-chip>
          <span>Human-computer Interaction</span>
        </v-tooltip>
        <v-tooltip top>
          <v-chip label small class="grey white--text hover--green" slot="activator"><v-icon left>label</v-icon>UCD</v-chip>
          <span>User-centered Design</span>
        </v-tooltip>
        <v-chip label small class="grey white--text hover--red"><v-icon left>label</v-icon>Usability Test</v-chip>
        <v-chip label small class="grey white--text hover--blue"><v-icon left>label</v-icon>Prototyping</v-chip>
        <v-chip label small class="grey white--text hover--blue"><v-icon left>label</v-icon>Axure</v-chip>
      </v-flex>
      <v-flex xs12 mt-2>
        <iframe
          src="https://player.vimeo.com/video/167031484?color=ffffff&byline=0&portrait=0&title=0"
          class="video-responsive mb-3"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen>
        </iframe>
        <p><strong>ShaReader</strong> is a course project <small>[CPSC 554M - Research Topics in Human-computer Interaction]</small> that aims to improve immersive shared reading experience by incorporating much less distracting and yet handy enough social annotations into e-book applications. This project would not have been possible without the excellent teamwork among my fellow colleagues Qian Yang <small>(UBC)</small>, Lyla Zhao <small>(UBC)</small>, Hongyi Wen <small>(Cornell University)</small>, and of couser, the support from our instructor Prof. Joanna McGrenere <small>(UBC)</small>.</p>
        <p>My main role in the team was to implement all interactive components of the high-fidelity prototype with Axure PR, test it for bugs and iterate the design, film and edit the project video with Adobe Premiere, and to participate in discussions at every stage of design as well as the term paper.</p>
        <img
          src="/static/shareader_ss.png"
          width="100%"
        />
        <div class="mt-2 text-xs-center">
          <v-btn dark color="primary" to="/projects/shareader/demo">
          <v-icon left>pageview</v-icon>
            View Live Demo
          </v-btn>
        </div>
        <h3 class="title mt-4">Evaluation</h3>
        <p>Standard usability evaluation was also done for this project. We compared our ShaReader prototype against another one which imitates the interface of a popular commercial e-reader application (hereinafter referred to as 'KReader'). Ten participants were asked to perform same tasks on both prototypes. To minimaize the effects of individual differences, we adopted a factorial within-subject design for our evaluation process.</p>
        <p>Time performance for each task on ShaReader was overall better than that on KReader <small>(<i>p</i> < .05)</small>. As for satisfaction, ShaReader is significantly better in <i>usefulness</i> <small>(<i>p</i> < .01)</small> and <i>task completion easiness</i> <small>(<i>p</i> < .01)</small>. A marginal significance was also observed for <i>ease to use</i> <small>(<i>p</i> < .1)</small>. However, no statistically significant result was observed for the <i>learnability</i> <small>(<i>p</i> = .26)</small> and <i>non-distractiveness</i> <small>(<i>p</i> = .30)</small> metric.</p>
        <p>If you are interested in the evaluation design and final results, please refer to our <a href="/static/pdf/shareader_report.pdf" target="_blank">term paper</a> <small>(unpublished)</small>.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>

</style>
