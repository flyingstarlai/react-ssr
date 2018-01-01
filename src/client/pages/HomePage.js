/**
 * Created by flyin on 2017/11/14.
 */
import React from 'react';

const Home = () => {
  return (
      <div className="center-align" style={{marginTop: 200}}>
        <h3>Welcome to Our Guild</h3>
        <button onClick={() => console.log('Hi fuck')}>Press Me!</button>
      </div>
  );
};

export default {
    component: Home
}