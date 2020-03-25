const fs = require('fs');
const jsYaml = require('js-yaml');

const filePaths = process.argv.slice(2); // node index.js or npm start are the first two args

let yaml = [];

if (filePaths.length === 0) {
    yaml.push(jsYaml.safeLoad(fs.readFileSync(__dirname + '/api.yaml', 'utf8')).paths);
} else {
    for (let i = 0; i < filePaths.length; i++) {
        yaml.push(jsYaml.safeLoad(fs.readFileSync(filePaths[i], 'utf8')).paths);
    }
}

if (yaml !== undefined) {
    console.log("Routes found in Markdown Format:" + "\n");
    for (let i = 0; i < yaml.length; i++) {
        let paths = Object.keys(yaml[i])
        if (paths !== undefined) {
            for (let j = 0; j < paths.length; j++) {
                Object.keys(yaml[i][paths[j]]).forEach(function(method) {
                    console.log("\n" + "### " + paths[j] + " - " + method.toUpperCase() + "\n");
                    let methodInfo = yaml[i][paths[j]][method];
                    if (methodInfo.tags !== undefined) {
                        console.log("Tag(s): " + methodInfo.tags.join(", ") + "\n");
                    }
                    if (methodInfo.summary !== undefined) {
                        console.log("Summary: " + methodInfo.summary + "\n");
                    }
                    if (methodInfo.description !== undefined) {
                        console.log("Route Description: " + methodInfo.description);
                    }
                    if (methodInfo.responses !== undefined) {
                        console.log("#### " + "Responses: " + "\n");
                        Object.keys(methodInfo.responses).forEach(function(response) {
                            if (response !== undefined) {
                                console.log("###### Status Code: " + response + "\n");
                            }
                            if (methodInfo.responses[response].description !== undefined) {
                                console.log("Response Description: " + methodInfo.responses[response].description + "\n");
                            }
                            let content = methodInfo.responses[response].content;
                            if (content) {
                                console.log("Content: " + Object.keys(content)[0]);
                            }
                        });
                    }
                });
            }
        }
    }
}