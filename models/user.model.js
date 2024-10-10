import pool from '../database/db_conect.js';

class UserModel { 
    async create({ username, email, password }) {
        try {
            const request = await pool.getConnection();
            const query = `
                INSERT INTO users (username, email, password) 
                VALUES (@username, @email, @password);
                SELECT SCOPE_IDENTITY() AS id, @email AS email
            `;

            request.input('username', mssql.VarChar, username);
            request.input('email', mssql.VarChar, email);
            request.input('password', mssql.VarChar, password);

            const result = await request.query(query);
            return result.recordset[0];
        } catch (error) {
            console.error('Error en create:', error);
            throw error;
        }
    } 
        
}

export default new UserModel();
