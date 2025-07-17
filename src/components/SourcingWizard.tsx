import React, { useState } from "react";
import { Box, Stepper, Step, StepLabel, Button, Typography, Grid, TextField, Checkbox, FormControlLabel, Select, MenuItem, Chip, Slider } from "@mui/material";

const steps = [
  "Role & Skills",
  "Seniority & Experience",
  "Location & Availability",
  "Advanced Filters",
  "Summary"
];

export default function SourcingWizard({ onSubmit }: { onSubmit: (criteria: any) => void }) {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({
    title: "",
    skills: [],
    seniority: "",
    years: 2,
    location: "",
    remote: false,
    availability: "",
    education: "",
    languages: [],
    certifications: [],
    industry: "",
    employer: "",
    portfolio: "",
    salary: "",
    visa: "",
    worktype: "",
    relocate: "",
    manager: false,
    teamSize: "",
    notice: "",
    references: false,
    achievements: "",
    statement: "",
    excludeContacted: false,
    excludeCompanies: "",
    prioritizeDEI: false,
    openInternational: false,
    hasPortfolio: false,
    activeOnNetworks: false,
    recentProfile: false
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSkillAdd = (e: any) => {
    if (e.key === "Enter" && e.target.value) {
      setForm({ ...form, skills: [...form.skills, e.target.value] });
      e.target.value = "";
    }
  };

  const handleSkillDelete = (skill: string) => {
    setForm({ ...form, skills: form.skills.filter((s: string) => s !== skill) });
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleFinish = () => {
    onSubmit(form);
    setActiveStep(steps.length - 1);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
        {steps.map((label) => (
          <Step key={label}><StepLabel>{label}</StepLabel></Step>
        ))}
      </Stepper>
      {activeStep === 0 && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Job Title / Role" name="title" fullWidth value={form.title} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Add Skill" onKeyDown={handleSkillAdd} />
            <Box mt={1}>{form.skills.map((skill: string) => (
              <Chip key={skill} label={skill} onDelete={() => handleSkillDelete(skill)} sx={{ mr: 0.5 }} />
            ))}</Box>
          </Grid>
        </Grid>
      )}
      {activeStep === 1 && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Select label="Seniority" name="seniority" fullWidth value={form.seniority} onChange={handleChange}>
              <MenuItem value="Internship">Internship</MenuItem>
              <MenuItem value="Junior">Junior</MenuItem>
              <MenuItem value="Mid">Mid</MenuItem>
              <MenuItem value="Senior">Senior</MenuItem>
              <MenuItem value="Lead">Lead</MenuItem>
              <MenuItem value="Principal">Principal</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Years of Experience</Typography>
            <Slider value={form.years} min={0} max={20} onChange={(_, val) => setForm({ ...form, years: val })} />
          </Grid>
        </Grid>
      )}
      {activeStep === 2 && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Location" name="location" fullWidth value={form.location} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel control={<Checkbox checked={form.remote} name="remote" onChange={handleChange} />} label="Remote OK" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select label="Availability" name="availability" fullWidth value={form.availability} onChange={handleChange}>
              <MenuItem value="Immediate">Immediate</MenuItem>
              <MenuItem value="2 weeks">2 weeks notice</MenuItem>
              <MenuItem value="1 month">1 month</MenuItem>
              <MenuItem value="Freelance">Freelance</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </Grid>
        </Grid>
      )}
      {activeStep === 3 && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Education" name="education" fullWidth value={form.education} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Languages Spoken" name="languages" fullWidth value={form.languages} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Certifications" name="certifications" fullWidth value={form.certifications} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Industry Experience" name="industry" fullWidth value={form.industry} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Current / Past Employer" name="employer" fullWidth value={form.employer} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Portfolio / GitHub / LinkedIn URL" name="portfolio" fullWidth value={form.portfolio} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Salary Expectation" name="salary" fullWidth value={form.salary} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Visa Status / Work Authorization" name="visa" fullWidth value={form.visa} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select label="Preferred Work Type" name="worktype" fullWidth value={form.worktype} onChange={handleChange}>
              <MenuItem value="Full-time">Full-time</MenuItem>
              <MenuItem value="Part-time">Part-time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select label="Willingness to Relocate" name="relocate" fullWidth value={form.relocate} onChange={handleChange}>
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
              <MenuItem value="Maybe">Maybe</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel control={<Checkbox checked={form.manager} name="manager" onChange={handleChange} />} label="Managerial Experience" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Team Size (if Manager)" name="teamSize" fullWidth value={form.teamSize} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select label="Notice Period" name="notice" fullWidth value={form.notice} onChange={handleChange}>
              <MenuItem value="Immediate">Immediate</MenuItem>
              <MenuItem value="2 weeks">2 weeks</MenuItem>
              <MenuItem value="1 month">1 month</MenuItem>
              <MenuItem value="2+ months">2+ months</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel control={<Checkbox checked={form.references} name="references" onChange={handleChange} />} label="References Available" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Achievements / Awards" name="achievements" fullWidth value={form.achievements} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Personal Statement / About Me" name="statement" fullWidth multiline value={form.statement} onChange={handleChange} />
          </Grid>
        </Grid>
      )}
      {activeStep === 4 && (
        <Box>
          <Typography variant="h6">Summary</Typography>
          <pre>{JSON.stringify(form, null, 2)}</pre>
        </Box>
      )}
      <Box mt={3}>
        {activeStep > 0 && <Button onClick={handleBack}>Back</Button>}
        {activeStep < steps.length - 1 && <Button variant="contained" onClick={handleNext}>Next</Button>}
        {activeStep === steps.length - 1 && <Button variant="contained" color="primary" onClick={handleFinish}>Finish & Search</Button>}
      </Box>
    </Box>
  );
}
