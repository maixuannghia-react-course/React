import { readLog, writeLog } from './logger.js';

// 1 - Display all logs
console.log(readLog());

// 2 - Log a new message
const newLog = "Exercise 2 is almost finished";
writeLog(newLog);