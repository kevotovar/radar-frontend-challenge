import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Radar code challenge</h1>
            </div>
          }
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
