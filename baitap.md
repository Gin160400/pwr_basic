🔹 Bài 1: Quản lý Sinh viên

Mô tả:

Tạo class Student để lưu trữ thông tin sinh viên.

Yêu cầu:

Thuộc tính: id, name, email, grades (mảng điểm).

Phương thức:

addGrade(grade: number): thêm điểm mới.

calculateAverage(): tính điểm trung bình.

displayInfo(): in ra thông tin sinh viên + điểm trung bình.

======================

🔹 Bài 2: Quản lý Công việc

Mô tả:

Tạo class Task để quản lý công việc hàng ngày.

Yêu cầu:

Thuộc tính: title, description, isCompleted (true/false).

Phương thức:

markAsCompleted(): đánh dấu hoàn thành.

display(): in nội dung công việc kèm trạng thái.

======================

🔹 Bài 3: Giỏ hàng đơn giản

Mô tả:

Tạo class CartItem để quản lý sản phẩm trong giỏ hàng.

Yêu cầu:

Thuộc tính: productName, price, quantity.

Phương thức:

getTotal(): trả về price \* quantity.

displayItem(): hiển thị thông tin sản phẩm.

======================

🔹 Bài 4: Sổ liên lạc

Mô tả:

Tạo class Contact để quản lý liên hệ cá nhân.

Yêu cầu:

Thuộc tính: name, phone, email.

Phương thức:

updatePhone(newPhone: string)

updateEmail(newEmail: string)

display()

======================

🔹 Bài 5: Quản lý hóa đơn

Mô tả:

Tạo class Invoice để lưu trữ đơn hàng.

Yêu cầu:

Thuộc tính: invoiceNumber, items (mảng giá trị số), date.

Phương thức:

addItem(amount: number)

getTotalAmount()

printInvoice(): in số hóa đơn, ngày và tổng tiền.

======================

🔹 Bài 6: Hệ thống đặt vé xem phim

Mô tả:

Tạo class Ticket để quản lý thông tin vé.

Yêu cầu:

Thuộc tính: movieName, seatNumber, price.

Phương thức:

printTicket(): in vé.

changeSeat(newSeat: string): đổi chỗ ngồi.

======================

Bài 7 Tạo class để quản lý Test Case Yêu cầu: Tạo một class TestCase để
quản lý thông tin test case trong dự án kiểm thử phần mềm, bao gồm:

Thuộc tính: id (string), title (string), status (string: \"pass\",
\"fail\", hoặc \"pending\"). Phương thức: updateStatus(newStatus:
string) để cập nhật trạng thái test case, chỉ cho phép các giá trị hợp
lệ (\"pass\", \"fail\", \"pending\"). Phương thức: getTestCaseInfo() trả
về thông tin test case dạng \"ID: \[id\], Title: \[title\], Status:
\[status\]\". Nhiệm vụ:

Tạo class và khởi tạo 3 test case với trạng thái khác nhau. Thử cập nhật
trạng thái của một test case và in thông tin. Gợi ý:

Sử dụng thuộc tính private để bảo vệ status. Kiểm tra giá trị newStatus
trong phương thức updateStatus.

======================

Bài 8: Tạo class quản lý Bug Yêu cầu:

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
Lưu danh sách các giá trị hợp lệ trong một mảng để kiểm tra.
