import { mount } from "dashboard/DashboardApp";
import React, { useEffect, useRef } from "react";

const DashboardApp = () => {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default DashboardApp;
