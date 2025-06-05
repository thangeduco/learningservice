import { pool } from '../db';
import { LearningRepository } from '../../domain/repositories/learning.repository';
import { StudentBadge } from '../../domain/models/student-badge.model';
import { VideoSession } from '../../domain/models/video-session.model';
import { WorksheetSubmission } from '../../domain/models/worksheet-submission.model';

export class PostgresLearningRepository implements LearningRepository {
  async addStudentBadge(badge: StudentBadge): Promise<void> {
    await pool.query(
      `INSERT INTO student_badges (student_id, course_id, course_week_id, badge_type, awarded_reason, awarded_at)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [badge.student_id, badge.course_id, badge.course_week_id, badge.badge_type, badge.awarded_reason, badge.awarded_at]
    );
  }

  async logVideoSession(session: VideoSession): Promise<void> {
    await pool.query(
      `INSERT INTO video_sessions (student_id, video_lecture_id, course_week_id, started_at, ended_at, duration_seconds, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [session.student_id, session.video_lecture_id, session.course_week_id, session.started_at, session.ended_at, session.duration_seconds, session.created_at]
    );
  }

  async submitWorksheet(submission: WorksheetSubmission): Promise<void> {
    await pool.query(
      `INSERT INTO worksheet_submissions (student_id, worksheet_id, course_week_id, attempt_number, score, review, submitted_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [submission.student_id, submission.worksheet_id, submission.course_week_id, submission.attempt_number, submission.score, submission.review, submission.submitted_at]
    );
  }

  async countBadgesByCourse(studentId: number, courseId: number): Promise<number> {
    const result = await pool.query(
      `SELECT COUNT(*) FROM student_badges WHERE student_id = $1 AND course_id = $2`,
      [studentId, courseId]
    );
    return parseInt(result.rows[0].count, 10);
  }

  async countBadgesByWeeks(studentId: number, courseId: number): Promise<{ week: number | null; count: number }[]> {
    const result = await pool.query(
      `SELECT course_week_id as week, COUNT(*) FROM student_badges WHERE student_id = $1 AND course_id = $2 GROUP BY course_week_id ORDER BY course_week_id`,
      [studentId, courseId]
    );
    return result.rows.map(row => ({ week: row.week, count: parseInt(row.count, 10) }));
  }

}