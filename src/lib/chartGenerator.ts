// src/lib/chartGenerator.ts
export const generateChart = async (outline: string) => {
  return {
    type: "chart",
    data: {
      labels: outline.split(" ").slice(0, 2),
      datasets: [{ label: "Data", data: [Math.random() * 100, Math.random() * 100] }],
    },
    options: { responsive: true },
  };
};