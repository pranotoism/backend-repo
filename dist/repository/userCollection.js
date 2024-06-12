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
exports.fetchUser = exports.updateUser = void 0;
// repository/userCollection.ts
const firebaseConfig_1 = require("../config/firebaseConfig");
const updateUser = (userId, userData) => __awaiter(void 0, void 0, void 0, function* () {
    yield firebaseConfig_1.db.collection('USERS').doc(userId).set(userData, { merge: true });
});
exports.updateUser = updateUser;
const fetchUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const doc = yield firebaseConfig_1.db.collection('USERS').doc('KeP0RmmaWJYQic8SJZhR').get();
    if (!doc.exists) {
        throw new Error('User not found');
    }
    return doc.data();
});
exports.fetchUser = fetchUser;
