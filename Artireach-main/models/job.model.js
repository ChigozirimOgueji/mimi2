import {Schema, model} from "mongoose"

const jobSchema = new Schema({
  
   client:{
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
   },

   artisan:{
    type: Schema.Types.ObjectId,
    ref: 'artisan',
   },

   service:{
    type: Schema.Types.ObjectId,
    ref: 'Service',
    required: true,
   },

   taskName:{
      type: String,
      required: true,
   },

   date:{
    type: Date,
    required: true,
   },

   problemStatement:{
    type: String,
    required: true,
   },

   location:{
    type: String,
   },

   status:{
    type: String,
    enum: ['pending', 'accepted', 'completed', 'cancelled'],
    default: 'pending',
   },

})

const JobModel = new model("Job", jobSchema);

export default JobModel;