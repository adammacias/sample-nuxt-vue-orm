import { Database } from '@vuex-orm/core'

import PokemonORM from '@/models/Pokemon.orm'
import SkillORM from '@/models/Skill.orm'
import PlayerORM from '@/models/Player.orm'
import PokemonPlayerORM from '@/models/PokemonPlayer.orm'

const database = new Database()

database.register(PokemonORM)
database.register(SkillORM)
database.register(PlayerORM)
database.register(PokemonPlayerORM)

export default database
