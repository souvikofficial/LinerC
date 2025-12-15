import { describe, it, expect } from 'vitest'

// Emulating Logic from rollup-aggregates.ts decoupled from DB
describe('Analytics Logic', () => {

    describe('Funnel Math', () => {
        it('calculates conversion rates correctly', () => {
            const issued = 1000;
            const delivered = 850;
            const rate = (delivered / issued) * 100;
            expect(rate).toBe(85);
        });

        it('calculates step drop-off', () => {
            const steps = [100, 80, 50, 40]; // Issued, Init, Settled, Delivered
            const dropOff1 = ((100 - 80) / 100) * 100; // 20%
            expect(dropOff1).toBe(20);
        });
    });

    describe('Revenue Calculations', () => {
        it('calculates net revenue and fees', () => {
            const gross = 100.00;
            const feeRate = 0.01; // 1%
            const fees = gross * feeRate;
            const net = gross - fees;

            expect(fees).toBe(1.00);
            expect(net).toBe(99.00);
        });

        it('calculates ARPA (Average Revenue Per Active Endpoint)', () => {
            const netRevenue = 5000;
            const activeEndpoints = 50;
            const arpa = netRevenue / activeEndpoints;
            expect(arpa).toBe(100);
        });

        it('handles zero active endpoints for ARPA', () => {
            const netRevenue = 0;
            const activeEndpoints = 0;
            const arpa = activeEndpoints > 0 ? netRevenue / activeEndpoints : 0;
            expect(arpa).toBe(0);
        });
    });

    describe('Cohort Retention', () => {
        it('calculates retention percentage', () => {
            const cohortSize = 200;
            const retainedD30 = 40;
            const percentage = (retainedD30 / cohortSize) * 100;
            expect(percentage).toBe(20);
        });
    });
});
