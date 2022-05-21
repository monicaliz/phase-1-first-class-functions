function receivesAFunction(callback) {
callback();
}

function returnsANamedFunction(){
    return function aFn() {
    }
}

function returnsAnAnonymousFunction() {
    return function () {
    }
}