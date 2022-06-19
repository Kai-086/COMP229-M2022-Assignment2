import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayBusinessContacts } from '../Controllers/business-contacts';

// Try go to business-contacts page, then check if login. If so, go to business-contacts page
// If not, go back to login page
router.get('/business-contacts', AuthGuard, DisplayBusinessContacts);

// Update
/* Display */
router.get('/business-edit/:id', AuthGuard, DisplayBusinessContacts);
/* Process */
router.post('/business-edit/:id', AuthGuard, DisplayBusinessContacts);

// Delete
/* Display */
router.get('/business-delete/:id', AuthGuard, DisplayBusinessContacts);

export default router;