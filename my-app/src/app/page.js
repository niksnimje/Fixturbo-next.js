"use client"

import { useEffect, useState } from "react";
import Home from "@/Components/Home/Index";
import Loader from "@/Components/Loader/Loader";
import ScrollToTop from "@/Components/ScrollToTop/ScrollToTop";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Home />
      <ScrollToTop />
    </>
  );
}
