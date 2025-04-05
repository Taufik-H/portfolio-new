import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: Date) => {
  const option: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("id-ID", option);
};

export function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}

//determine if the product is new (created within the last 7 days)
export const defineNewProduct = (_createdAt: string | Date) => {
  const createdAt = new Date(_createdAt);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - createdAt.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays < 7;
};
