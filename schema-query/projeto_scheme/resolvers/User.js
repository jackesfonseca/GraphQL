const { profiles } = require('../data/db')

//padrão de módulo comosjs -> nodejs
module.exports = {
    salary(user){
        return user.salary_real
    },
    profile(user){
        const selected = profiles.filter(p => p.id === user.profile_id)
        return selected ? selected[0] : null
    }
}