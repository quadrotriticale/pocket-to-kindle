const { exec } = require('child_process');
const path = require('path');

const currentDate = new Date();

const options = {
    title: `Pocket ${currentDate.toLocaleString()}`,
    authors: 'Pocket to Kindle',
    input: 'index.html',
    output: 'index.epub'
}

const convertToEpub = async (customTitle) => {
    
    if (customTitle) options.title = customTitle;
    const command = `ebook-convert ${options.input} ${options.output} --title "${options.title}" --authors "${options.authors}"`;

    return new Promise((resolve, reject) => {
        exec(command, {cwd: path.resolve('./articles')}, (err, stdout, stderr) => {
            if (err) {
                reject(err);
                console.log(err); 
                return;  
            }
            console.log('EPUB file created...');
            resolve();
        });
    })
}


module.exports = convertToEpub;
