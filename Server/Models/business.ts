/* Connect to mongoose */
// Step 1 - Import Mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Step 2 - Create a Schema that matches the data
const BusinessSchema = new Schema({
    Name: String,
    Number: String,
    Email: String
},
{
    collection: "businessContacts"
});

// Step 3 - Create a Model using the Schema
const Model = mongoose.model("Business", BusinessSchema);

// Step 4 - Export the Model -> this makes the file a module
export default Model;