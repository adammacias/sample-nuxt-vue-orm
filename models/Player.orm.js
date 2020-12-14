import { Model } from '@vuex-orm/core'
import PokemonPlayerORM from './PokemonPlayer.orm'
import PokemonORM from './Pokemon.orm'

export default class PlayerORM extends Model {
  static entity = 'players'

  static fields() {
    return {
      id: this.attr(null),
      first_name: this.string(''),
      last_name: this.string(''),
      is_active: this.boolean(false),
      pokemons: this.belongsToMany(
        PokemonORM,
        PokemonPlayerORM,
        'player_id',
        'pokemon_id'
      ),
    }
  }
}
