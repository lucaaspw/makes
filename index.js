const readline = require('readline-sync')

function start(){
    const content = {}

    content.searchTerm = askAndReturnSeachTerm()

    function askAndReturnSeachTerm(){
        return readline.question('Type a Winkipedia seach term: ')
        
    }

    console.log(content)
}

start()