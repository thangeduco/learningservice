import { StudentBadge } from '../models/student-badge.model';
import { VideoSession } from '../models/video-session.model';
import { WorksheetSubmission } from '../models/worksheet-submission.model';

export interface LearningRepository {
  addStudentBadge(badge: StudentBadge): Promise<void>;
  logVideoSession(session: VideoSession): Promise<void>;
  submitWorksheet(submission: WorksheetSubmission): Promise<void>;
  countBadgesByCourse(studentId: number, courseId: number): Promise<number>;
  countBadgesByWeeks(studentId: number, courseId: number): Promise<{ week: number | null; count: number }[]>;
}