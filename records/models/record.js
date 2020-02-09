import db from './db';

module.exports = () => {
  const recordsTable = async () => {
    try {
      await db.query(`CREATE TABLE IF NOT EXISTS records (
            recordId serial PRIMARY KEY,
            productName VARCHAR (50) NOT NULL,
            quantity INTEGER NOT NULL,
            price INTEGER NOT NULL )`);
    } catch (error) {
      console.log(error);
    }
  };
  recordsTable();
};