import React, { PropsWithChildren, useContext } from "react";


const Context = React.createContext<RootProps<any>>({
  state: {},
  onChange: (any: any) => {
  }
});


type InputProps<T> = {
  name: string
}


const Input = function <T>({ name }: InputProps<T>) {
  const context = useContext(Context);
  return <input value={context.state[name] as any}
                onChange={e => {
                  e.preventDefault();
                  context.onChange(e.target.value as any);
                }}/>
}

type RootProps<T> = PropsWithChildren<unknown> & {
  state: T,
  onChange: (t: T) => T
}

const Root = ({ children, onChange, state }: RootProps<any>) =>
  <form>
    <Context.Provider value={{
      state, onChange
    }
    }>
      {children}
    </Context.Provider>
  </form>

export const FormBuilder = {
  Root,
  Input
}