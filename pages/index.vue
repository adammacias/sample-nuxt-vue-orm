<template>
  <main class="section">
    <h1>Sample Vue ORM</h1>

    <nav class="buttons my-5">
      <b-button @click="fetchPlayers">Carregar players</b-button>
      <b-button @click="fetchPokemons">Carregar pokemons</b-button>
      <b-button @click="fetchSkills">Carregar skills</b-button>
    </nav>
  </main>
</template>

<script>
/* eslint-disable no-console */
import PlayerORM from '@/models/Player.orm'
import PokemonORM from '@/models/Pokemon.orm'
import SkillORM from '@/models/Skill.orm'

export default {
  name: 'HomePage',

  methods: {
    storeDebug() {
      console.debug({
        // Itens
        allPokemons: this.$store.$db().model('pokemons').all(),

        // Itens Query Builder
        getPlayers: this.$store.$db().model('players').query().withAll().get(),
        getSkills: this.$store.$db().model('skills').query().withAll().get(),
        getPokemons: this.$store
          .$db()
          .model('pokemons')
          .query()
          .withAll()
          .get(),

        // Item single
        findPokemonById: this.$store.$db().model('pokemons').find(1),

        // Itens by ids
        findPokemonByIds: this.$store.$db().model('pokemons').findIn([1, 2]),

        // First e Last Item
        firstPokemon: this.$store.$db().model('pokemons').query().first(),
        lastPokemon: this.$store.$db().model('pokemons').query().last(),

        // Where Clauses
        wherePlayerIsActive: this.$store
          .$db()
          .model('players')
          .query()
          .where('is_active', true)
          .get(),
        wherePlayerIsNotActive: this.$store
          .$db()
          .model('players')
          .query()
          .whereHasNot('is_active', true)
          .get(),
      })
    },

    async fetchPlayers() {
      await PlayerORM.api().get('players')
      this.storeDebug()
    },

    async fetchPokemons() {
      await PokemonORM.api().get('pokemons')
      this.storeDebug()
    },

    async fetchSkills() {
      await SkillORM.api().get('skills')
      this.storeDebug()
    },
  },
}
</script>
