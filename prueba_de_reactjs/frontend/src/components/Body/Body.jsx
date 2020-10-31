import React from 'react';
import withLoader from '../HOC-With-Loader/HOC-withLoader';
import BodyGrid from './Body-Grid/Body-Grid';

const Body = ({news}) => {
   return(
        news.map(c => 
            <BodyGrid id={c._id}
              title={c.title}
              text={c.text}
              date={c.createdAt}
              author={c.author}
            />)
    )
}

export default withLoader(Body, "news", "body-back");