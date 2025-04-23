const read = require('node-readability');
const fs = require('fs');

const folderPath = './articles';


async function createHtmlFiles(articles) {

    clearArticlesFolder();

    for (const article of articles)
        await createHtmlFile(article);

    createTableOfContentsFile(articles);
    console.log('Created HTML files for your articles...');
    
}

function createHtmlFile(article) {
    
    const {id, url, title} = article;

    return new Promise((resolve, reject) => {
        read(url, (err, page, meta) => {

            if (err) {
                console.log("Failed to get page content, ", err.message);
                return reject(err);
            }

            const htmlContent = page.content;
            const html = `
                <html>
                <head>
                    <meta charset="UTF-8">
                </head>
                <body>
                    <h1>${title}</h1>
                    ${htmlContent}
                </body>
                </html>`;

            fs.writeFileSync(`${folderPath}/article${id}.html`, html);
            page.close();
            resolve();
        })
    })

}


function createTableOfContentsFile(articles) {

    const files = getInputFiles();

    let htmlToc = '';
    files.forEach(file => {
        const regex = /article(\d+).html/;
        const fileId = file.match(regex)[1];
        const article = articles.find(article => article.id == fileId);
        htmlToc += `<p><a href="${file}">${article.title}</a></p>`;
    })
    
    const html = `
        <html>
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <h1>Table of Contents</h1>
            ${htmlToc}
        </body>
        </html>
    `;

    fs.writeFileSync(`${folderPath}/index.html`, html);

}


function clearArticlesFolder() {

    const files = fs.readdirSync(folderPath);
    for (const file of files)
        fs.unlinkSync(`${folderPath}/${file}`);
            
}

function getInputFiles() {

    const files = fs.readdirSync(folderPath);
    return files;

}


module.exports = createHtmlFiles;