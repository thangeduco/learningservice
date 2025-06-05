import { Router } from 'express';
import {
  awardBadge,
  recordVideoSession,
  submitWorksheet,
  getBadgeCountForCourse,
  getBadgeCountsByWeek
} from '../controllers/learning.controller';

const router = Router();

router.post('/badges', awardBadge);
router.post('/video-sessions', recordVideoSession);
router.post('/worksheet-submissions', submitWorksheet);
router.get('/badges/course', getBadgeCountForCourse);
router.get('/badges/weeks', getBadgeCountsByWeek);

export default router;