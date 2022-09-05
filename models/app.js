const Sequelize = require('sequelize');

const sequelize = new Sequelize('users','root','Yogesh270801', {
    host: 'localhost',
    dialect:'mysql',
    pool:{max:5, min:0, idle:10000}
});

sequelize.authenticate()
.then(()=>{
    console.log("collected");
})
.catch(err=>{
    console.log("err"+err);
})