// const divide = (a, b) => {
//   return a / b;
// };
// console.log(divide(10, 2)); // 5

// //Bài 1 --- Hàm kiểm tra tuổi hợp lệ ⏱ 8 phút
// const isAdult = (age) => age >= 18;
// console.log(isAdult(20));
// console.log(isAdult(17));
// console.log(isAdult(18));

// //Bài 2 --- Hàm tính phí ship ⏱ 10 phút
// const calcShipping = (orderValue) =>{
//     if(orderValue < 200000){
//         return 30000;
//     }
//     else if(orderValue < 500000){
//         return 15000
//     }
//     else {
//         return 0;
//     }
// }
// console.log(calcShipping(150000));
// console.log(calcShipping(300000));
// console.log(calcShipping(500000));
// console.log(calcShipping(100000));

// //Bài 3 --- Hàm xếp loại kết quả test ⏱ 10 phút
// const getRating = (passRate) =>{
//     if(passRate >= 90){
//         return "Xuất sắc";
//     }
//     else if(passRate > 70){
//         return "Đạt";
//     }
//     else if(passRate > 50){
//         return 'Cần cải thiện';
//     }
//     else{
//         return "Không đạt"
//     }
// }
// console.log(getRating(95));
// console.log(getRating(80));
// console.log(getRating(60));
// console.log(getRating(40));

// //Bài 4 --- Hàm đếm số lần chạy test ⏱ 10 phút
// let r = ["PASS", "FAIL", "PASS", "PASS", "FAIL"];
// const countResults = (results) => {
//     let countPass = 0;
//     let countFail = 0;
//     for(let i=0; i < r.length; i++){
//         if(results[i] == "PASS"){
//             countPass ++;
//         }
//         else{
//             countFail ++;
//         }
//     }
//     return {
//         pass: countPass,
//         fail : countFail
//     }    
// }
// console.log(countResults(r));

// //Bài 5 --- Hàm tạo thông báo lỗi ⏱ 10 phút
// const buildErrorMessage = (field, errorType) =>{
//     if(errorType == "required"){
//         return `${field} không được để trống`;
//     }
//     else if(errorType =="minlenght"){
//         return  `${field} phải có ít nhất 6 ký tự`;
//     }
//     else if(errorType == "invalid"){
//         return `${field} không đúng định dạng`;
//     }
// }
// console.log(buildErrorMessage("Email","required"));
// console.log(buildErrorMessage("Mật khẩu","minlenght"));
// console.log(buildErrorMessage("Số điện thoại","invalid"));

// //PHẦN 3 --- XỬ LÝ MẢNG (ARRAY)
// //Bài 11 --- Lọc test case theo module
//     let tests = [
//     { id: "TC_001", module: "login", name: "Đăng nhập đúng" },
//     { id: "TC_002", module: "cart", name: "Thêm vào giỏ" },
//     { id: "TC_003", module: "login", name: "Đăng nhập sai" },
//     { id: "TC_004", module: "payment", name: "Thanh toán" },
//     { id: "TC_005", module: "login", name: "Quên mật khẩu" }
//     ];

//     const filterByModule = (tests, moduleName) =>{
//         let result = [];

//         for(let i=0; i< tests.length;i++){
//             if(tests[i].module === moduleName){
//                 result.push(tests[i]);
//             }
//         }

//         return result;
//     }
//     console.log(filterByModule(tests, "login"));

// //Bài 12 --- Lấy danh sách tên từ mảng object
// let users = [
//   { id: 1, name: "Anna", role: "tester" },
//   { id: 2, name: "Minh", role: "admin" },
//   { id: 3, name: "Lan", role: "tester" }
// ];

// const getNames = (user) => users.map(u => u.name)
// console.log(getNames(users));

// //Bài 13 --- Tìm test case chạy lâu nhất
// let results = [
//   { id: "TC_001", duration: 1200 },
//   { id: "TC_002", duration: 4500 },
//   { id: "TC_003", duration: 800 },
//   { id: "TC_004", duration: 6200 }
// ];

// const findSlowest = (results) =>{
//     let maxSlowest = 0
//     for (let result of results){
//         if(result.duration > maxSlowest){
//             maxSlowest = result.duration;
//         }
//     }
//     return maxSlowest
// }
// console.log(findSlowest(results));

// //Bài 14 --- Kiểm tra tất cả test đều pass
// let run1 = [
//   { id: "TC_001", status: "PASS" },
//   { id: "TC_002", status: "PASS" },
//   { id: "TC_003", status: "PASS" }
// ];

// let run2 = [
//   { id: "TC_001", status: "PASS" },
//   { id: "TC_002", status: "FAIL" }
// ];

// const isAllPassed = (results) =>{
//     return results.every(r => r.status =="PASS")
// }

// console.log(isAllPassed(run1));
// console.log(isAllPassed(run2)); 

// //Bài 15 --- Lấy danh sách test bị fail
// let results = [
//   { id: "TC_001", status: "PASS" },
//   { id: "TC_002", status: "FAIL" },
//   { id: "TC_003", status: "PASS" },
//   { id: "TC_004", status: "FAIL" }
// ];

// const getFailedTests =(results) =>{
//     return results.filter(r => r.status ==="FAIL").map(r=>r.id)
// }

// console.log(getFailedTests(results));

// //Bài 16 --- Tính tỉ lệ pass
// let results = [
//   { id: "TC_001", status: "PASS" },
//   { id: "TC_002", status: "FAIL" },
//   { id: "TC_003", status: "PASS" },
//   { id: "TC_004", status: "PASS" }
// ];

// const calcPassRate = (results) =>{
//     let countPass =0;
//     countPass = results.filter(r => r.status ==="PASS").length; 
//     let passRate = 0   
//     passRate = countPass/results.length.toFixed(2)*100;
//     return `${passRate}%`
// }
// console.log(calcPassRate(results));

// PHẦN 2 --- XỬ LÝ CHUỖI (STRING)
// Bài 6 --- Lấy tên file từ đường dẫn
// const getFileName =(path)=>{
//     return path.split("/").pop();
// }
// console.log(getFileName("C:/projects/tests/login.spec.js"));
// console.log(getFileName("/home/tester/reports/result.html"));

// //Bài 7 --- Kiểm tra số điện thoại Việt Nam
// const isVietnamesePhone = (phone) => {
//     return phone.startsWith("0") && phone.length == 10;
// }

// console.log(isVietnamesePhone("0912345678")); 
// console.log(isVietnamesePhone("0123456789"));  
// console.log(isVietnamesePhone("912345678"));    
// console.log(isVietnamesePhone("091234567"));   
// console.log(isVietnamesePhone("0912 345678"));

// Bài 8 --- Viết hoa chữ cái đầu mỗi từ*****
// const titleCase = (str) =>
//   str
//     .split(" ")
//     .map(word => word[0].toUpperCase() + word.slice(1))
//     .join(" ");

// console.log(titleCase("nguyen thi anna"));
// console.log(titleCase("ho chi minh"));
// console.log(titleCase("TRAN VAN MINH"));

//Bài 9 --- Đếm số lần xuất hiện của từ
// const countWord = (text, word) => {
//     return text.toLowerCase().split(word).length - 1;
// }
// console.log(countWord("Pass fail pass PASS fail", "pass"));
// console.log(countWord("error error ERROR warning", "error"));
// console.log(countWord("test test test", "fail"));

// Bài 10 --- Tạo slug từ tên màn hình
const toSlug = (screenName) =>{
    return screenName.trim().toLowerCase()
    .split(" ").join("-");
}
console.log(toSlug("Trang Đăng Nhập"));
console.log(toSlug("Giỏ Hàng"));
console.log(toSlug("  Thanh Toán  "));
