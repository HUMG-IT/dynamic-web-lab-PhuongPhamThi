// firebaseauth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, setDoc, getDoc, updateDoc, deleteDoc, collection, getDocs, doc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Cấu hình Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAWHYeAMKQKgqYrowdBthVX1LRsNcf2-J0",
    authDomain: "dynamic-login-3c052.firebaseapp.com",
    databaseURL: "https://dynamic-login-3c052-default-rtdb.firebaseio.com",
    projectId: "dynamic-login-3c052",
    storageBucket: "dynamic-login-3c052.firebasestorage.app",
    messagingSenderId: "615874174732",
    appId: "1:615874174732:web:c28a822958fa5c19a97329"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Hàm tiện ích để hiển thị thông báo
function showMessage(message, divId) {
    const messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(() => {
        messageDiv.style.opacity = 0;
    }, 5000);
}

// Các thao tác CRUD
async function createUser(userId, userData) {
    try {
        await setDoc(doc(db, "users", userId), userData);
        return true;
    } catch (error) {
        console.error("Lỗi khi tạo người dùng:", error);
        return false;
    }
}

async function getUser(userId) {
    try {
        const docSnap = await getDoc(doc(db, "users", userId));
        return docSnap.exists() ? docSnap.data() : null;
    } catch (error) {
        console.error("Lỗi khi lấy người dùng:", error);
        return null;
    }
}

async function updateUser(userId, userData) {
    try {
        await updateDoc(doc(db, "users", userId), userData);
        return true;
    } catch (error) {
        console.error("Lỗi khi cập nhật người dùng:", error);
        return false;
    }
}

async function deleteUser(userId) {
    try {
        await deleteDoc(doc(db, "users", userId));
        return true;
    } catch (error) {
        console.error("Lỗi khi xóa người dùng:", error);
        return false;
    }
}

// Lắng nghe sự kiện đăng ký
const signUp = document.getElementById('submitSignUp');
signUp?.addEventListener('click', async (event) => {
    event.preventDefault();
    
    const email = document.getElementById('rEmail').value;
    const password = document.getElementById('rPassword').value;
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        const userData = {
            email,
            firstName,
            lastName,
            createdAt: new Date().toISOString()
        };

        await createUser(user.uid, userData);
        showMessage('Tạo tài khoản thành công', 'signUpMessage');
        window.location.href = 'index.html';
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            showMessage('Địa chỉ email đã tồn tại!', 'signUpMessage');
        } else {
            showMessage('Không thể tạo tài khoản', 'signUpMessage');
        }
    }
});

// Lắng nghe sự kiện đăng nhập
const signIn = document.getElementById('submitSignIn');
signIn?.addEventListener('click', async (event) => {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        showMessage('Đăng nhập thành công', 'signInMessage');
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href = 'homepage.html';
    } catch (error) {
        if (error.code === 'auth/invalid-credential') {
            showMessage('Sai email hoặc mật khẩu', 'signInMessage');
        } else {
            showMessage('Tài khoản không tồn tại', 'signInMessage');
        }
    }
});

// Kiểm tra trạng thái xác thực
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('Người dùng đã đăng nhập:', user.uid);
    } else {
        console.log('Người dùng đã đăng xuất');
    }
});

export { createUser, getUser, updateUser, deleteUser };
