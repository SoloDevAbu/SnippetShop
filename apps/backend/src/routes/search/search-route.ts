import express, { Router } from 'express';
import { searchSnippets } from '../../controller/search-controller';
const router: Router = express.Router();

router.get('/snippets', searchSnippets);

export default router;