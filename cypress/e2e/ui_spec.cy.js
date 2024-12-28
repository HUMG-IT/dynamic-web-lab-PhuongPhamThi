describe('Kiểm thử giao diện đăng ký, đăng nhập và tính năng khác', () => {
    // Kiểm thử tính năng đăng ký
    it('đăng ký tài khoản mới', () => {
        cy.visit('http://localhost:3000'); // Điều hướng đến trang chính
        cy.get('#signUpButton').click(); // Nhấn vào nút Sign Up để chuyển sang giao diện đăng ký
        cy.get('#fName').type('Phạm Thị'); // Nhập họ
        cy.get('#lName').type('Phượng'); // Nhập tên
        cy.get('#rEmail').type('phuong2004pham@gmail.com'); // Nhập email
        cy.get('#rPassword').type('Phuong123'); // Nhập mật khẩu
        cy.get('#submitSignUp').click(); // Nhấn nút Sign Up
        // cy.get('#signUpMessage').should('contain', 'Đăng ký thành công'); // Kiểm tra thông báo thành công
    });

    // Kiểm thử tính năng đăng nhập
    it('đăng nhập thành công với email và mật khẩu đúng', () => {
        cy.visit('http://localhost:3000'); // Điều hướng đến trang chính
        cy.get('#submitSignIn').click(); // Kiểm tra xem nút Sign In xuất hiện
        cy.get('#email').type('pp2042004@gmail.com'); // Nhập email
        cy.get('#password').type('Phuong123'); // Nhập mật khẩu
        cy.get('#submitSignIn').click(); // Nhấn nút Sign In
        cy.url().should('include', '/homepage.html'); // Kiểm tra chuyển hướng thành công
    });

    // Kiểm thử hiển thị lời chào sau khi gửi tên
    it('hiển thị lời chào sau khi gửi tên', () => {
        cy.visit('http://localhost:3000/homepage.html'); // Điều hướng đến trang giao diện chính
        cy.get('#name').type('John');
        cy.get('button').contains('Gửi tên').click();
        cy.get('#nameResponse').should('contain', 'Xin chào, John!');
    });

    // Kiểm thử tính và hiển thị chỉ số BMI
    it('tính và hiển thị chỉ số BMI', () => {
        cy.visit('http://localhost:3000/homepage.html'); // Điều hướng đến trang giao diện chính
        cy.get('#weight').type('60');
        cy.get('#height').type('165');
        cy.get('button').contains('Tính BMI').click();
        cy.get('#bmiResult').should('contain', 'Bình thường');
    });

    // Kiểm thử tính và hiển thị tuổi
    it('tính và hiển thị tuổi', () => {
        cy.visit('http://localhost:3000/homepage.html'); // Điều hướng đến trang giao diện chính
        cy.get('#birthYear').type('2004');
        cy.get('button').contains('Tính tuổi').click();
        cy.get('#ageResult').should('contain', 'Tuổi của bạn là: 20 tuổi.');
    });
});
