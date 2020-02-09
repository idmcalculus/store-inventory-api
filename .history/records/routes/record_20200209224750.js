import express from 'express';
import RecordController from '../controllers/record';
import secure from '../middlewares/secure';

const router = express.Router();

router.post('/records', secure.protect, RecordController.createRecord);
router.get('/records', secure.protect, RecordController.getAllRecords);
router.patch('/records/:id', secure.protect, RecordController.updateSingleRecord);
router.delete('/records/:id', secure.protect, RecordController.deleteSingleRecord);

module.exports = router;