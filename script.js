// 구독 버튼 클릭 시 로그인/회원가입 옵션 표시
function showAuthOptions() {
    const mainSection = document.getElementById('main-section');
    const authOptions = document.getElementById('auth-options');
    mainSection.classList.add('hidden');
    authOptions.classList.remove('hidden');
}

// 로그인/회원가입 버튼 클릭 시 페이지 이동
function redirectTo(page) {
    const authOptions = document.getElementById('auth-options');
    const pricingSection = document.getElementById('pricing-section');

    if (page === 'signup') {
        alert('회원가입 페이지로 이동합니다.');
        // 회원가입 로직 구현
    } else if (page === 'login') {
        alert('로그인 성공! 요금제 화면으로 이동합니다.');
        authOptions.classList.add('hidden');
        pricingSection.classList.remove('hidden');
    }
}

// 은행 정보 표시
function showBankInfo(planType) {
    const bankDetails = document.getElementById('bank-details');
    const message = document.getElementById('message');

    bankDetails.classList.remove('hidden');
    message.classList.add('hidden');
    alert(planType + ' 요금제를 선택하셨습니다. 계좌 정보를 확인하세요.');
}

// 인증번호 검증
document.getElementById('verify-btn').addEventListener('click', function () {
    const verificationCode = document.getElementById('verification-code').value;
    const message = document.getElementById('message');

    if (verificationCode === '123456') {
        message.textContent = '인증 성공! 파일 다운로드가 가능합니다.';
        message.style.color = 'green';
    } else {
        message.textContent = '잘못된 인증번호입니다. 관리자(admin@example.com)에게 문의하세요.';
        message.style.color = 'red';
    }
    message.classList.remove('hidden');
});
