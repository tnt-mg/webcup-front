import { LazyExoticComponent, lazy } from "react"
const TestList = lazy(() => import("./TestList"))
const TestCreate = lazy(() => import("./TestCreate"))
const TestEdit = lazy(() => import("./TestEdit"))
export const TestRoute: { path: string; element: LazyExoticComponent<any> }[] =
  [
    {
      path: "tests",
      element: TestList,
    },
    {
      path: "tests/create",
      element: TestCreate,
    },
    {
      path: "tests/:id/edit",
      element: TestEdit,
    },
  ]
