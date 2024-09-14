import React from 'react';

const Docs = ({ params }) => {
  return (
    <div>
      {
        (params.slug.length === 2) && <h2>Docs homepage feature {params.slug[0]} &  concept {params.slug[1]}</h2>
      }
      {
        (params.slug.length === 1) && <h2>Docs homepage feature {params.slug[0]}</h2>
      }
      {
        (params.slug.length === 0) && <h2>Docs homepage feature routing</h2>
      }
    </div>
  );
};

export default Docs;