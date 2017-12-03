import React, { Component } from 'react';
import Button from './Buttons/';
import AlbumCard from './AlbumCard/';
import Spinner from './Spinner';
import ErrorModal from './ErrorModal';

const AlbumCardsContainer = (props) => {
  const albumsDOMContent = (
    <div className='main-wrapper'>
      {props.loading && <Spinner />}
      <div className='row albums-card-container'>
        {
          !props.loading && props.albums.map((album) => {
            return (
              <div key={album.movieId} className='col-sm-4 albums-card'>
                <AlbumCard
                  album={album}
                />
              </div>
            );
          })
        }
      </div>
      <div className='row justify-content-center'>
        <div className='col-6'>
          <Button
            className={'btn-primary waves-effect float-right'}
            onClick={() => (props.displayAlbumsOfPage(props.currentPageNumber - 1))}
            value='Prev'
            disabled={props.loading || (props.currentPageNumber == 1)}
          />
        </div>
        <div className='col-6'>
          <Button
            className={'btn-primary waves-effect float-left'}
            onClick={() => (props.displayAlbumsOfPage(props.currentPageNumber + 1))}
            value='Next'
            disabled={props.loading || (props.currentPageNumber === props.topAlbumsPageLimit)}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className='container-fluid'>
      {props.loadingError ?
        (
          <ErrorModal
            message={props.loadingErrorMessage}
          />
        ) : albumsDOMContent
      }
    </div>
  );
}

export default AlbumCardsContainer;