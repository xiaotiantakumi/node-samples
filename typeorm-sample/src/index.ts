import { DataSource } from "typeorm";
import { Photo } from "../Entity/Photo";
import { User } from "../Entity/User";
import { appDataSource } from "../AppDataSource";
import { createInterface } from "readline";

const setDB = async () => {
  try {
    const photo1 = new Photo();
    photo1.url = "me.jpg";
    await appDataSource.manager.save(photo1);
    console.log(1);

    const photo2 = new Photo();
    photo2.url = "me-and-bears.jpg";
    await appDataSource.manager.save(photo2);
    console.log(2);

    const user = new User();
    user.name = "John";
    user.photos = [photo1, photo2];
    console.log(3);

    await appDataSource.manager.save(user);
    // await dataSource.manager.save(photo1);
    // await dataSource.manager.save(photo2);
  } catch (error) {
    console.log(error);
  }
};
const alternativelySetDB = async (dataSource: DataSource) => {
  // const user = new User();
  // user.name = "Leo";
  // await dataSource.manager.save(user);
  // const photo1 = new Photo();
  // photo1.url = "me.jpg";
  // photo1.user = user;
  // await dataSource.manager.save(photo1);
  // const photo2 = new Photo();
  // photo2.url = "me-and-bears.jpg";
  // photo2.user = user;
  // await dataSource.manager.save(photo2);
};

// const findUsers = async (dataSource: DataSource) => {
//   const userRepository = dataSource.getRepository(User);
//   const users = await userRepository.find({
//     relations: {
//       photos: true,
//     },
//   });
//   return users;
// };

const findPhotos = async (dataSource: DataSource) => {
  // const photoRepository = dataSource.getRepository(Photo);
  // const photos = await photoRepository.find({
  //   relations: {
  //     user: true,
  //   },
  // });
  // return photos;
};

// const getUsersByQueryBuilder = async (dataSource: DataSource) => {
//   const usersQuery = await dataSource
//     .getRepository(User)
//     .createQueryBuilder("user")
//     .leftJoinAndSelect("user.photos", "photo");
//   console.log(usersQuery.getQuery());
//   return usersQuery.getMany();
// };
// const getPhotosByQueryBuilder = async (dataSource: DataSource) => {
//   const photosQuery = await dataSource
//     .getRepository(Photo)
//     .createQueryBuilder("user")
//     .leftJoinAndSelect("user.photos", "photo");
//   console.log(photosQuery.getQuery());
//   return photosQuery.getMany();
// };

// const main = async () => {
//   try {
//     const dataSource = await getInitializedAppDataSource();
//     await setDB(dataSource);
//   } catch (error) {
//     console.log(error);
//   }
// };
const readInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readInterface.question(
  "何か入力されると実行します >",
  (inputString: string) => {
    appDataSource
      .initialize()
      .then(async () => {
        console.log(appDataSource.options);
        await setDB().catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
