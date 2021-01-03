import {gql}  from 'apollo-boost';

export let allTasks = gql`
 query tasksQuery {
     tasks{
         id
         text
         date
     }
 }
`;
