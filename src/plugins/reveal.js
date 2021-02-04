import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealMath from 'reveal.js/plugin/math/math.esm.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';

export default {
  install: (app, options) => {
    app.provide('RevealPlugins', {Markdown, RevealMath});
    app.provide('Reveal', Reveal);
  },
};
