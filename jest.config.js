export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        "^.+\\.[tj]sx?$": "babel-jest" // Sử dụng Babel để chuyển đổi cú pháp ESM
      },
};
