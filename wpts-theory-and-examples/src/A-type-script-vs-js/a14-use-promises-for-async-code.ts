/**

 Promise API jest super alternatywą dla klasycznych "callbacków".
 Wszędzie tam, gdzie chcemy wykonać operację w kilku krokach a mamy zrobić to asynchronicznie,
 warto użyć Promise.

 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

 */

interface User {
    id: number;
    name: string;
    lastname: string;
    photos?: Photo[];
}

interface Photo {
    id: number;
    src: string;
}

type FoundUsersCallback = (users?: User) => void;
type FoundPhotosCallback = (photos: Photo[]) => void;
type FoundSrcCallback = (users: string) => void;

const dbUsers: User[] = [
  {id: 19, name: 'Janusz', lastname: 'Kos'},
  {id: 1, name: 'Michal', lastname: 'Kowalski', photos: [{id: 1, src: '/user/michal_face.jpg'}]},
  {id: 3, name: 'Michal', lastname: 'Ko'},
];
const dbAPI = {

  getUsersByName(name: string, callback: FoundUsersCallback) {
    const found = dbUsers.find(usr => usr.name === name);
    callback(found);
  },
  getUserPhotos(userId: number, callback: FoundPhotosCallback) {
    const found = dbUsers.find(usr => usr.id === userId);
    callback(found && found.photos ? found.photos : []);
  },
  getPhotoSrc(photo: Photo, callback: FoundSrcCallback) {
    callback(photo.src || '')
  }
};

// Zjawisko "callback hell" wygląda następująco:
dbAPI.getUsersByName('Michal', (user?: User) => {
  const userId = user?.id || 0;
  dbAPI.getUserPhotos(userId, (photoList: Photo[]) => {
    const firstPhoto = photoList[0] || {};
    dbAPI.getPhotoSrc(firstPhoto, (src: string) => {
      console.log(src);
    });
  })
});

// ---------------------------------------------------------------------------------
// Ten sam przykład z użyciem Promise:

const dbPromiseAPI = {
    getUsersByName(name: string): Promise<User> {
        return new Promise((resolve, reject) => {
            const found = dbUsers.find(usr => usr.name === name);
            if(found) {
                resolve(found);
            } else {
                reject(new Error('User not found'));
            }
        });
    },
    getUserPhotos(userId: number): Promise<Photo[]> {
        return new Promise((resolve, reject) => {
            const found = dbUsers.find(usr => usr.id === userId);
            if(found && found.photos) {
                resolve(found.photos);
            } else {
                reject(new Error('Photos not found'));
            }
        });
    },
    getPhotoSrc(photo: Photo): Promise<string> {
        return new Promise((resolve, reject) => {
            if(photo.src) {
                resolve(photo.src);
            } else {
                reject(new Error('Photo src not found'));
            }
        });
    }
}

dbPromiseAPI.getUsersByName('Michal')
    .then((user: User) => {
        return dbPromiseAPI.getUserPhotos(user.id);
    })
    .then((photos: Photo[]) => {
        return dbPromiseAPI.getPhotoSrc(photos[0]) || {};
    })
    .then((src: string) => {
        console.log(src);
    })
    .catch((err: Error) => {
        console.error(err.message);
    })
