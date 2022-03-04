import About from "../components/About"
import Header from "../components/Header"

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Example() {
  return (
    <div className="relative bg-white">
      <Header/>

      <About/>
    </div>
  )
}