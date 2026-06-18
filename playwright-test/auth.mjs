import { chromium } from '@playwright/test';
const BASE = 'http://localhost:5176';
const TS = Date.now();
const TEST_EMAIL = `enterworld_test_${TS}@gmail.com`;
const TEST_PASS = 'Test1234!';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  page.on('dialog', async dialog => {
    console.log('Alert:', dialog.message());
    await dialog.accept();
  });

  // 1. 회원가입
  console.log('=== 회원가입 테스트 ===');
  console.log('이메일:', TEST_EMAIL);
  await page.goto(`${BASE}/register`);
  await page.waitForLoadState('networkidle');

  await page.fill('input[type="email"]', TEST_EMAIL);
  const pwInputs = await page.$$('input[type="password"]');
  await pwInputs[0].fill(TEST_PASS);
  await pwInputs[1].fill(TEST_PASS);

  await page.click('button[type="submit"]');
  await page.waitForTimeout(5000);

  const afterUrl = page.url();
  console.log('회원가입 후 URL:', afterUrl);

  const errTexts = await page.evaluate(() =>
    Array.from(document.querySelectorAll('[class*="red"]'))
      .map(el => el.textContent?.trim()).filter(Boolean)
  );
  if (errTexts.length) console.log('에러:', errTexts);

  // URL이 /login으로 바뀌면 성공 (alert 후 navigate)
  if (afterUrl.includes('/login')) {
    console.log('✅ 회원가입 성공');
  } else if (afterUrl.includes('/register')) {
    console.log('⚠️  회원가입 후 register 페이지 유지 (이메일 확인 필요하거나 에러)');
  }

  // 2. 로그인 (이메일 확인 없이 바로 로그인 가능한지 테스트)
  console.log('\n=== 로그인 테스트 ===');
  await page.goto(`${BASE}/login`);
  await page.waitForLoadState('networkidle');

  await page.fill('input[type="email"]', TEST_EMAIL);
  await page.fill('input[type="password"]', TEST_PASS);
  await page.click('button[type="submit"]');
  await page.waitForTimeout(5000);

  const loginUrl = page.url();
  console.log('로그인 후 URL:', loginUrl);

  const bodyText = await page.evaluate(() => document.body.innerText.substring(0, 200));
  console.log('페이지 텍스트 일부:', bodyText.replace(/\n/g, ' | '));

  const hasMypage = await page.$('a[href="/mypage"]');
  const hasLogout = await page.evaluate(() =>
    Array.from(document.querySelectorAll('button')).some(b => b.textContent.includes('로그아웃'))
  );
  
  if (hasMypage || hasLogout) {
    console.log('✅ 로그인 성공 - 인증 상태 확인됨');
  } else {
    console.log('❌ 로그인 실패');
    const errEls = await page.evaluate(() =>
      Array.from(document.querySelectorAll('[class*="red"]'))
        .map(el => el.textContent?.trim()).filter(Boolean)
    );
    if (errEls.length) console.log('에러:', errEls);
  }

  if (consoleErrors.length) console.log('\nConsole 에러:', consoleErrors.slice(0, 3));
  await browser.close();
})();
