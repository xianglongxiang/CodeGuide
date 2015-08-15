// not good
function doSomethingWithItems(items) {
    var a,
        b;
    var value = 10;
    var result = value + 10;

    for (var i = 0, len = items.length; i < len; i++) {
        result += 10;
    }
}

// good
function doSomethingWithItems(items) {
    var a;
    var b;
    var value = 10;
    var result = value + 10;

    for (var i = 0, len = items.length; i < len; i++) {
        result += 10;
    }
}

function doSomethingWithItems(items) {
    var a,
        b,
        value = 10,
        result = value + 10;

    for (var i = 0, len = items.length; i < len; i++) {
        result += 10;
    }
}
