import DefaultTheme from 'vitepress/theme'
import DocNav from '../components/DocNav.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DocNav', DocNav)
  }
}
