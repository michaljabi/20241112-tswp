/**

 Pisanie kodu asynchronicznego w sposób synchroniczny, dzięki użyciu lukru składniowego: async / await

 */


const fetchData = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(['hello', 'asyc'])
  }, 1000)
});

(() => {
  fetchData()
      .then((arr) => console.log('then array:', arr))
      .catch(err => console.log(err.message));
})();

// operatory async i await pozwalające pisać kodzik asynchroniczny tak samo, jak synchroniczny
(async () => {
  // Dowolna Promise może być obsługiwana przez async/await
   try {
       const arr = await fetchData();
       console.log('then array:', arr);
   } catch (err: any) {
       console.log(err.message);
   }
})();
