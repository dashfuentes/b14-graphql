const express = require( 'express' );
const app = express();

const { buildSchema } = require( 'graphql' );
const { graphqlHTTP } = require( 'express-graphql' );
const {courses} = require('./data.json')

const schema = buildSchema( `

    type Query {
     getWelcome(name: String): String 
     getCourses : [Course]
     findCourseById(id: Int): Course  
   
    }  

    type Mutation {
        addCourse(id: Int, title: String!, level: String , date: String) : [Course]
        updateCourse(id: Int, title: String!, level: String , date: String): Course
        deleteCourse(id: Int): [Course]
    }

    type Course {
        id: Int,
        title: String!, 
        level: String,
        date: String
    }

`);

const getWelcome = ( args ) => { 
    return "hello world " +  args.name;
};

const getCourses = () => {
    return courses;
}

const addCourse = ( { id, title, level, date } ) => {
    const newCourse = { id: id, title: title, level: level, date: date };
    courses.push(newCourse)
    return courses;

}

const updateCourse = ( { id, title, level, date } ) => {
    
    //Find the course object to update
    courses.map( course => {

        if ( course.id == id ) {

            course.title = title ? title : course.title; // if else
            course.level = level ? level : course.level;
            course.date = date ? date : new Date();
        }
        return course;
    } );

    //Return the object by id
    return courses.find( course => course.id == id );
}

const findCourseById = ( { id } ) => {
    return courses.find(course => course.id ==  id)
}

//Delete

const deleteCourse =  ( { id } ) => {
    let courseId = id;
    var getIndex = courses.findIndex( line => id === courseId );
    //remove the object
    courses.splice(getIndex, 1)
    //return courses []
    return courses
}

const root = {
    //properties(Schema) = functions
    getWelcome: getWelcome,
    getCourses: getCourses,
    addCourse: addCourse,
    updateCourse: updateCourse,
    findCourseById: findCourseById,
    deleteCourse: deleteCourse
}

app.use( '/graphql', graphqlHTTP( {
    schema: schema,
    rootValue: root,
    graphiql: true
} ) );



app.listen( 3000, () => {
    console.log('server running!!')
})