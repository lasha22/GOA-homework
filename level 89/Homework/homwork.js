// 1) 
function createStudentScoresMap(studentList) {
    const studentScoresMap = new Map();
    
    studentList.forEach(student => {
        studentScoresMap.set(student.name, student.score);
    });
    
    return studentScoresMap;
}

// 2) 
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 3) 
function incrementScores(studentScoresMap) {
    const updatedScoresMap = new Map(studentScoresMap);
    
 
    updatedScoresMap.forEach((score, name) => {
        updatedScoresMap.set(name, score + 5);
    });
    
    return updatedScoresMap;
}


const students = [
    { name: 'Lizi', score: 90 },
    { name: 'Lasha', score: 85 },
    { name: 'Nana', score: 78 }
];

// 1) 
const studentScores = createStudentScoresMap(students);
console.log('1) Student Scores Map:', studentScores);

// 2) 
const arrWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = removeDuplicates(arrWithDuplicates);
console.log('2) Unique Array:', uniqueArr);

// 3) 
const updatedStudentScores = incrementScores(studentScores);
console.log('3) Updated Student Scores Map:', updatedStudentScores);
