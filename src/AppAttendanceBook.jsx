import React, {useReducer, useState} from 'react';
import Student from "./components/Student";
import student from "./components/Student";

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      const name = action.padyload.name;
      const newStudent = {
        id:Date.now(),
        name,
        isHere:false,
      }
      return {
        ...state,
        count:state.count + 1,
        students: [...state.students,newStudent]
      };
    case 'check':
      return {
        ...state,
        students: state.students.map((student) => student.id === action.payload.id ? ({...student,isHere:!student.isHere}) : student)
      }
    case 'delete':
      return {
        ...state,
        count:state.count -1,
        students: state.students.filter((student) => student.id !== action.payload.id )
      }
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [
  ]
}

function AppAttendanceBook(props) {
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);
  return (
      <div>
        <h2>출석부</h2>
        <p>총 학생 수: {studentsInfo.count}</p>
        <input
          type='text'
          placeholder={'이름을 입력해주세요.'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => dispatch({type:'add', padyload:{name}})}>추가</button>
        {studentsInfo.students.map(student => <Student key={student.id} name={student.name} dispatch={dispatch} id={student.id} isHere={student.isHere}/>)}
      </div>
  );
}

export default AppAttendanceBook;