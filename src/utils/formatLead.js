export const formatLeadFields = (fields = {}) => {
  return Object.entries(fields)
    .map(([key, value]) => `🔹 ${key}: ${value}`)
    .join("\n");
};
