# StringHistory

## StringHistoryContext

Context for a string history which is persisted in the local storage. Use the `StringHistoryProvider` to use the context. The history can be accessed by using the `useStringHistory` hook while inside the StringHistoryProvider.

## StringHistoryProvider

Provider for a string history which is persisted in the local storage by using the access key "history". The history can be accessed by using the `useStringHistory` hook.

| Prop           | Description                                                                    |
| -------------- | ------------------------------------------------------------------------------ |
| `initialValue` | Initial value which will be used if the local storage entry "history" is empty |
| `maxEntries`   | Maximum number of saved entries, defaults to 50                                |

## useStringHistory

Hook for accessing the `StringHistoryContext`. Can only be used if an `StringHistoryProvider` is a Parent component. Returns the history object which is provided by the nearest `StringHistoryProvider`

| Attribute | Description                                                                                        |
| --------- | -------------------------------------------------------------------------------------------------- |
| `entries` | The current entries in the history. This is a react state and only meant for reading, not writing. |
| `push`    | Pushes the provided value onto the top of the history                                              |
| `set`     | Replaces the history with the provided entries                                                     |
| `clear`   | Removes all entries from the history                                                               |

## Usage

```TypeScript

```

## Note

- Since the context uses the local storage key "history", you should only use one `StringHistory` at the same time.
