import { createBrowserRouter } from "react-router-dom";
import { NAVIGATION_LIST } from "../navigations";
import { TodoPage } from "../pages/todo";
import { TodoDetailPage } from "../pages/detail.jsx";
import { TodoCreatePage } from "../pages/create";
import { TodoEditPage } from "../pages/edit";
import React from "react";

export const router = createBrowserRouter([
  {
    path: NAVIGATION_LIST.TOP,
    element: <TodoPage />,
  },
  {
    path: NAVIGATION_LIST.DETAIL,
    element: <TodoDetailPage />,
  },
  {
    path: NAVIGATION_LIST.CREATE,
    element: <TodoCreatePage />,
  },
  {
    path: NAVIGATION_LIST.EDIT,
    element: <TodoEditPage />,
  },
]);