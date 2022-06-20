import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayBusinessContacts, DisplayBusinessEdit, ProcessBusinessDelete, ProcessBusinessEdit } from '../Controllers/business-contacts';

// Try go to business-contacts page, then check if login. If so, go to business-contacts page
// If not, go back to login page
router.get('/business-contacts', AuthGuard, DisplayBusinessContacts);

// Update
/* Display */
router.get('/business-edit/:id', AuthGuard, DisplayBusinessEdit);
/* Process */
router.post('/business-edit/:id', AuthGuard, ProcessBusinessEdit);

// Delete
/* Display */
router.get('/business-delete/:id', AuthGuard, ProcessBusinessDelete);

export default router;