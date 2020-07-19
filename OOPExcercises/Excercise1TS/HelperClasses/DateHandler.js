"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateHandler = void 0;
class DateHandler {
    todaysDate() {
        return new Date();
    }
    formatDate(date) {
        const fullDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return `${fullDate} ${time}`;
    }
}
exports.DateHandler = DateHandler;
//# sourceMappingURL=DateHandler.js.map