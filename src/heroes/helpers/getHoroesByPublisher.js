import { heroes } from "../data";

function getHeroesByPublisher( publisher ) {
 const validüblisher = ['DC Comics', 'Marvel Comics'];

 if ( !validüblisher.includes(publisher)) {
  throw new Error(`${publisher} is not a valid publisher!`);
 }

 return heroes.filter( hero => hero.publisher === publisher );
}

export default getHeroesByPublisher;
