import Accueil from '@/app/components/contents/home';
import About from '@/app/components/contents/about';

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
    </main>
  );
}
