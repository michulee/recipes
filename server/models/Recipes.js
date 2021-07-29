// table Recipes

// creating table Recipes via sequelize with code rather than SQL script
// this is dynamic database creation - bad practice
// what happens when you need hundreds of tables? easier to maintain in SQL server
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