import { test, expect } from '@playwright/test';

test.describe('Portfolio Page', () => {
  test('should load the portfolio page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Roy Effendie | Senior Technical Program Manager');
  });

  test('should display header with name and title', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('h1')).toContainText('Roy Effendie');
    await expect(page.locator('.title')).toContainText('Senior Technical Program Manager');
  });

  test('should display summary section', async ({ page }) => {
    await page.goto('/');

    const summary = page.locator('.summary');
    await expect(summary).toBeVisible();
    await expect(summary).toContainText('22+ years');
    await expect(summary).toContainText('$100M+ programs');
  });

  test('should display all experience sections', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('.experience-item')).toHaveCount(5);

    await expect(page.getByText('Sr. Director of DevOps/Platform Engineering')).toBeVisible();
    await expect(page.getByText('Uniphore, Palo Alto, CA')).toBeVisible();

    await expect(page.getByText('Sr. Director of Customer Solutions')).toBeVisible();
    await expect(page.getByText('Infoworks (Acquired by Uniphore)')).toBeVisible();

    await expect(page.getByText('Sr. Technical Program Manager')).toBeVisible();
    await expect(page.getByText('Velo Labs, San Francisco, CA')).toBeVisible();
  });

  test('should display core strengths section', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText('Multi-Project Orchestration')).toBeVisible();
    await expect(page.getByText('AI-Driven Innovation')).toBeVisible();
    await expect(page.getByText('Business-Tech Bridge')).toBeVisible();
    await expect(page.getByText('Fast Learner')).toBeVisible();
  });

  test('should display technical skills section', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText('Cloud & Infrastructure:')).toBeVisible();
    await expect(page.getByText('AI & Data:')).toBeVisible();
    await expect(page.getByText('Blockchain:')).toBeVisible();
    await expect(page.getByText('Development:')).toBeVisible();
    await expect(page.getByText('Databases:')).toBeVisible();
  });

  test('should display education section', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText('M.Sc. Database Development & Administration')).toBeVisible();
    await expect(page.getByText('B.A. Economics')).toBeVisible();
    await expect(page.getByText('AWS Certified Cloud Practitioner')).toBeVisible();
  });

  test('should have working email button', async ({ page }) => {
    await page.goto('/');

    const emailButton = page.locator('a.btn-primary');
    await expect(emailButton).toBeVisible();
    await expect(emailButton).toHaveAttribute('href', 'mailto:reffendie@outlook.com');
  });

  test('should have working LinkedIn button', async ({ page }) => {
    await page.goto('/');

    const linkedInButton = page.locator('a.btn-secondary');
    await expect(linkedInButton).toBeVisible();
    await expect(linkedInButton).toHaveAttribute('href', 'https://www.linkedin.com/in/reffendie/');
    await expect(linkedInButton).toHaveAttribute('target', '_blank');
  });

  test('should display target role section', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('.target-role')).toBeVisible();
    await expect(page.getByText('Senior TPM roles at $225K+')).toBeVisible();
  });
});
