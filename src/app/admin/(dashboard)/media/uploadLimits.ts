// Shared by the upload button (client-side pre-check) and the server action
// (authoritative check). The total must stay under the 10 MB server action
// body limit in next.config.ts.
const MAX_FILE_MB = 5;

export const MEDIA_UPLOAD_LIMITS = {
  maxFiles: 10,
  maxFileMb: MAX_FILE_MB,
  maxFileBytes: MAX_FILE_MB * 1024 * 1024,
  maxTotalMb: 9.5,
  maxTotalBytes: 9.5 * 1024 * 1024,
} as const;
