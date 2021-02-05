import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealMath from 'reveal.js/plugin/math/math.esm.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import '../assets/css/main.scss';
// import '../assets/css/slides.css';
// import '../assets/css/deck.css';

export default {
  install: (app, options) => {
    app.provide('RevealPlugins', {Markdown, RevealMath});
    app.provide('Reveal', Reveal);
  },
};
