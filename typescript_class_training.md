# 📘 Training: Class trong TypeScript cho Tester Manual

---

## 🎯 1. Class là gì? (Hiểu theo cách tester)

**Class = cách gom dữ liệu + hành động lại thành 1 object có ý nghĩa**

👉 Trong testing:

- **Property** = dữ liệu (test data)
- **Method** = hành động (test step)

👉 Ví dụ thực tế:

- Customer có: name, email
- Hành động: create, update, delete

---

## 🧱 2. Cấu trúc class cơ bản

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const p1 = new Person("Anna", 25);
p1.greet();
```

---

## 🧪 3. Liên hệ với Test API (Quan trọng)

```ts
class CustomerApi {
  async createCustomer(data: any) {
    return fetch("/api/customers", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async getCustomer(id: string) {
    return fetch(`/api/customers/${id}`);
  }
}
```

---

## ⚖️ 4. So sánh: Có và Không dùng class

### ❌ Không dùng class

```ts
async function createCustomer() {}
async function getCustomer() {}
async function deleteCustomer() {}
```

---

### ✅ Dùng class

```ts
class CustomerApi {
  async create() {}
  async get() {}
  async delete() {}
}
```

---

## 🔒 5. Public / Private / Protected

```ts
class User {
  public username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  public login(inputPassword: string): boolean {
    return this.password === inputPassword;
  }
}
```

---

## 🧠 6. Áp dụng vào Test Framework

```ts
class BaseApi {
  protected baseUrl = "https://api.test.com";

  protected async request(url: string, options: any) {
    return fetch(this.baseUrl + url, options);
  }
}
```

```ts
class CustomerApi extends BaseApi {
  async createCustomer(data: any) {
    return this.request("/customers", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}
```

---

## 🏠 7. Page Object Model (POM) — Pattern tester dùng nhiều nhất

POM = mỗi trang web là 1 class, mỗi hành động trên trang là 1 method.

👉 Giống y cách tester manual nghĩ: "Vào trang Login → nhập username → nhập password → bấm Login"

```ts
class LoginPage {
  async enterUsername(name: string) {
    await page.fill("#username", name);
  }

  async enterPassword(pass: string) {
    await page.fill("#password", pass);
  }

  async clickLogin() {
    await page.click("#login-btn");
  }
}

// Sử dụng trong test:
const loginPage = new LoginPage();
await loginPage.enterUsername("tester01");
await loginPage.enterPassword("123456");
await loginPage.clickLogin();
```

👉 So sánh với test manual:

| Test Manual          | POM (Code)                        |
| -------------------- | --------------------------------- |
| Mở trang Login       | `new LoginPage()`                 |
| Nhập username        | `loginPage.enterUsername("abc")`   |
| Nhập password        | `loginPage.enterPassword("123")`  |
| Bấm nút Login       | `loginPage.clickLogin()`          |

---

## 🔐 8. `readonly` — Giá trị không được phép thay đổi

Dùng cho những giá trị cố định như URL, config:

```ts
class ApiConfig {
  readonly baseUrl = "https://api.test.com";
  readonly timeout = 30000;
}

const config = new ApiConfig();
console.log(config.baseUrl); // ✅ Đọc được
config.baseUrl = "xxx";      // ❌ Lỗi! Không cho phép thay đổi
```

👉 Giống như trong test manual: URL môi trường test là cố định, không ai được tự ý đổi.

---

## ⚙️ 9. `static` — Gọi method mà không cần `new`

Dùng cho các hàm tiện ích (utility) dùng chung:

```ts
class TestHelper {
  static generateEmail() {
    return `test_${Date.now()}@mail.com`;
  }

  static generatePhone() {
    return "09" + Math.floor(Math.random() * 100000000);
  }
}

// Gọi trực tiếp, KHÔNG cần new:
const email = TestHelper.generateEmail();  // "test_1710123456@mail.com"
const phone = TestHelper.generatePhone();  // "0912345678"
```

👉 So sánh:

```ts
// Không có static → phải new trước
const helper = new TestHelper();
helper.generateEmail();

// Có static → gọi thẳng
TestHelper.generateEmail();
```

---

## 📦 10. Export / Import — Sử dụng class từ file khác

Trong dự án thực tế, mỗi class nằm ở 1 file riêng. Muốn dùng class từ file khác thì cần **export** (xuất) và **import** (nhập).

👉 Giống test manual: bạn viết test case ở file này, nhưng test data nằm ở file khác → cần "mở file kia ra lấy".

### Bước 1: `export` — Xuất class ra ngoài

```ts
// file: LoginPage.ts
export class LoginPage {
  async enterUsername(name: string) {
    await page.fill("#username", name);
  }

  async clickLogin() {
    await page.click("#login-btn");
  }
}
```

Thêm `export` trước `class` = "cho phép file khác sử dụng class này".

### Bước 2: `import` — Nhập class vào file cần dùng

```ts
// file: login.test.ts
import { LoginPage } from "./LoginPage";

const loginPage = new LoginPage();
await loginPage.enterUsername("admin");
await loginPage.clickLogin();
```

### Ví dụ cấu trúc thư mục thực tế

```
project/
├── pages/
│   ├── LoginPage.ts        ← export class LoginPage
│   └── HomePage.ts         ← export class HomePage
├── helpers/
│   └── TestHelper.ts       ← export class TestHelper
├── tests/
│   └── login.test.ts       ← import { LoginPage } from "../pages/LoginPage"
```

### Một số cách export khác

```ts
// Cách 1: export trực tiếp (phổ biến nhất)
export class LoginPage { }

// Cách 2: export default (mỗi file chỉ 1 class chính)
export default class LoginPage { }
// Import khác: không cần dấu { }
import LoginPage from "./LoginPage";

// Cách 3: export nhiều thứ từ 1 file
export class LoginPage { }
export class RegisterPage { }
// Import: lấy cái mình cần
import { LoginPage, RegisterPage } from "./pages";
```

### ❌ Lỗi thường gặp

```ts
// ❌ Quên export
class LoginPage { }

// File khác import → Lỗi!
import { LoginPage } from "./LoginPage";
// Error: LoginPage is not exported

// ❌ Sai đường dẫn
import { LoginPage } from "./loginpage";  // ❌ sai tên file (chữ hoa/thường)
import { LoginPage } from "./LoginPage";  // ✅ đúng
```

---

## ⚡ 11. Bài tập thực hành

### 🟢 Bài 1

Tạo class Product:

- name
- price
- printInfo()

<details>
<summary>💡 Xem lời giải</summary>

```ts
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  printInfo(): void {
    console.log(`${this.name} - ${this.price} VND`);
  }
}

const p = new Product("iPhone 15", 25000000);
p.printInfo(); // "iPhone 15 - 25000000 VND"
```

</details>

### 🟡 Bài 2

Tạo OrderApi:

- createOrder
- getOrder
- cancelOrder

<details>
<summary>💡 Xem lời giải</summary>

```ts
class OrderApi {
  private baseUrl = "https://api.test.com";

  async createOrder(data: any) {
    return fetch(`${this.baseUrl}/orders`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async getOrder(id: string) {
    return fetch(`${this.baseUrl}/orders/${id}`);
  }

  async cancelOrder(id: string) {
    return fetch(`${this.baseUrl}/orders/${id}/cancel`, {
      method: "PUT",
    });
  }
}
```

</details>

### 🔴 Bài 3

Giải thích vì sao token nên private

<details>
<summary>💡 Xem lời giải</summary>

Token là thông tin nhạy cảm (giống mật khẩu). Nếu để `public`, bất kỳ chỗ nào trong code cũng có thể đọc/sửa token → nguy hiểm.

```ts
// ❌ Sai: ai cũng truy cập được
class Api {
  public token = "secret_abc123";
}

// ✅ Đúng: chỉ class Api mới dùng được token
class Api {
  private token = "secret_abc123";

  async request(url: string) {
    return fetch(url, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }
}
```

</details>

### 🟡 Bài 4 (Mới)

Tạo class `LoginPage` theo Page Object Model với 3 method: enterUsername, enterPassword, clickLogin. Sau đó viết code sử dụng class đó.

<details>
<summary>💡 Xem lời giải</summary>

```ts
class LoginPage {
  async enterUsername(name: string) {
    await page.fill("#username", name);
  }

  async enterPassword(pass: string) {
    await page.fill("#password", pass);
  }

  async clickLogin() {
    await page.click("#login-btn");
  }
}

// Sử dụng:
const loginPage = new LoginPage();
await loginPage.enterUsername("admin");
await loginPage.enterPassword("password123");
await loginPage.clickLogin();
```

</details>

### 🟢 Bài 5 (Mới)

Tạo class `TestHelper` với 2 static method: `generateEmail()` và `generatePhone()`.

<details>
<summary>💡 Xem lời giải</summary>

```ts
class TestHelper {
  static generateEmail(): string {
    return `test_${Date.now()}@mail.com`;
  }

  static generatePhone(): string {
    return "09" + Math.floor(Math.random() * 100000000);
  }
}

console.log(TestHelper.generateEmail());  // "test_1710123456@mail.com"
console.log(TestHelper.generatePhone());  // "0938472615"
```

</details>

---

## 💣 12. Sai lầm thường gặp

- Không dùng class
- God class
- Không dùng private
- Không có BaseApi

### ❌ Chạy file TypeScript trực tiếp bằng `node`

```bash
node Person.ts   # ❌ Lỗi: SyntaxError: Unexpected identifier 'name'
```

**Lý do:** `node` chỉ hiểu JavaScript (`.js`), không hiểu cú pháp TypeScript như `name: string`.

**Cách đúng:**

```bash
# Cách 1: Biên dịch rồi chạy
npm install typescript        # Cài TypeScript
npx tsc Person.ts             # Biên dịch .ts → .js
node Person.js                # Chạy file .js

# Cách 2: Dùng tsx (gọn hơn, tự biên dịch + chạy luôn)
npx tsx Person.ts
```

---

## 🚀 13. Tổng kết

Class giúp:

- Tổ chức code
- Tái sử dụng
- Dễ maintain
