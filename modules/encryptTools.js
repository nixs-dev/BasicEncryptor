const fs = require('fs');

class encryptTools {

    encrypt(input, key) {
        var c = '';
        while (key.length < input.length) {
             key += key;
        }
        for(var i=0; i<input.length; i++) {
            var value1 = input[i].charCodeAt(0);
            var value2 = key[i].charCodeAt(0);

            var xorValue = value1 ^ value2

            c += new Buffer.from(String.fromCharCode(xorValue)).toString('hex');
        }

        return c;
    }

    decrypt(input, key) {
        input = new Buffer.from(input, 'hex')
        input = input.toString('utf8')
        var c = '';

        while (key.length < input.length) {
             key += key;
        }

        for(var i=0; i<input.length; i++) {
            var value1 = input[i].charCodeAt(0);
            var value2 = key[i].charCodeAt(0);

            var xorValue = value1 ^ value2

            c += String.fromCharCode(xorValue);
        }

        return c;
    }

    toBinary(textTo) {
        var output = [];
        
        for (var i = 0; i < textTo.length; i++) {
            output.push(textTo[i].charCodeAt(0).toString(2));
        }
        
        return output;
    }
    
    toText(binaryTo) {
        var output = "";

        binaryTo = binaryTo.split(' ')
        
        binaryTo.forEach((value) => {
            output += String.fromCharCode(parseInt(value, 2));
        })

        return output;
    }

    readFile(str) {
        try {
<<<<<<< HEAD
<<<<<<< HEAD
          var data = fs.readFileSync(str, 'binary')
=======
          var data = fs.readFileSync(str, 'utf8')
          console.log(data)
>>>>>>> dc8d42e19826a9a52a08734f43d6b1c3ba6493d7
=======
          var data = fs.readFileSync(str, 'utf8')
          console.log(data)
>>>>>>> e0730fc5ff12f91c0a0d0d98d304d7a073dfe7db

          return data
        } catch (err) {
          console.error(err)
        }
    }

    writeFile(fileName, content, encdec) {
<<<<<<< HEAD
<<<<<<< HEAD
        //var content = content.replace(/\0/g, '')
=======
        var content = content.replace(/\0/g, '')
>>>>>>> dc8d42e19826a9a52a08734f43d6b1c3ba6493d7
=======
        var content = content.replace(/\0/g, '')
>>>>>>> e0730fc5ff12f91c0a0d0d98d304d7a073dfe7db


        if(encdec) {
            fileName = this.encrypt(fileName, "None001")
            var buffer = new Buffer.from(fileName)
            fileName = buffer.toString('base64')

            fs.writeFile(fileName, content, { flag: 'a+' }, err => {
                console.log(err)
            })
        }
        else {
            var buffer = new Buffer.from(fileName, 'base64')
            fileName = buffer.toString('utf8')
            fileName = this.decrypt(fileName, "None001")
            fileName = 'DECRYPTED' + fileName.replace(/\0/g, '')

<<<<<<< HEAD
<<<<<<< HEAD
            content = Buffer.from(content, 'binary');
=======
>>>>>>> dc8d42e19826a9a52a08734f43d6b1c3ba6493d7
=======
>>>>>>> e0730fc5ff12f91c0a0d0d98d304d7a073dfe7db
            fs.writeFile(fileName, content, { flag: 'a+' }, err => {})
        }
    }
}

module.exports.encryptTools = encryptTools