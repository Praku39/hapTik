import {useCallback} from 'react';
import DeleteIcon from '../Svg/Delete';
import FavoriteIcon from '../Svg/Favorite';
import {iFriend} from '../../types/Types';
import styles from './list.module.scss';

interface Props{
    data: any;
    friendList: iFriend[]
    setFriendList: (type: iFriend[]) => void;
    deletePopUp?: (event: any) => void;
}


function List(props : Props): JSX.Element {
    const {data, friendList, setFriendList} = props;

    const removeHandler = useCallback(
        (index) => {
            setFriendList([...friendList.filter((tag) => friendList.indexOf(tag) !== index)]);
        },
        [friendList, setFriendList],
      );

      const favoriteToggler = useCallback(
        (friend) => {
            const temp = friendList.map(item =>{
                            if(friend.id === item.id){
                                item.isFavorite = !friend.isFavorite;
                            }
                            return item
                        })
        
            const listOfFriends = temp.sort( (item)=>{
                if(item.isFavorite === true){
                    return -1;
                }else {
                    return 1
                }
            })
            setFriendList(listOfFriends)
        },
        [friendList, setFriendList],
      );

  console.log("tags", friendList);
    return (
        <>
          {
            data.map((item:iFriend, index:number) =>{
                return(
                    <div className={styles.listWrapper} key={index}>
                        <div className={styles.listItem}>
                            <p className={styles.name}>{item.name}</p>
                            <p className={styles.subTxt}>is your friend</p>
                        </div>
                        <div className={styles.right}>
                            <div className={`${item.isFavorite ? styles.active : styles.favorite}`} onClick={()=>favoriteToggler(item)}>
                                <FavoriteIcon/>
                            </div>
                            <div className={styles.delete} onClick={()=>removeHandler(index)}>
                                <DeleteIcon className={styles.deleteIcon}/>
                            </div>
                        </div>
                    </div>
                )
            })
          }
        </>
    );
  }

  
  export default List;