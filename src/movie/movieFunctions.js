const Movie = require("./movieTable");

// add/create movie object
exports.addMovie = async (movieObj) => {
    try {
        return await Movie.create(movieObj);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async (filterObj) => {
    try {
        if(filterObj.title || filterObj.actor) {
            return await Movie.findOne({where: filterObj});
        } else {
            return await Movie.findAll();
        }
    } catch (error) {
        console.log(error);
    }
}

exports.update = async (filterObj) => {
    try {
        return await Movie.update({ actor: filterObj.newActor }, {
            where: {
                actor: filterObj.actor
            }
          });
    } catch (error) {
        console.log(error)
    }
}


exports.remove = async (filterObj) => {
    try {
        return await Movie.destroy({
            where: {
                title: filterObj.title
            }
        });
    } catch (error) {
        console.log(error);
    }
}