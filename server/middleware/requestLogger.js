import logger from '../utils/logger.js';

/**
 * Logs every incoming request with method, path, status code, and latency.
 */
export function requestLogger(req, res, next) {
    const start = Date.now();

    res.on('finish', () => {
        logger.request(req.method, req.originalUrl, res.statusCode, Date.now() - start);
    });

    next();
}
