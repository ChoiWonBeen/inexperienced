import { atom } from "recoil";

interface Works {
  id: number,
  content: string,
  description: string,
  tag: number[] | null,
  priority: number,
  due: {
    date: string,
    string: string
  } | null,
}[]

export const works = atom<Works | null>({
  key: "works",
  default: null
})