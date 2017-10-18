import Vue from 'vue'
import Router from 'vue-router'

import About from '@/components/About'
import Demo from '@/components/Demo'
import PageNotFound from '@/components/PageNotFound'

import MagicEXIF from '@/components/projects/MagicEXIF'
import MazDome from '@/components/projects/MazDome'
import Portfolio from '@/components/projects/Portfolio'
import ShaReader from '@/components/projects/ShaReader'
import SpamDetector from '@/components/projects/SpamDetector'
import TodoGo from '@/components/projects/TodoGo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      redirect: '/'
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
      path: '/projects/todogo',
      name: 'TodoGo',
      component: TodoGo
    },
    {
      path: '/projects/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/projects/mazdome',
      name: 'MazDome',
      component: MazDome
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
        instruction: 'Please go to Twitter and search for a public tweet which contains at least one emotion-word hashtag (e.g. <em>#sad</em>, <em>#anger</em>), or simply copy one of the examples given in the demo. Please make sure you have copied everything in the tweet including all hashtags, links, emojis, and other possible components.'
      }
    },
    {
      path: '/projects/todogo/demo',
      name: 'TodoGoDemo',
      component: Demo,
      props: {
        name: 'TodoGoDemo',
        url: 'https://chatroom-53e95.firebaseapp.com/',
        width: '100%',
        height: '750px',
        lgOnly: true,
        instruction: 'Although this is a very simple webapp, it still has pretty much everything that a todo list app should have. I hope you will find it interesting. '
      }
    },
    {
      path: '/'
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ],
  mode: 'history'
})
