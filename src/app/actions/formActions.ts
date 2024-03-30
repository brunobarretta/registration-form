import { COMPLETE_FORM, FormActionTypes, FormState, UPDATE_FORM_DATA } from "../types/types";

export const updateFormData = (formData: FormState): FormActionTypes => {
  return {
    type: UPDATE_FORM_DATA,
    payload: formData,
  };
};

export const completeForm = (formData:any): FormActionTypes => {
  return {
    type: COMPLETE_FORM,
    payload: formData,
  };
};