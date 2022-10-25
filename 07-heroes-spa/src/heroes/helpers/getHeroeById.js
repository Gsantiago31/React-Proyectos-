import { heroes } from "../data/heroes-with-desc"


export const getHeroeById = ( id ) => {
    return heroes.find( hero => hero.id === id );
}