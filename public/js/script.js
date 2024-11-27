// Form lưu tên
document.getElementById('nameForm').addEventListener('submit', async function (e) {
    // Ngăn hành vi mặc định của form (ngăn tải lại trang)
    e.preventDefault();

    // Lấy giá trị nhập từ trường input có id là 'name'
    const name = document.getElementById('name').value;

    // Gửi yêu cầu POST đến server tại route '/submit' với dữ liệu JSON
    const response = await fetch('/api/v1/submit', {
        method: 'POST',  // Sử dụng phương thức POST để gửi dữ liệu
        headers: {
            'Content-Type': 'application/json',  // Định nghĩa kiểu nội dung gửi là JSON
        },
        body: JSON.stringify({ name: name }),  // Chuyển đổi đối tượng { name: name } thành chuỗi JSON
    });

    // Chờ phản hồi từ server và chuyển đổi phản hồi từ JSON thành đối tượng JavaScript
    const data = await response.json();

    // Hiển thị thông điệp trả về từ server trong phần tử có id là 'nameResponse'
    document.getElementById('nameResponse').textContent = `${data.message}. Danh sách tên: ${data.names.join(', ')}`;
});

// Form tính BMI
document.getElementById('bmiForm').addEventListener('submit', async function (e) {
    // Ngăn hành vi mặc định của form (ngăn tải lại trang)
    e.preventDefault();

    // Lấy giá trị chiều cao, cân nặng nhập từ form
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Gửi yêu cầu POST đến server tại route '/bmi' với dữ liệu JSON
    const response = await fetch('/api/v1/bmi', {
        method: 'POST',  // Sử dụng phương thức POST để gửi dữ liệu
        headers: {
            'Content-Type': 'application/json',  // Định nghĩa kiểu nội dung gửi là JSON
        },
        body: JSON.stringify({ height, weight }),  // Chuyển đổi đối tượng thành chuỗi JSON
    });

    // Chờ phản hồi từ server và chuyển đổi phản hồi từ JSON thành đối tượng JavaScript
    const data = await response.json();

    // Hiển thị thông điệp trả về từ server trong phần tử có id là 'bmiResult'
    document.getElementById('bmiResult').textContent = `BMI của bạn là: ${data.bmi}, Phân loại: ${data.classification}`;
});

// Form tính tuổi
document.getElementById('ageForm').addEventListener('submit', async function (e) {
    // Ngăn hành vi mặc định của form (ngăn tải lại trang)
    e.preventDefault();

    // Lấy giá trị năm sinh từ form
    const birthYear = parseInt(document.getElementById('birthYear').value);

    // Gửi yêu cầu POST đến server tại route '/age' với dữ liệu JSON
    const response = await fetch('/api/v1/age', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ birthYear }),
    });

    // Chờ phản hồi từ server và chuyển đổi phản hồi từ JSON
    const data = await response.json();

    // Hiển thị thông điệp trả về từ server trong phần tử có id là 'ageResult'
    document.getElementById('ageResult').textContent = 
        `Tuổi của bạn là: ${data.age} tuổi.`;
});