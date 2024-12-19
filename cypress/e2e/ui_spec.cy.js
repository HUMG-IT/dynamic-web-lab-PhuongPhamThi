describe('Kiểm thử giao diện lưu tên và tính chỉ số BMI', () => {
    it('hiển thị lời chào sau khi gửi tên', () => {
        cy.visit('http://localhost:3000');
        cy.get('#name').type('John');
        cy.get('button').contains('Gửi tên').click();
        cy.get('#nameResponse').should('contain', 'Xin chào, John!');
    });

    it('tính và hiển thị chỉ số BMI', () => {
        cy.visit('http://localhost:3000');
        cy.get('#weight').type('60');
        cy.get('#height').type('165');
        cy.get('button').contains('Tính BMI').click();
        cy.get('#bmiResult').should('contain', 'Bình thường');
    });

    it('tính và hiển thị tuổi', () => {
        cy.visit('http://localhost:3000');
        cy.get('#birthYear').type('2004');
        cy.get('button').contains('Tính tuổi').click();
        cy.get('#bmiResult').should('contain', 'Tuổi của bạn là: 20 tuổi.');
    });    
});
