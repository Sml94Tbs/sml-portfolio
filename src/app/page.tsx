import About from '@/app/components/contents/about';
import Accueil from '@/app/components/contents/home';
import Skill from '@/app/components/contents/skill';
import Portfolio from '@/app/components/contents/portfolio';

export default function Pages() {
  const punycode = require('punycode');
  return (
    <main>
      <div id="accueil">
        <Accueil />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='skill'>
        <Skill />
      </div>
      <div id='portfolio'>
        <Portfolio />
      </div>
    </main>
  );
}
