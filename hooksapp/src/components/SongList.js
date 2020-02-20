import React, { useState,useEffect } from 'react';
import uuid from 'uuid/v1'
import NewSongForm from './NewSongForm';
const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'lac troi 1', id: 1 },
    { title: 'lac troi 2', id: 2 },
    { title: 'lac troi 3', id: 3 }
  ]);
  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  }

  useEffect(() => {
    console.log('Effect Hooks ran',songs);
  },[songs])

  useEffect(() => {
    console.log('Effect Hooks ran',age);
  },[age])

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong}></NewSongForm>
      <button onClick={()=> setAge(age + 1)}>Add 1 to {age}</button>
    </div>
  );
}

export default SongList;