import { useState } from 'react';

function Counter() {
  // Step 3: Initialize state for the counter
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Step 5: Display the current count */}
      <p>Current Count: {count}</p>

      {/* Step 4: Buttons for increment, decrement, and reset actions */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
