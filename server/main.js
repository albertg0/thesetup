import { Meteor } from 'meteor/meteor';
import { Exercises } from '../imports/api/exercises';

Meteor.startup(() => {
  // code to run on server at startup
  var f = Exercises.findOne({});
  console.log(f);
  if(f == undefined);
  {
    var exercise = {"name":'bench press', "set":"120", "reps":"12" }
    Exercises.insert({exercise,createdAt: new Date()});
  }
});
