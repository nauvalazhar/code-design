'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <Link href="/test-2">Test 2</Link>
    </div>
  );
}
