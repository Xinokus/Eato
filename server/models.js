const sequelize = require('./database')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.TEXT, allowNull: false,},
    password: {type: DataTypes.TEXT, allowNull: false,},
    email: {type: DataTypes.TEXT, allowNull: false, unique: true},
    role: {type: DataTypes.TEXT, defaultValue: "USER"}
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    desc: {type: DataTypes.STRING, allowNull: false },
    rating: {type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    categoryId: {type: DataTypes.INTEGER, allowNull: false},
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const GalleryImage = sequelize.define('image', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING, unique: true, allowNull: false},
    eventId: {type: DataTypes.INTEGER, allowNull: false},
})

const Event = sequelize.define('event', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const News = sequelize.define('news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.TEXT, allowNull: false},
    title: {type: DataTypes.STRING, allowNull: false},
    desc: {type: DataTypes.STRING, allowNull: false},
    time: {type: DataTypes.INTEGER, allowNull: false},
    tagId: {type: DataTypes.INTEGER, allowNull: false}
})

const Tag = sequelize.define('tag', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.TEXT, allowNull: false}
})

Tag.hasMany(News)
News.belongsTo(Tag)

Event.hasMany(GalleryImage)
GalleryImage.belongsTo(Event)

Category.hasMany(Product)
Product.belongsTo(Category)

module.exports = {
    User, Product, Category, GalleryImage, Event, News, Tag
}