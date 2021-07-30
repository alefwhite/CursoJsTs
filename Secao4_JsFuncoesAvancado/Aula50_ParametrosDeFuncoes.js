const conta = (...args) => {
    console.log(args);
};

function teste () {
    console.log(arguments)
}

teste(1, 2, 3)

conta('+', 1, 20, 30, 40, 50);