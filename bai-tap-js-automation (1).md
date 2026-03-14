# BÀI TẬP TRUNG BÌNH --- JavaScript cho Automation Testing

Dành cho Manual Tester mới chuyển sang Automation \| Playwright /
JavaScript

------------------------------------------------------------------------

# PHẦN 1 --- HÀM (FUNCTION)

## Bài 1 --- Hàm kiểm tra tuổi hợp lệ ⏱ 8 phút

Viết hàm `isAdult(age)` kiểm tra người dùng có đủ 18 tuổi không.

### Test case

``` javascript
console.log(isAdult(20));  // true
console.log(isAdult(17));  // false
console.log(isAdult(18));  // true
```

------------------------------------------------------------------------

## Bài 2 --- Hàm tính phí ship ⏱ 10 phút

Viết hàm `calcShipping(orderValue)` tính phí vận chuyển theo quy tắc:

-   Đơn hàng dưới 200.000đ → phí ship 30.000đ
-   Đơn hàng từ 200.000đ đến dưới 500.000đ → phí ship 15.000đ
-   Đơn hàng từ 500.000đ trở lên → miễn phí ship

### Test case

``` javascript
console.log(calcShipping(150000));  // 30000
console.log(calcShipping(300000));  // 15000
console.log(calcShipping(500000));  // 0
console.log(calcShipping(1000000)); // 0
```

------------------------------------------------------------------------

## Bài 3 --- Hàm xếp loại kết quả test ⏱ 10 phút

Viết hàm `getRating(passRate)` xếp loại theo tỉ lệ pass:

  Pass rate       Kết quả
  --------------- ---------------
  ≥ 90%           Xuất sắc
  70% -- \< 90%   Đạt
  50% -- \< 70%   Cần cải thiện
  \< 50%          Không đạt

### Test case

``` javascript
console.log(getRating(95));  // "Xuất sắc"
console.log(getRating(80));  // "Đạt"
console.log(getRating(60));  // "Cần cải thiện"
console.log(getRating(40));  // "Không đạt"
```

------------------------------------------------------------------------

## Bài 4 --- Hàm đếm số lần chạy test ⏱ 10 phút

Viết hàm `countResults(results)` nhận mảng kết quả và trả về object đếm
PASS / FAIL.

### Test case

``` javascript
let r = ["PASS", "FAIL", "PASS", "PASS", "FAIL"];

console.log(countResults(r));
// { pass: 3, fail: 2 }
```

------------------------------------------------------------------------

## Bài 5 --- Hàm tạo thông báo lỗi ⏱ 10 phút

Viết hàm `buildErrorMessage(field, errorType)`.

  errorType   Thông báo
  ----------- -----------------------------------
  required    `[field] không được để trống`
  minLength   `[field] phải có ít nhất 6 ký tự`
  invalid     `[field] không đúng định dạng`

### Test case

``` javascript
console.log(buildErrorMessage("Email", "required"));
// "Email không được để trống"

console.log(buildErrorMessage("Mật khẩu", "minLength"));
// "Mật khẩu phải có ít nhất 6 ký tự"

console.log(buildErrorMessage("Số điện thoại", "invalid"));
// "Số điện thoại không đúng định dạng"
```

------------------------------------------------------------------------

# PHẦN 2 --- XỬ LÝ CHUỖI (STRING)

## Bài 6 --- Lấy tên file từ đường dẫn

Viết hàm `getFileName(path)`

### Test case

``` javascript
console.log(getFileName("C:/projects/tests/login.spec.js"));
// "login.spec.js"

console.log(getFileName("/home/tester/reports/result.html"));
// "result.html"
```

------------------------------------------------------------------------

## Bài 7 --- Kiểm tra số điện thoại Việt Nam

Viết hàm `isVietnamesePhone(phone)`

Điều kiện:

-   Bắt đầu bằng `0`
-   Có **10 chữ số**
-   Không chứa ký tự khác

### Test case

``` javascript
console.log(isVietnamesePhone("0912345678"));   // true
console.log(isVietnamesePhone("0123456789"));   // true
console.log(isVietnamesePhone("912345678"));    // false
console.log(isVietnamesePhone("091234567"));    // false
console.log(isVietnamesePhone("0912 345678"));  // false
```

------------------------------------------------------------------------

## Bài 8 --- Viết hoa chữ cái đầu mỗi từ

Viết hàm `titleCase(str)`

### Test case

``` javascript
console.log(titleCase("nguyen thi anna"));
// "Nguyen Thi Anna"

console.log(titleCase("ho chi minh"));
// "Ho Chi Minh"

console.log(titleCase("TRAN VAN MINH"));
// "Tran Van Minh"
```

------------------------------------------------------------------------

## Bài 9 --- Đếm số lần xuất hiện của từ

Viết hàm `countWord(text, word)`

### Test case

``` javascript
console.log(countWord("Pass fail pass PASS fail", "pass"));
// 3

console.log(countWord("error error ERROR warning", "error"));
// 3

console.log(countWord("test test test", "fail"));
// 0
```

------------------------------------------------------------------------

## Bài 10 --- Tạo slug từ tên màn hình

Viết hàm `toSlug(screenName)`

### Test case

``` javascript
console.log(toSlug("Trang Đăng Nhập"));
// "trang-dang-nhap"

console.log(toSlug("Giỏ Hàng"));
// "gio-hang"

console.log(toSlug("  Thanh Toán  "));
// "thanh-toan"
```

------------------------------------------------------------------------

# PHẦN 3 --- XỬ LÝ MẢNG (ARRAY)

## Bài 11 --- Lọc test case theo module

Viết hàm `filterByModule(tests, moduleName)`

### Test case

``` javascript
let tests = [
  { id: "TC_001", module: "login", name: "Đăng nhập đúng" },
  { id: "TC_002", module: "cart", name: "Thêm vào giỏ" },
  { id: "TC_003", module: "login", name: "Đăng nhập sai" },
  { id: "TC_004", module: "payment", name: "Thanh toán" },
  { id: "TC_005", module: "login", name: "Quên mật khẩu" }
];

console.log(filterByModule(tests, "login"));
```

------------------------------------------------------------------------

## Bài 12 --- Lấy danh sách tên từ mảng object

Viết hàm `getNames(users)`

### Test case

``` javascript
let users = [
  { id: 1, name: "Anna", role: "tester" },
  { id: 2, name: "Minh", role: "admin" },
  { id: 3, name: "Lan", role: "tester" }
];

console.log(getNames(users));
// ["Anna", "Minh", "Lan"]
```

------------------------------------------------------------------------

## Bài 13 --- Tìm test case chạy lâu nhất

Viết hàm `findSlowest(results)`

``` javascript
let results = [
  { id: "TC_001", duration: 1200 },
  { id: "TC_002", duration: 4500 },
  { id: "TC_003", duration: 800 },
  { id: "TC_004", duration: 3200 }
];

console.log(findSlowest(results));
// { id: "TC_002", duration: 4500 }
```

------------------------------------------------------------------------

## Bài 14 --- Kiểm tra tất cả test đều pass

Viết hàm `isAllPassed(results)`

``` javascript
let run1 = [
  { id: "TC_001", status: "PASS" },
  { id: "TC_002", status: "PASS" },
  { id: "TC_003", status: "PASS" }
];

let run2 = [
  { id: "TC_001", status: "PASS" },
  { id: "TC_002", status: "FAIL" }
];

console.log(isAllPassed(run1)); // true
console.log(isAllPassed(run2)); // false
```

------------------------------------------------------------------------

## Bài 15 --- Lấy danh sách test bị fail

Viết hàm `getFailedTests(results)`

``` javascript
let results = [
  { id: "TC_001", status: "PASS" },
  { id: "TC_002", status: "FAIL" },
  { id: "TC_003", status: "PASS" },
  { id: "TC_004", status: "FAIL" }
];

console.log(getFailedTests(results));
// ["TC_002", "TC_004"]
```

------------------------------------------------------------------------

## Bài 16 --- Tính tỉ lệ pass

Viết hàm `calcPassRate(results)`

``` javascript
let results = [
  { id: "TC_001", status: "PASS" },
  { id: "TC_002", status: "FAIL" },
  { id: "TC_003", status: "PASS" },
  { id: "TC_004", status: "PASS" }
];

console.log(calcPassRate(results));
// "75.00%"
```
