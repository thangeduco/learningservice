export interface StudentBadge {
  id: number;
  student_id: number;
  course_id: number;
  course_week_id?: number;
  badge_type: string;
  awarded_reason: string;
  awarded_at: Date;
}