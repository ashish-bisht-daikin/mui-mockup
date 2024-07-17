"use server";
import { cookies } from "next/headers";

export const setCookie = (key: string, value: string) => {
  cookies().set(key, value);
  return value;
};

export const getCookie = async (key: string) => {
  let response = cookies().get(key)?.value;
  try {
    response = response || "";
    const parsedVal = JSON.parse(response);
    return parsedVal;
  } catch (e) {
    return "";
  }
};
