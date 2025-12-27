Review the changes on @branch:

1. Think through how data flows in the app. Explain new patterns if they exist and why.
2. Were there any changes that could affect infrastructure?
3. Consider empty, loading, error, and offline states.
4. Review frontend changes for ally (keyboard navigation, focus management, ARIA roles, color contrast).
5. If public APIs have changed, ensure backwards compat (or increment API version).
6. Did we add any unnecessary dependencies? If there's a heavy dependency, could we inline a more minimal version?
7. Did we add quality tests? Prefer fewer, high quality tests. Prefer integration tests for user flows.
8. Were there schema changes which could require a database migration?
9. Changes to auth flows or permissions? Run /security-review.
10. If feature flags are set up, does this change require adding a new one?
11. If i18n is set up, are the strings added localized and new routes internationalized?
12. Are there places we should use caching?
13. Are we missing critical olly or logging on backend changes?

