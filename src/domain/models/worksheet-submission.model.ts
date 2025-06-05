export interface WorksheetSubmission {
  id: number;
  student_id: number;
  worksheet_id: number;
  course_week_id: number;
  attempt_number: number;
  score: number;
  review: string;
  submitted_at: Date;
}