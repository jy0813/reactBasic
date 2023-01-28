export default function personReducer(person, action) {
  switch (action.type) {
    case 'updated': {
      const {prev, current} = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if(mentor.name === prev) {
            return {...mentor,name:current}
          }
          return mentor
        })
      }
    }
    case 'added': {
      const {addName, addTitle} = action;
      return {
        ...person,
        mentors:[...person.mentors, {name: addName, title: addTitle}]
      }
    }
    case 'deleted' : {
      const {deleteName} = action
      return  {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== deleteName)
      }
    }
    default: {
      throw Error(`알수없는 액션 타입입니다 : ${action.type}`)
    }
  }
}