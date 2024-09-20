// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },

    
    
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

  //If an AssignmentGroup does not belong to its course (mismatching course_id), 
  //your program should throw an error, letting the user know that the input was invalid. 
 //Similar data validation should occur elsewhere within the program.

  if(AssignmentGroup.course_id !== CourseInfo.id){
  throw new Error("invaid");
  
}
 

//irtate learners 1 id 
for (x=125; x==LearnerSubmissions.learner_id; x++) {
  // code block to be excoecuted
  console.log(x)
}
console.log(x)

const firstlearner=125;
  

{

}  

    //learner 1 weighted average
let l1submissions={
  submission1:47,
  submission2:150,
  subtotal: 197,
}
let l1points={
  pointsfors1: 50,
  pointsfors2:150,
  pointstotal:200,
}

function learner1averge(l1submissions,l1points){
  return 197 /200
  
  
}

// find assignment number 1 average
       let assignment1={
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50

       }
       let assigment1score={
        learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47}
       }
function avg1(assigment1score,assigment1){
  return  47 / 50
}
       console.log(assignment1.id,avg1())


       // You should also account for potential errors in the data that your program receives.
// What if points_possible is 0? You cannot divide by zero.
 //What if a value that you are expecting to be a number is instead a string? 
function zeropointspossible(l1points){
  if (zeropointspossible==0) {
    console.log("invalid")
    
  } else { console.log(l1points)
    
  }


 }

       //find assignment 2 average for student 125

       let assigment2={ 
         id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150}
        let assigment2score =
        { learner_id: 125,
          assignment_id: 2,
          submission: {
            submitted_at: "2023-02-12",
            score: 150}
          }
          function avg2(assigment2score,assigment2){
            return  150 / 150
          }
                 console.log(assigment2.id,avg2())
                 console.log(learner1averge())













/////////////////////////////////////////////////////////////////////////////////////////////////////////////


      //{
       // id: 132,

       let l2id={
        id:132,
      
       }
      
 


       //learner2 1 assignment average 1: 0.78, // 39 / 50
let l2assignment1score={
  learner_id: 132,
  assignment_id: 1,
  submission: {
    submitted_at: "2023-01-24",
    score: 39
  }
}
let l2assignment={
  id: 1,
  name: "Declare a Variable",
  due_at: "2023-01-25",
  points_possible: 50
}
function L2assigment1avg( l2assignment,l2assignment1score){
return 39/ 50}
console.log(l2assignment.id,L2assigment1avg())
       
        
        //learner 2 assignment average
               let l2assignment2={
          id: 2,
  name: "Write a Function",
  due_at: "2023-02-27",
  points_possible: 150
        }
        let s2submission2score={
          learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140}}

            function l2assigmentaverage(l2assignment2,s2submission2score, ){
            if (l2assignment.due_at !== l2assignment1score.submitted_at) {
              return .93-.10
            }}
            
            
           
            function l2avg(l2points,l2subm)
            { return 179 / 200}
            console.log(l2avg())
            
         //console.log(l2assigmentaverage())
        //let l1array=[ firstlearner,avg1(),avg2(),learner1averge() ]

        

         
         //console.log(l1array)
         //let array2=[l2id,L2assigment1avg(),l2avg(),l2assigmentaverage()]
        // console.log(array2)
        //let array=[[ firstlearner,avg1(),avg2(),learner1averge() ], [l2id,L2assigment1avg(),l2avg(),l2assigmentaverage()]];
         function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions){


         }
        
        //console.log(array)
        //function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions){
         
          
          //write a functio that putput results //loop
         //let result=array;
         
            
    

         

      
          
      //}
   // ];
  
   // return result;
  //}
  
  //const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
