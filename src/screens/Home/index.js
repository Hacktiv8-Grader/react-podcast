import React, { useState, useEffect, Suspense, lazy } from 'react';
import { connect } from 'react-redux';

import './style.css';
import { getListPodcast } from '../../redux/Actions/ListPodcastAction';

const ListPodcast = lazy(() => import('../../components/ListPodcast'));

const Home = ({
  listPodcast,
  isLoading,
  isError,
  errMessage,
  getListPodcast
}) => {

  const [searchText, setSearchText] = useState('');
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    getListPodcast();
  }, [getListPodcast]);

  const submit = event => {
    if (searchText) {
      const filterData = mockData.filter((item, index) => item.title.includes(searchText));
      setMockData(filterData);
    } else {
      setMockData(listPodcast);
    }
    event.preventDefault();
  };

  const onChangeValue = event => {
    setSearchText(event.target.value);
  };

  const renderSearchComponent = () => {
    return (
      <form onSubmit={submit}>
        <input
          type="search"
          value={searchText}
          onChange={onChangeValue}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  };

  const renderListPodcast = (item, index) => (
    <ListPodcast
      key={index}
      title={item.title}
      thumbnail={item.thumbnail}
      url={item.url}
      episodes={item.episodes}
    />
  );

  return (
    <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center' }}>Loading...</div>}>
      <div style={{ margin: 32, display: 'flex', justifyContent: 'space-between' }}>
        <h1>Podspace</h1>
        {renderSearchComponent()}
      </div>
      <div className="container">
        {listPodcast.map(renderListPodcast)}
      </div>
    </Suspense>
  );
};

const mapStateToProps = state => ({
  listPodcast: state.listPodcast.data,
  isLoading: state.listPodcast.isLoading,
  isError: state.listPodcast.isError,
  errMessage: state.listPodcast.errMessage
});

const mapDispatchToProps = dispatch => ({
  getListPodcast: () => dispatch(getListPodcast())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
