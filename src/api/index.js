import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';

export default ({ config, db }) => {
	let api = Router();

	
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version: version });
	});
	api.get("/get", (req, res)=> {
		res.send("placeholder");
		
	});
	api.get("/app", (req, res)=> {
		res.send("Hello world app!");
	});
	api.get("/hello", (req,res)=>{
		res.send("Hello there!");
	});
	
	// mount the facets resource
	api.use('/books', facets({ config, db }));
	
	return api;
}
