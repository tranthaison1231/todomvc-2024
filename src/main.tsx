import React from "react";

import { createRoot } from "react-dom/client";
import { Header } from "./shared/ui/Header";
import { Footer } from "./shared/ui/Footer";
import { TodoList } from "./shared/ui/TodoList";

const root = createRoot(document.getElementById("app")!);

function App() {
  return (
    <div>
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

root.render(<App />);
