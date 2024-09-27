useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

const cachedValue = useMemo(calculateValue, dependencies)
https://joshwcomeau.com/react/usememo-and-usecallback/

The fundamental idea with useMemo is that it allows us to “remember” a computed value between renders.
Fundamentally, useMemo and useCallback are tools built to help us optimize re-renders. They do this in two ways:

Reducing the amount of work that needs to be done in a given render.
Reducing the number of times that a component needs to re-render.

https://www.freecodecamp.org/news/how-to-work-with-usememo-in-react/ (!IMPORTANT)

How Does useMemo Work?
To understand how useMemo works, let's consider a scenario where you have a component that renders a list of items, and you need to perform some heavy computation to derive the list.

Without memoization, this heavy computation would be executed on every render, even if the inputs remain unchanged.

Here's a basic example without useMemo:

import React from 'react';

const ListComponent = ({ items }) => {
  const processedItems = processItems(items); // Expensive computation

  return (
    <ul>
      {processedItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

const processItems = (items) => {
  // Expensive computation
  // Imagine some heavy processing here
  return items.map(item => ({ id: item.id, name: item.name.toUpperCase() }));
};

export default ListComponent;
In this example, processItems function gets called on every render, even if the items prop remains the same.


To optimize this, we can use useMemo:
import React, { useMemo } from 'react';

const ListComponent = ({ items }) => {
  const processedItems = useMemo(() => processItems(items), [items]);

  return (
    <ul>
      {processedItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

const processItems = (items) => {
  // Expensive computation
  // Imagine some heavy processing here
  return items.map(item => ({ id: item.id, name: item.name.toUpperCase() }));
};

export default ListComponent;

By wrapping the processItems call inside useMemo, React will only recompute the memoized value when the items prop changes. This optimization can significantly improve the performance of your application, especially when dealing with large datasets or complex computations.



// 