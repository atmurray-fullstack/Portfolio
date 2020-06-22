module.exports = function (sequelize, DataTypes) {
    var comments = sequelize.define("comments", {
        name: {
            type: DataTypes.STRING
        },
        comment: {
            type: DataTypes.STRING
        },
        commentDate: {
            type: DataTypes.DATE
        }
    }, {
        timestamps: false
    })
return comments
};
