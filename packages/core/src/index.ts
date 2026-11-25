/**
 * Shared interaction state for UI controls.
 *
 * This contract contains no browser or Roku dependencies.
 */
export interface UiInteractionState {
  disabled?: boolean;
  loading?: boolean;
}

/**
 * Determines whether a UI control may accept interaction.
 */
export function isInteractive(state: UiInteractionState): boolean {
  return !state.disabled && !state.loading;
}
