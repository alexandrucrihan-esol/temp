import { useCallback, useState } from "react";

export type Person = {
  id: string,
  name: string,
  lastName: string
}

const baseUrl = "http://localhost:4000/person"
export const usePerson = () => {

  const all = useCallback(() =>
      fetch(baseUrl)
        .then(value => value.json() as unknown as Person[])
    , []);

  const get = useCallback((id: string) =>
      fetch(baseUrl + id)
        .then(value => value.json() as unknown as Person)
    , [])

  const set = useCallback((body: Person) =>
      fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(body)
      })
    , [])


  return {
    all, get, set
  };
}