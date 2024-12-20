// Tính chỉ số BMI dựa trên cân nặng và chiều cao, trả về hệ số BMI với 2 số sau dấu phẩy
export function calculateBMI(weight, height) {
    const bmi = weight / Math.pow(height / 100, 2);
    return parseFloat(bmi.toFixed(2));
}

export function classifyBMI(bmi) {
    if (bmi < 18.5) return 'Gầy';
    if (bmi < 25) return 'Bình thường';
    if (bmi < 30) return 'Thừa cân';
    return 'Béo phì';
}
