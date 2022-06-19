import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayBusinessContacts } from '../Controllers/business-contacts';

// Try go to business-contacts page, then check if login. If so, go to business-contacts page
// If not, go back to login page
router.get('/business-contacts', AuthGuard, DisplayBusinessContacts);

export default router;