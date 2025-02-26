import { JSX } from "react/jsx-runtime";
import { Hero } from "@repo/ui/landing/hero";

export default function Page(): JSX.Element {
  return(
    <div className="mx-4 my-4">
      <Hero />
    </div>
  )
}