import * as Git from 'simple-git/promise';
import countFors from "../countFors";
var glob = require('fast-glob');

export default async function gitParser(path: string) {
  var git = Git(path).silent(false);
  
  await git.log()
    .then(async (data) => {
      var length = data.total;
      var commits = data.all.reverse();
      for(var i = 0; i < length; ++i) {
        console.log(`commit: ${i}`);
        var currentCommit = commits[i].hash;
        await git.checkout(currentCommit)
          .then(() => {
            var files = glob.sync([`${path}/src/**/*.js`, `!${path}/src/__tests__`]);
            for(var j = 0; j < files.length; ++j) {
              countFors(files[j], i);
            }
          });
      }
      await git.checkout("master");
    });
}