// 첫 화면에서 로그인/회원가입 화면으로 이동
function navigateToAuth() {
    document.getElementById('first-screen').classList.add('hidden');
    document.getElementById('auth-screen').classList.remove('hidden');
}

// 로그인/회원가입 후 요금제 화면으로 이동
document.getElementById('auth-form').addEventListener('submit', (e) => {
    e.preventDefault(); // 폼 제출 기본 동작 방지
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('로그인/회원가입 완료!');
        document.getElementById('auth-screen').classList.add('hidden');
        document.getElementById('pricing-screen').classList.remove('hidden');
    } else {
        alert('아이디와 비밀번호를 입력하세요!');
    }
});

// 계좌번호 섹션 표시 함수 (기존 코드 유지)
function showBankInfo(planType) {
    const bankDetails = document.getElementById('bank-details');
    const messageElement = document.getElementById('message');

    // 계좌번호 섹션 표시
    bankDetails.classList.remove('hidden');

    // 기존 메시지 초기화
    messageElement.classList.add('hidden');
    messageElement.textContent = '';

    // 요금제 선택 알림
    alert(`${planType} 요금제를 선택하셨습니다. 계좌 정보를 확인하세요.`);
}

// 인증번호 확인 함수 (기존 코드 유지)
document.getElementById('verify-btn').addEventListener('click', () => {
    const verificationCode = document.getElementById('verification-code').value;
    const messageElement = document.getElementById('message');

    // 인증번호 확인
    if (verificationCode === '1234') {
        messageElement.textContent = '인증 성공! 다운로드가 시작됩니다.';
        messageElement.style.color = '#00ff00';
        messageElement.classList.remove('hidden');

        // 다운로드 실행 (2초 후)
        setTimeout(() => {
            window.location.href = 'files/your-program.exe';
        }, 2000);
    } else {
        messageElement.textContent = '잘못된 인증번호입니다. 관리자(admin@example.com)에게 문의하세요.';
        messageElement.style.color = '#e50914';
        messageElement.classList.remove('hidden');
    }
});
