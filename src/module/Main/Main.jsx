import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './main.module.scss'

const Main = () => {
      const [isCenterMode, setIsCenterMode] = useState(false);

      useEffect(() => {
        const handleResize = () => {
          setIsCenterMode(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return (
      <div className={`${css.wrapperMain} container`}>
        <p className={css.greetings}>Hi!</p>
        <p className={css.greetingsText}>Welcome to MacPaw Bootcamp 2023</p>
        <h1 className={css.title}>Lets start using The Cat API</h1>
        <ul className={css.categoryList}>
          <li>
            {!isCenterMode && (
              <div className={css.pictureVoting}>
                <img
                  className={css.imgVoting}
                  alt=""
                  src={require('../../assete/img/jpg/vote-table (1).jpg')}
                />
              </div>
            )}
            <button type="button" className={css.buttonCategory}>
              VOTING
            </button>
          </li>
          <li>
            {!isCenterMode && (
              <div className={css.pictureBreeds}>
                <img
                  className={css.imgBreeds}
                  alt=""
                  src={require('../../assete/img/jpg/pet-breeds (1).jpg')}
                />
              </div>
            )}
            <button type="button" className={css.buttonCategory}>
              BREEDS
            </button>
          </li>
          <li>
            {!isCenterMode && (
              <div className={css.pictureGallery}>
                <img
                  className={css.imgGallery}
                  alt=""
                  src={require('../../assete/img/jpg/images-search.jpg')}
                />
              </div>
            )}
            <Link to="/images/search">
              <button type="button" className={css.buttonCategory}>
                GALLERY
              </button>
            </Link>
          </li>
        </ul>
      </div>
    );
}
export default Main