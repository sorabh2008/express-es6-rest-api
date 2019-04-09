import { version } from '../../package.json';
import { Router } from 'express';
import book  from '../models/book';


export default ({ config, db }) => {
	let api = Router();
    // perhaps expose some API metadata at the root
    
	api.get("/get", (req, res)=> {
		book.find((err,books)=> {
			if(err){
				res.send("Hello nodemon world error!");
			} else{
				res.json(books);
			}
		});
		
    });
    api.post("/", (req, res)=> {
        const _book = new book(req.body);
        _book.save();
        res.status(201).json(_book);
    });
    api.get("/get/?:name", (req, res)=> {
        let query = {};
        query.name = req.params.name;
		book.find(query, (err,books)=> {
			if(err){
				res.send("Hello nodemon world error!");
			} else{
                if(books && books.length>0) {
                    res.json(books);
                } else {
                    res.send("200 - Not Found");
                }
			}
		});
		
	});
	
	return api;
}
