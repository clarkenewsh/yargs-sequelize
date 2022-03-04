// require yargs
const yargs = require("yargs");
//require db connection
const { sequelize } = require("./db/connection");
// require movie functions
const { addMovie, listMovies, update, remove } = require("./movie/movieFunctions");


const app = async (yargsObj) => {
    try {
        await sequelize.sync();
        if(yargsObj.add) {
            await addMovie({title: yargsObj.title, actor: yargsObj.actor});

        } else if(yargsObj.list) {
            console.log(JSON.stringify(await listMovies({[yargsObj.key]: yargsObj.value}), null, 2));

        } else if(yargsObj.update) {
            console.log(JSON.stringify(await update({title: yargsObj.title, actor: yargsObj.actor}), null, 2));

        }  else if(yargsObj.remove) {
            console.log(JSON.stringify(await remove({title: yargsObj.title}), null, 2));
            
        } else {
            console.log("Incorrect command");
        }
        await sequelize.close();
    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv);