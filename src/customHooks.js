import React, { useState, useEffect } from "react";

const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(flase);
    });
  }, [isOnline]);
};

function useInterval({ func, time }) {
  const [t, setT] = useState(time);
  useEffect(() => {
    const temp = setInterval(() => {
      func();
    }, time);
    return () => {
      clearInterval(temp);
    };
  }, [time]);
}

function useDebounce(inputData, time) {
  const [flag, setflag] = useState(flase);
  useEffect(() => {}, [flag]);
  window.addEventListener;
}
// export module = {useDebounce,useIsOnline,useInterval}
