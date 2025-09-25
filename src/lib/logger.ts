export class Logger {
  constructor({ service }: { service: string }) {
    this.service = service;
  }
  info(message: string, meta?: any) {
    console.log(`[${this.service}] INFO: ${message}`, meta);
  }
  error(message: string, meta?: any) {
    console.error(`[${this.service}] ERROR: ${message}`, meta);
  }
  warn(message: string, meta?: any) {
    console.warn(`[${this.service}] WARN: ${message}`, meta);
  }
  private service: string;
}