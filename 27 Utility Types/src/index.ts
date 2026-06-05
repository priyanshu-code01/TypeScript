interface CollegeType {
    name: string,
    location: string,
    students: number,
    branch: number
}

// partial: optional key
let CollegeData: Partial<CollegeType> = {
    name: "ABC College",
    location: "New York",
    students: 5000
}

function getCollegeData(data: Partial<CollegeType>) {
    return data;
}

getCollegeData({name: 'abc'})


function getCollegeData2(data: Required<CollegeType>) {
    return data;
}

getCollegeData2({name: 'abc', location: 'New York', students: 5000, branch: 3})

let CollegeData3: Readonly<CollegeType> = {
    name: "ABC College",
    location: "New York",
    students: 5000,
    branch: 3
}

// CollegeData3.name = "XYZ College";

let CollegeData4: Pick<CollegeType, 'name' | 'location'> = {
    name: "ABC College",
    location: "New York"
}

let CollegeData5: Omit<CollegeType, 'students' | 'branch'> = {
    name: "ABC College",
    location: "New York"
}

type APIStatus = 'loading' | 'success' | 'error';

let APICall: Exclude<APIStatus, 'loading'> = 'success';
APICall = 'error';
// APICall = 'loading'; // Error: Type '"loading"' is not assignable to type '"success" | "error"'.    

let APICall2: Extract<APIStatus, 'success' | 'error'> = 'success';
APICall2 = 'error';
// APICall2 = 'loading'; // Error: Type '"loading"' is not assignable to type '"success" | "error"'.

type RandomType = string | number | boolean | null | undefined;

let randomData: NonNullable<RandomType> = "Hello";

type SiteRole = 'admin' | 'editor' | 'viewer';

let siteRoleOption: SiteRole = 'admin';
let RoleName: Record<SiteRole, string> = {
    admin: 'Priyanshu',
    editor: "Priyanshu",
    viewer: "Priyanshu"
}