import React, { useState, useEffect } from "react";
import useForm from "../hooks/useForm";
import FormField from "./FormField";
import Modal from "./Modal";
import { fetchAdditionalQuestions } from "../api";
import "../styles/SurveyForm.css";
import { FaUser, FaEnvelope, FaQuestion, FaComments } from "react-icons/fa";

const SurveyForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    surveyTopic: "",
    feedback: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.fullName) errors.fullName = "Full Name is required";
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email must be a valid email address";
    }
    if (!values.surveyTopic) errors.surveyTopic = "Survey Topic is required";
    if (!values.feedback) {
      errors.feedback = "Feedback is required";
    } else if (values.feedback.length < 50) {
      errors.feedback = "Feedback must be at least 50 characters";
    }
    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    validate
  );
  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (values.surveyTopic) {
      const fetchQuestions = async () => {
        const questions = await fetchAdditionalQuestions(values.surveyTopic);
        setAdditionalQuestions(questions);
      };
      fetchQuestions();
    }
  }, [values.surveyTopic]);

  const onSubmit = async (e) => {
    handleSubmit(e);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="form-container">
      <h1>Survey Form</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>
            <FaUser className="icon" /> Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            className={`form-field ${errors.fullName && "error"}`}
          />
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}
        </div>
        <div className="form-group">
          <label>
            <FaEnvelope className="icon" /> Email *
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={`form-field ${errors.email && "error"}`}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>
            <FaQuestion className="icon" /> Survey Topic *
          </label>
          <select
            name="surveyTopic"
            value={values.surveyTopic}
            onChange={handleChange}
            className="form-field"
          >
            <option value="">Select a topic</option>
            <option value="technology">Technology</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
          </select>
          {errors.surveyTopic && (
            <p className="error-text">{errors.surveyTopic}</p>
          )}
        </div>
        {values.surveyTopic === "technology" && (
          <>
            <div className="form-group">
              <label>Favorite Programming Language *</label>
              <select
                name="favoriteLanguage"
                value={values.favoriteLanguage}
                onChange={handleChange}
                className="form-field"
              >
                <option value="">Select a language</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C#">C#</option>
              </select>
              {errors.favoriteLanguage && (
                <p className="error-text">{errors.favoriteLanguage}</p>
              )}
            </div>
            <div className="form-group">
              <label>Years of Experience *</label>
              <input
                type="number"
                name="yearsOfExperience"
                value={values.yearsOfExperience}
                onChange={handleChange}
                className={`form-field ${errors.yearsOfExperience && "error"}`}
              />
              {errors.yearsOfExperience && (
                <p className="error-text">{errors.yearsOfExperience}</p>
              )}
            </div>
          </>
        )}
        {values.surveyTopic === "health" && (
          <>
            <div className="form-group">
              <label>Exercise Frequency *</label>
              <select
                name="exerciseFrequency"
                value={values.exerciseFrequency}
                onChange={handleChange}
                className="form-field"
              >
                <option value="">Select frequency</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Rarely">Rarely</option>
              </select>
              {errors.exerciseFrequency && (
                <p className="error-text">{errors.exerciseFrequency}</p>
              )}
            </div>
            <div className="form-group">
              <label>Diet Preference *</label>
              <select
                name="dietPreference"
                value={values.dietPreference}
                onChange={handleChange}
                className="form-field"
              >
                <option value="">Select preference</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
              </select>
              {errors.dietPreference && (
                <p className="error-text">{errors.dietPreference}</p>
              )}
            </div>
          </>
        )}
        {values.surveyTopic === "education" && (
          <>
            <div className="form-group">
              <label>Highest Qualification *</label>
              <select
                name="highestQualification"
                value={values.highestQualification}
                onChange={handleChange}
                className="form-field"
              >
                <option value="">Select qualification</option>
                <option value="High School">High School</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
              </select>
              {errors.highestQualification && (
                <p className="error-text">{errors.highestQualification}</p>
              )}
            </div>
            <div className="form-group">
              <label>Field of Study *</label>
              <input
                type="text"
                name="fieldOfStudy"
                value={values.fieldOfStudy}
                onChange={handleChange}
                className={`form-field ${errors.fieldOfStudy && "error"}`}
              />
              {errors.fieldOfStudy && (
                <p className="error-text">{errors.fieldOfStudy}</p>
              )}
            </div>
          </>
        )}
        {additionalQuestions.map((question, index) => (
          <div className="form-group" key={index}>
            <label>{question.question}</label>
            {question.type === "select" ? (
              <select
                name={`additionalQuestion${index + 1}`}
                value={values[`additionalQuestion${index + 1}`]}
                onChange={handleChange}
                className="form-field"
              >
                <option value="">Select an option</option>
                {question.options.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={question.type}
                name={`additionalQuestion${index + 1}`}
                value={values[`additionalQuestion${index + 1}`]}
                onChange={handleChange}
                className="form-field"
              />
            )}
            {errors[`additionalQuestion${index + 1}`] && (
              <p className="error-text">
                {errors[`additionalQuestion${index + 1}`]}
              </p>
            )}
          </div>
        ))}
        <div className="form-group">
          <label>
            <FaComments className="icon" /> Feedback *
          </label>
          <textarea
            name="feedback"
            value={values.feedback}
            onChange={handleChange}
            className={`form-field ${errors.feedback && "error"}`}
          />
          {errors.feedback && <p className="error-text">{errors.feedback}</p>}
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <Modal visible={modalVisible} closeModal={closeModal}>
        <h2>Submitted Data</h2>
        <p>Full Name: {values.fullName}</p>
        <p>Email: {values.email}</p>
        <p>Survey Topic: {values.surveyTopic}</p>
        {values.surveyTopic === "technology" && (
          <>
            <p>Favorite Programming Language: {values.favoriteLanguage}</p>
            <p>Years of Experience: {values.yearsOfExperience}</p>
          </>
        )}
        {values.surveyTopic === "health" && (
          <>
            <p>Exercise Frequency: {values.exerciseFrequency}</p>
            <p>Diet Preference: {values.dietPreference}</p>
          </>
        )}
        {values.surveyTopic === "education" && (
          <>
            <p>Highest Qualification: {values.highestQualification}</p>
            <p>Field of Study: {values.fieldOfStudy}</p>
          </>
        )}
        {additionalQuestions.map((question, index) => (
          <p key={index}>
            {question.question}: {values[`additionalQuestion${index + 1}`]}
          </p>
        ))}
        <p>Feedback: {values.feedback}</p>
      </Modal>
    </div>
  );
};

export default SurveyForm;
