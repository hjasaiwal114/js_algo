const fs = require('fs');

function listFilesRecursive(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    files.forEach(files => {
        const filePath  = `${directoryPath}/${file}`;
        const state = fs.statSync(filePath);
        if (fs.Stats.isDirectory()) {
            console.log(`Directory: ${filePath}`);
        }
    })
}