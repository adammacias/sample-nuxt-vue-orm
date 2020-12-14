import { Model } from '@vuex-orm/core'

export default class PokemonPlayerORM extends Model {
  static entity = 'pokemonPlayer'

  static primaryKey = ['pokemon_id', 'player_id']

  static fields() {
    return {
      pokemon_id: this.attr(null),
      player_id: this.attr(null),
    }
  }
}
