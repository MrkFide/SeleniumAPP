import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.on('connection', (connection) => {
  console.log(`Conexión con el servidor de base de datos ${connection.threadId}`);
});

export default pool;