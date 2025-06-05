"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBadgeCountsByWeek = exports.getBadgeCountForCourse = exports.submitWorksheet = exports.recordVideoSession = exports.awardBadge = void 0;
const learning_service_1 = require("../../application/services/learning.service");
const pg_learning_repository_1 = require("../../infrastructure/repositories/pg-learning.repository");
const repo = new pg_learning_repository_1.PostgresLearningRepository();
const service = new learning_service_1.LearningService(repo);
const awardBadge = async (req, res) => {
    await service.awardBadge(req.body);
    res.status(201).json({ message: 'Badge awarded' });
};
exports.awardBadge = awardBadge;
const recordVideoSession = async (req, res) => {
    await service.recordVideoSession(req.body);
    res.status(201).json({ message: 'Video session recorded' });
};
exports.recordVideoSession = recordVideoSession;
const submitWorksheet = async (req, res) => {
    await service.submitWorksheet(req.body);
    res.status(201).json({ message: 'Worksheet submitted' });
};
exports.submitWorksheet = submitWorksheet;
const getBadgeCountForCourse = async (req, res) => {
    const { student_id, course_id } = req.query;
    const count = await service.getBadgeCountForCourse(Number(student_id), Number(course_id));
    res.json({ count });
};
exports.getBadgeCountForCourse = getBadgeCountForCourse;
const getBadgeCountsByWeek = async (req, res) => {
    const { student_id, course_id } = req.query;
    const data = await service.getBadgeCountsByWeek(Number(student_id), Number(course_id));
    res.json({ badges_by_week: data });
};
exports.getBadgeCountsByWeek = getBadgeCountsByWeek;
