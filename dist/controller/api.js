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
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserData = exports.updateUserData = void 0;
const userCollection_1 = require("../repository/userCollection");
const ApiError_1 = require("../entities/ApiError");
const updateUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const userData = req.body;
    try {
        yield (0, userCollection_1.updateUser)(userId, userData);
        res.status(200).json({ message: 'User data updated successfully' });
    }
    catch (error) {
        const apiError = new ApiError_1.ApiError(error.message, 500);
        res.status(apiError.statusCode).json({ message: apiError.message });
    }
});
exports.updateUserData = updateUserData;
const fetchUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    try {
        const userData = yield (0, userCollection_1.fetchUser)(userId);
        res.status(200).json(userData);
    }
    catch (error) {
        const apiError = new ApiError_1.ApiError(error.message, 404);
        res.status(apiError.statusCode).json({ message: apiError.message });
    }
});
exports.fetchUserData = fetchUserData;
