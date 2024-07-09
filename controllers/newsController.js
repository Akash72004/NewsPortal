/*const { formidable } = require('formidable')
const cloudinary = require('cloudinary').v2
const newsModel = require('../models/newsModel')
const authModel = require('../models/authModel')
const galleryModel = require('../models/galleryModel')
const { mongo: { ObjectId } } = require('mongoose')
const moment = require('moment')

class newsController {
    add_news = async (req, res) => {

        const { id, category, name } = req.userInfo
        const form = formidable({})
        cloudinary.config({
            cloud_name: process.env.cloud_name,
            api_key: process.env.api_key,
            api_secret: process.env.api_secret,
            secure: true
        })
        try {

            const [fields, files] = await form.parse(req)
            const { url } = await cloudinary.uploader.upload(files.image[0].filepath, { folder: 'news_' })
            const { title, description } = fields
            const news = await newsModel.create({
                writerId: id,
                title: title[0].trim(),
                slug: title[0].trim().split(' ').join('-'),
                category,
                description: description[0],
                date: moment().format('LL'),
                writerName: name,
                image: url
            })
            return res.status(201).json({ message: 'news add success', news })
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' })
        }
    }

}
module.exports = new newsController()
*/
const { formidable } = require('formidable')
const cloudinary = require('cloudinary').v2
const newsModel = require('../models/newsModel')
const authModel = require('../models/authModel')
const galleryModel = require('../models/galleryModel')
const { mongo: { ObjectId } } = require('mongoose')
const moment = require('moment')

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
    secure: true
})

class newsController {
    add_news = async (req, res) => {
        const { id, category, name } = req.userInfo
        const form = new formidable.IncomingForm()

        try {
            form.parse(req, async (err, fields, files) => {
                if (err) {
                    return res.status(400).json({ message: 'Form parsing error' })
                }

                const { url } = await cloudinary.uploader.upload(files.image.path, { folder: 'news_' })
                const { title, description } = fields
                const news = await newsModel.create({
                    writerId: id,
                    title: title.trim(),
                    slug: title.trim().split(' ').join('-'),
                    category,
                    description,
                    date: moment().format('LL'),
                    writerName: name,
                    image: url
                })

                return res.status(201).json({ message: 'News added successfully', news })
            })
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' })
        }
    }
}

module.exports = new newsController()
