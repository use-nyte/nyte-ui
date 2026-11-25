import type { JSX } from "solid-js";
import { isInteractive } from "@use-nyte/ui-core";

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

/**
 * Basic accessible button used to validate the shared UI pipeline.
 */
export function Button(props: ButtonProps): JSX.Element {
  return (
    <button type="button" disabled={!isInteractive(props)} onClick={() => props.onClick?.()}>
      {props.label}
    </button>
  );
}
