import { useRef, useEffect, useMemo } from "react";
import storage from "../utils/localstorage.ts";

const usePagenation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const postPerPage = useMemo(() => Math.ceil((ref?.current?.clientHeight || 500) / 50), [ref.current?.clientHeight]);
  const totalCount = useMemo(() => Number(storage.get("page")) || 10, [Number(storage.get("page"))]);

  useEffect(() => {
    return () => {
      storage.set("page", 10);
    };
  }, []);
  const totalPage = useMemo(() => {
    return Math.ceil(totalCount / postPerPage);
  }, [postPerPage, totalCount]);
  return { ref, postPerPage, totalPage };
};

export default usePagenation;
