// src/shared/utils.ts

export const nowISOString = (): string => new Date().toISOString();

export const safeParseInt = (value: string, fallback: number = 0): number => {
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? fallback : parsed;
};

export const logRequest = (label: string, data: any) => {
  console.log(`[${label}]`, JSON.stringify(data, null, 2));
};
