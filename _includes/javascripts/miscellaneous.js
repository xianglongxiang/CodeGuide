// not good
var a   = 1;

var ret = a ? b ? 1 : 2 : 3;

// good
var ret;

if (a) {
    if (b) {
        ret = 1;
    } else {
        ret = 2;
    }
} else {
    ret = 3;
}

function Person() {
    var self = this;

    function a() {
        var that = this;

        function b() {
            var _this = this;

            function c() {
                var me = this;

            }
        }
    }
}

switch (condition) {
    case 1:
    case 2:
        ...
        break;
    case 3:
        ...
    // why fall through
    case 4
        ...
        break;
    // why no default
}

// not good with empty block
if (condition) {

}
