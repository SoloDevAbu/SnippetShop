import { JSX } from "react/jsx-runtime";
import { Hero } from "@repo/ui/landing/hero";
import { Appbar } from "@repo/ui/appbar";

export default function Page(): JSX.Element {
  return(
    <div className="mx-4 my-4">
      <div className="mb-28">
        <Appbar />
      </div>
      <Hero />
    </div>
  )
}