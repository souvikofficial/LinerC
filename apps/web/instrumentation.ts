export async function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        // Lazy load workers to avoid bundling issues
        // In a real deployment, these might run in a separate process
        try {
            await import('./workers/enrich-settlement');
            await import('./workers/rollup-aggregates');
            console.log("Registered Background Workers");
        } catch (e) {
            console.warn("Failed to register workers (likely due to missing Redis)", e);
        }
    }
}
