const { exec } = require('child_process');
const path = require('path');

const currentDate = new Date();

const options = {
    title: `Pocket ${currentDate.toLocaleString()}`,
    authors: 'Pocket to Kindle',
    input: 'index.html',
    output: 'index.mobi'
}

function convertToMobi(customTitle) {
    
    if (customTitle) options.title = customTitle;
    const command = `ebook-convert ${options.input} ${options.output} --title "${options.title}" --authors "${options.authors}"`;

    return new Promise((resolve, reject) => {
        exec(command, {cwd: path.resolve('./articles')}, (err, stdout, stderr) => {
            if (err) throw err;
            console.log('MOBI file created...');
            resolve();
        });
    })
}


module.exports = convertToMobi;
