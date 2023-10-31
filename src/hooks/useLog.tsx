import { ILogMessage } from "../interfaces/log.ts";
import LogMessage from "../apis/logMessage.ts";

const useLog = () => {
  const log = new LogMessage();

  const setLog = async (data: ILogMessage) => {
    await log.getLogCollector(data);
  };
  return { setLog };
};

export default useLog;
