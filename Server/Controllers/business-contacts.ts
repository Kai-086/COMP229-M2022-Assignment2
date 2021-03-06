import express from 'express';
import { Callback, CallbackError } from 'mongoose';
import Business from '../Models/business';
import { UserDisplayName } from '../Util';

export function DisplayBusinessContacts(req: express.Request, res: express.Response, next: express.NextFunction) {
    Business.find(function(err, businessCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Business Contacts List', page: 'business-contacts', businessContacts: businessCollection, displayName: UserDisplayName(req) });
        /*
        @https://stackoverflow.com/questions/4299991/how-to-sort-in-mongoose
     */
    }).sort({Name: 1}); // Sort by names alphabetically
}

/* Display business contact edit page */
export function DisplayBusinessEdit(req: express.Request, res: express.Response, next: express.NextFunction) {
    /*
        @https://mongoosejs.com/docs/api.html#model_Model.findById
     */

    let id = req.params.id; // For check which person want to edit
    Business.findById(id, function(err: any, businessCollection: any)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Edit Business Contacts Information', page: 'business-edit', businessContacts: businessCollection, displayName: UserDisplayName(req) });
    });
}

/* Process business contact edit page */
export function ProcessBusinessEdit(req: express.Request, res: express.Response, next: express.NextFunction) {
    // Instantiate a new user object
    /*
        @https://www.geeksforgeeks.org/mongodb-updateone-method-db-collection-updateone/ 
     */
    let id = req.params.id;
    let newContact = new Business({
        _id: id,
        Name: req.body.name,
        Number: req.body.number,
        Email: req.body.email
    });
    //console.log(newContact._id);
    //console.log(req.body.name);
    //console.log(req.body.number);
    //console.log(req.body.email);

    /*
        @https://mongoosejs.com/docs/api.html#document_Document-updateOne
        @https://mongoosejs.com/docs/api.html#model_Model.update
     */
    Business.updateOne({_id: id}, newContact, function(err: CallbackError) {
        if(err) {
            console.error(err);
            res.end(err);
        }
        // Success
        res.redirect('/business-contacts');
    });
}

/* Delete business contact edit page */
export function ProcessBusinessDelete(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;
    /*
       @https://stackoverflow.com/questions/5809788/how-do-i-remove-documents-using-node-js-mongoose
     */
    Business.remove({_id: id}, function(err: CallbackError) {
        if(err) {
            console.error(err);
            res.end(err);
        }
        // Success
        res.redirect('/business-contacts');
    });
}

function _id(_id: any, id: string) {
    throw new Error('Function not implemented.');
}
