import { Request, Response } from 'express';
import { LearningService } from '../../application/services/learning.service';
import { PostgresLearningRepository } from '../../infrastructure/repositories/pg-learning.repository';

const repo = new PostgresLearningRepository();
const service = new LearningService(repo);

export const awardBadge = async (req: Request, res: Response) => {
  await service.awardBadge(req.body);
  res.status(201).json({ message: 'Badge awarded' });
};

export const recordVideoSession = async (req: Request, res: Response) => {
  await service.recordVideoSession(req.body);
  res.status(201).json({ message: 'Video session recorded' });
};

export const submitWorksheet = async (req: Request, res: Response) => {
  await service.submitWorksheet(req.body);
  res.status(201).json({ message: 'Worksheet submitted' });
};

export const getBadgeCountForCourse = async (req: Request, res: Response) => {
  const { student_id, course_id } = req.query;
  const count = await service.getBadgeCountForCourse(Number(student_id), Number(course_id));
  res.json({ count });
};

export const getBadgeCountsByWeek = async (req: Request, res: Response) => {
  const { student_id, course_id } = req.query;
  const data = await service.getBadgeCountsByWeek(Number(student_id), Number(course_id));
  res.json({ badges_by_week: data });
};
