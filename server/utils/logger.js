import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const isVercel = process.env.VERCEL === "1";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOG_DIR = path.join(__dirname, "..", "logs");

// Create logs folder locally only
if (!isVercel) {
  try {
    if (!fs.existsSync(LOG_DIR)) {
      fs.mkdirSync(LOG_DIR, { recursive: true });
    }
  } catch {
    console.warn("Could not create log directory. File logging disabled.");
  }
}

// ─── File Writer ─────────────────────────────────────────────
function getLogFilePath() {
  const date = new Date().toISOString().split("T")[0];
  return path.join(LOG_DIR, `${date}.log`);
}

function writeToFile(line) {
  if (isVercel) return;

  try {
    fs.appendFileSync(getLogFilePath(), line + "\n", "utf-8");
  } catch {
    // ignore file errors
  }
}

// ─── Formatter ───────────────────────────────────────────────
function format(level, message, data) {
  const timestamp = new Date().toISOString();

  const dataStr =
    data !== undefined && data !== ""
      ? typeof data === "object"
        ? " " + JSON.stringify(data)
        : " " + data
      : "";

  const line = `[${timestamp}] ${level} | ${message}${dataStr}`;

  return line;
}

// ─── Logger ──────────────────────────────────────────────────
const logger = {
  debug(msg, data) {
    const line = format("DEBUG", msg, data);
    console.log(line);
    writeToFile(line);
  },

  info(msg, data) {
    const line = format("INFO", msg, data);
    console.log(line);
    writeToFile(line);
  },

  success(msg, data) {
    const line = format("SUCCESS", msg, data);
    console.log(line);
    writeToFile(line);
  },

  warn(msg, data) {
    const line = format("WARN", msg, data);
    console.warn(line);
    writeToFile(line);
  },

  error(msg, data) {
    const line = format("ERROR", msg, data);
    console.error(line);
    writeToFile(line);
  },

  request(method, routePath, status, ms) {
    const timestamp = new Date().toISOString();

    const line = `[${timestamp}] REQUEST | ${method.padEnd(
      6
    )} ${routePath} -> ${status} (${ms}ms)`;

    console.log(line);
    writeToFile(line);
  },

  divider() {
    const line = "-".repeat(60);
    console.log(line);
    writeToFile(line);
  },
};

export default logger;