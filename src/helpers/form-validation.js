
export const convertFormDataToJSON = (formData) => {
    return Object.fromEntries(formData.entries());
  };
