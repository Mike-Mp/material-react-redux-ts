import MainNavigation from "./MainNavigation";

export default function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main className="page">{props.children}</main>
    </>
  )
}
