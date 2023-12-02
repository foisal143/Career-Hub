import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className="h-52 bg-slate-100 flex justify-center items-center ">
        <h3 className="text-4xl font-bold">Blog</h3>
      </div>
      <div className="w-10/12 mx-auto shadow-md my-5 p-5">
        <h2 className="text-2xl font-semibold">
          1.When you should use context api?
        </h2>
        <p>
          When we want to pass data a parent componet to his all child componet
          then we should use context api because prop driling so hasle for
          programer.By using context api we can easily send data parent to child
          element.
        </p>
      </div>
      <div className="w-10/12 mx-auto shadow-md my-5 p-5">
        <h2 className="text-2xl font-semibold">2.What is a coustom hook?</h2>
        <p>
          coustom hook is used for reuseable logic in different component.By
          using coustom hook our code is more moduler and easy to test.
        </p>
      </div>
      <div className="w-10/12 mx-auto shadow-md my-5 p-5">
        <h2 className="text-2xl font-semibold">3.What is useReff?</h2>
        <p>
          useReff is a react hook . when we need to access dom manipulation we
          used useReff
        </p>
      </div>
      <div className="w-10/12 mx-auto shadow-md my-5 mb-12 p-5">
        <h2 className="text-2xl font-semibold">3.What is useMemo?</h2>
        <p>
          useMemo is react hook. It optimazie the performance of our react app
          to unnessesary re-renders components.
        </p>
      </div>
    </div>
  );
};

export default Blog;
