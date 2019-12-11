import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ListPodcast = ({ title, thumbnail, url, episodes }) => {
  return (
    <div style={{ margin: 32, borderWidth: 1, borderColor: '#ee3124', display: 'flex', flexDirection: 'row' }}>
      <img src={thumbnail} width={150} height={150} alt={thumbnail} />
      <div style={{ marginLeft: 24 }}>
        <h3>{title}</h3>
        <div style={{ marginBottom: 16 }}>
          <a href={url}>{url}</a>
        </div>
        <div className="border">
          <a href={url} style={{ fontWeight: 'bold' }}>Lihat >></a>
        </div>
        {/* <audio controls>
          <source src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2019-9-7/26999555-44100-2-665eae9fbbeaa.m4a" type="audio/mp4" />
        </audio> */}
      </div>
    </div>
  );
};

ListPodcast.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  url: PropTypes.string,
  episodes: PropTypes.arrayOf(PropTypes.object)
};

export default ListPodcast;
