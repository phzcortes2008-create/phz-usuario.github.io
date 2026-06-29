import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AITools from "./pages/AITools";
import PromptLibrary from "./pages/PromptLibrary";
import PostingTimes from "./pages/PostingTimes";
import ViralIdeas from "./pages/ViralIdeas";
import MarketingTools from "./pages/MarketingTools";
import Resources from "./pages/Resources";
import ContentPlanner from "./pages/ContentPlanner";
import CalculatorPage from "./pages/CalculatorPage";
import Notes from "./pages/Notes";
import News from "./pages/News";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ai-tools" element={<AITools />} />
          <Route path="/prompts" element={<PromptLibrary />} />
          <Route path="/posting-times" element={<PostingTimes />} />
          <Route path="/viral-ideas" element={<ViralIdeas />} />
          <Route path="/marketing-tools" element={<MarketingTools />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/planner" element={<ContentPlanner />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
