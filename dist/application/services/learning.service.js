"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearningService = void 0;
class LearningService {
    constructor(repo) {
        this.repo = repo;
    }
    async awardBadge(badge) {
        await this.repo.addStudentBadge(badge);
    }
    async recordVideoSession(session) {
        await this.repo.logVideoSession(session);
    }
    async submitWorksheet(submission) {
        await this.repo.submitWorksheet(submission);
    }
    async getBadgeCountForCourse(studentId, courseId) {
        return this.repo.countBadgesByCourse(studentId, courseId);
    }
    async getBadgeCountsByWeek(studentId, courseId) {
        return this.repo.countBadgesByWeeks(studentId, courseId);
    }
}
exports.LearningService = LearningService;
