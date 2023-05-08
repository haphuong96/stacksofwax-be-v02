import { MikroORM } from '@mikro-orm/core';

(async () => {
  const orm = await MikroORM.init({
    discovery: {
      warnWhenNoEntities: false
    }
  });
  const generator = orm.getEntityGenerator();
  const dump = await generator.generate({
    save: true,
    baseDir: process.cwd() + '/src/models/entities',
  });
  console.log(dump);
  await orm.close(true);
})();