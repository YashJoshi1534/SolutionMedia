let app;
try {
    const module = await import('./server/index.js');
    app = module.default;
} catch (error) {
    app = (req, res) => {
        res.status(500).json({
            success: false,
            error: 'Vercel Initialization Crash!',
            message: error.message,
            stack: error.stack
        });
    };
}

export default app;
