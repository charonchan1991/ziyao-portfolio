import Vue from 'vue'
import Router from 'vue-router'

import Demo from '@/components/Demo'
import About from '@/components/About'
import ShaReader from '@/components/projects/ShaReader'
import MagicEXIF from '@/components/projects/MagicEXIF'
import SpamDetector from '@/components/projects/SpamDetector'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects/shareader',
      name: 'ShaReader',
      component: ShaReader
    },
    {
      path: '/projects/magicexif',
      name: 'MagicEXIF',
      component: MagicEXIF
    },
    {
      path: '/projects/spam_detector',
      name: 'SpamDetector',
      component: SpamDetector
    },
    {
      path: '/projects/shareader/demo',
      name: 'ShaReaderDemo',
      component: Demo,
      props: {
        name: 'ShaReader',
        url: 'http://94gl6u.axshare.com/page_a1.html#p=content&c=1',
        width: '768px',
        height: '1042px',
        lgOnly: true,
        instruction: 'Did you notice the greenish bar on the right? Start your exploration by simply pressing and dragging along it, release the drag anywhere you think is interesting.'
      }
    },
    {
      path: '/projects/spam_detector/demo',
      name: 'SpamDetectorDemo',
      component: Demo,
      props: {
        name: 'SpamDetectorDemo',
        url: 'https://twitter-emotion-spam.herokuapp.com/',
        width: '100%',
        height: '880px',
        lgOnly: true,
        instruction: 'Please go to Twitter and search for a public tweet which contains at least one emotion-word hashtag (e.g. <em>#sad</em>, <em>#anger</em>). Simply copy and paste it into the textbox, click the button, and see the magic!'
      }
    },
    {
      path: '/'
    },
    {
      path: '*',
      name: 'PageNotFound',
      redirect: '/'
    }
  ],
  mode: 'history'
})
