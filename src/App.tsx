import { useState } from "react";
import Extras from "./components/Extras/Extras";
import Header from "./components/Header/Header";
import Quote from "./components/Quote/Quote";

function App() {

  const [isAnnualQuote, setIsAnnualQuote] = useState(false)
  const [extrasTotal, setExtrasTotal] = useState({annualTotal: 0, monthlyTotal: 0})

  return (
    <div className="bg-gray-100">
      <Header />
      <Quote 
        isAnnualQuote={isAnnualQuote}
        setIsAnnualQuote={setIsAnnualQuote}
        extrasTotal={extrasTotal}
      />
      <Extras 
        isAnnualQuote={isAnnualQuote} 
        setExtrasTotal={setExtrasTotal}
      />
    </div>
  );
}

export default App;