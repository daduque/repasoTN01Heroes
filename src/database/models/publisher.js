module.exports = (sequelize, DataTypes) => {
    const Publisher = sequelize.define('Publisher', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        publisher: {
            type: DataTypes.STRING(45),
        }
    }, {
        tableName: 'publisher',
        timestamps: false,
        underscored: true
    });
    //relación con heroes
    Publisher.associate = (models) => {

        Publisher.hasMany(models.Hero, {
            as: 'heroes',
            foreignKey: 'publisher_id'
        })

    }

    return Publisher;
}