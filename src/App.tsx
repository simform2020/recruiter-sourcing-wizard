import React from "react";
import SourcingWizard from "./components/SourcingWizard";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function App() {
  const handleSubmit = (criteria: any) => {
    alert("Search criteria submitted!\n" + JSON.stringify(criteria, null, 2));
    // You can replace this with candidate search logic
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Recruiter Sourcing Wizard
      </Typography>
      <SourcingWizard onSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
