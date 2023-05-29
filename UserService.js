import firebase from "./firebase"

// import UserService class in desired components

/**
 * Provides CRUD operations of Users to/from the firebase db
 */
class UserService {
    static addUser(user) {
      const usersRef = firebase.database().ref('users');
      const newUserRef = usersRef.push();
      newUserRef.set(user);
    }
  
    static updateUser(userId, updates) {
      const userRef = firebase.database().ref(`users/${userId}`);
      userRef.update(updates);
    }
  
    static deleteUser(userId) {
      const userRef = firebase.database().ref(`users/${userId}`);
      userRef.remove();
    }
  
    static getUser(userId) {
      const userRef = firebase.database().ref(`users/${userId}`);
      return userRef.once('value').then((snapshot) => snapshot.val());
    }
  
    static getUsers() {
      const usersRef = firebase.database().ref('users');
      return usersRef.once('value').then((snapshot) => snapshot.val());
    }
  }
  
  export default UserService;


  