"use client";
/**
 * @author Ashish Bisht
 * @overview Button Component
 **/

import { BUTTON_VARIANTS } from "@/app/constants/variants";
import Button from "@mui/material/Button";
import { ReactNode } from "react";

type ButtonType = {
  variant?: string;
  content: string | ReactNode;
  className?: string;
  handleClick?: () => void;
};

/**
 * Common Button Component
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.variant Button style variant
 * @param {function | ReactNode} props.content Content to display inside button
 * @param {string} props.className Content to display inside button
 * @param {function} props.handleClick Content to display inside button
 * @returns {JSX.Element} The MUI Button Component
 */

const CustomButton = ({
  variant,
  content,
  className,
  handleClick,
}: ButtonType): JSX.Element => {
  switch (variant) {
    case BUTTON_VARIANTS.PRIMARY:
      return (
        <Button
          className={`${className} rounded-sm h-[50px]`}
          variant={"contained"}
          onClick={handleClick}
        >
          {content}
        </Button>
      );
    case BUTTON_VARIANTS.SECONDARY:
      return (
        <Button
          className={`${className} rounded-sm h-[50px]`}
          variant={"outlined"}
          onClick={handleClick}
        >
          {content}
        </Button>
      );
    case BUTTON_VARIANTS.TERTIARY:
      return (
        <Button
          className={`${className} rounded-sm h-[50px]`}
          variant={"text"}
          onClick={handleClick}
        >
          {content}
        </Button>
      );
  }
  return (
    <Button
      className={`${className} rounded-sm h-[50px]`}
      variant={"text"}
      onClick={handleClick}
    >
      {content}
    </Button>
  );
};

export default CustomButton;
