import database from '../models';

class AuthorService {
	
  static async getAllAuthors() {
    try {
      return await database.Authors.findAll();
    } catch (error) {
      throw error;
    }
	}

	static async addAuthor(newAuthor) {
    try {
			await database.sequelize.transaction(async t => 
        await database.Authors.create(newAuthor, { transaction: t })
      );
    } catch (error) {
      throw error;
    }
	}

	static async getAuthor(id) {
    try {
      return await database.Authors.findOne({ where: { id: Number(id) } });
    } catch (error) {
      throw error;
    }
	}
	
	static async updateAuthor(id, updatedInfo) {
		try {
			await database.sequelize.transaction(async t => 
				await database.Authors.update(updatedInfo, { where: { id: Number(id) } })
				)
			} catch (error) {
				throw error;
			}
		}
		
	static async deleteAuthor(id) {
		try {
			return await database.Authors.destroy({ where: { id: Number(id) } });
		} catch (error) {
			throw error;
		}
	}
}

export default AuthorService;
