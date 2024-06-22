// src/components/HealthSection.jsx
import React from "react";
import FormField from "./FormField";

const HealthSection = ({ values, handleChange, errors }) => (
  <div className="section-container">
    <FormField
      label="Exercise Frequency *"
      type="select"
      name="exerciseFrequency"
      value={values.exerciseFrequency}
      onChange={handleChange}
      error={errors.exerciseFrequency}
    >
      <option value="">Select frequency</option>
      <option value="Daily">Daily</option>
      <option value="Weekly">Weekly</option>
      <option value="Monthly">Monthly</option>
      <option value="Rarely">Rarely</option>
    </FormField>
    <FormField
      label="Diet Preference *"
      type="select"
      name="dietPreference"
      value={values.dietPreference}
      onChange={handleChange}
      error={errors.dietPreference}
    >
      <option value="">Select preference</option>
      <option value="Vegetarian">Vegetarian</option>
      <option value="Vegan">Vegan</option>
      <option value="Non-Vegetarian">Non-Vegetarian</option>
    </FormField>
  </div>
);

export default HealthSection;
