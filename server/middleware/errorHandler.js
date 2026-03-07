import logger from '../utils/logger.js';

/**
 * Catches unknown routes and responds with 404.
 */
export function notFoundHandler(req, res) {
    logger.warn(`Route not found: ${req.method} ${req.originalUrl}`);
    res.status(404).json({
        success: false,
        error: `Route ${req.method} ${req.originalUrl} not found.`,
    });
}

/**
 * Global error handler — catches unhandled errors.
 */
export function errorHandler(err, req, res, _next) {
    logger.error('Unhandled server error', err.message);
    logger.error('Stack trace', err.stack);
    res.status(500).json({
        success: false,
        error: 'Internal server error.',
    });
}
