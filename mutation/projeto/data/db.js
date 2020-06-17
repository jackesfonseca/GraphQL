const users = [{
    id: 1,
    name: 'Bob',
    email: 'bob@gmail.com',
    age: 30,
    profile_id: 2,
    status: 'ACTIVE'
}, {
    id: 2,
    name: 'Ana',
    email: 'ana@gmail.com',
    age: 16,
    profile_id: 1,   
    status: 'INACTIVE' 
}, {
    id: 3,
    name: 'Dean',
    email: 'dean@gmail.com',
    age: 20,
    profile_id: 1,
    status: 'BLOCKED'
}]

const profiles = [
    {id: 1, name: 'common'},
    {id: 2, name: 'adm'}
]

module.exports = { users, profiles }