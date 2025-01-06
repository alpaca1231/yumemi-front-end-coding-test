import { test, expect } from '@chromatic-com/playwright';

test('初期表示', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(
    page.getByRole('heading', {
      name: '都道府県別の総人口推移グラフ',
      level: 1,
    }),
  ).toBeVisible();

  const prefectureCount = await page.getByRole('checkbox').count();
  expect(prefectureCount).toBe(47);

  await expect(page.getByText('都道府県を選択してください')).toBeVisible();
});

test('チェックボックスを選択したとき', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByLabel('北海道').click({ force: true });
  await page.waitForURL((url) => url.searchParams.get('pref') === '1', {
    timeout: 5000,
  });

  const url = new URL(page.url());
  expect(url.searchParams.get('pref')).toBe('1');

  await expect(page.getByRole('status')).toBeVisible();

  ['総人口', '年少人口', '生産年齢人口', '老年人口'].forEach(async (tab) => {
    await expect(page.getByRole('tab', { name: tab })).toBeVisible();
  });

  await expect(page.getByRole('tabpanel', { name: '総人口' })).toBeVisible();
});

test('タブを切り替えたとき', async ({ page }) => {
  await page.goto('http://localhost:3000?pref=1');

  await page.getByRole('tab', { name: '年少人口' }).click();
  await expect(page.getByRole('tabpanel', { name: '年少人口' })).toBeVisible();

  await page.getByRole('tab', { name: '生産年齢人口' }).click();
  await expect(
    page.getByRole('tabpanel', { name: '生産年齢人口' }),
  ).toBeVisible();

  await page.getByRole('tab', { name: '老年人口' }).click();
  await expect(page.getByRole('tabpanel', { name: '老年人口' })).toBeVisible();
});

test('チェックボックスを解除したとき', async ({ page }) => {
  await page.goto('http://localhost:3000?pref=1');

  await page.getByLabel('北海道').click({ force: true });
  await page.waitForURL((url) => !url.searchParams.has('pref'), {
    timeout: 5000,
  });

  const url = new URL(page.url());
  expect(url.searchParams.has('pref')).toBe(false);

  await expect(page.getByText('都道府県を選択してください')).toBeVisible();
});

test('都道府県を複数選択したとき', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const prefectures = [
    '北海道',
    '青森県',
    '岩手県',
    '宮城県',
    '秋田県',
    '山形県',
    '福島県',
    '茨城県',
    '栃木県',
    '群馬県',
    '埼玉県',
    '千葉県',
    '東京都',
    '神奈川県',
    '新潟県',
    '富山県',
    '石川県',
    '福井県',
    '山梨県',
    '長野県',
    '岐阜県',
    '静岡県',
    '愛知県',
    '三重県',
    '滋賀県',
    '京都府',
    '大阪府',
    '兵庫県',
    '奈良県',
    '和歌山県',
    '鳥取県',
    '島根県',
    '岡山県',
    '広島県',
    '山口県',
    '徳島県',
    '香川県',
    '愛媛県',
    '高知県',
    '福岡県',
    '佐賀県',
    '長崎県',
    '熊本県',
    '大分県',
    '宮崎県',
    '鹿児島県',
    '沖縄県',
  ];

  for (const pref of prefectures) {
    await page.getByLabel(pref).click({ force: true });

    await page.waitForFunction(
      (expectedCount) => {
        const url = new URL(location.href);
        return url.searchParams.getAll('pref').length === expectedCount;
      },
      prefectures.indexOf(pref) + 1,
      { timeout: 5000 },
    );
  }

  const url = new URL(page.url());
  expect(url.searchParams.getAll('pref').length).toBe(47);

  await expect(page.getByRole('status')).toBeVisible();

  ['総人口', '年少人口', '生産年齢人口', '老年人口'].forEach(async (tab) => {
    await expect(page.getByRole('tab', { name: tab })).toBeVisible();
  });

  await expect(page.getByRole('tabpanel', { name: '総人口' })).toBeVisible();
});
