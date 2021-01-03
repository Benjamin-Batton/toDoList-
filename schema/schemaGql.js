const graph = require('graphql');
const {GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID,GraphQLInt,GraphQLList} = graph;

const Films = require('../models/AddFilms');
const Directors = require('../models/AddDirectors');



const FilmType = new GraphQLObjectType({
    name: 'Movie',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        year: {type: GraphQLString},
        director: {
            type: DirectorType,
            resolve(parent,args){
                return {id:parent.directorId}
            }
        }
    }),
});

const DirectorType = new GraphQLObjectType({
    name:'Director',
    fields: ()=>({
        id: {type:GraphQLID},
       name: {type:GraphQLString},
       age: {type:GraphQLString},
        movies: {
           type: new GraphQLList(FilmType),
            resolve(parent,args){
                return Films.find({directorId: parent.id})
            }
        }
    }),
});


const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        director: {
            type: new GraphQLList(DirectorType),
            args: { age : { type : GraphQLString } },
            resolve(parent,args){
                return Directors.find({age: args.age});
            }
        },
        film: {
            type: FilmType,
            args: {id : { type : GraphQLID } },
            resolve(parent,args){
                return Films.findById(args.id)
            },
        },
        directors: {
            type: new GraphQLList(DirectorType),
           resolve(){
                return Directors.find({});
           }
        },
        films: {
            type: new GraphQLList(FilmType),
            resolve(){
                return Films.find({})
            }
        },
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addDirector: {
            type: DirectorType,
            args: {
              name: {type: GraphQLString},
              age: {type: GraphQLString},
            },
            resolve(parent,args){
               let newDirectors = new Directors({
                   name: args.name,
                   age: args.age,
               })
               return newDirectors.save();
            }
        }
    }
})
module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
});