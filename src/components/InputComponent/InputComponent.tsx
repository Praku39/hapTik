import {useState, useCallback} from 'react';
import {iFriend} from '../../types/Types';
import styles from "./inputField.module.scss"

interface Props{
  friendList: iFriend[]
  setFriendList: (type: iFriend[]) => void;
}


function InputField(props : Props): JSX.Element {
    const {friendList, setFriendList} = props;
    const [value, setValue] = useState('');

    const addTags = useCallback(
        (event: any) => {
          if (event.key === 'Enter' && event.target.value !== '') {
            setFriendList([...friendList, {id:Date.now()*1000, name:event.target.value, isFavorite : false}]);
            event.target.value = '';
            setValue('');
          }
        },
        [friendList, setFriendList],
      );
  
    return (
        <input
            id="tag"
            className={styles.inputWrapper}
            type="text"
            placeholder="Enter your a friend's name..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
            onKeyUp={(event) => addTags(event)}
        />
    );
  }

  
  export default InputField;