import { useState } from "react";
import {DATA} from './constants';
import Pagination from "../components/pagination/pagination";
import List from '../components/List/List';
import InputField from '../components/InputComponent/InputComponent';
import {iFriend} from '../types/Types';
import styles from './homePage.module.scss';


function HomePage(): JSX.Element {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,] = useState(4);
  const [friendList, setFriendList] = useState<Array<iFriend>>([]);

  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = friendList.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber:any) => {
    setCurrentPage(pageNumber);
  };


    return (
      <div className={styles.homePageWrapper}>
        <div className={styles.container}>
          <h1 className={styles.headerTxt}>Friends List</h1>
          <InputField friendList={friendList} setFriendList={setFriendList}/>
          <div className={styles.listContainer}>
            <List data={currentPosts} friendList={friendList} setFriendList={setFriendList}/>
          </div>
          {
            friendList.length > 4 &&(
              <Pagination
                paginate={paginate}
                postsPerPage={postsPerPage}
                totalPosts={DATA.length}
              />
            )
          }
        </div>
    </div>
    );
  }

  
  export default HomePage;