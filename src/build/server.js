"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var port = 3000;
index_1.app.listen(port, function () {
    console.log("Server started at http://localhost:" + port);
});
