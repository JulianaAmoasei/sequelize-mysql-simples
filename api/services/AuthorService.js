import database from '../models'

class AuthorService {
  static async getAllAuthors() {
    try {
      return await database.Authors.findAll()
    } catch (error) {
      throw error
    }
  }
}

export default AuthorService