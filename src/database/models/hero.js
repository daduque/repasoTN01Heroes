module.exports = (sequelize, DataTypes) => {
    const Hero = sequelize.define('Hero', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        slug:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        superhero:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        alter_ego:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        first_appearance:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        characters:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        publisher_id: {
            type: DataTypes.INTEGER,
        }
    }, {
        tableName: 'heroes',
        timestamps: false,
        underscored: true
    });
    //relación con heroes
    Hero.associate = (models) => {

        Hero.belongsTo(models.Publisher, {
            as: 'publisher',
            foreignKey: 'publisher_id'
        })

    }

    return Hero;
}