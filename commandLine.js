const Tools = require('./modules/encryptTools.js');
let tools = new Tools.encryptTools();


var args = process.argv;


main(args);


function main(args) {
    options = ["-enc", "-dec", "-bin", "-bintostr", "-fileenc", "-filedec"]

    let option = args[2];

    if(option !== 'undefined' && options.indexOf(option) != -1) {
        if(option == "-enc") {

            let text = args[3]
            let key = args[4]

            data = tools.encrypt(text, key)

            console.log(data)
        }
        if(option == "-dec") {

            let text = args[3]
            let key = args[4]

            data = tools.decrypt(text, key)

            console.log(data)

        }
        if(option == "-bin") {

            let text = args[3]

            console.log(tools.toBinary(text));
        }
        if(option == "-bintostr") {

            let text = args[3]

            console.log(tools.toText(text));
        }
    }
    else {
        console.log("Option not found!")
    }
}
