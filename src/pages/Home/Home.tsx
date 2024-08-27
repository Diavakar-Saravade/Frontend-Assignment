import React from "react";
import Header from "../../components/Header/Header";
import { Box } from "@mui/material";
import CnappDashboard from "../../components/Cnapp Dashboard/CnappDashboard";
import CspmDashboard from "../../components/Cspm Dashboard/CspmDashboard";

function Home() {
  return (
    <>
      <Header />
      <Box sx={{ p: 5, backgroundColor: "aliceblue" }}>
        <CnappDashboard />
        <CspmDashboard />
      </Box>
    </>
  );
}

export default Home;
