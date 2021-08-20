# useLocalStorage

A hook to persist one local storage entry.
Its basically a state which synchronises the value of the given local storage key. Furthermore it synchronizes between different browser tabs.

## Arguments

| Argument       | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| `ValueType`    | type of the local storage value                                     |
| `key`          | the key you want to use in the local storage                        |
| `initialValue` | the default value, used when storage value is not parsable or unset |
| `callback`     | function which will be executed when the setter is used             |

Returns a stateful value and a function to update it.

## Usage

```TypeScript
const MyComponent = () => {
  const [text, setText] = useLocalStorage<string>("user", "")

  return <input
    type="text"
    value={text}
    onChange={(event) => setText(event.currentTarget.value)}
  />
}
```

## Note

- Never use more than one instance of one storage key to prevent inconsistency.
