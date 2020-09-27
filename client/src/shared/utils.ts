export const updateObject = (oldObject: {}, updatedProperties: any) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};
