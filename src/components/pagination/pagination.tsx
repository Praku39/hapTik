import styles from './pagination.module.scss';

interface Props{
    postsPerPage:any, totalPosts:any, paginate:any
}

const Pagination = (props:Props) => {
    const { postsPerPage, totalPosts, paginate } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.paginationWrapper}>
      <nav className={styles.pagination}>
          {pageNumbers.map(number => (
            <label className={styles.pageItem} key={number} onClick={() => paginate(number)}>
                {number}
            </label>
          ))}
      </nav>
    </div>
  );
};

export default Pagination;
