/**
 * TabulaKit Authentication Configuration
 *
 * AUTH MODES:
 *   "public"     - No authentication required (default)
 *   "domain"     - Google sign-in restricted to a specific domain
 *   "allowlist"  - Google sign-in restricted to specific email addresses
 *                  (and/or email-link sign-in when allowEmailLink is true)
 *
 * FIREBASE SETUP (required for "domain" and "allowlist" modes):
 *   1. Create a Firebase project at https://console.firebase.google.com
 *   2. Enable Authentication > Google sign-in provider
 *   3. Add your domain to Authentication > Settings > Authorized domains
 *   4. Copy your config values below from Project Settings > General > Web app
 *
 *   Additional step if using allowEmailLink:
 *   5. Under Authentication > Sign-in method, enable Email/Password, and
 *      within it toggle on "Email link (passwordless sign-in)".
 */
window.TABULAKIT_AUTH = {
  mode: "public",

  // Enable passwordless email-link sign-in alongside Google sign-in.
  // Only honored in "allowlist" mode. Requires the Email/Password provider
  // with "Email link (passwordless sign-in)" enabled in the Firebase console.
  allowEmailLink: false,

  // Firebase config (required for "domain" and "allowlist" modes)
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    appId: ""
  },

  // For "domain" mode: allowed Google Workspace domain
  allowedDomain: "example.com",

  // For "allowlist" mode: allow anyone with an email at these domains
  allowedDomains: [
    // "yourcompany.com"
  ],

  // For "allowlist" mode: specific email addresses
  allowedEmails: [
    // "user@example.com"
  ]
};
