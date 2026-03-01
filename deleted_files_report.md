# 🗑️ File Upload Module — Deleted Files Report

> **Date:** 2026-03-01
> **Purpose:** Document every file deleted during the stateless refactoring, with clear reasoning for each deletion.
> **Result:** Reduced from ~41 files to **18 files** — a clean, stateless upload module.

---

## 📊 Summary

| Category | Files Deleted | Reason |
|----------|:---:|--------|
| Database Layer | 10 | Stateless pattern — no DB tracking |
| Over-Engineered Services | 11 | Unnecessary complexity / separate concerns |
| Over-Engineered Utilities | 5 | Logic inlined or not needed |
| Extra Structure Files | 7 | Constants, guards, DTOs, interfaces inlined |
| **Total** | **33** | — |

---

## 🔴 Database Layer (10 files)

The core principle of the stateless refactoring: **the upload service should NOT track files in the database**. Business services (Products, Users, etc.) store their own file references.

### Prisma Schema Models & Enums (7 items removed from `schema.prisma`)

| # | Removed Item | Type | Why Deleted |
|---|---|---|---|
| 1 | `model UploadedFile` | Prisma Model | Tracked uploaded files in DB. Stateless upload returns a key/URL — the calling business service decides where to store that reference. |
| 2 | `model FileAuditLog` | Prisma Model | Logged every file operation (upload, delete, access). Over-engineering for a utility service. |
| 3 | `model UserStorageQuota` | Prisma Model | Enforced per-user storage limits via DB. Not the upload service's concern. |
| 4 | `enum FileStatus` | Prisma Enum | Status values (`PENDING`, `UPLOADED`, `FAILED`, etc.) for DB records that no longer exist. |
| 5 | `enum VirusScanStatus` | Prisma Enum | Moved to a local enum inside `virus-scan.service.ts` — no Prisma dependency needed. |
| 6 | `enum FileAction` | Prisma Enum | Audit log actions (`UPLOAD`, `DELETE`, `DOWNLOAD`). Not needed without audit log table. |

### Migration File (1 file)

| # | Deleted File | Why Deleted |
|---|---|---|
| 7 | `prisma/migrations/20260226234345_add_file_upload_security_models/migration.sql` | Created the `UploadedFile`, `FileAuditLog`, and `UserStorageQuota` tables. All tables were removed from the schema. |

### Repository Files (3 files)

| # | Deleted File | Why Deleted |
|---|---|---|
| 8 | `repositories/uploaded-file.repository.ts` | CRUD operations for the `UploadedFile` table — table no longer exists. |
| 9 | `repositories/file-audit-log.repository.ts` | Write operations for the `FileAuditLog` table — table no longer exists. |
| 10 | `repositories/user-storage-quota.repository.ts` | Manage `UserStorageQuota` table — table no longer exists. |

---

## 🟡 Over-Engineered Services (11 files)

These services added significant complexity with minimal practical value for a simple upload utility. Each one is explained below.

| # | Deleted File | What It Did | Why Deleted |
|---|---|---|---|
| 11 | `services/backup.service.ts` | Replicated files to backup storage providers | Infrastructure concern — use S3 cross-region replication or Azure geo-redundancy instead of application-level backup. |
| 12 | `services/monitoring.service.ts` | Collected internal upload metrics and alerts | Use proper observability tools (Prometheus, Datadog, CloudWatch) instead of custom in-app metrics. |
| 13 | `services/concurrent-upload-tracker.service.ts` | Tracked in-progress uploads to prevent duplicates | Multer + rate limiting (`@Throttle`) handles concurrency. No need for custom tracking. |
| 14 | `services/temp-file-cleanup.service.ts` | Periodically cleaned up temporary/orphaned files | Using `multer.memoryStorage()` means files never hit disk as temp files. Nothing to clean up. |
| 15 | `services/graceful-shutdown.service.ts` | Ensured uploads completed before app shutdown | NestJS has built-in shutdown hooks (`enableShutdownHooks()`). Stateless uploads are fast and atomic. |
| 16 | `services/signed-url.service.ts` | Generated pre-signed URLs for direct browser-to-storage uploads | Not needed — uploads go through the API. If needed later, it's a separate feature. |
| 17 | `services/image-processor.service.ts` | Resized, compressed, and generated thumbnails | Separate concern — should be a dedicated image processing module, not bundled in the upload utility. |
| 18 | `services/upload-cancellation.service.ts` | Allowed in-progress uploads to be cancelled | Uploads are fast and atomic. Cancellation adds complexity with no practical benefit. |
| 19 | `services/provider-quota.service.ts` | Tracked and enforced per-provider storage quotas | Cloud providers manage their own quotas. Application-level quota tracking is redundant. |
| 20 | `services/file-hash.service.ts` | Computed SHA-256 hashes for deduplication | Hash-based deduplication adds complexity with minimal benefit for most applications. |
| 21 | `services/file-encryption.service.ts` | Encrypted files before storage | Cloud providers offer server-side encryption (S3 SSE, Azure SSE, GCS CMEK). Application-level encryption is redundant. |

---

## 🟣 Over-Engineered Utilities (5 files)

| # | Deleted File | What It Did | Why Deleted |
|---|---|---|---|
| 22 | `utils/credential-masker.ts` | Masked AWS/Azure credentials in log output | Nice-to-have but over-engineering. Logging libraries and cloud SDKs handle sensitive data. |
| 23 | `utils/metadata-sanitizer.ts` | Stripped EXIF data from images before upload | Separate concern — belongs in image processing if needed, not in the upload utility. |
| 24 | `utils/zip-bomb-detector.ts` | Detected zip bombs by checking compression ratios | Edge case — basic file size limits (`MAX_FILE_SIZE`) handle this sufficiently. |
| 25 | `utils/magic-bytes-validator.ts` | Validated files by checking magic byte headers | **Logic inlined** into `file-validator.service.ts` (dangerous extension check). Separate file no longer needed. |
| 26 | `utils/mime-detector.ts` | Detected MIME types from file buffers and extensions | Over-engineering — `file.mimetype` from Multer is sufficient for validation purposes. |

---

## 🔵 Extra Structure Files (7 files)

These were small support files (constants, interfaces, guards, DTOs) that didn't justify their own files. Their logic was either **inlined** into the remaining services or **removed entirely**.

| # | Deleted File | What It Did | What Happened To It |
|---|---|---|---|
| 27 | `constants/provider-types.constants.ts` | Provider type enum constants | Removed — provider names are used as simple strings (`"local"`, `"s3"`, etc.). |
| 28 | `constants/validation-rules.constants.ts` | Validation rules for IMAGE, DOCUMENT, AVATAR, VIDEO | **Inlined** into `file-validator.service.ts` as a local `FILE_VALIDATION_RULES` object. |
| 29 | `dtos/validation-options.dto.ts` | DTO class for custom validation options | Replaced by a simple `ValidationRule` interface defined inside `file-validator.service.ts`. |
| 30 | `guards/file-policy.guard.ts` | Custom guard for upload policies (rate limiting, size checks) | Redundant — `@Throttle()` decorator handles rate limiting, `MulterModule` config handles size limits. |
| 31 | `interfaces/file-metadata.interface.ts` | Interface for file metadata (dimensions, hash, timestamps) | Removed — `UploadResult` interface is self-contained. Providers no longer return metadata objects. |
| 32 | `interfaces/validation-rule.interface.ts` | Interface for validation rule shape | **Inlined** into `file-validator.service.ts` as a local interface. |
| 33 | `services/clamscan.d.ts` | TypeScript type declarations for the `clamscan` npm module | Replaced with `@ts-ignore` on the dynamic import line in `virus-scan.service.ts`. |

---

## ✅ Final File Structure (18 files)

After all deletions, the module contains exactly these files:

```
apps/api/src/file-upload/
├── controllers/
│   └── file-upload.controller.ts          (3 endpoints: upload, multi-upload, delete)
├── services/
│   ├── file-upload.service.ts             (core upload/delete logic)
│   ├── file-validator.service.ts          (file validation with inlined rules)
│   ├── provider-selector.service.ts       (provider selection + fallback)
│   ├── url-generator.service.ts           (public URL generation)
│   └── virus-scan.service.ts              (optional ClamAV scanning)
├── providers/
│   ├── factory/
│   │   └── provider.factory.ts
│   ├── implementations/
│   │   ├── local.provider.ts
│   │   ├── s3.provider.ts
│   │   ├── azure-blob.provider.ts
│   │   └── google-cloud.provider.ts
│   └── base/
│       └── base-file-provider.abstract.ts
├── interfaces/
│   ├── file-provider.interface.ts
│   └── upload-result.interface.ts
├── dtos/
│   └── upload-request.dto.ts
├── utils/
│   ├── file-utils.ts
│   └── path-sanitizer.ts
└── file-upload.module.ts
```

---

## 🎯 Key Principles Behind the Deletions

1. **Stateless over Stateful** — The upload service uploads files and returns a key. It does NOT track files in a database.
2. **Single Responsibility** — The upload service handles uploading. Backup, encryption, image processing, and monitoring are separate concerns.
3. **Infrastructure over Application** — Encryption, backup replication, and quota management are better handled by cloud providers (S3, Azure, GCS).
4. **Simplicity over Flexibility** — 5 essential services are easier to maintain, test, and debug than 20+ services with complex interdependencies.
5. **Inline over Abstract** — Small constants, interfaces, and validation rules don't need their own files when they're only used in one place.
