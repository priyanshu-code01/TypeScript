var whoType;
(function (whoType) {
    whoType["student"] = "student";
    whoType["teacher"] = "teacher";
    whoType["admin"] = "admin";
    whoType["manager"] = "manager";
})(whoType || (whoType = {}));
let who = whoType.student;
who = whoType.teacher;
console.log(whoType.manager);
export {};
//# sourceMappingURL=index.js.map