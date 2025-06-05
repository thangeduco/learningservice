import { LearningRepository } from '../../domain/repositories/learning.repository';
import { StudentBadge, } from '../../domain/models/student-badge.model';
import { VideoSession } from '../../domain/models/video-session.model';
import { WorksheetSubmission } from '../../domain/models/worksheet-submission.model';

export class LearningService {
  constructor(private repo: LearningRepository) { }

  async awardBadge(badge: StudentBadge): Promise<void> {
    await this.repo.addStudentBadge(badge);
  }

  async recordVideoSession(session: VideoSession): Promise<void> {
    await this.repo.logVideoSession(session);
  }

  async submitWorksheet(submission: WorksheetSubmission): Promise<void> {
    await this.repo.submitWorksheet(submission);
  }

  async getBadgeCountForCourse(studentId: number, courseId: number): Promise<number> {
    return this.repo.countBadgesByCourse(studentId, courseId);
  }

  async getBadgeCountsByWeek(studentId: number, courseId: number): Promise<{ week: number | null; count: number }[]> {
    return this.repo.countBadgesByWeeks(studentId, courseId);
  }

}