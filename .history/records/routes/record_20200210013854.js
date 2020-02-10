import express from 'express';
import RecordController from '../controllers/record';
import secure from '../middlewares/secure';

const router = express.Router();

router.post('/records', RecordController.createRecord);
router.get('/records', RecordController.getAllRecords);
router.patch('/records/:id', RecordController.updateSingleRecord);
router.delete('/records/:id', RecordController.deleteSingleRecord);

module.exports = router;