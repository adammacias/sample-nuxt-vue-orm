import { Model } from '@vuex-orm/core'
import PokemonPlayerORM from './PokemonPlayer.orm'
import PlayerORM from './Player.orm'

export default class PokemonORM extends Model {
  static entity = 'pokemons'

  static fields() {
    return {
      id: this.attr(null),
      name: this.string(''),
      playe: this.string(''),
      is_active: this.boolean(false),
      players: this.belongsToMany(
        PlayerORM,
        PokemonPlayerORM,
        'pokemon_id',
        'player_id'
      ),
    }
  }

  get getFirstName() {
    return `${this.first_name}`.trim()
  }

  get getLastName() {
    return `${this.last_name}`.trim()
  }

  get getFullName() {
    if (!this.getFirstName && !this.getLastName) {
      return 'Sem nome'
    }

    return `${this.getFirstName} ${this.getLastName}`
  }

  get isActive() {
    return this.is_active && this.id
  }
}
