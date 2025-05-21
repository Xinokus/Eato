const express = require('express')
const sequelize = require('./database')
const models = require('./models')
const PORT = 5000
const cors = require('cors')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const path = require('path')
const fileUpload = require('express-fileupload')

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(express.static(path.resolve(__dirname, './static')))
app.use(express.urlencoded({ extended: true }));

function User(){
    app.get('/users', (req, res) => {
        async function getAll(){
            const [users, meta] = await sequelize.query('SELECT id, username, password, email, role FROM xinokus.users')
            return res.json(users)
        }
        getAll()
    })
    
    app.post('/users/create', (req, res) => {
        async function create(){
            const {username, password, email} = req.body
            const newPassword = password.toString()
            const hashPassword = await bcrypt.hash(newPassword, 5)
            const createUser = await models.User.create({username, password: hashPassword, email})
            return res.json(createUser)
        }
        create()
    })

    app.post('/users/edit', (req, res) => {
        async function edit(){
            const {username, password, email} = req.body
            const newPassword = password.toString()
            const hashPassword = await bcrypt.hash(newPassword, 5)
            const editUser = await models.User.update({username, password: hashPassword}, {where: {email}})
            return res.json(editUser)
        }
        edit()
    })

    app.delete('/users/delete', (req, res) => {
        async function Delete(){
            const {email} = req.body
            const deleteUser = await models.User.destroy({where: {email}})
            return res.json(deleteUser)
        }
        Delete()
    })
}
function Category(){
    app.get('/categories', (req, res) => {
        async function getAll(){
            const [categories, meta] = await sequelize.query('SELECT * FROM xinokus.categories')
            return res.json(categories)
        }
        getAll()
    })
    app.post('/categories/create', (req, res) => {
        async function create(){
            const {name} = req.body
            const createCategory = await models.Category.create({name})
            return res.json(createCategory)
        }
        create()
    })
    app.post('/categories/edit', (req, res) => {
        async function edit() {
            const {id, name} = req.body
            const editCategory = await models.Category.update({name}, {where: {id}})
            return res.json(editCategory)
        }
        edit()
    })
    app.delete('/categories/delete', (req, res) => {
        async function remove(){
            const {id} = req.body
            const removeCategory = await models.Category.destroy({where: {id}})
            return res.json(removeCategory)
        }
        remove()
    })
}
function Event(){
    app.get('/events', (req, res) => {
        async function getAll(){
            const [events, meta] = await sequelize.query('SELECT * FROM xinokus.events')
            return res.json(events)
        }
        getAll()
    })
    app.post('/events/create', (req, res) => {
        async function create(){
            const {name} = req.body
            const createEvent = await models.Event.create({name})
            return res.json(createEvent)
        }
        create()
    })
    app.post('/events/edit', (req, res) => {
        async function edit() {
            const {id, name} = req.body
            const editEvent = await models.Event.update({name}, {where: {id}})
            return res.json(editEvent)
        }
        edit()
    })
    app.delete('/events/delete', (req, res) => {
        async function remove(){
            const {id} = req.body
            const removeEvent = await models.Event.destroy({where: {id}})
            return res.json(removeEvent)
        }
        remove()
    })
}
function Tag(){
    app.get('/tags', (req, res) => {
        async function getAll(){
            const [tags, meta] = await sequelize.query('SELECT * FROM xinokus.tags')
            return res.json(tags)
        }
        getAll()
    })
    app.post('/tags/create', (req, res) => {
        async function create(){
            const {name} = req.body
            const createTag = await models.Tag.create({name})
            return res.json(createTag)
        }
        create()
    })
    app.post('/tags/edit', (req, res) => {
        async function edit() {
            const {id, name} = req.body
            const editTag = await models.Tag.update({name}, {where: {id}})
            return res.json(editTag)
        }
        edit()
    })
    app.delete('/tags/delete', (req, res) => {
        async function remove(){
            const {id} = req.body
            const removeTag = await models.Tag.destroy({where: {id}})
            return res.json(removeTag)
        }
        remove()
    })
}
function GalleryImage(){
    app.get('/images', (req, res) => {
        async function getAll(){
            const [images, meta] = await sequelize.query('SELECT * FROM xinokus.images')
            return res.json(images)
        }
        getAll()
    })
    app.post('/images/create', (req, res) => {
        async function create(){
            const {eventId} = req.body
            const {img} = req.files
            let imageName = uuid.v4() + '.png'
            img.mv(path.resolve(__dirname, './static/img', imageName))
            const createImage = await models.GalleryImage.create({img: imageName, eventId})
            return res.json(createImage)
        }
        create()
    })
    app.post('/images/edit', (req, res) => {
        async function edit() {
            const {id, eventId} = req.body
            const {img} = req.files
            let imageName = uuid.v4() + '.png'
            img.mv(path.resolve(__dirname, './static/img', imageName))
            const editImage = await models.GalleryImage.update({eventId, img: imageName}, {where: {id}})
            return res.json(editImage)
        }
        edit()
    })
    app.delete('/images/delete', (req, res) => {
        async function remove(){
            const {id} = req.body
            const removeImage = await models.GalleryImage.destroy({where: {id}})
            return res.json(removeImage)
        }
        remove()
    })
}
function News(){
    app.get('/news', (req, res) => {
        async function getAll(){
            const [news, meta] = await sequelize.query('SELECT * FROM xinokus.news')
            return res.json(news)
        }
        getAll()
    })
    app.post('/news/create', (req, res) => {
        async function create(){
            const {title, desc, time, tagId} = req.body
            const {img} = req.files
            let imageName = uuid.v4() + '.png'
            img.mv(path.resolve(__dirname, './static/img', imageName))
            const createNews = await models.News.create({img: imageName, title, desc, time, tagId})
            return res.json(createNews)
        }
        create()
    })
    app.post('/news/edit', (req, res) => {
        async function edit() {
            const {id, title, desc, time, tagId} = req.body
            const {img} = req.files
            let imageName = uuid.v4() + '.png'
            img.mv(path.resolve(__dirname, './static/img', imageName))
            const editNews = await models.News.update({title, desc, time, tagId, img: imageName}, {where: {id}})
            return res.json(editNews)
        }
        edit()
    })
    app.delete('/news/delete', (req, res) => {
        async function remove(){
            const {id} = req.body
            const removeNews = await models.News.destroy({where: {id}})
            return res.json(removeNews)
        }
        remove()
    })
}
function Product(){
    app.get('/product', (req, res) => {
        async function getAll(){
            const [product, meta] = await sequelize.query('SELECT * FROM xinokus.products')
            return res.json(product)
        }
        getAll()
    })
    app.post('/product/create', (req, res) => {
        async function create(){
            const {name, desc, rating, price, categoryId} = req.body
            const {img} = req.files
            const product = await models.Product.findOne({where: {name}})
            if(product){
                return res.status(500).json('err')
            }
            let imageName = uuid.v4() + '.png'
            img.mv(path.resolve(__dirname, './static/img', imageName))
            const createProduct = await models.Product.create({img: imageName, name, desc, rating, price, categoryId})
            return res.json(createProduct)
        }
        create()
    })
    app.post('/product/edit', (req, res) => {
        async function edit() {
            const {id, name, desc, rating, price, categoryId} = req.body
            const {img} = req.files
            let imageName = uuid.v4() + '.png'
            img.mv(path.resolve(__dirname, './static/img', imageName))
            const editProduct = await models.Product.update({name, desc, rating, price, categoryId, img: imageName}, {where: {id}})
            return res.json(editProduct)
        }
        edit()
    })
    app.delete('/product/delete', (req, res) => {
        async function remove(){
            const {id} = req.body
            const removeProduct = await models.Product.destroy({where: {id}})
            return res.json(removeProduct)
        }
        remove()
    })
}

GalleryImage()
Tag()
Event()
User()
Category()
News()
Product()

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }
    catch(e){
        console.log(e)
    }
}

start()