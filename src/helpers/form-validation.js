
export const convertFormDataToJSON = (formData) => {
    return Object.fromEntries(formData.entries());
  };

  export const transformYupErrors = (errors) => {
    const errObject = {};
    errors.forEach((error) => (errObject[error.path] = error.message));
    return {
        message: "Something went wrong",
        errors: errObject
    };
};

  
