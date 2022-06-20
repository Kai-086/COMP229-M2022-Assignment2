"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessBusinessDelete = exports.ProcessBusinessEdit = exports.DisplayBusinessEdit = exports.DisplayBusinessContacts = void 0;
const business_1 = __importDefault(require("../Models/business"));
const Util_1 = require("../Util");
function DisplayBusinessContacts(req, res, next) {
    business_1.default.find(function (err, businessCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contacts List', page: 'business-contacts', businessContacts: businessCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    }).sort({ Name: 1 });
}
exports.DisplayBusinessContacts = DisplayBusinessContacts;
function DisplayBusinessEdit(req, res, next) {
    let id = req.params.id;
    business_1.default.findById(id, function (err, businessCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contacts List', page: 'business-contacts', businessContacts: businessCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayBusinessEdit = DisplayBusinessEdit;
function ProcessBusinessEdit(req, res, next) {
    let id = req.params.id;
    let newContact = new business_1.default({
        _id: id,
        Name: req.body.Name,
        Number: req.body.Number,
        Email: req.body.Email
    });
    business_1.default.updateOne({ _id: id }, newContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business-contacts');
    });
}
exports.ProcessBusinessEdit = ProcessBusinessEdit;
function ProcessBusinessDelete(req, res, next) {
    let id = req.params.id;
    business_1.default.remove({ _id: id }, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business-contacts');
    });
}
exports.ProcessBusinessDelete = ProcessBusinessDelete;
//# sourceMappingURL=business-contacts.js.map