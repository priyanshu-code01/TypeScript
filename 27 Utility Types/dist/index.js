// partial: optional key
let CollegeData = {
    name: "ABC College",
    location: "New York",
    students: 5000
};
function getCollegeData(data) {
    return data;
}
getCollegeData({ name: 'abc' });
function getCollegeData2(data) {
    return data;
}
getCollegeData2({ name: 'abc', location: 'New York', students: 5000, branch: 3 });
let CollegeData3 = {
    name: "ABC College",
    location: "New York",
    students: 5000,
    branch: 3
};
// CollegeData3.name = "XYZ College";
let CollegeData4 = {
    name: "ABC College",
    location: "New York"
};
let CollegeData5 = {
    name: "ABC College",
    location: "New York"
};
let APICall = 'success';
APICall = 'error';
// APICall = 'loading'; // Error: Type '"loading"' is not assignable to type '"success" | "error"'.    
let APICall2 = 'success';
APICall2 = 'error';
let randomData = "Hello";
let siteRoleOption = 'admin';
let RoleName = {
    admin: 'Priyanshu',
    editor: "Priyanshu",
    viewer: "Priyanshu"
};
export {};
//# sourceMappingURL=index.js.map