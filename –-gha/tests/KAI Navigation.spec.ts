import { test, expect } from '@playwright/test';

test('Ke KAI Access', async ({ page }) => {
  await page.goto('https://booking.kai.id/');
  await page.getByLabel('Stasiun Asal').click();
  await page.getByLabel('Stasiun Asal').fill('pasa');
  await page.getByText('PASARSENEN').click();
  await page.getByLabel('Stasiun Tujuan').click();
  await page.getByLabel('Stasiun Tujuan').fill('madiun');
  await page.getByText('MADIUN MN').click();
  await page.getByRole('button', { name: 'Cari & Pesan Tiket' }).click();
});