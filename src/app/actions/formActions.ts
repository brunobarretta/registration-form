import { FormActionTypes, FormState, UPDATE_FORM_DATA } from "../types/types";

export const updateFormData = (formData: FormState): FormActionTypes => {
  return {
    type: UPDATE_FORM_DATA,
    payload: formData,
  };
};