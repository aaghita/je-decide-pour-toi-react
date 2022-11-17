import React from 'react';
import MoodCard from './MoodCard';
import JeDecidePourToi from '../api/JeDecidePourToi';


class MoodScreen extends React.Component {
  render() {
    const response =  JeDecidePourToi.get('/humeurs', {transformRequest: (data, headers) => {
      delete headers.common['Authorization'];
      return data;
    }
  });

    console.log(response);
    const humeurs = response.map(humeur => {
      console.log(humeur)
      return (
        <li>
          <MoodCard name={humeur.name} color={humeur.color} icon={humeur.icon}/>
        </li>
      )
  });
    return (
      <div>
        <h1>Hello from MoodScreen</h1>
        {humeurs}
      </div>
    )
  }
};

export default MoodScreen;
