// 스크롤을 통해 요금제 섹션으로 이동
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 계좌번호 표시 함수 (기존 코드 유지)
function showBankInfo(planType) {
    const bankDetails = document.getElementById('bank-details');
    const messageElement = document.getElementById('message');

    bankDetails.classList.remove('hidden');
    messageElement.classList.add('hidden');
    messageElement.textContent = '';
    alert(`${planType} 요금제를 선택하셨습니다. 계좌 정보를 확인하세요.`);
}

// 인증번호 확인 함수 (기존 코드 유지)
document.getElementById('verify-btn').addEventListener('click', () => {
    const verificationCode = document.getElementById('verification-code').value;
    const messageElement = document.getElementById('message');

    if (verificationCode === '1234') {
        messageElement.textContent = '인증 성공! 다운로드가 시작됩니다.';
        messageElement.style.color = '#00ff00';
        messageElement.classList.remove('hidden');

        setTimeout(() => {
            window.location.href = 'files/your-program.exe';
        }, 2000);
    } else {
        messageElement.textContent =
            '잘못된 인증번호입니다. 관리자(admin@example.com)에게 문의하세요.';
        messageElement.style.color = '#e50914';
        messageElement.classList.remove('hidden');
    }
});
