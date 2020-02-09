require('../models/record')();
import db from '../models/db';
import generateId from '../models/identity';
import { validate } from '../models/validator';

class RecordController {
	static async createRecord(req, res) {
		const { error } = validate(req.body);
		if (error) {
		  return res.status(400).json({
			status: 'error',
			error: error.details[0].message,
		  });
		}
	
		const { productName } = req.body;
		const product = await db.query('SELECT * FROM records WHERE productName=$1', [productName]);
		if (product.rowCount > 0) {
		  return res.status(400).json({
			status: 'error',
			data: {
			  message: 'Product already exists',
			},
		  });
		}
	
		const recordId = generateId(3532);
		await db.query(
		  `INSERT INTO records (recordId, productName, quantity, price) 
				VALUES ($1, $2, $3, $4)`, [recordId, productName, quantity, price],
		);
		return res.status(201).json({
		  status: 'success',
		  recordId,
		  message: 'Record Successfully created',
		});
	  }


    static async getAllRecords(req, res) {
      const records = await db.query('SELECT * FROM records');
      res.status(200).json({
        status: 'Success',
        data: records.rows,
      });
    }
  
    static async updateSingleRecord(req, res) {
      const { error } = validate(req.body);
      if (error) return res.status(400).json({ message: error.details[0].message });
  
      const recordId = req.params.id;
      const { productName } = req.body;
      const record = await db.query(
        `UPDATE records
              SET productName = $1
              WHERE recordId = ${recordId} `,
        [productName],
      );
  
      if (record.rowCount === 0) return res.status(404).json({ message: 'Category Not Found' });
      return res.status(201).json({
        status: 'success',
        message: 'Record successfully updated',
      });
    }
  
    static async deleteSingleRecord(req, res) {
      const recordId = req.params.id;
      const record = await db.query(`DELETE FROM records WHERE recordId = ${recordId}`);
      if (record.rowCount === 0) return res.status(404).json({ message: 'Record Not Found' });
      return res.status(202).json({
        status: 'success',
        message: 'Record successfully deleted',
      });
    }
  }
  
  
  module.exports = RecordController;