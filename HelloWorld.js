"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var group = _.groupBy(['one', 'two', 'three'], 'length');
        console.log(group);
        return 0;
    };
    return Startup;
}());
Startup.main();
