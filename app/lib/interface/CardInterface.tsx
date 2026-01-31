import React from "react";

export interface CardInterface {
  title?: string;
  icon?: React.ReactNode;
  text?: string;
  image?: string;
  metacritic?: number;
  onClick?: () => void;
}
