import React from "react";

export interface TbuttonInterface {
  text: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  variant: "primary" | "warning" | "secondary" | "danger";
}
