// table Recipes

// creating table Recipes via sequelize with code rather than SQL script
module.exports = (sequelize, DataTypes) => {
    const Recipes = sequelize.define('Recipes', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        caption: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    return Recipes;
}