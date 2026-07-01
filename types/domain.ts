export type ID = string;
export type ISODateTime = string;

export type UserRole =
  | "student"
  | "lecturer"
  | "researcher"
  | "alumni"
  | "institution_admin"
  | "professional_body"
  | "platform_admin";

export type VerificationStatus = "unverified" | "pending" | "verified" | "rejected";
export type InstitutionType =
  | "university"
  | "polytechnic"
  | "college"
  | "vocational_school"
  | "nursing_school"
  | "aviation_school"
  | "culinary_school"
  | "music_school"
  | "professional_body";

export type ProgramLevel = "certificate" | "diploma" | "undergraduate" | "postgraduate" | "doctoral" | "professional";
export type AccessTier = "free" | "premium" | "institution" | "restricted";
export type OpportunityType = "scholarship" | "grant" | "loan" | "internship" | "fellowship" | "job" | "exchange" | "competition";
export type ResearchItemType = "thesis" | "paper" | "journal" | "book" | "dataset" | "lecture_material" | "publication";
export type CampusSessionType = "lecture" | "seminar" | "tutorial" | "office_hours" | "exam_review" | "live_event";
export type AssignmentStatus = "draft" | "open" | "closed" | "graded";
export type AttendanceStatus = "present" | "late" | "absent" | "excused";

export interface AuditFields {
  createdAt: ISODateTime;
  updatedAt: ISODateTime;
}

export interface CampusUser extends AuditFields {
  id: ID;
  fullName: string;
  email: string;
  phone?: string;
  country: string;
  role: UserRole;
  verificationStatus: VerificationStatus;
  profilePhotoUrl?: string;
  preferredLanguage: string;
  accessTier: AccessTier;
}

export interface AcademicProfile extends AuditFields {
  id: ID;
  userId: ID;
  institutionId?: ID;
  departmentId?: ID;
  facultyId?: ID;
  courseOfStudy?: string;
  programLevel?: ProgramLevel;
  ageRange?: string;
  demographicCategory?: string;
  interests?: string[];
  contactAddress?: string;
  publicBio?: string;
}

export interface Institution extends AuditFields {
  id: ID;
  name: string;
  slug: string;
  type: InstitutionType;
  country: string;
  city?: string;
  website?: string;
  verificationStatus: VerificationStatus;
  accessTier: AccessTier;
}

export interface Faculty extends AuditFields {
  id: ID;
  institutionId: ID;
  name: string;
  slug: string;
}

export interface Department extends AuditFields {
  id: ID;
  institutionId: ID;
  facultyId?: ID;
  name: string;
  slug: string;
}

export interface Course extends AuditFields {
  id: ID;
  institutionId: ID;
  departmentId?: ID;
  title: string;
  code?: string;
  level?: ProgramLevel;
  lecturerIds: ID[];
}

export interface CampusSession extends AuditFields {
  id: ID;
  courseId: ID;
  title: string;
  type: CampusSessionType;
  startsAt: ISODateTime;
  endsAt?: ISODateTime;
  hostUserId: ID;
  recordingUrl?: string;
}

export interface AttendanceRecord extends AuditFields {
  id: ID;
  sessionId: ID;
  userId: ID;
  status: AttendanceStatus;
  checkedInAt?: ISODateTime;
}

export interface Assignment extends AuditFields {
  id: ID;
  courseId: ID;
  title: string;
  instructions: string;
  dueAt?: ISODateTime;
  status: AssignmentStatus;
}

export interface Opportunity extends AuditFields {
  id: ID;
  title: string;
  type: OpportunityType;
  providerName: string;
  country?: string;
  eligibleCountries?: string[];
  eligibleLevels?: ProgramLevel[];
  applicationUrl?: string;
  deadlineAt?: ISODateTime;
  accessTier: AccessTier;
}

export interface ResearchItem extends AuditFields {
  id: ID;
  title: string;
  type: ResearchItemType;
  authors: string[];
  institutionId?: ID;
  publicationYear?: number;
  abstract?: string;
  documentUrl?: string;
  accessTier: AccessTier;
}

export interface ProfessionalOrganization extends AuditFields {
  id: ID;
  name: string;
  country?: string;
  website?: string;
  field: string;
  verificationStatus: VerificationStatus;
}

export interface LanguagePreference extends AuditFields {
  id: ID;
  userId: ID;
  primaryLanguage: string;
  supportedLanguages: string[];
}

export interface SubscriptionPlan {
  id: ID;
  name: string;
  tier: AccessTier;
  monthlyPriceCents?: number;
  features: string[];
}

export interface AiRequest extends AuditFields {
  id: ID;
  userId: ID;
  intent: "search" | "summary" | "schedule" | "scholarship_match" | "translation" | "research_assist";
  input: string;
  status: "queued" | "completed" | "failed";
}
