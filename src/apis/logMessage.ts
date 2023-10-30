import { ILogMessage } from "../interfaces/log.ts";

export default class LogMessage {
  async getLogCollector(data: ILogMessage) {
    fetch(import.meta.env.VITE_APP_LOG, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((res) => {
        return res.data;
      });
  }
}
