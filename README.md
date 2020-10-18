### apollo-cli-mobile
## This app was writen with:
- React
- React native
- RNUILIB
- Apollo
- Formik
- TypeScript

## For start app, you need run:
- **`yarn`**
- **`cd ios && pod install && cd ..`**
- **`yarn gen`**
- Also you need clone/fork [this repository](https://github.com/hidjou/classsed-graphql-mern-apollo), and run from current folder `npm` and `npm start`. 
Because my app use http://localhost:5000, and if you want deploy similar server, you can update link in ./src/modules/App/Providers with new httpLink.
- If you want build last version of android. You should generate keystore.
- **`yarn start`** **Remember: you should have installed XCode or Android studio.**

## Available Scripts

#### `yarn android` - ***starts app on virtual android device***
#### `yarn ios` - ***starts app on virtual ios device***
#### `yarn ios:build` - ***build last version for ios device***
#### `yarn android:build` - ***build last version for android device (apk)***
#### `yarn start` - ***start metro on localhost***
#### `yarn gen` - ***generate hooks and types***
#### `yarn test` - ***starts running tests***
#### `yarn lint` - ***check eslint errors***
#### `yarn ts:check` - ***starts checking types in online mode***
#### `yarn ts:check:ci` - ***check types for one time***

## Future functionality

#### ***Each part of the application will be covered with tests***
#### ***A remote server with more functionality will be created***
#### ***Animations will be created in various parts of the application***
#### ***The design will be updated***
#### ***Push notifications***
