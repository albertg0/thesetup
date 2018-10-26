import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Exercises } from '../imports/api/exercises.js';


import './main.html';
import 'bootstrap'

Template.exerciseList.helpers({
  templateGestures:{
    'swipeLeft .card':function(event,templateInstance)
    {
      console.log(event.target.id);
      targetId= event.target.id;
      Exercises.remove({'_id':targetId});

    }
  },
  exercises() {
    return Exercises.find({}, {sort: {createdAt: -1}});
  },
});

Template.exerciseList.onRendered( function(){
  console.log('body rendered')
  //var m = document.querySelectorAll('.modal');
  //var inst = M.Modal.init(m);

  //$('#newExercise').modal({
 //   backdrop:false,
 // });

});

var currentDate =  Date.now()
const width = $(window).width();
const height = $(window).height();

Template.week.onRendered(() => {
  $('#weekDiv').fullCalendar({
    defaultView: 'basicWeek',
    height: height/5,
    days:14,
    views:{

      titleFordmat: "MM"
    }

  });
})

Template.body.events({
 'click #addToList': function(event){
   event.preventDefault();
   console.log("addToList clicked")
   console.log(event.target);
    const target = event.target;
    const n = target.eName.value;
    const s = target.eSet.value;
    const r = target.eReps.value;
    var exercise = {"name":n, "set":s, "reps":r};
    console.log(exercise);
    Exercises.insert({exercise, createdAt: new Date()});

 },
 'click .deleteCard':function(event){
    console.log(event.target.id);
    targetId= event.target.id;
    Exercises.remove({'_id':targetId});


 }

})

Template.week.helpers({
  weekDivMap:{
    'swipeDown weekDiv': function(event,templateInstance){
        console.log(" weekdiv swipe down")
    }
  }
})