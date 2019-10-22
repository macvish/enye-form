export const ADD_DATE = 'ADD_DATE'
export const addDate = (dateYear, dateString) => {
    return {
        type: ADD_DATE,
        dateYear,
        dateString
    }
}

export const ADD_AGE = 'ADD_AGE'
export const addAge = (age) => {
    return {
        type: ADD_AGE,
        age
    }
}

export const ADD_FNAME = 'ADD_FNAME'
export const addFName = (fname) => {
    return {
        type: ADD_FNAME,
        fname
    }
}

export const ADD_LNAME = 'ADD_LNAME'
export const addLName = (lname) => {
    return {
        type: ADD_LNAME,
        lname
    }
}

export const ADD_HOBBY = 'ADD_HOBBY'
export const addHobby = (hobby) => {
    return {
        type: ADD_HOBBY,
        hobby
    }
}