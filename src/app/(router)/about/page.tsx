"use client";

import { Box, Container, Typography } from "@mui/material";
import style from "./style.module.scss";
import Navbar from "@/app/component/Navbar";

const aboutPage = () => {
  return (
    <>
      <Navbar />
      <Box display="flex">
        <Box className={style.testKotak}>
          <Typography>Test</Typography>
        </Box>
        <Box className={style.testKotak2}>
          <Typography>Test</Typography>
        </Box>
      </Box>
    </>
  );
};

export default aboutPage;
