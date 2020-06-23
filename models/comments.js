module.exports = function (sequelize, DataTypes) {
    var Comments = sequelize.define("Comments", {
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
return Comments
};
