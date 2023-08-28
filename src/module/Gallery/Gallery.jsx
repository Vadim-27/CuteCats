import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCats } from "redux/cats/cats-operations";
import { getAllCats } from "redux/cats/cats-selectors";
import css from './gallery.module.scss'

const Gallery = () => {
const items = useSelector(getAllCats);

    const dispatch = useDispatch(getAllCats);
    useEffect(() => {
        dispatch(fetchCats({limit: 10}))
    }, [dispatch]);
    

    const cats = items.map(({ id, url, width, height }) => {
      return (
        <li className={css.listItem} key={id}>
          
            <img className={css.imgItem} alt="Cats" src={url} />
          
        </li>
      );
    });
    return (
      <div className={css.wrapper}>
        <ul className={css.list}>{cats}</ul>
      </div>
    );
};
export default Gallery;