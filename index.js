import axios from "axios";
import cheerio from 'cheerio';
import express from 'express';

const PORT = process.env.PORT || 5000

const app = express()

axios('https://scholarshiparena.in/nurturing-brilliance-cummins-scholarship-program/')
    .then(res=> {
        const htmlData = res.data
        const $ = cheerio.load(htmlData)
        const articles  = []

        $('.inside-article', htmlData).each((index,element) => {
            const title = $(element).children('.entry-content').text()
            articles.push({
                title,
            })
        })
        console.log(articles)
    }).catch(err => console.error(err))

app.listen(PORT, () => console.log('Server is listening to port ${PORT}'))