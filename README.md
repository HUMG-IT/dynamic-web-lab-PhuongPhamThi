# Bài tập lớn - Phát triển ứng dụng web

## Thông tin sinh viên
- **Họ và tên**: Phạm Thị Phượng
- **MSSV**: 2221050063
- **Lớp**: DCCTCT67_07A

## Giới thiệu
Đây là yêu cầu của bài tập lớn cho học phần Phát triển ứng dụng web + BTL (mã học phần 7080116). Sinh viên sẽ xây dựng một ứng dụng web hoàn chỉnh sử dụng một trong các công nghệ sau: NodeJS và Express, .NET, hoặc Web với Dart (**web-only**), Web với Flutter (**multi-platform**) hay một framework tương tự nhằm tăng tốc phát triển. Bài tập lớn này yêu cầu sinh viên áp dụng các kiến thức đã học về lập trình giao diện người dùng, web động theo mô hình Client-Server, tích hợp API hoặc/và CSDL, kiểm thử tự động và CI/CD với GitHub Actions.

## Mục tiêu
Bài tập lớn nhằm:
- Phát triển frontend (UI) cho ứng dụng web động với các công nghệ web truyền thống hoặc hiện đại.
- Hiểu và áp dụng mô hình Client-Server trong phát triển ứng dụng web.
- Biết tích hợp ứng dụng với backend hoặc dịch vụ backend thông qua API hoặc CSDL.
- Thực hiện được các thao tác CRUD (Create, Read, Update, Delete) cơ bản với dữ liệu.
- Biết áp dụng kiểm thử tự động để đảm bảo chất lượng ứng dụng.
- Biết áp dụng CI/CD với GitHub Actions để tự động hóa quy trình kiểm thử và triển khai.

## Yêu cầu ứng dụng
1. **Chức năng CRUD**  
   Ứng dụng phải có khả năng thực hiện các thao tác CRUD cơ bản trên một loại dữ liệu cụ thể (ví dụ: quản lý người dùng, sản phẩm, bài viết, v.v.).

2. **Giao diện người dùng**  
   Ứng dụng phải có giao diện người dùng thân thiện và dễ sử dụng, được xây dựng bằng HTML, CSS và JavaScript (hoặc Dart nếu sử dụng Flutter Web).

3. **Tích hợp API hoặc/và CSDL**  
   Ứng dụng phải tích hợp với một backend hoặc dịch vụ backend thông qua API hoặc/và CSDL. Backend có thể được xây dựng bằng NodeJS và Express, .NET, Web với Dart (**web-only**), Web với Flutter (**multi-platform**) hay một framework tương tự.

4. **Kiểm thử tự động**
Ứng dụng phải có các kiểm thử tự động để đảm bảo chất lượng. Các kiểm thử này có thể bao gồm kiểm thử đơn vị (unit tests), kiểm thử tích hợp (integration tests), và kiểm thử giao diện người dùng (UI tests) tùy theo yêu cầu của ứng dụng và công nghệ sử dụng.

5. **CI/CD với GitHub Actions**
Ứng dụng có thể sử dụng GitHub Actions để tự động hóa quy trình kiểm thử và triển khai.

## Hướng dẫn thực hiện
1. **Xác định yêu cầu ứng dụng**: Xác định chức năng cần thực hiện, thiết kế giao diện người dùng, và xác định công nghệ sử dụng.
2. **Phát triển frontend**: Xây dựng giao diện người dùng với HTML, CSS và JavaScript (hoặc Dart nếu sử dụng Flutter Web).
3. **Phát triển backend**: Xây dựng backend với NodeJS và Express, .NET, Web với Dart (**web-only**), Web với Flutter (**multi-platform**) hoặc một framework tương tự.
4. **Tích hợp frontend và backend**: Tích hợp giao diện người dùng với backend thông qua API hoặc CSDL.
5. **Viết kiểm thử tự động**: Viết các kiểm thử tự động để đảm bảo chất lượng ứng dụng.
6. **Thực thi và gỡ lỗi**: Kiểm thử ứng dụng và sửa lỗi nếu có trên môi trường phát triển.
7. **Thiết lập CI/CD**: Thiết lập GitHub Actions để tự động hóa quy trình kiểm thử và triển khai (không bắt buộc).
8. **Triển khai ứng dụng**: Triển khai ứng dụng lên môi trường sản phẩm để sử dụng (không bắt buộc).

## Tiêu chí đánh giá
- **5/10**: Hoàn thành các chức năng cơ bản của ứng dụng web động, bao gồm giao diện người dùng, server backend với Node.js và Express (hoặc framework khác), và các thao tác CRUD cơ bản.
- **6/10**: Thực hiện kiểm thử đơn vị (unit tests) và kiểm thử tích hợp (integration tests) cho các chức năng chính của ứng dụng.
- **7/10**: Thực hiện kiểm thử End-to-End (E2E) với Cypress và đảm bảo các luồng thao tác chính hoạt động đúng.
- **8/10**: Tích hợp ứng dụng với một CSDL (ví dụ: MongoDB, MySQL) hoặc dịch vụ backend như Firebase để lưu trữ và quản lý dữ liệu.
- **9/10**: Thiết lập CI/CD với GitHub Actions để tự động hóa quy trình kiểm thử và triển khai ứng dụng.
- **10/10**: Báo cáo chi tiết về quá trình phát triển ứng dụng, bao gồm thiết kế, triển khai, kiểm thử và CI/CD. Video demo ứng dụng hoạt động và tài liệu hướng dẫn cài đặt ứng dụng trên thiết bị di động hoặc máy ảo.

## Báo cáo kết quả

Sinh viên viết báo cáo kết quả trực tiếp vào phần này để tránh tạo ra nhiều file báo cáo. Báo cáo cần bao gồm các nội dung sau:

1. **Giới thiệu ứng dụng**: Mô tả ngắn gọn về ứng dụng, mục tiêu và các chức năng chính.

2. **Hình ảnh giao diện**: Chèn hình ảnh giao diện chính và các chức năng của ứng dụng. Đảm bảo hình ảnh rõ ràng và mô tả đầy đủ các phần của giao diện.

3. **Mô tả chức năng**: Mô tả chi tiết các chức năng của ứng dụng, bao gồm các thao tác CRUD, quản lý trạng thái, tích hợp API hoặc CSDL, kiểm thử tự động và CI/CD.

4. **Video demo (nếu có)**: Chèn liên kết đến video demo ứng dụng hoạt động. Video không quá 5 phút, trình bày rõ ràng các chức năng chính và cách sử dụng ứng dụng.

5. **Tự đánh giá điểm**: Sinh viên tự đánh giá điểm của mình theo tiêu chí đánh giá đã đề ra. Ghi rõ điểm tự đánh giá và lý do.


# Báo cáo
## I. Giới thiệu chung
Ứng dụng web động này giúp sinh viên làm quen với các khái niệm cơ bản về lập trình web, bao gồm thiết kế giao diện, triển khai server backend và kiểm thử tự động. Ứng dụng có giao diện đơn giản để người dùng tương tác và backend xử lý logic, cho phép gửi và lưu trữ thông tin, đồng thời thực hiện các chức năng như tính tuổi và chỉ số BMI.
### 1. Cấu trúc thư mục
```text
dynamic_web_lab/
  ├── .github/                    # Chứa các tệp cấu hình cho GitHub, đặc biệt là các workflow CI/CD.
  │   └── workflows/
  │       └── ci.yml              # Tệp cấu hình workflow cho GitHub Actions, dùng để tự động kiểm thử và triển khai.
  ├── .vscode/                    # Thư mục cấu hình cho Visual Studio Code, lưu các cài đặt cụ thể cho dự án.
  ├── src/                        # Thư mục chứa mã nguồn chính cho server backend.
  │   ├── app.js                  # Tệp khởi tạo và cấu hình ứng dụng Express, nơi server được khởi động.
  │   ├── routes/                 # Thư mục chứa các tệp định nghĩa các routes cho ứng dụng.
  │   │   └── api.js              # Tệp định nghĩa các routes, nơi thiết lập các đường dẫn cho các endpoint như `/api/v1/submit` và `/api/v1/bmi`.
  │   ├── controllers/            # Thư mục chứa các controller, nơi xử lý logic của các endpoint.
  │   │   └── nameController.js   # Controller để xử lý yêu cầu lưu tên, xác định logic phản hồi từ server.
  │   │   └── bmiController.js    # Controller xử lý yêu cầu tính chỉ số BMI và phân loại kết quả.
  |   |   └── ageController.js    # Controller xử lý yêu cầu tính tuổi và trả về số tuổi.
  │   └── models/                 # Thư mục chứa các mô hình (model) quản lý dữ liệu.
  │       └── names.js            # Model lưu và xử lý dữ liệu tên người dùng (có thể thêm phương thức lưu, lấy dữ liệu).
  │       └── bmi.js              # Model chứa logic tính toán BMI và phân loại (dựa trên chiều cao, cân nặng).
  ├── tests/                      # Thư mục chứa các tệp kiểm thử cho ứng dụng.
  │   └── app.test.js             # Unit test cho các endpoint, kiểm tra hoạt động của các API và logic backend.
  │   └── selenium_test.js        # Kiểm thử ứng dụng bằng Selenium cho giao diện người dùng, kiểm tra tương tác UI.
  ├── cypress                     # Thư mục cấu trúc cho kiểm thử End-to-End bằng Cypress.
  │   ├── e2e/
  │   │   └── ui_spec.cy.js       # Tệp kiểm thử UI với Cypress, dùng để kiểm tra luồng thao tác End-to-End.
  └── public/                     # Thư mục chứa tài nguyên tĩnh của frontend (HTML, CSS, JavaScript).
      ├── css/
      │   └── style.css           # Tệp CSS để định dạng giao diện của tính năng Register & Login.
      |   └── styleHome.css       # Tệp CSS để định dạng giao diện của tính năng web.
      ├── js/
      │   └── firebaseauth.js     # Tệp JavaScript cung cấp các chức năng cơ bản cho việc đăng ký, đăng nhập và quản lý thông tin người dùng trong một ứng dụng web sử dụng Firebase.
      |   └── script.js           # Tệp JavaScript xử lý logic phía frontend (tính năng đăng nhập đăng ký).
      |   └── script.js           # Tệp JavaScript xử lý logic phía frontend (sự kiện, gửi dữ liệu qua form).
      └── index.html              # Tệp HTML chính cho giao diện người dùng, đăng ký và đăng nhập.
      └── homepage.html           # Tệp HTML chính cho giao diện người dùng, hiển thị form và nhận dữ liệu.
      └── profile.html            # Tệp HTML chính cho giao diện người dùng, cập nhật, sửa, xóa tài khoản.
  ├── .gitignore                  # Tệp cấu hình để loại trừ các tệp không cần theo dõi trong Git (node_modules, v.v.).
  ├── jest.config.ts              # Tệp cấu hình hành vi của Jest khi chạy các bài kiểm tra.
  ├── cypress.config.js           # Tệp cấu hình Cypress để thiết lập môi trường kiểm thử End-to-End.
  ├── package.json                # Tệp cấu hình chính cho dự án Node.js, chứa thông tin dự án và danh sách các thư viện phụ thuộc.
  ├── README.md                   # Tệp hướng dẫn chi tiết cách sử dụng và triển khai dự án.
```
### 2. Tính năng chính của ứng dụng
- **Đăng ký và Đăng nhập Người dùng**
- **Lưu thông tin tên người dùng**
- **Tính tuổi người dùng**
- **Tính toán và phân loại chỉ số BMI**
### 3.Công nghệ sử dụng
- **Frontend:** HTML5, CSS3, JavaScript(ES6+)
- **Backend:** Node.js, Express.js
- **Authentication:** Firebase Auth
- **Testing:** Jest, Cypress, Selenium
- **CI/CD:** GitHub Actions
- **Version Control:** Git, GitHub
## II. Hình ảnh giao diện
### 1. Giao diện đăng nhập, đăng ký
**Đăng nhập:**
![đăng nhập](screenshots/giao_dien_dang_nhap.jpg)


**Đăng ký:**
![đăng ký](screenshots/giao_dien_dang_ky.jpg)


### 2. Giao diện trang chủ
![](screenshots/homepage.jpg)

### 3. Giao diện quản ls người dùng
![](screenshots/quan_ly_nguoi_dung.jpg)

## III. Mô tả chức năng
### 1. Đăng ký tài khoản
- **Mô tả quy trình:**
    - Người dụng nhập thông tin bao gồm: Email, Mật khẩu, Họ và Tên.
    - Hệ thống sử dụng Firebase Authentication để tạo tài khoản mới.
    - Sau khi tài khoản được tạo thành công:
        + Thông tin người dùng (email, họ, tên, thời gian tạo) được luwu vào firebase Database để quản lý dữ liệu chi tiết.
        + Ngườ dùng  được thông báo rằng tài khoản đã được tạo thành công và được chuyển hướng về trang đăng nhập.
    - Nếu có lỗi xảy ra (ví dụL email đã tồn tại), hệ thống sẽ hiển thị thông báo lỗi chi tiết.
### 2. ĐĂng nhập tài khoản
- Người dùng nhập **Email** và **Mật Khẩu** để đăng nhập.
- Firebase Authentication xác thực thông tin đăng nhập:
    + Nếu thông tin chính xác, người dùng được chuyển đến trang chính (homepage.html).
    + Nếu thông tin không chính xác hoặc tài khoản không tồn tại, hệ thống hiển thị thông báo lỗi.      
- Sau khi đăng nhập thành công, ID của người dùng (user.uid)được lưu trữ trong Local Storage để quản lý trạng thái đăng nhập.
***Trạng thái các thực người dùng:***
- Kiểm tra trạng thái đăng nhập:
    + Sử dụng sự kiện ```auth.onAuthStateChanged()``` để lắng nghe thay đổi trạng thái xác thực .
    + Nếu người dùng đã đăng nhập:
        - Hệ thống ghi nhận thông tin đăng nhập (user ID).
    + Nếu người dùng đăng xuất: 
        - Xóa thông tin đăng nhập khỏi Local Storage và chuyển hướng về trang đăng nhập. 
           

### 3. Lưu tên
- Người dùng nhập tên vào form
- Xác thực dữ liệu trước khi gửi
- Lưu trữ tên vào mảng
- Hiển thị thông báo
### 4.Tính tuổi
- Người dùng nhập năm sinh vào form
- Hệ thống sẽ tự động tính tuổi hiện tại
- Xử lý các trường hợp năm sinh không hợp lệ
### 5. Tính BMI
- Nhập chiều cao và cân nặng
- Tự động tính chỉ số bmi
- Phân loại kết quả theo thang đo
- Hiển thị chỉ số và phân loại
### 6. Quản lý người dùng
- Truy cập thông tin cá nhân qua **Edit Profile**
- Cập nhật và lưu thông tin người dùng
- (Xóa tài khoản nếu muốn)

## IV. Video demo
<video width="640" height="360" controls>
  <source src="cypress/videos/ui_spec.cy.js.mp4" type="video/mp4">
</video>
![Watch the video](screenshots/giao_dien_dang_nhap)](cypress/videos/ui_spec.cy.js.mp4)

## V. Hướng dẫn cài đặt, chạy ứng dụng 
### 1. Các bước cài đặt
#### 1.1. Clone dự án
```
# Clone repository về máy local
git clone https://github.com/HUMG-IT/dynamic-web-lab-PhuongPhamThi.git

# Di chuyển vào thư mục dự án
cd dynamic-web-lab-PhuongPhamThi
```

#### 1.2. Cài đặt dependencies
```
# Cài đặt các package cần thiết
npm install
```
#### 1.3. Cấu hình Firebase
**Tạo project trên Firebase Console:**
- Truy cập https://console.firebase.google.com/
- Tạo project mới
- Kích hoạt Authentication và Realtime Database


**Lấy thông tin cấu hình Firebase:**
- Trong Project Settings, tìm mục "Your apps"
- Chọn Web App (</>)
- Copy thông tin cấu hình

**Tạo file **.env** trong thư mục gốc của dự án và thêm thông tin cấu hình:**
```
  apiKey: "AIzaSyAWHYeAMKQKgqYrowdBthVX1LRsNcf2-J0",
  authDomain: "dynamic-login-3c052.firebaseapp.com",
  databaseURL: "https://dynamic-login-3c052-default-rtdb.firebaseio.com",
  projectId: "dynamic-login-3c052",
  storageBucket: "dynamic-login-3c052.firebasestorage.app",
  messagingSenderId: "615874174732",
  appId: "1:615874174732:web:c28a822958fa5c19a97329"
```
### 2. Chạy ứng dụng
#### 2.1. Khởi động server development
```
# Chạy ứng dụng ở môi trường development
npm run dev
``` 
#### 2.2. Truy cập ứng dụng
```
# Mở trình duyệt web
Truy cập địa chỉ: http://localhost:3000
```
### 3. Chạy kiểm thử
#### 3.1. Unit Tests
```
# Chạy unit tests
npm run test
```
#### 3.2.  End-to-End Tests với Cypress
```
# Mở Cypress Test Runner
npm run cypress:open

# Hoặc chạy tests ở chế độ headless
npm run cypress:run
```
### 4. Xử lý lỗi thường gặp
#### 4.1. Lỗi PORT đã được sử dụng:
```
# Tìm process đang sử dụng port
lsof -i :3000

# Dừng process
kill -9 <PID>
```
## VI. Bảng checklist và tự đánh giá mức điểm
<h3>Checklist Đánh Giá Dự Án</h3>

<table>
  <thead>
    <tr>
      <th>Tiêu chí</th>
      <th>Mô tả</th>
      <th>Đã hoàn thành (✔/✘)</th>
      <th>Minh chứng</th>
      <th>Điểm tự đánh giá</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3"><b>Hoàn thành CRUD (5 điểm)</b></td>
      <td>Giao diện frontend (HTML/CSS/JS, Flutter Web…)</td>
      <td><span style="color: green;">✔</span></td>
      <td><a href ="https://github.com/HUMG-IT/dynamic-web-lab-PhuongPhamThi/tree/main/public">Link minh chứng</a></td>
      <td rowspan="3">4.0</td>
    </tr>
    <tr>
      <td>Backend (NodeJS/Express, .NET, Dart web…)</td>
      <td><span style="color: green;">✔</span></td>
      <td><a href ="https://github.com/HUMG-IT/dynamic-web-lab-PhuongPhamThi/tree/main/src">Link minh chứng</a></td>
    </tr>
    <tr>
      <td>CRUD cơ bản (create, read, update, delete)</td>
      <td><span style="color: green;">✔</span></td>
      <td><a href ="https://github.com/HUMG-IT/dynamic-web-lab-PhuongPhamThi/blob/main/public/js/firebaseauth.js">Link minh chứng</a></td>
    </tr>
    <tr>
      <td rowspan="2"><b>Kiểm thử (6–7 điểm)</b></td>
      <td>Unit tests</td>
      <td><span style="color: green;">✔</span></td>
      <td><a href ="https://github.com/HUMG-IT/dynamic-web-lab-PhuongPhamThi/blob/main/test/app.test.js">Link minh chứng</a></td>
      <td rowspan="2">2.0</td>
    </tr>
    <tr>
      <td>Integration/E2E tests</td>
      <td><span style="color: green;">✔</span></td>
      <td><a href ="https://github.com/HUMG-IT/dynamic-web-lab-PhuongPhamThi/blob/main/cypress/e2e/ui_spec.cy.js">Link minh chứng</a></td>
    </tr>
    <tr>
      <td><b>Tích hợp CSDL (8 điểm)</b></td>
      <td>Sử dụng một CSDL (MongoDB/MySQL/Postgres/Firebase)</td>
      <td><span style="color: green;">✔</span></td>
      <td><a href ="https://github.com/HUMG-IT/dynamic-web-lab-PhuongPhamThi/blob/main/public/js/firebaseauth.js">Link minh chứng</a></td>
      <td>1.0</td>
    </tr>
    <tr>
      <td rowspan="2"><b>CI/CD (9 điểm)</b></td>
      <td>Thiết lập kiểm thử tự động (GitHub Actions)</td>
      <td><span style="color: green;">✔</span></td>
      <td><a href ="https://github.com/HUMG-IT/dynamic-web-lab-PhuongPhamThi/blob/main/.github/workflows/ci.yml">Link minh chứng</a></td>
      <td rowspan="2">1.0</td>
    </tr>
    <tr>
      <td>Triển khai thành công (nếu có)</td>
      <td><span style="color: green;">✔</span></td>
      <td><a href ="https://github.com/HUMG-IT/dynamic-web-lab-PhuongPhamThi/blob/main/screenshots/cicd.jpg">Link minh chứng</a></td>
    </tr>
    <tr>
      <td rowspan="3"><b>Báo cáo, demo & tài liệu (10 điểm)</b></td>
      <td>Báo cáo mô tả đầy đủ quá trình, kèm hình ảnh minh họa</td>
      <td><span style="color: green;">✔</span></td>
      <td><a href ="https://github.com/HUMG-IT/dynamic-web-lab-PhuongPhamThi/blob/main/README.md">Link minh chứng</a></td>
      <td rowspan="3">1.0</td>
    </tr>
    <tr>
      <td>Video demo ≤ 5 phút</td>
      <td><span style="color: green;">✔</span></td>
      <td><a href ="https://github.com/HUMG-IT/dynamic-web-lab-PhuongPhamThi/blob/main/cypress/videos/ui_spec.cy.js.mp4">Link minh chứng</a></td>
    </tr>
    <tr>
      <td>Hướng dẫn cài đặt, chạy ứng dụng</td>
      <td><span style="color: green;">✔</span></td>
      <td><a href ="https://github.com/HUMG-IT/dynamic-web-lab-PhuongPhamThi/blob/main/README.md">Link minh chứng</a></td>
    </tr>
    <tr>
      <td colspan="4"><b>Tổng điểm:</b></td>
      <td><b>9.0</b></td>
    </tr>
  </tbody>
</table>

**Lý do:**
  - Tuy là em sử dụng project trong quá trình học mà thầy đã cho làm, nhưng em đã chủ động phát triển và mở rộng thêm chức năng cũng như cải thiện hiệu suất của hệ thống.
  Cụ thể:
    + Hoàn thiện giao diện: Em đã thiết kế lại giao diện frontend để cải thiện trải nghiệm người dùng, đồng thời bổ sung một số tính năng trực quan hơn.
    + Tích hợp cơ sở dữ liệu Firebase: Em đã cấu hình cơ sở dữ liệu và triển khai đầy đủ CRUD, đảm bảo tính nhất quán dữ liệu.
    + Thêm tính năng kiểm thử: Em đã thực hiện các bài kiểm thử Unit Test và E2E Test để đảm bảo chất lượng ứng dụng.
    + Tích hợp CI/CD: Em thiết lập pipeline GitHub Actions để tự động hóa kiểm thử và triển khai.
  Những cải tiến này đã giúp em nắm vững hơn các kiến thức đã học và áp dụng chúng vào thực tiễn, đồng thời tạo ra sản phẩm hoàn chỉnh hơn so với yêu cầu ban đầu. 

## Yêu cầu nộp bài
- **Source code**: Sinh viên cần nhận bài tập từ GitHub Classroom và nộp mã nguồn của ứng dụng theo đúng cấu trúc yêu cầu.
- **Gỡ lỗi ứng dụng**: Sinh viên cần chắc chắn ứng dụng hoạt động đúng trên máy tính cá nhân trước khi nộp bài.
- **Kiểm thử tự động**: Sinh viên cần thiết lập kiểm thử tự động để đảm bảo chất lượng ứng dụng. Mã nguồn của kiểm thử cần được đặt trong thư mục `tests`.
- **Thiết kế giao diện**: Thiết kế giao diện người dùng cho ứng dụng, đảm bảo tính thân thiện và dễ sử dụng.
- **Phát triển backend**: Xây dựng backend cho ứng dụng, bao gồm các API cần thiết để thực hiện các thao tác CRUD với dữ liệu thông qua **CSDL hoặc dịch vụ backend như Firebase**.

- **Tích hợp frontend và backend**: Tích hợp giao diện người dùng với backend thông qua các API.
- **Thiết lập CI/CD**: Thiết lập GitHub Actions để tự động hóa quy trình kiểm thử và triển khai.

