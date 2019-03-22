import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/facets', facets({ config, db }));
	
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version: version });
	});
	api.get("/1", (req, res)=> {
		res.send("Hello nodemon world!");
	});
	api.get("/app", (req, res)=> {
		res.send("Hello world app!");
	});

	return api;
}
