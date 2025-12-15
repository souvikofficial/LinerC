import { test, expect } from '@playwright/test';

test('dashboard smoke test', async ({ page }) => {
    // 1. Visit Dashboard
    await page.goto('/dashboard');

    // 2. Check Title
    await expect(page.getByRole('heading', { name: 'Global Dashboard' })).toBeVisible();

    // 3. Check KPIs presence
    // Using text matching instead of test-ids for resilience in this smoke test
    await expect(page.getByText('Total Volume')).toBeVisible();
    await expect(page.getByText('Net Revenue')).toBeVisible();

    // 4. Check Navigation
    const nav = page.getByRole('navigation');
    await expect(nav).toBeVisible();
});
