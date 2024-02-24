import Accueil from '@/app/components/contents/home';

export default function Pages() {
  const punycode = require('punycode');
  return (
    <main>
      <div id="accueil">
        <Accueil />
      </div>
    </main>
  );
}
