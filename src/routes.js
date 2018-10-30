import top from './components/top.vue'
import about from './components/about.vue'
import skill from './components/skill.vue'
import work from './components/work.vue'

// インポートしたコンポーネントを表示したいパスと結びつける
export const routes = [
  {
    path: '/',
    compotent: top
  },
  {
    path: '/about',
    compotent: about
  },
  {
    path: '/skill',
    compotent: skill
  },
  {
    path: '/work',
    compotent: work
  }
]
