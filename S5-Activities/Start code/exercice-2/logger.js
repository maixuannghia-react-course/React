import fs from 'fs';

const LOG_FILE = "./logs.txt";

export function readLog() {
  let content = fs.readFileSync(LOG_FILE).toString();
  return content;
}

export function writeLog(newLog) {
  let content = readLog();
  content += "\n" + newLog + " - at " + new Date().toLocaleTimeString();
  fs.appendFileSync(LOG_FILE, content);
}