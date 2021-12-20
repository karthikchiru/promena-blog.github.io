/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';

import leftArrow from '../../../assets/images/left-arrow.png';
import rightArrow from '../../../assets/images/right-arrow.png';
import './index.scss';

const Pagination = (props) => {
  const { totalPages, limit, onPageChange, currentPage } = props;

  const diff = Math.floor(limit / 2);
  let start = Math.max(currentPage - diff, 0);
  const end = Math.min(start + limit, totalPages);

  if (totalPages >= limit && end >= totalPages) {
    start = totalPages - limit;
  }

  const pages = [...Array(end - start).keys()].map((i) => start + i);

  return (
    <div className='pagination'>
      {pages && pages.length > 0 && (
        <ul className='pagination__list'>
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 0}
              className={`${currentPage === 0
                  ? 'list__item__disabled list__item'
                  : 'list__item'
                }`}
            >
              <a>
                <img
                  src={leftArrow}
                  className='list__icon'
                  alt='previous'
                  title='Previous'
                />
              </a>
            </button>
          </li>
          {pages.map((item, index) => (
            <li key={index}>
              <button
                className={`${'list__item'} ${currentPage === item ? 'list__item__active' : ''
                  }`}
                onClick={() => onPageChange(item)}
              >
                <span>{item + 1}</span>
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              className={`${currentPage === totalPages - 1
                  ? 'list__item__disabled list__item'
                  : 'list__item'
                }`}
            >
              <a>
                <img
                  src={rightArrow}
                  className='list__icon'
                  alt='next'
                  title='Next'
                />
              </a>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

Pagination.propTypes = {
  limit: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
  currentPage: PropTypes.number
};

Pagination.defaultProps = {
  limit: 0,
  totalPages: 0,
  onPageChange: () => {
    null;
  },
  currentPage: 0
};
export default Pagination;
