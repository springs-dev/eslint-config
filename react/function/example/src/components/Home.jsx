import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Home(props) {
  const [changedName, setChangedName] = useState('');
  console.log(props);
  const doSomething = (obj) => {
    console.log(obj.name, 'obj');
    const {name} = obj;
    console.log(name, 'here name');
    return new Promise((resolve) => {
      setTimeout(() => resolve(2), 2);
    });
  };

  doSomething({name: 'some'});
  switch (props.name) {
    case 'viktor':
      setChangedName(props.name);
      break;
    default:
      setChangedName('');
  }
  return <div>here we have {changedName}</div>;
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Home;
