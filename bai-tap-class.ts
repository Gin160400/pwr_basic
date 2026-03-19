//// 🔹 Bài 1: Quản lý Sinh viên
// Mô tả:
// Tạo class Student để lưu trữ thông tin sinh viên.
// Yêu cầu:
// Thuộc tính: id, name, email, grades (mảng điểm).
// Phương thức:
// addGrade(grade: number): thêm điểm mới.
// calculateAverage(): tính điểm trung bình.
// displayInfo(): in ra thông tin sinh viên + điểm trung bình.
// class studentInfo {
//     public id: number;
//     public name: string;
//     public email: string;
//     public grades: number [];

//     constructor(id: number, name: string, email: string, grades:[]){
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.grades = grades;
//     }

//     addGrade(grade: number){
//         return this.grades.push(grade);
//     }

//     calculateAverage(){
//         let countGrade = 0;
//         let avgGrade = 0
//         for(let i = 0; i< this.grades.length;i++){
//             countGrade += this.grades[i];
//         }
//         avgGrade = countGrade/this.grades.length;
//         return `${avgGrade}`;
//     }

//     displayInfor(){
//         return `Sinh vien ${this.id}: ${this.name}, ${this.email} diem trung binh ${student.calculateAverage()}`
//     }
// }

// const student = new studentInfo(16, "Gin","oanhdt3@sapo.vn",[]);

// student.addGrade(12);
// student.addGrade(32);
// student.addGrade(43);
// student.addGrade(12);
// student.addGrade(87);

// console.log(student.displayInfor());

/* 🔹 Bài 2: Quản lý Công việc
Mô tả:
Tạo class Task để quản lý công việc hàng ngày.
Yêu cầu:
Thuộc tính: title, description, isCompleted (true/false).
Phương thức:
markAsCompleted(): đánh dấu hoàn thành.
display(): in nội dung công việc kèm trạng thái.

class workMangement{
    public title: string;
    public description: string;
    public isCompleted: boolean = false;

    constructor(title: string, description: string, isCompleted: boolean){
        this.title = title;
        this.description = description;
        this.isCompleted = isCompleted;
    }

    markAsCompleted(){
        if(this.isCompleted === true){
           return "Da hoan thanh"; 
        }
        else{
            return "Chua hoan thanh"            
        }
    }

    display(){
        return `${this.title}: ${this.markAsCompleted()}`
    }
}

const work1 = new workMangement("Viet TCs", "Viet tcs login",true);

console.log(work1.display());*/

/* Bài 8: Tạo class quản lý Bug Yêu cầu:
Tạo một class Bug để quản lý thông tin lỗi trong quá trình kiểm thử, bao
gồm:
Thuộc tính: bugId (string), description (string), severity (string:
\"low\", \"medium\", \"high\"), status (string: \"open\", \"in
progress\", \"fixed\", \"closed\"). Phương thức:
updateSeverity(newSeverity: string): Cập nhật mức độ nghiêm trọng, chỉ
cho phép giá trị hợp lệ. updateStatus(newStatus: string): Cập nhật trạng
thái, chỉ cho phép giá trị hợp lệ. getBugInfo(): Trả về thông tin bug
dạng \"Bug ID: \[bugId\], Description: \[description\], Severity:
\[severity\], Status: \[status\]\". Nhiệm vụ:
Tạo 2 bug với thông tin khác nhau. Cập nhật trạng thái và mức độ nghiêm
trọng của một bug, sau đó in thông tin. Gợi ý:
Sử dụng getter và setter để kiểm soát việc cập nhật severity và status.
Lưu danh sách các giá trị hợp lệ trong một mảng để kiểm tra.*/

type Severity = "low" | "medium" | "high";
type Status = "open" | "inprogress" | "fixed" | "closed";
class ListOfBug{
    private bugId: string;
    private description: string;
    private severity: string;
    private status: string = "open";

    constructor(bugId: string, description: string, severity: Severity, status: Status){
        this.bugId = bugId;
        this.description = description;
        this.severity = severity;
        this.status = status;
    }

    getBugId(){
        return this.bugId;
    }

    getDescription(){
        return this.description;
    }

    getSeverity(){
        return this.severity;
    }

    getStatus(){
        return this.status;
    }

    updateSeverity(newSeverity: string){
        this.severity = newSeverity;
        console.log(`Cap nhat muc do nghiem trong: ${newSeverity}`)
    }

    updateStatus(newStatus: string){
        this.status = newStatus;
        console.log(`Cap nhat trang thai bug: ${newStatus}`);
        
    }

    display(){
        return `${this.bugId}: ${this.description}, Severity ${this.severity}, Status ${this.status}`;
    }
}

const bug1 = new ListOfBug("tc01","Nhap dung pass khong login duoc","high","open");
const bug2 = new ListOfBug("tc013","Nhap dung usernam khong login duoc","high","fixed");

console.log(bug1.display());
console.log(bug2.display());


bug1.updateSeverity("medium");
bug2.updateStatus("closed");

console.log(bug1.display());
console.log(bug2.display());



