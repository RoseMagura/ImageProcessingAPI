"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../src/index"));
var supertest_1 = __importDefault(require("supertest"));
var request = supertest_1.default(index_1.default);
// it('Checking endpoint basic access', async (done) => {
//   const res = await request.get('/');
//   expect(res.status).toBe(200);
//   expect(res.text).toBe('Post image name and size through curl or Postman');
//   done();
// });
// // Check 404 error code
// it('Checking that entering undefined endpoint gives 404', async (done) => {
//     const res = await request.get('/randomEndpoint');
//     expect(res.status).toBe(404);
//     expect(res.text).toBe('Page Not Found');
//     done();
// });
// Test successful post
// it('Checking that posting runs succesfully', async (done) => {
//     const res = await request.post('/?name=palmtunnel&width=300&height=500');
//     expect(res.status).toBe(200);
//     expect(res.text).toBe("Successfully processed image. Check views/processed_images");
// });
// Test image processing 
// it('Checking that image is correctly processed', () => {
//     const result = process_image('palmtunnel', '300', '300', true);
//     console.log(result);
//     expect(fs.existsSync('./__tests__/test_processed_images/palmtunnel300x300.jpg')).toBe(true);
// });
// Test unsuccessful post (image not found)
it('Checking that using wrong image name is correctly handled', function (done) { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, request.post('/?name=randomImage&width=300&height=500')];
            case 1:
                res = _a.sent();
                expect(res.status).toBe(200);
                expect(res.text).toBe("File not found. Please double-check spelling.");
                return [2 /*return*/];
        }
    });
}); });
