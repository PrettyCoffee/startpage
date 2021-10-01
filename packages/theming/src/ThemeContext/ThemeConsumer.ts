import { ThemeContext } from "./ThemeContext"

/** Consumer for accessing the global theme.
 * Can only be used if the `ThemeProvider` is a Parent component.
 */
export const ThemeConsumer = ThemeContext.Consumer
