import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import * as ReactDOMClient from "react-dom/client";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes
} from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { NoReactQuery } from "./examples/NoReactQuery";
import { ReactQueryFetchData } from "./examples/ReactQueryFetchData";
import { ReactQueryCaching } from "./examples/ReactQueryCaching";
import { ReactQueryMutation } from "./examples/ReactQueryMutation";
import { ReactQueryPagination } from "./examples/ReactQueryPagination";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement as HTMLElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity
    }
  }
});

root.render(
  <BrowserRouter>
    <ul className="Navigation">
      <li>
        <NavLink to="/no-react-query">No React query</NavLink>
      </li>
      <li>
        <NavLink to="/basic">Basic example</NavLink>
      </li>
      <li>
        <NavLink to="/cache">Cache data</NavLink>
      </li>
      <li>
        <NavLink to="/pagination">Pagination</NavLink>
      </li>
      <li>
        <NavLink to="/mutation">Mutation</NavLink>
      </li>
    </ul>

    <div className="Layout">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route index element={<Navigate to="no-react-query" replace />} />
          <Route path="/no-react-query" element={<NoReactQuery />} />
          <Route path="/basic" element={<ReactQueryFetchData />} />
          <Route path="/cache" element={<ReactQueryCaching />} />
          <Route path="/pagination" element={<ReactQueryPagination />} />

          <Route path="/mutation" element={<ReactQueryMutation />} />
        </Routes>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  </BrowserRouter>
);
