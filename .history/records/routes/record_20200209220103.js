import express from 'express';
import RecordController from '../controllers/record';

const router = express.Router();

router.post('/records', RecordController.createRecord);
router.get('/records', RecordController.getAllRecords);
router.patch('/records/:id', RecordController.updateSingleCategory);
router.delete('/records/:id', RecordController.deleteSingleCategory);

module.exports = router;