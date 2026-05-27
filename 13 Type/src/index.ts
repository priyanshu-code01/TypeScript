type DataType = {name: string, email: string}

interface a {name: string}
interface b {email: string}

interface c extends a, b {}

let empData: DataType = {
    name: "Priyanshu Singh",
    email: "priyanshu.singh@example.com"
}

let stdData: DataType = {
    name: "Anand Singh",
    email: "anand.singh@example.com"
}