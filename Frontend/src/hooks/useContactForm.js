import { useState } from "react";
export function useContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm({ name: "", email: "", message: "" });
    setError("");
    setSuccess("");
  };

  return {
    form,
    setForm,
    error,
    setError,
    success,
    setSuccess,
    handleChange,
    resetForm,
  };
}
