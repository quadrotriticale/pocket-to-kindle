const { exec } = require('child_process');
const path = require('path');


const convertToEpub = async (customTitle) => {

    const options = {
        title: customTitle || `Pocket ${new Date().toLocaleString()}`,
        authors: 'Pocket to Kindle',
        input: 'index.html',
        output: 'index.epub'
    }

    const command = `ebook-convert ${options.input} ${options.output} --title "${options.title}" --authors "${options.authors}"`;

    return new Promise((resolve, reject) => {
        exec(command, {cwd: path.resolve('./articles')}, (err, stdout, stderr) => {
            if (err) {
                console.log("Failed to convert to EPUB, ", err.message); 
                return reject(err);  
            }
            console.log('EPUB file created...');
            resolve();
        });
    })
}


module.exports = convertToEpub;
