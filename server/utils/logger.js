import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const isProduction = process.env.NODE_ENV === "production";
const isVercel = process.env.VERCEL === "1" || isProduction;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOG_DIR = path.join(__dirname, "..", "logs");

// ─── Create logs folder only locally ─────────────────────────────
if (!isVercel) {
  try {
    if (!fs.existsSync(LOG_DIR)) {
      fs.mkdirSync(LOG_DIR, { recursive: true });
    }
  } catch (error) {
    console.warn(
      "⚠️ Could not create log directory (possibly read-only filesystem). File logging disabled."
    );
  }
}

// ─── Log Levels ──────────────────────────────────────────────────
const LEVELS = {
  DEBUG: { label: "DEBUG", color: "\x1b[36m", emoji: "🔍" },
  INFO: { label: "INFO ", color: "\x1b[34m", emoji: "ℹ️ " },
  OK: { label: "OK   ", color: "\x1b[32m", emoji: "✅" },
  WARN: { label: "WARN ", color: "\x1b[33m", emoji: "⚠️ " },
  ERROR: { label: "ERROR", color: "\x1b[31m", emoji: "❌" },
  REQ: { label: "REQ  ", color: "\x1b[35m", emoji: "🌐" },
};

const RESET = "\x1b[0m";
const DIM = "\x1b[2m";

// ─── File Writer ─────────────────────────────────────────────────
function getLogFilePath() {
  const date = new Date().toISOString().split("T")[0];
  return path.join(LOG_DIR, `${date}.log`);
}

function writeToFile(line) {
  if (isVercel) return;

  try {
    fs.appendFileSync(getLogFilePath(), line + "\n", "utf-8");
  } catch {
    // ignore write errors in restricted environments
  }
}

// ─── Formatter ───────────────────────────────────────────────────
function formatLog(level, message, data) {
  const timestamp = new Date().toISOString();
  const { label, color, emoji } = LEVELS[level];

  const dataStr =
    data !== undefined && data !== ""
      ? typeof data === "object"
        ? " " + JSON.stringify(data, null, 2)
        : " " + data
      : "";

  // Disable colors in Vercel logs
  const consoleLine = isVercel
    ? `[${timestamp}] ${label} │ ${message}${dataStr}`
    : `${DIM}[${timestamp}]${RESET} ${emoji} ${color}${label}${RESET} │ ${message}${dataStr}`;

  const fileLine = `[${timestamp}] ${label} │ ${message}${dataStr}`;

  return { consoleLine, fileLine };
}

// ─── Logger ──────────────────────────────────────────────────────
const logger = {
  debug(msg, data) {
    const { consoleLine, fileLine } = formatLog("DEBUG", msg, data);
    console.log(consoleLine);
    writeToFile(fileLine);
  },

  info(msg, data) {
    const { consoleLine, fileLine } = formatLog("INFO", msg, data);
    console.log(consoleLine);
    writeToFile(fileLine);
  },

  success(msg, data) {
    const { consoleLine, fileLine } = formatLog("OK", msg, data);
    console.log(consoleLine);
    writeToFile(fileLine);
  },

  warn(msg, data) {
    const { consoleLine, fileLine } = formatLog("WARN", msg, data);
    console.warn(consoleLine);
    writeToFile(fileLine);
  },

  error(msg, data) {
    const { consoleLine, fileLine } = formatLog("ERROR", msg, data);
    console.error(consoleLine);
    writeToFile(fileLine);
  },

  request(method, routePath, status, ms) {
    const statusColor =
      status < 400 ? "\x1b[32m" : status < 500 ? "\x1b[33m" : "\x1b[31m";

    const timestamp = new Date().toISOString();

    const consoleLine = isVercel
      ? `[${timestamp}] REQ │ ${method.padEnd(7)} ${routePath} → ${status} (${ms}ms)`
      : `${DIM}[${timestamp}]${RESET} 🌐 \x1b[35mREQ  ${RESET} │ ${method.padEnd(
          7
        )} ${routePath} → ${statusColor}${status}${RESET} ${DIM}(${ms}ms)${RESET}`;

    const fileLine = `[${timestamp}] REQ   │ ${method.padEnd(
      7
    )} ${routePath} → ${status} (${ms}ms)`;

    console.log(consoleLine);
    writeToFile(fileLine);
  },

  divider() {
    const line = "─".repeat(50);
    this.info(line);
  },
};

export default logger;