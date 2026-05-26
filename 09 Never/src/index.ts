function loopFunction(): never {
    console.log('loop')
    
    while (true) {
        console.log('loop')
    }
}

function simple(): void {
    console.log('object')
}

function errorFunction(): never {
    throw new Error('This is an error')
}