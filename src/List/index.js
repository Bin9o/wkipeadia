import React from 'react';

const List = ({ results }) => {
  console.log(results);
  return (
    <>
      {results.map((item) => {
        return (
          <div key={item.pageId} className="ui segment">
            <h2>
              <a
                href={'https://en.wikipedia.org?curid=' + item.pageid}
                className="header"
                target="_blank"
                rel="noreferrer"
              >
                {item.title}
              </a>
            </h2>

            <p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>
          </div>
        );
      })}
    </>
  );
};

export default List;
