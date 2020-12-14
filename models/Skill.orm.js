import { Model } from '@vuex-orm/core'

export default class SkillORM extends Model {
  static entity = 'skills'

  static fields() {
    return {
      id: this.attr(null),
      title: this.string(''),
    }
  }

  get getTitle() {
    return `${this.title}`.trim()
  }
}
