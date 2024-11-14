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
