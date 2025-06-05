export interface VideoSession {
  id: number;
  student_id: number;
  video_lecture_id: number;
  course_week_id: number;
  started_at: Date;
  ended_at: Date;
  duration_seconds: number;
  created_at: Date;
}