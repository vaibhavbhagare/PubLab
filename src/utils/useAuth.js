import { useEffect, useState } from 'react';
import { auth, firestore } from '../firebase/firebase';

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const { unsubscribeFromUserSnapshot, unsubscribe } = getUser();

    return () => {
      unsubscribeFromUserSnapshot && unsubscribeFromUserSnapshot();
      unsubscribe();
    };
  }, []);

  const getUser = () => {
    let unsubscribeFromUserSnapshot;
    const unsubscribe = auth.onAuthStateChanged(user => {
      debugger;
      if (user) {
        const userRef = firestore.doc(`users/${user.uid}`);

        unsubscribeFromUserSnapshot = userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(user);
      }
    });

    return { unsubscribeFromUserSnapshot, unsubscribe };
  };
  return currentUser;
};

export default useAuth;
